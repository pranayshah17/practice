
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        cardData = "";
        data.map((value) => {
            cardData += ` <div class="card">
            <img src="${value.image}" alt="Avatar" style="width:50px">
                <h3>${value.title}</h3>
                <p>Category : ${value.category}</p>
                <p>Price : $${value.price}</p>
                <p><button>Add to Cart</button></p>
                </div>`
        });
        document.getElementById("card-items").innerHTML = cardData;
    })

