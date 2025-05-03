
const productsShelf = document.getElementById("productsShelf");


fetch('./data/softwares.json')
    .then(response => {
        if (!response.ok) throw new Error("Erro ao carregar o JSON");
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            productsShelf.insertAdjacentHTML('beforeend', `
                <div class="productUnit">
                    <img class="productImage" alt="${element.name}" src="./assets/images/${element.image}">
                    <div class="productOverlay">
                        <h2 class="productTitle">${element.name}</h2>
                        <!--<p class="productP">${element.description}</p>-->
                        <!--<input class="productCheckbox" type="checkbox">-->
                        <button>Baixar</button>
                    </div> 
                </div>
                `);
        });
    })
    .catch(erro => {
        console.error("Erro ao carregar JSON:", erro);
    });