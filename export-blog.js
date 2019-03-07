#!/usr/bin/env node

const telecine = require('../telecine/index.js').telecine;

const baseURL = `http://0.0.0.0:8000/final/blog-exports.html`;

const prototypeVariants = [
  [360,160], [360,160], [850,160]
];

let telecineOptions = {
  height: 667,
  width: 400,
  loop: true
};

let doExport = async () => {
  for(v in prototypeVariants) {

    var realV = Number(v)+1;

    telecineOptions.height = prototypeVariants[v][1];
    telecineOptions.width = prototypeVariants[v][0];

    telecineOptions.duration = 8;
    telecineOptions.url = `${baseURL}?n=${realV}`;
    telecineOptions.outputFile = `blogExport${realV}.gif`;

    console.log('running telecine for', telecineOptions.duration, 'into file', telecineOptions.outputFile, 'of URL', telecineOptions.url);

    await telecine(telecineOptions);
  }
};

doExport();
