// // const express = require("express");
// import express from 'express';
// const router = express.Router();

// // const fs = require("fs");
// import fs from 'fs';

// // const xlsx = require("xlsx");
// import xlsx from 'fs';

// import axios from 'axios';



// import file from '../config.json';

// // router.get("/", async (req, res, next) => {
// //   fs.readFile("./config.json", "utf8", (err, data) => {
// //     const configData = JSON.parse(data);

// //     console.log('Import File,,,,',file);

// //     // Read the Google Sheet

  
// //     const url = configData.sheets[0].url;
// //     const owner = configData.assignedTo;

// //     axios
// //       .get(url, {
// //         responseType: "arraybuffer",
// //       })
// //       .then((response) => {
// //         const workbook = xlsx.read(response.data, { type: "buffer" });
// //         const sheetName = workbook.SheetNames[0];
// //         const worksheet = workbook.Sheets[sheetName];
// //         const data = xlsx.utils.sheet_to_json(worksheet);

// //         let actualData = [];

// //         data.forEach((item) => {
// //           if (item.Owner == owner) {
// //             actualData.push(item);
// //           }
// //         });

// //         res.json(actualData);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   });
// // });

// // module.exports = router;


export default function Home() {
  return a + b;
}

