///////////////////////////
///  Global Variables  ////
///////////////////////////

let dogFood = {};
let catFood = {};

///////////////////////////
/////    Functions    /////
///////////////////////////

function dogFoodHTML() {
    let dogFoodText = '';
    for (let i = 0; i < dogFood.dog_brands.length; i++) {
        let dogFoodTypesPrices = '';
        for (let j = 0; j < dogFood.dog_brands[i].types.length; j++) {
            for (let k = 0; k < dogFood.dog_brands[i].types[j].volumes.length; k++) {
                dogFoodTypesPrices += `${dogFood.dog_brands[i].types[j].type}, ${dogFood.dog_brands[i].types[j].volumes[k].name}, ${dogFood.dog_brands[i].types[j].volumes[k].price} : `;
            }
        }
        dogFoodText += `
            <tr>
                <td>${dogFood.dog_brands[i].name}</td>
                <td>${dogFoodTypesPrices}</td>
            </tr>`;
    }

    $('#dog_food').html(dogFoodText);
}

///////////////////////////
///   Event Listeners   ///
///////////////////////////

///////////////////////////
/////       XMR       /////
///////////////////////////

$.getJSON('JSON/dog-food.json', function(data) {
    dogFood = data;
    console.log(dogFood)
    dogFoodHTML();
});

$.getJSON('JSON/cat-food.json', function(data) {
    catFood = data;
    console.log(catFood)
});
