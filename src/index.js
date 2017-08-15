const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
   // part of ES2015
   // async, returns a promise
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
