import "../styles/about.css";

const loadAbout = () => {
    const main = document.querySelector("main");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const about = document.createElement("div");
    about.classList.add("about");
    const text = document.createElement("p");
    text.innerHTML = `dhfkhd dkjfhdkfhd gfgjhdfg kdfghfdjg`;
    about.appendChild(text);
    wrapper.appendChild(about);
    main.textContent = "";
    main.appendChild(wrapper);
}

export default loadAbout;