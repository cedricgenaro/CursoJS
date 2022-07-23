(function readyJs(win, doc){
    'use strict';

    let form1 = doc.querySelector('#form1');
    let inpText = doc.querySelector('#inpText');
    let txtArea = doc.querySelector('#txtArea');
    let lengthArea = doc.querySelector('#lengthArea');
    /* form1.action='teste.php';
    console.log(form1); */

    /* inpText.style.backgroundColor = 'gray'; */
    /* inpText.value = 'Texto'; */

    function validateInput(event){
        if(event.target.value == ''){
            alert('Preencha o campo!');
        }
        
    }
    /* inpText.addEventListener('blur', validateInput, false);
    console.log(inpText); */

    //TextArea
    function countArea(event){
        lengthArea.innerHTML = 30 - event.target.textLength;
        if(event.target.textLength >= 30){
            txtArea.setAttribute('disabled', 'disabled');
        }
    }
    console.log(txtArea);
    //txtArea.value = 'Example'
    txtArea.addEventListener('keydown', countArea, false);

    

})(window, document);