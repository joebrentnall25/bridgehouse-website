import data from "../data/data.js";
const {menu} = data;
let menuHtml = "";

// Menu generation
const handleMenuButtonChange = (event) => {
    console.log(event.target.dataset.menu);

    const menuDiv = document.getElementById("menu");
    let menuHtml = "";
    let finalHtml = "";

    const buttons = document.getElementsByClassName("menu-hero__buttons-btn");

    for (let i = 0; i<buttons.length; i++){
        buttons[i].classList.remove("btn--active");
    }

    switch(event.target.dataset.menu){
        case "restaurant": 
            event.target.classList.add("btn--active");
            menuHtml = getCategoriesHtml(menu.main);
            finalHtml = menuHtml;
            menuDiv.innerHTML = finalHtml;
            break;
        case "bar-garden":
            event.target.classList.add("btn--active");
            menuHtml = getCategoriesHtml(menu.barGarden)
            finalHtml = menuHtml;
            menuDiv.innerHTML = finalHtml;
            break;
        case "drinks":
            event.target.classList.add("btn--active");
            menuHtml = getCategoriesHtml(menu.drinks);
            finalHtml = menuHtml;
            menuDiv.innerHTML = finalHtml;
            break;
        case "takeaway":
            event.target.classList.add("btn--active");
            menuHtml = showTakeawayMenu();
            finalHtml = menuHtml;
            menuDiv.innerHTML = finalHtml;
            break;
    }
}

const showTakeawayMenu = () => {
    return `<iframe src="https://www.food-order.net/index.php/web_orders/home/QkRGTldE?uid=61c488ea7b52a" id="outer_fream" width="100%" style="height: 90vh;" ></iframe>`
}

const getCategoriesHtml = (foodArr) => {
    let foodCategories = [];
    for (let i = 0; i<foodArr.length; i++){
        if (!foodCategories.includes(foodArr[i].category)){
            foodCategories.push(foodArr[i].category);
        }
    }
    let buttonArray = [];
    for(let i = 0; i<foodCategories.length; i++) {
        let tempStr = foodCategories[i].charAt(0).toUpperCase()+foodCategories[i].slice(1);
        buttonArray.push(`<button onclick="location.href='#${tempStr}'" class="menu-categories__btn btn-light">${tempStr}</button>`)
    }
    menuHtml = `<div class="menu-categories__container"> 
                    ${buttonArray.join("")}
                </div>`;

    let menuCardHtml = "<div class='menu__block'>"

    for(let i = 0; i<foodCategories.length; i++){
        let tempStr = foodCategories[i].charAt(0).toUpperCase()+foodCategories[i].slice(1)
        menuCardHtml+=`<div><h2 id="${tempStr}" class='primary menu__header-text'>${tempStr}</h2>`;
        const cardArr = foodArr.map(item => {
            if(item.category === foodCategories[i]){
                return `<div class='menu__card'>
                    <h4 class='menu__card-name'>${item.item}</h4>
                    <p>${item.description}</p>
                </div>`;
            }
        })
        menuCardHtml+=cardArr.join("");
        menuCardHtml+="</div>";
    }

    return menuHtml+menuCardHtml;
}

const menuButtons = document.getElementsByClassName("menu-hero__buttons-btn");
for(let i=0; i<menuButtons.length; i++){
    menuButtons[i].addEventListener('click', handleMenuButtonChange);
}

window.onload = () => {
    menuButtons[0].click();
}