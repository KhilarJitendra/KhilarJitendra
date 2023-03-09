const express = require("express");
const router = express.Router();
const request = require("request");
const csv = require("csv-parser");
const fs = require("fs");
const XLSX = require("xlsx");
const { json } = require("express");
const axios = require("axios");

router.get("/", async (req, res, next) => {
  fs.readFile("extractor-config.json", "utf8", (err, data) => {

    


    // const configData = json.parse(data);

    // console.log(configData);

    // Read the Google Sheet

    const axios = require("axios");
    const XLSX = require("xlsx");
    const url = configData.sheets[0].url;
    const owner = configData.assignedTo;

    // axios
    //   .get(url, {
    //     responseType: "arraybuffer",
    //   })
    //   .then((response) => {
    //     const workbook = XLSX.read(response.data, { type: "buffer" });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const data = XLSX.utils.sheet_to_json(worksheet);

    //     let actualData = [];

    //     data.forEach((item) => {
    //       if (item.Owner == owner) {
    //         actualData.push(item);
    //       }
    //     });

    //     return res.json(actualData);

        
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  });
});

module.exports = router;
