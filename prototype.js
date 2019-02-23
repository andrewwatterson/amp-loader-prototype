var defaultTimeout = 3000;
var defaultPrototype = "dots";
var defaultSelector = 1;
var defaultPreroll = 0;

var prototypes = {
  staticLogoPinterest: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "staticLogoPinterest"
  },
  staticLogoTwitter: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "staticLogoTwitter"
  },
  staticLogoDefault: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "staticLogoDefault"
  },
  imagePlaceholderDefault: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "imagePlaceholderDefault"
  },
  staticLogoAd: {
    topFrameId: "twitterTopFrame",
    contentId: "adContent",
    loaderId: "staticLogoAd"
  },
  logoOnlyInstagram: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "logoOnlyInstagram"
  },
  logoOnlyPinterest: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "logoOnlyPinterest"
  },
  logoOnlyTwitter: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "logoOnlyTwitter"
  },
  bigInstagram: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "bigInstagram"
  },
  reverseTwitter: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "reverseTwitter"
  },
  reverseFacebook: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "reverseFacebook"
  },
  reversePinterest: {
    topFrameId: "twitterTopFrame",
    contentId: "twitterContent",
    loaderId: "reversePinterest"
  },
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
  ampAd: {
    topFrameId: "twitterTopFrame",
    contentId: "adContent",
    loaderId: "ampAd"
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

var showPreroll = defaultPreroll;
if(urlParams.get('preroll') !== null) { showPreroll = Number(urlParams.get('preroll')); }

var pageLoad = 200;
var actualTimeout = timeout - pageLoad;

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

function resetPrototype() {
  hideAllButId('content', '');
  hideAllButId('top-frame', '');
  hideAllButId('placeholder', '');

  removeClassFromAll('fadeOut');
  removeClassFromAll('fadeIn');
}

function setUpPreroll() {
  resetPrototype();

  let preroll = document.getElementsByClassName('preroll-wrapper')[0];

//  preroll.style.display = "none";

  preroll.style.display = "block";

  setTimeout(function() {
    preroll.style.display = "none";
    setTimeout(function() {
      setUpPrototype(prototypes[prototypeId]);
    }, pageLoad);
  }, 2800);
}

function setUpPrototype(prototype) {
  hideAllButId('content', prototype.contentId);
  hideAllButId('top-frame', prototype.topFrameId);
  hideAllButId('placeholder', prototype.loaderId);

  removeClassFromAll('fadeOut');
  removeClassFromAll('fadeIn');

  setTimeout(() => {
    loaderFadeOut(prototype);
    contentFadeIn(prototype);
  }, actualTimeout);
}

window.addEventListener('load', function() {
  if(!showSelector) {
    var selector = document.getElementsByClassName('selector-wrapper')[0];
    selector.style.display = "none";
  } else {
    setUpSelector(prototypes, prototypeId);
  }

  showPreroll ? setUpPreroll() : setUpPrototype(prototypes[prototypeId]);
});
