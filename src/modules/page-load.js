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
            <li class="list-item"><a href="#">Contact</a></li>
            <li class="list-item"><a href="#">About</a></li>
        </ul>
    `;
    return navElem;
}

const pageLoad = () => {
    const content = document.querySelector(".content");
    const bgContainer = document.createElement("div");
    bgContainer.classList.add("bg-container");
    const navbar = createNavbar();
    bgContainer.appendChild(navbar);
    content.appendChild(bgContainer);
}

export default pageLoad;