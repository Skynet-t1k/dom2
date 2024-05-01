//Step 1 Cattura Elementi
let titolo = document.querySelector('#titolo');
let contenuto = document.querySelector('#contenuto');
let submitButton = document.querySelector('#submitButton');
let wrapper = document.querySelector('.wrapper');

//console.dir(contenuto);

//Step 2 Add Event Listener

submitButton.addEventListener('click', ()=>{
    // console.log(titolo.value); => se vuoto stringa vuota
    // console.log(contenuto.value); => se vuoto stringa vuota
    if (titolo.value && contenuto.value){

    // trova data seguendo i tips
    let date = new Date();
    let formatDate = date.toLocaleDateString();
    //creo nuovo div che contiene titolo e paragrafo, aggiungo un bordo
    let paragraph = document.createElement('div');
    paragraph.classList.add("bordoArticolo");
    paragraph.innerHTML = `<h2>${titolo.value}</h2><p">${contenuto.value}</p><p>${formatDate}</p>`;
    wrapper.appendChild(paragraph);
    // pulisci input
    titolo.value = '';
    contenuto.value = '';
    }else{
        alert("Titolo o paragrafo vuoto");
    }
});