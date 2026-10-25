"use strict";
//przyjmowanie towaru
console.log("dziala");
//podpinanie zmiennych do elementow z HTML
//https://clockworkjava.pl/2019/11/typescript-w-praktyce/
//https://dev.to/wisdombits/working-with-html-elements-in-typescript-a-complete-guide13-1b3k
//maja dokladnie oznaczone typy zeby  w dalszej czesci nie meczyc sie przy przyjmowaniu wartpsci
const przyjmijButton = document.getElementById("przyjmij");
const blad = document.getElementById("blad");
const nazwaInput = document.getElementById("nazwa");
const eanInput = document.getElementById("ean");
const kategoriaSelect = document.getElementById("kategoria");
const iloscInput = document.getElementById("ilosc");
const dataInput = document.getElementById("data");
const idInput = document.getElementById("id");
const sektorInput = document.getElementById("sektor");
const regalInput = document.getElementById("regal");
const polkaInput = document.getElementById("polka");
const tabela = document.getElementById("tabela");
const wpisane = document.getElementById("wynikiTabeli");
let arrayOfProducts = [];
przyjmijButton.addEventListener("click", () => {
    //sprawdzanie poprawnosci danych 
    if (nazwaInput.value !== "" && eanInput.value !== "" && kategoriaSelect.value !== "" && iloscInput.value !== "" && dataInput.value !== "" && idInput.value !== "" && sektorInput.value !== "" && regalInput.value !== "" && polkaInput.value !== "") {
        if (parseInt(iloscInput.value) > 0 && parseInt(idInput.value) > 0 && parseInt(sektorInput.value) > 0 && parseInt(regalInput.value) > 0 && parseInt(polkaInput.value) > 0) {
            blad.innerHTML = "";
            //tworzenie obiektu  Product
            const product = {
                nazwa: nazwaInput.value,
                ean: eanInput.value,
                kategoria: kategoriaSelect.value,
                ilosc: parseInt(iloscInput.value),
                data: dataInput.value,
                id: parseInt(idInput.value),
                sektor: sektorInput.value,
                regal: regalInput.value,
                polka: polkaInput.value
            };
            //https://www.w3schools.com/typescript/typescript_arrays.php
            arrayOfProducts.push(product); //dodawsnie do tablicy na koncu
            //console.log(arrayOfProducts); //testy
            //https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
            //tworzenie odpowiedniego wiersza do tabeli
            const wiersz = document.createElement("tr");
            wiersz.innerHTML = `
                    <td>${product.ean}</td>
                    <td>${product.nazwa}</td>
                    <td>${product.kategoria}</td>
                    <td>${product.ilosc}</td>
                    <td>S${product.sektor}R${product.regal}P${product.polka}</td>
                    <td>${product.data}</td>
                    <td>${product.id}</td>`;
            //https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
            //dodanie go do tabeli
            wpisane.appendChild(wiersz);
            //wyzczyszczenie wartosci pol po udanym dodaniu
            nazwaInput.value = "";
            eanInput.value = "";
            kategoriaSelect.value = "";
            iloscInput.value = "";
            dataInput.value = "";
            idInput.value = "";
            sektorInput.value = "";
            regalInput.value = "";
            polkaInput.value = "";
        }
        else {
            //obsluga nieprawidlowosci w polach
            blad.innerHTML = "wartości muszą być większe od 0";
        }
    }
    else {
        blad.innerHTML = "pola nie mogą być puste";
    }
});
