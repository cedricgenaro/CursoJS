(function readyJs(win, doc){
    'use strict';

    let form1 = doc.querySelector('#form1');
    let inpText = doc.querySelector('#inpText');
    let txtArea = doc.querySelector('#txtArea');
    let lengthArea = doc.querySelector('#lengthArea');
    let check = doc.querySelector('#check');
    let radio = doc.getElementsByName('gender');
    let sel = doc.querySelector('#sel');
    let btn = doc.querySelector('#btn');
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
    //console.log(txtArea);
    //txtArea.value = 'Example'
    txtArea.addEventListener('keydown', countArea, false);

    //Checkbox
    /* console.log(check.checked);
    if(check.checked == false){
        alert('Aceite os termos');
    } */

    //Radio
    function radioTest(event) {
        if(event.target.value == 'Male'){
            alert('Male');
        }else{
            alert('Female');
        };
    }

    //console.log(radio);
    for(var i=0; i<radio.length; i++) {
        radio[i].addEventListener('click', radioTest, false);
    }

    //Select
    //console.log(sel);
    function selValidate(event){
        if(event.target.selectedIndex == 0){
            alert('Selecione pelo menos 1 opção');
        };
    }
    sel.addEventListener('change', selValidate, false);

    //Button
    //console.log(btn);
    function submitForm(event) {
        event.preventDefault();
    }
    btn.addEventListener('click', submitForm, false);
    

})(window, document);