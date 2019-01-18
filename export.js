#!/usr/bin/env node

const telecine = require('../telecine/index.js');

const timeVariants = [1500, 4500];

const baseURL = "file:///Users/awatterson/codez/loader-prototype/index.html";

const prototypeVariants = [
  "blank",
  "dots",
  "spinner",
  "inertialSpinner",
  "inertialStaged",
  "twitterStaged",
  "adStaged",
  "twitterStatic",
  "twitterPulse",
  "twitterPulseStaged"
];

let telecineOptions = {
  height: 667,
  width: 400
};

for(v in prototypeVariants) {
  for(t in timeVariants) {
    telecineOptions.duration = (timeVariants[t] + 3000) / 1000;
    telecineOptions.url = `${baseURL}?timeout=${timeVariants[t]}&p=${prototypeVariants[v]}&s=0`;
    telecineOptions.outputFile = `${prototypeVariants[v]}${timeVariants[t]}.gif`;

    console.log('running telecine for', telecineOptions.duration, 'into file', telecineOptions.outputFile, 'of URL', telecineOptions.url);

    //await telecine(telecineOptions);
  }
}
