const fs = require("fs");
const csv = require("fast-csv");

const messageProducer = require("../producers/csv.producers");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let path = __basedir + "/static/assets/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        messageProducer.sendMessage(row);
      })
      .on("end", () => {
        fs.unlinkSync(req.file.path);

        res.status(200).send({
          message: "file Uploaded successfully",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file",
    });
  }
};

module.exports = { upload };
