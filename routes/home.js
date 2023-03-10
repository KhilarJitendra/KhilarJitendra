const express = require("express");
const router = express.Router();
const request = require("request");
const csv = require("csv-parser");
const fs = require("fs-extra");
const XLSX = require("xlsx");
const { json } = require("express");
const axios = require("axios");



router.get("/", async (req, res, next) => {
  
  let owner = '';

  fs.readFile('./extractor-config.json','utf-8',(err,data) => {
    const parseddata = json(data);
    owner = parseddata.assignedTo;
    console.log('file.',parseddata.assignedTo);
  })


  axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTll1DTciIbS7lsdkjYmgrFnhnD4AJlmtq8u9AZOOAJDWdHzpkdVVbMRXQPNVGXvyFvzMNvv1C7O5JO/pubhtml",
      {
        responseType: "arraybuffer",
      }
    )
    .then((response) => {
      const workbook = XLSX.read(response.data, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      let actualData = [];

      data.forEach((item) => {
        if (item.Owner == owner) {
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
