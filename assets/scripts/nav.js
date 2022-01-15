const handleNavChange = () => {
    console.log("reached")
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.classList.add("responsive");
    } else {
        nav.className = "nav";
    }
}

document.getElementById("nav__icon").addEventListener('click', handleNavChange);
