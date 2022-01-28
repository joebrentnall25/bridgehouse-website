import data from "../data/data.js";

const areaButtons = document.getElementsByClassName("areas__button");
const areasDescription = document.getElementById("areas__description");
const areasLink = document.getElementById("areas__link");
const areasImg = document.getElementById("areas__img");

const {areasData, reviews, menu} = data;

const handleAreaChange = (area) => {
    areasDescription.innerHTML = areasData[area].description;
    areasLink.setAttribute("href", areasData[area].link);
}

const setStyles = (area) => {
    const Restaurant = areaButtons[0];
    const Bar = Buttons[1];
    const Garden = areaButtons[2];
    const Takeaway = areaButtons[3];

    Restaurant.classList.remove('areas__buttons--active');
    Bar.classList.remove('areas__buttons--active');
    Garden.classList.remove('areas__buttons--active');
    Takeaway.classList.remove('areas__buttons--active');

    if (area == "Restaurant") {
        Restaurant.classList.add('areas__buttons--active');
        console.log('rest')
    } else if (area == "Bar") {     
        Bar.classList.add('areas__buttons--active');        
    } else if (area == "Garden") {
        Garden.classList.add('areas__buttons--active');
    } else {
        Takeaway.classList.add('areas__buttons--active');
    }
}

for (let i = 0; i<areaButtons.length; i++) {
    areaButtons[i].addEventListener(("click"), (e) => {
        if (e.target.dataset.area=="Restaurant") {
            handleAreaChange("Restaurant");
            setStyles("Restaurant");
        }else if (e.target.dataset.area=="Bar"){
            handleAreaChange("Bar");
            setStyles("Bar");
        }else if(e.target.dataset.area=="Garden"){
            handleAreaChange("Garden");
            setStyles("Garden");
        }else if(e.target.dataset.area=="Takeaway"){
            handleAreaChange("Takeaway");
            setStyles("Takeaway");
        }
    });
}

let reviewIndex = 0;
const reviewsName = document.getElementById("reviews__name");
const reviewsPara = document.getElementById("reviews__para");

const changeReviewForward = () => {   
    if (reviewIndex+1 === reviews.length){
        reviewIndex = 0;
    } else {
        reviewIndex++;
    }   
    reviewsName.innerHTML = `${reviews[reviewIndex].name} (${reviews[reviewIndex].year})`;
    reviewsPara.innerHTML = reviews[reviewIndex].review;
}
const changeReviewReverse = () => {   
    if (reviewIndex-1 === -1){
        reviewIndex = reviews.length-1;
    } else {
        reviewIndex--;
    } 
    reviewsName.innerHTML = `${reviews[reviewIndex].name} (${reviews[reviewIndex].year})`;
    reviewsPara.innerHTML = reviews[reviewIndex].review;
}

window.onload = () => {
    handleAreaChange("Restaurant");
    setStyles("Restaurant")
    changeReviewForward();
}

document.getElementById("reviews__buttons--next").addEventListener("click", changeReviewForward);

document.getElementById("reviews__buttons--previous").addEventListener("click", changeReviewReverse);

