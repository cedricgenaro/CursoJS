(function readyJS(win, doc) {
    let btn = doc.querySelector('#btn');
    let main = doc.querySelector('.main');
    
    function createElement(event){
        const newButton = doc.createElement('button');
        newButton.id = "newButton";
         newButton.innerHTML = 'New Button';
         main.appendChild(newButton);
    }

    function alertar(event) {
        alert('newButton');
    }
    
    function optEvents(event) {
        if(event.target.id === 'newButton') {
            alertar();
        }else if(event.target.id === 'btn') {
            createElement();
        }
    }

    
    main.addEventListener('click', optEvents, false);


   
})(window, document);