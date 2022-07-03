(function readyJS(win, doc) {
    'use strict';
    let body = doc.querySelector('body');
    body.style.backgroundColor = 'blue';

    let image = doc.querySelector('#cruzeiro');
    /* console.log(image.dataset.info);
    console.log(image.attributes); */
   /*  console.log(image.getAttribute('data-info')); */
   console.log(image.setAttribute('data-color', 'pink'));
   image.removeAttribute('id');

})(window, document);