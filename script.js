const c = (el)=>document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    // Preencher as informações em pizzaitem


    pizzaItem.querySelector('.pizza-item--img img').src = item.img; // IMAGENS PIZZAS
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // PREÇOS
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name; // NOMES PIZZAS
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description; // DESCRIÇÃO

    c('.pizza-area').append( pizzaItem );
});