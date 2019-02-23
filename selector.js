function reactToSelector(selector) {
  prototypeId = selector.value;
  showPreroll ? setUpPreroll() : setUpPrototype(prototypes[prototypeId]);
}

function hideAllButId(className, id) {
  var elements = document.getElementsByClassName(className);
  for(e in elements) {
    if(elements[e].id && elements[e].id !== id) {
      elements[e].style.display = 'none';
    } else if(elements[e].id) {
      elements[e].style.display = 'block';
    }
  }
}

function removeClassFromAll(className) {
  var elements = document.getElementsByClassName(className);
  for(e in elements) {
    if(elements.hasOwnProperty(e)) {
      var classes = elements[e].className.split(" ");
      classes.indexOf(className) > 0 && classes.splice(classes.indexOf(className),1);
      elements[e].className = classes.join(" ");
    }
  }
}

function setUpSelector(options, selected) {
  var selector = document.getElementById('spinner-selector');
  selector.addEventListener('change', function(evt) { reactToSelector(evt.target); });
  for(s in options) {
    if(options.hasOwnProperty(s)) {
      var option = document.createElement('option');
      option.appendChild(document.createTextNode(s));
      option.setAttribute('value', s);
      (s === selected) && option.setAttribute('selected', true);
      selector.appendChild(option);
    }
  }

  return selector;
}
