#!/usr/bin/env node

const telecine = require('../telecine/index.js').telecine;

const PREROLL_TIME = 3000;
const POSTROLL_TIME = 3000;

const timeVariants = [1500, 4500];
//const timeVariants = [1500];

const baseURL = `file://${__dirname}/index.html`;

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
  "twitterPulseStaged",
  "ampAd"
];

let telecineOptions = {
  height: 667,
  width: 400
};

let doExport = async () => {
  for(v in prototypeVariants) {
    for(t in timeVariants) {
      telecineOptions.duration = (timeVariants[t] + PREROLL_TIME + POSTROLL_TIME) / 1000;
      telecineOptions.url = `${baseURL}?timeout=${timeVariants[t]}&p=${prototypeVariants[v]}&s=0`;
      telecineOptions.outputFile = `${prototypeVariants[v]}${timeVariants[t]}.gif`;

      console.log('running telecine for', telecineOptions.duration, 'into file', telecineOptions.outputFile, 'of URL', telecineOptions.url);

      await telecine(telecineOptions);
    }
  }
};

doExport();
