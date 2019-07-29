function renderLoader(size, logo, imgPlaceholder) {

  let dimensions = {
    default: {
      viewbox: "24 24 72 72",
      spinnerRadius: 22,
      overlayRadius: 36
    },
    small: {
      viewbox: "36 36 48 48",
      spinnerRadius: 8,
      overlayRadius: 16,
      sizeClass: 'i-amphtml-loading-small'
    },
    large: {
      viewbox: "4 4 112 112",
      spinnerRadius: 42,
      overlayRadius: 56,
      sizeClass: 'i-amphtml-loading-large'
    }
  }

  let defaultLogoRadius = 12;

  let d = dimensions.default;

  if(size === 'small') { d = dimensions.small; }
  else if(size === 'large') {
    d = dimensions.large;
  }

  // logo special cases
  if(size === 'small') {
    logo = 'default';
  }
  if(logo === 'pinterest' && imgPlaceholder) {
    logo = 'default';
  }
  if(size === 'large') {
    logo = 'instagram';
  }

  // Additional classes on -loading-placeholder are for prototype purposes
  // Feel free to remove them

  let loaderHTML = `
    <div class="i-amphtml-loading-placeholder
                ${d.sizeClass ? d.sizeClass+'-placeholder' : ''}
                ${imgPlaceholder ? 'img-placeholder' : ''}
    ">
      <div class="i-amphtml-loading
                  ${d.sizeClass ? d.sizeClass : ''}
                  ${imgPlaceholder ? 'i-amphtml-loading-overlay' : ''}
                  ${logo !== 'default' ? 'i-amphtml-loading-content-logo' : ''}
                  ${logo !== 'default' ? `i-amphtml-loading-${logo}` : ''}
      ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="${d.viewbox}">
          <circle class="i-amphtml-loading-circle" cx="60" cy="60" r="${imgPlaceholder ? d.overlayRadius : defaultLogoRadius}" />
          <g class="i-amphtml-loading-spinner">
            <circle class="i-amphtml-loading-spinner-segment" id="i-amphtml-loading-spinner-segment-1" cx="60" cy="60" r="${d.spinnerRadius}" />
            <circle class="i-amphtml-loading-spinner-segment" id="i-amphtml-loading-spinner-segment-2" cx="60" cy="60" r="${d.spinnerRadius}" />
            <circle class="i-amphtml-loading-spinner-segment" id="i-amphtml-loading-spinner-segment-3" cx="60" cy="60" r="${d.spinnerRadius}" />
            <circle class="i-amphtml-loading-spinner-segment" id="i-amphtml-loading-spinner-segment-4" cx="60" cy="60" r="${d.spinnerRadius}" />
          </g>
          ${logo !== 'default' ? renderLogo(logo) : ''}
        </svg>
      </div>
    </div>
  `;

  return htmlToDom(loaderHTML);
}

function htmlToDom(htmlString) {
  var template = document.createElement('template');
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
}

function renderLogo(logo) {
  return `
    <g class="i-amphtml-loading-logo">
      ${logos[logo]}
    </g>
  `;
}

let logos = {
  'instagram': `<path d="M60,50.76c-5.11,0-9.24,4.13-9.24,9.24s4.13,9.24,9.24,9.24s9.24-4.13,9.24-9.24S65.11,50.76,60,50.76z M60,66
                	c-3.32,0-6-2.68-6-6c0-3.32,2.68-6,6-6c3.32,0,6,2.68,6,6C66,63.32,63.32,66,60,66z"/>
                <circle cx="69.61" cy="50.39" r="2.16"/>
                <path d="M77.89,52.57c-0.09-1.91-0.39-3.22-0.84-4.37c-0.46-1.18-1.07-2.18-2.07-3.18s-2-1.62-3.18-2.07
                	c-1.15-0.44-2.45-0.74-4.37-0.84C65.51,42.02,64.89,42,60,42s-5.5,0.02-7.43,0.11c-1.91,0.09-3.22,0.39-4.37,0.84
                	c-1.18,0.46-2.18,1.07-3.18,2.07c-1,1-1.62,2-2.07,3.18c-0.44,1.15-0.74,2.45-0.84,4.37C42.02,54.49,42,55.11,42,60
                	s0.02,5.5,0.11,7.43c0.09,1.91,0.39,3.22,0.84,4.37c0.46,1.18,1.07,2.18,2.07,3.18c1,1,2,1.62,3.18,2.07
                	c1.15,0.44,2.45,0.74,4.37,0.84C54.49,77.98,55.11,78,60,78s5.5-0.02,7.43-0.11c1.91-0.09,3.22-0.39,4.37-0.84
                	c1.18-0.46,2.18-1.07,3.18-2.07s1.62-2,2.07-3.18c0.44-1.15,0.74-2.45,0.84-4.37C77.98,65.51,78,64.89,78,60S77.98,54.5,77.89,52.57
                	z M74.65,67.27c-0.09,1.76-0.38,2.71-0.62,3.34c-0.33,0.84-0.72,1.44-1.34,2.07c-0.63,0.63-1.23,1.02-2.07,1.34
                	c-0.63,0.24-1.59,0.54-3.34,0.62c-1.9,0.09-2.46,0.11-7.27,0.11s-5.38-0.02-7.27-0.11c-1.76-0.09-2.71-0.38-3.34-0.62
                	c-0.84-0.33-1.44-0.72-2.07-1.34c-0.63-0.63-1.02-1.23-1.34-2.07c-0.24-0.63-0.54-1.59-0.62-3.34c-0.09-1.9-0.11-2.46-0.11-7.27
                	s0.02-5.38,0.11-7.27c0.09-1.76,0.38-2.71,0.62-3.34c0.33-0.84,0.72-1.44,1.34-2.07c0.63-0.63,1.23-1.02,2.07-1.34
                	c0.63-0.24,1.59-0.54,3.34-0.62c1.9-0.09,2.46-0.11,7.27-0.11s5.38,0.02,7.27,0.11c1.76,0.09,2.71,0.38,3.34,0.62
                	c0.84,0.33,1.44,0.72,2.07,1.34c0.63,0.63,1.02,1.23,1.34,2.07c0.24,0.63,0.54,1.59,0.62,3.34c0.09,1.9,0.11,2.46,0.11,7.27
                	S74.74,65.38,74.65,67.27z"/>`,
    'twitter': `<path d="M56.29,68.13c7.55,0,11.67-6.25,11.67-11.67c0-0.18,0-0.35-0.01-0.53c0.8-0.58,1.5-1.3,2.05-2.12
                	c-0.74,0.33-1.53,0.55-2.36,0.65c0.85-0.51,1.5-1.31,1.8-2.27c-0.79,0.47-1.67,0.81-2.61,1c-0.75-0.8-1.82-1.3-3-1.3
                	c-2.27,0-4.1,1.84-4.1,4.1c0,0.32,0.04,0.64,0.11,0.94c-3.41-0.17-6.43-1.8-8.46-4.29c-0.35,0.61-0.56,1.31-0.56,2.06
                	c0,1.42,0.72,2.68,1.83,3.42c-0.67-0.02-1.31-0.21-1.86-0.51c0,0.02,0,0.03,0,0.05c0,1.99,1.41,3.65,3.29,4.02
                	c-0.34,0.09-0.71,0.14-1.08,0.14c-0.26,0-0.52-0.03-0.77-0.07c0.52,1.63,2.04,2.82,3.83,2.85c-1.4,1.1-3.17,1.76-5.1,1.76
                	c-0.33,0-0.66-0.02-0.98-0.06C51.82,67.45,53.97,68.13,56.29,68.13"/>`,
    'facebook': `<path class="i-amphtml-fb-logo-outline" d="M70,60c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7h-2.5V60h2.5v-2.2c0-2.5,1.5-3.9,3.8-3.9
                  	c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V60h2.8l-0.4,2.9h-2.3v7C66.3,69.1,70,65,70,60z"/>
                  <path class="i-amphtml-fb-logo-f" d="M63.9,62.9l0.4-2.9h-2.8v-1.9c0-0.8,0.4-1.6,1.6-1.6h1.3v-2.5c0,0-1.1-0.2-2.2-0.2c-2.3,0-3.8,1.4-3.8,3.9V60
                  	h-2.5v2.9h2.5v7c0.5,0.1,1,0.1,1.6,0.1s1.1,0,1.6-0.1v-7H63.9z"/>`,
    'pinterest': `<path d="M60,50c-5.52,0-9.99,4.47-9.99,9.99c0,4.24,2.63,7.85,6.35,9.31c-0.09-0.79-0.16-2.01,0.03-2.87
                  	c0.18-0.78,1.17-4.97,1.17-4.97s-0.3-0.6-0.3-1.48c0-1.39,0.81-2.43,1.81-2.43c0.86,0,1.27,0.64,1.27,1.41
                  	c0,0.86-0.54,2.14-0.83,3.33c-0.24,1,0.5,1.81,1.48,1.81c1.78,0,3.14-1.88,3.14-4.57c0-2.39-1.72-4.06-4.18-4.06
                  	c-2.85,0-4.51,2.13-4.51,4.33c0,0.86,0.33,1.78,0.74,2.28c0.08,0.1,0.09,0.19,0.07,0.29c-0.07,0.31-0.25,1-0.28,1.13
                  	c-0.04,0.18-0.15,0.22-0.34,0.13c-1.25-0.58-2.03-2.4-2.03-3.87c0-3.15,2.29-6.04,6.6-6.04c3.46,0,6.16,2.47,6.16,5.77
                  	c0,3.45-2.17,6.22-5.18,6.22c-1.01,0-1.97-0.53-2.29-1.15c0,0-0.5,1.91-0.62,2.38c-0.22,0.87-0.83,1.96-1.24,2.62
                  	c0.94,0.29,1.92,0.44,2.96,0.44c5.52,0,9.99-4.47,9.99-9.99C69.99,54.47,65.52,50,60,50z"/>`,
    'video': `<path d="M65,58.5V55c0-0.5-0.4-1-1-1H51c-0.5,0-1,0.5-1,1v10c0,0.6,0.5,1,1,1h13c0.6,0,1-0.4,1-1v-3.5l5,4v-11L65,58.5z"/>`,
    'ad': `<path d="M68,54c0.55,0,1,0.45,1,1v10c0,0.55-0.45,1-1,1H52c-0.55,0-1-0.45-1-1V55c0-0.55,0.45-1,1-1H68 M68,53H52c-1.1,0-2,0.9-2,2
  		      v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V55C70,53.9,69.1,53,68,53L68,53z"/>
          <text class="i-amphtml-ad-badge-label" transform="matrix(1 0 0 1 53.2812 64.167)">Ad</text>`
};
