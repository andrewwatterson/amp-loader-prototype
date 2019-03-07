#!/usr/bin/env node

const telecine = require('../telecine/index.js').telecine;

const baseURL = `http://0.0.0.0:8000/final/index.html`;

const overlayVariants = [0, 1];

const prototypeVariants = [
  // {
  //   component: 'default',
  //   size: 'small'
  // },
  // {
  //   component: 'default',
  //   size: 'default'
  // },
  // {
  //   component: 'ad',
  //   size: 'default'
  // },
  // {
  //   component: 'video',
  //   size: 'default'
  // },
  // {
  //   component: 'twitter',
  //   size: 'default'
  // },
  // {
  //   component: 'facebook',
  //   size: 'default'
  // },
  // {
  //   component: 'pinterest',
  //   size: 'default'
  // },
  {
    component: 'instagram',
    size: 'large'
  }
];

let telecineOptions = {
  height: 667,
  width: 400,
  loop: true
};

let doExport = async () => {
  for(v in prototypeVariants) {
    for(o in overlayVariants) {

      if(prototypeVariants[v].size == 'small') {
        telecineOptions.height = 90;
        telecineOptions.width = 360;
      }

      if(prototypeVariants[v].size == 'default') {
        telecineOptions.height = 336;
        telecineOptions.width = 415;
      }

      if(prototypeVariants[v].size == 'large') {
        telecineOptions.height = 740;
        telecineOptions.width = 440;
      }

      telecineOptions.duration = 8;
      telecineOptions.url = `${baseURL}?toolbar=0&overlay=${overlayVariants[o]}&component=${prototypeVariants[v].component}&size=${prototypeVariants[v].size}`;
      telecineOptions.outputFile = `${prototypeVariants[v].component}-${prototypeVariants[v].size}-${overlayVariants[o]}.gif`;

      console.log('running telecine for', telecineOptions.duration, 'into file', telecineOptions.outputFile, 'of URL', telecineOptions.url);

      await telecine(telecineOptions);
    }
  }
};

doExport();
