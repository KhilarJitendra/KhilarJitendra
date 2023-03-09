const express = require("express");
const router = express.Router();
const request = require("request");
const csv = require("csv-parser");
const fs = require("fs-extra");
const XLSX = require("xlsx");
// const { JSON } = require("express");
const axios = require("axios");


router.get("/", async (req, res, next) => {
  // fs.readFileSync("extractor-config.json", "utf8", (err, data) => {

  // });

  // const jsonData = JSON.parse(fs.readFileSync('./extractor-config.json'));
  


  // const configData = JSON.parse(jsonData);

  fs.readFile('extractor-config.json')
  .then(data => {
    console.log('bufferdata......', JSON.parse(data));
    const parseddata = JSON.parse(data);
    console.log(parseddata)
  })
  .catch(err => {
    console.error(err);
  });

 

  // Read the Google Sheet

  // console.log('configData..',jsonData)

  const axios = require("axios");
  const XLSX = require("xlsx");
  // const url = configData.sheets[0].url;
  // const owner = configData.assignedTo;

  axios
    .get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTll1DTciIbS7lsdkjYmgrFnhnD4AJlmtq8u9AZOOAJDWdHzpkdVVbMRXQPNVGXvyFvzMNvv1C7O5JO/pubhtml", {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const workbook = XLSX.read(response.data, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      let actualData = [];

      data.forEach((item) => {
        if (item.Owner == "Jitendra") {
          actualData.push(item);
        }
      });

      return res.json(actualData);

      
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;
