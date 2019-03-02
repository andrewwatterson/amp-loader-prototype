var state = {
  size: 'default',
  logo: 'default',
  imgPlaceholder: false,
  failToLoad: false
};

window.addEventListener('load', function() {

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
