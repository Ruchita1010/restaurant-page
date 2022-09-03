import "./styles/main.css";
import pageLoad from "./modules/page-load";
import loadMenu from "./modules/menu";
import loadAbout from "./modules/about";

// load the initial contents of the page
pageLoad();

// tab switching logic
const switchTab = (e) => {
    const currentTab = e.target.innerText;
    switch (currentTab) {
        case "Home":
            window.location.reload();
            break;
        case "Menu":
            loadMenu();
            break;
        case "About":
            loadAbout();
            break;
    }
}

const navTabs = document.querySelectorAll(".list-item");
navTabs.forEach((navTab) => {
    navTab.addEventListener("click", switchTab);
});