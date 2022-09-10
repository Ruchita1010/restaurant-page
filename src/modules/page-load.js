import "../styles/nav.css";
import "../styles/footer.css";
import logoImg from "../assets/logo.png";
import loadHome from "./home";

const toggleFadeClass = (listItem) => {
    listItem.forEach(item => {
        item.classList.toggle("fade");
    });
}

const createNavbar = () => {
    const navElem = document.createElement("nav");
    navElem.innerHTML = `
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="navbar">
            <div class="logo-container">
                <img src=${logoImg} class="logo"/>
            </div>
            <div class="nav-links">
                <li class="list-item"><a href="#">Home</a></li>
                <li class="list-item"><a href="#">Menu</a></li>
                <li class="list-item"><a href="#">About</a></li>
            </div>
        </ul>
    `;
    const hamburger = navElem.firstElementChild;
    const navLinks = hamburger.nextElementSibling.children[1];
    const listItem = Array.from(navLinks.children);
    hamburger.addEventListener("click", (e) => {
        navLinks.classList.toggle("click");
        toggleFadeClass(listItem);
        listItem.forEach(item => {
            // Closes hamburger menu if the user clicks on any nav list item
            item.addEventListener("click", () => {
                if (navLinks.classList.contains("click")) {
                    navLinks.classList.toggle("click");
                    /*
                    On closing of the navbar when any nav list item is clicked, the fade class remains on the list items while the click class on navLinks is removed making the navLinks along with list items disappear.
                    Next time when the menu is opened, the navLinks displays as click class is added but the list items does not show up as the fade class now gets removed.
                    Basically, navLinks and list items appearance and disappearance goes out of sync.
                    In order to fix that, we remove the fade class on each item by looping over them
                    so that on next click the fade class is added and the list items shows up along with the navLinks! 
                    */
                    toggleFadeClass(listItem);
                }
            });
        });
    });
    return navElem;
}

const createMain = () => {
    const main = document.createElement("main");
    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Made with ❤ by Ruchita</p>
        <ul class="social-links">
            <li class="social-link"><a target="_blank" href="https://github.com/Ruchita1010"><i class="icon fa-brands fa-github"></i></a></li>
            <li class="social-link"><a target="_blank" href="https://twitter.com/_ruchita1010"><i class="icon fa-brands fa-twitter"></i></a></li>
            <li class="social-link"><a target="_blank" href="#"><i class="icon fa-brands fa-instagram"></i></a></li>
        </ul>
        <div class="attribution">
            <p><a target="_blank" href="https://icons8.com/icon/5NjV5Ijsh6bz/pet">Pet</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p> |
            <p>Food images by <a target="_blank" href="https://freepik.com">Freepik</a></p>
        </div>
    `;
    return footer;
}

const pageLoad = () => {
    const content = document.querySelector(".content");
    const navbar = createNavbar();
    const main = createMain();
    const footer = createFooter();
    content.appendChild(navbar);
    /* Fix for full page fixed background jump on scrolling because of the url bar on mobile */
    const bg = document.createElement("div");
    bg.classList.add("bg");
    content.appendChild(bg);
    content.appendChild(main);
    content.appendChild(footer);
    loadHome();
}

export default pageLoad;