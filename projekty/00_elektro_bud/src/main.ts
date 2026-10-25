//przyjmowanie towaru

console.log("dziala");

//podpinanie zmiennych do elementow z HTML
//https://clockworkjava.pl/2019/11/typescript-w-praktyce/
//https://dev.to/wisdombits/working-with-html-elements-in-typescript-a-complete-guide13-1b3k
//maja dokladnie oznaczone typy zeby  w dalszej czesci nie meczyc sie przy przyjmowaniu wartpsci
const przyjmijButton: HTMLButtonElement = document.getElementById("przyjmij") as HTMLButtonElement;
const blad: HTMLParagraphElement|null = document.getElementById("blad") as HTMLParagraphElement;
const nazwaInput: HTMLInputElement|null = document.getElementById("nazwa") as HTMLInputElement;
const eanInput: HTMLInputElement|null = document.getElementById("ean") as HTMLInputElement;
const kategoriaSelect: HTMLSelectElement|null = document.getElementById("kategoria") as HTMLSelectElement;
const iloscInput: HTMLInputElement|null = document.getElementById("ilosc") as HTMLInputElement;
const dataInput: HTMLInputElement|null = document.getElementById("data") as HTMLInputElement;
const idInput: HTMLInputElement|null = document.getElementById("id") as HTMLInputElement;
const sektorInput: HTMLInputElement|null = document.getElementById("sektor") as HTMLInputElement;
const regalInput: HTMLInputElement|null = document.getElementById("regal") as HTMLInputElement;
const polkaInput: HTMLInputElement|null = document.getElementById("polka") as HTMLInputElement;
const tabela: HTMLTableElement|null = document.getElementById("tabela") as HTMLTableElement;
const wpisane: HTMLTableSectionElement|null = document.getElementById("wynikiTabeli") as HTMLTableSectionElement;

//https://github.com/mateuszlewicki/tm_programowanie_aplikacji_zaawansowanych_webowych/blob/main/01%20TypeScript/00%20Projekty/01%20ToDoApp/src/main.ts 
//:)
type Product ={
    nazwa: string;
    ean: string;
    kategoria: string;
    ilosc: number;
    data: string;
    id: number;
    sektor: string;
    regal: string;
    polka: string;
}

let arrayOfProducts: Product[] = [];

przyjmijButton.addEventListener("click", () => {
    //sprawdzanie poprawnosci danych 
        if (nazwaInput.value !== "" && eanInput.value !== "" && kategoriaSelect.value !== "" && iloscInput.value !== "" && dataInput.value !== "" && idInput.value !== "" && sektorInput.value !== "" && regalInput.value !== "" && polkaInput.value !== "") {
            
            if (parseInt(iloscInput.value) > 0 && parseInt(idInput.value) > 0 && parseInt(sektorInput.value) > 0 && parseInt(regalInput.value) > 0 && parseInt(polkaInput.value) > 0) {
                blad.innerHTML = "";
                //tworzenie obiektu  Product
                const product: Product = {
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
                const wiersz: HTMLTableRowElement = document.createElement("tr");
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
                
            } else {
                //obsluga nieprawidlowosci w polach
                blad.innerHTML = "wartości muszą być większe od 0";
            }
            
        } else {
            blad.innerHTML = "pola nie mogą być puste";
        }
        
});
