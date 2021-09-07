const clickAction = () => {
    const search_box = document.getElementById("searchBox");
    const searchVal = search_box.value;
    search_box.value = ""
    if (searchVal == "") {

        window.alert("please search for something")
    }
    else {
        const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => find_the_damn_meal(data.meals))
    }



}

const find_the_damn_meal = meal => {
    const textHandOver = document.getElementById("cards")
    textHandOver.textContent = "";

    meal.forEach(food => {
        const div = document.createElement("div");


        div.innerHTML = `

    <div class="col">
                <div onclick="loadMealDetail(${food.idMeal})" class="card h-100">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                        <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            </div>
   
    `
        textHandOver.appendChild(div);
    })
}
const loadMealDetail = mealget => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealget}`;
    fetch(url)
        .then(res => res.json())
        .then(data => finalTouch(data.meals[0]))
}
const finalTouch = addNow => {
    const addDiv = document.getElementById("foodInformation");
    addDiv.textContent = ""
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="row g-3 ">
                <div class="col-md-4 ">
                    <img class= "w-100" src="${addNow.strMealThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title px-3 py-5">${addNow.strMeal}</h5>
                        <p class="card-text px-3 mr-5">${addNow.strInstructions.slice(0, 200)}</p>
                     <a href=" ${addNow.strYoutube}" class="btn btn-primary px-3 mx-3 mt-5 " target="_blank">Play video</a>
                    </div>
                </div>
            </div>
  `;

    addDiv.appendChild(div);
}







