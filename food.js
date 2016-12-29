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

function catFoodHTML() {
    let catFoodText = '';

    for (let i = 0; i < catFood.cat_brands.length; i++) {
        let catBreeds = '';
        for (let j = 0; j < catFood.cat_brands[i].breeds.length; j++) {
            catBreeds += `${catFood.cat_brands[i].breeds[j]}, `
        }

        let catFoodTypesPrices = '';
        for (let k = 0; k < catFood.cat_brands[i].types.length; k++) {
            for (let l = 0; l < catFood.cat_brands[i].types[k].volumes.length; l++) {
                catFoodTypesPrices += `${catFood.cat_brands[i].types[k].type}, ${catFood.cat_brands[i].types[k].volumes[l].name}, ${catFood.cat_brands[i].types[k].volumes[l].price} : `;
            }

        }
        catFoodText += `
            <tr>
                <td>${catFood.cat_brands[i].name}</td>
                <td>${catBreeds}</td>
                <td>${catFoodTypesPrices}</td>
            </tr>`;
    }

    $('#cat_food').html(catFoodText);
}

///////////////////////////
///   Event Listeners   ///
///////////////////////////

///////////////////////////
/////       XMR       /////
///////////////////////////

$.getJSON('JSON/dog-food.json', function(data) {
    dogFood = data;
    dogFoodHTML();
});

$.getJSON('JSON/cat-food.json', function(data) {
    catFood = data;
    catFoodHTML();
});
