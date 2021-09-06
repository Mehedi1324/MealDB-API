const clickAction = () => {
  const search_box = document.getElementById("searchBox");
  const searchVal = search_box.value;
  search_box.value = " ";
  const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`;
  fetch(url)
    .then(res => res.json())
    .then(data => find_the_damn_meal(data.meals))
}
const find_the_damn_meal = meal => {
  meal.forEach(food => {

    const textHandOver = document.getElementById("cards")
    const div = document.createElement("div");


    div.innerHTML = `

    <div class="col">
                <div class="card h-100">
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


