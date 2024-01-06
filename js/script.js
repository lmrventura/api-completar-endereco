const addressForm = document.querySelector("#address-form"); //form

const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");

const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message"); //to clean

cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/; //only numbers - regex
    const key = String.fromCharCode(e.keyCode) //transforms the key code into what was typed in the input

    //console.log(keyCode + " + " + key)
    if(!onlyNumbers.test(key)) {
        e.preventDefault()
        return;
    }
})

cepInput.addEventListener("keyup", (e) => {
    const inputCepValue = e.target.value;

    if(inputCepValue.length === 8){
        getAddress(inputCepValue)
    }
});

const getAddress = async = async (cep) => {
    console.log(cep)
    toggleLoader();
    cepInput.blur(); // - !focus input

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data)

    addressInput.value = data.logradouro
    cityInput.value = data.localidade
    neighborhoodInput.value = data.bairro
    regionInput.value = data.uf
    
};

const fadeElement = document.querySelector("#fade")

const toggleLoader = () => {
    //const fadeElement = document.querySelector("#fade")
    fadeElement.classList.toggle("hide");

    const loaderElement = document.querySelector("#loader")
    loaderElement.classList.toggle("hide");
}

