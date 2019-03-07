var defaultComponent = "default";
var defaultSize = "default";
var defaultOverlay = false;
var defaultToolbar = true;

var urlParams = new URLSearchParams(window.location.search);

var state = {
  size: urlParams.get('size') || defaultSize,
  logo: urlParams.get('component') || defaultComponent,
  imgPlaceholder: urlParams.get('overlay') == true || defaultOverlay,
  failToLoad: false
};

window.addEventListener('load', function() {

  setUpSelector('component',components, state.logo);
  setUpSelector('size',sizes, state.size);
  setUpCheckbox('overlay', state.imgPlaceholder);

  applyState(state);

  document.querySelector('#component').addEventListener('change', function() {
    var componentSelector = document.querySelector('#component');
    state.logo = componentSelector.value;
    applyState(state);
  });

  document.querySelector('#size').addEventListener('change', function() {
    var sizeSelector = document.querySelector('#size');
    state.size = sizeSelector.value;
    applyState(state);
  });

  document.querySelector('#overlay').addEventListener('change', function() {
    var overlaySelector = document.querySelector('#overlay');
    state.imgPlaceholder = overlaySelector.checked;
    applyState(state);
  });

  document.querySelector('#failToLoad').addEventListener('change', function() {
    var failSelector = document.querySelector('#failToLoad');
    state.failToLoad = failSelector.checked;
    applyState(state);
  });

  if(urlParams.get('toolbar') && urlParams.get('toolbar') != true) { document.querySelector('.selector-wrapper').style.display = 'none'; }
});

function applyState(state) {

  var existingLoader = document.querySelector('.i-amphtml-loading-placeholder');
  existingLoader && existingLoader.remove();

  var loader = renderLoader(state.size, state.logo, state.imgPlaceholder);

  if(state.failToLoad) {
    setTimeout(function() {
      loader.className += " i-amphtml-loading-finished";
    },8000);
  }

  document.querySelector('.content-wrapper').appendChild(loader);
}

var components = [
  'default',
  'ad',
  'video',
  'facebook',
  'twitter',
  'pinterest'
];

var sizes = [
  'small',
  'default',
  'large'
];

function setUpSelector(selectorId, options, selected) {
  var selector = document.getElementById(selectorId);
  selector.addEventListener('change', function(evt) { reactToSelector(evt.target); });
  for(s in options) {
    if(options.hasOwnProperty(s)) {
      var option = document.createElement('option');
      option.appendChild(document.createTextNode(options[s]));
      option.setAttribute('value', options[s]);
      (options[s] === selected) && option.setAttribute('selected', true);
      selector.appendChild(option);
    }
  }
}

function setUpCheckbox(checkboxId, selected) {
  var checkbox = document.getElementById(checkboxId);
  selected && checkbox.setAttribute('checked', selected);
}
