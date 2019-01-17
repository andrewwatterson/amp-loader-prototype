var defaultTimeout = 3000;
var defaultPrototype = "dots";
var defaultSelector = 1;

var prototypes = {
  blank: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "blank"
  },
  dots: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "dots"
  },
  spinner: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "spinner"
  },
  inertialSpinner: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "inertialSpinner"
  },
  inertialStaged: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "inertialStaged"
  },
  twitterStaged: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "twitterStaged"
  },
  adStaged: {
    topFrameId: "twitterTopFrame",
    contentId: "adContent",
    loaderId: "adStaged"
  },
  twitterStatic: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "twitterStatic"
  },
  twitterPulse: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "twitterPulse"
  },
  twitterPulseStaged: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "twitterPulseStaged"
  }
}

var urlParams = new URLSearchParams(window.location.search);
var timeout = urlParams.get('timeout') || defaultTimeout;
var prototypeId = urlParams.get('p') || defaultPrototype;
var showSelector = defaultSelector;
if(urlParams.get('s') !== null) { showSelector = Number(urlParams.get('s')); }

function loaderFadeOut(prototype) {
  var loader = document.getElementById(prototype.loaderId);
  loader.addEventListener('transitionend', function(evt) {
    evt.target.style.display = "none";
  });
  loader.className += " fadeOut";
}

function contentFadeIn(prototype) {
  var replacement = document.getElementById(prototype.contentId);
  replacement.className += " fadeIn";
}

function setUpPrototype(prototype) {
  hideAllButId('top-frame', prototype.topFrameId);
  hideAllButId('placeholder', prototype.loaderId);
  hideAllButId('content', prototype.contentId);

  removeClassFromAll('fadeOut');
  removeClassFromAll('fadeIn');

  setTimeout(() => {
    loaderFadeOut(prototype);
    contentFadeIn(prototype);
  }, timeout);
}

window.addEventListener('load', function() {
  if(!showSelector) {
    var selector = document.getElementsByClassName('selector-wrapper')[0];
    selector.style.display = "none";
  } else {
    setUpSelector(prototypes, prototypeId);
  }

  setUpPrototype(prototypes[prototypeId]);
});
