import "../styles/home.css";

const loadHome = () => {
    const main = document.querySelector("main");
    const home = document.createElement("div");
    home.classList.add("home");

    const intro = document.createElement("div");
    intro.classList.add("intro");

    const greeting = document.createElement("h2");
    greeting.innerText = "Welcome To Hunimal";
    const tagline = document.createElement("p");
    tagline.innerText = `A magical place where animals and humans eat together`;

    intro.appendChild(greeting);
    intro.appendChild(tagline);
    home.appendChild(intro);
    main.textContent = "";
    main.appendChild(home);
}

export default loadHome;