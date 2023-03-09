const express = require("express");
const router = express.Router();
const request = require("request");
const csv = require("csv-parser");
const fs = require("fs-extra");
const XLSX = require("xlsx");
// const { JSON } = require("express");
const axios = require("axios");

const jsonfile = require("jsonfile");
const file = "extractor-config.json";

router.get("/", async (req, res, next) => {
  console.log("bufferdata......", JSON.parse(data));
  const parseddata = JSON.parse(data);
  url = parseddata.sheets[0].url;
  owner = parseddata.assignedTo;
  console.log(parseddata);
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
