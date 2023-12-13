console.log("script chargé");

let groceryList = document.querySelector(".grocery-list")
let form = document.querySelector("form")

    form.addEventListener("submit", (event)=>{
        let groceryContainer = document.querySelector(".grocery-container");
            groceryContainer.style.visibility = "visible";

        event.preventDefault();

        let champRecherche = document.querySelector("#grocery");

        let item = document.createElement("article");
            item.classList.add("grocery-item");
        let title = document.createElement("p");
            title.classList.add("title");
            title.innerText = champRecherche.value;
        
        item.appendChild(title);
        groceryList.appendChild(item);

        champRecherche.value = "";
        
    })

let clearButton = document.querySelector(".clear-btn")
    clearButton.addEventListener('click', ()=> {
        groceryList.innerHTML = "";
    })