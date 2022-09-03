import "../styles/nav.css";

const createNavbar = () => {
    const navElem = document.createElement("nav");
    navElem.innerHTML = `
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="nav-links">
            <li class="list-item"><a href="#">Home</a></li>
            <li class="list-item"><a href="#">Menu</a></li>
            <li class="list-item"><a href="#">About</a></li>
        </ul>
    `;
    const hamburger = navElem.firstElementChild;
    const navLinks = hamburger.nextElementSibling;
    const listItem = navLinks.children;
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("click");
        Array.from(listItem).forEach(item => {
            item.classList.toggle("fade");
        });
    });
    return navElem;
}

const createBgContainer = () => {
    const bgContainer = document.createElement("div");
    bgContainer.classList.add("bg-container");
    const navbar = createNavbar();
    bgContainer.appendChild(navbar);
    return bgContainer;
}

const pageLoad = () => {
    const content = document.querySelector(".content");
    const bgContainer = createBgContainer();
    content.appendChild(bgContainer);
}

export default pageLoad;