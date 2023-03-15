import Address  from "../models/address.js";

function State(){
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;

    this.inputCep = null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorCep = null;
    this.errorNumber = null;
}

const state = new State();

export function init(){

    state.inputCep = document.forms.newAddress.cep;
    state.inputStreet = document.forms.newAddress.street;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    

    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.btnClear.addEventListener('click', handleBtnClearClick);

}

// Primeiro tratamento de eventos no formul�rio
function handleInputNumberChange(event){
    if (event.target.value == ""){
        setFormError("number", "Campo requerido");
    }
    else{
        setFormError("number", "");
    }
}

//Fun��o para bot�o limpar
function handleBtnClearClick(event){
    // N�o quer que o formul�rio seja enviado e seja chamada a pagina inicial novamente
    event.preventDefault();
    clearForm()
}

//Fun��o para limpar o formul�rio

function clearForm(){
    state.inputCep.value = "";
    state.inputStreet.value = "";
    state.inputNumber.value = "";
    state.inputCity.value = "";

    setFormError("cep", "");
    setFormError("number", "");

    state.inputCep.focus();
}



function setFormError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}