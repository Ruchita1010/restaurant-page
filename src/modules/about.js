import "../styles/about.css";

const loadAbout = () => {
    const main = document.querySelector("main");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const about = document.createElement("div");
    about.classList.add("about");
    const text = document.createElement("p");
    text.innerHTML = `
        <p>Hunimal is a restaurant in the mysterious and magical land of Aurorealis.</p>
        <p>It is the only restaurant where you will find humans and animals (residents of Aurorealis) eating together.</p>
        <p>Hunimal has a variety of food items that humans do eat in their world but it has the most unique taste.</p>
        <p>"No restaurant in the human world can even come close to what Hunimal offers" </p>
        <p> - is what a human once said (¬‿¬)</p>
        <p>Well, you won't know until you try, right?</p>
        <p>Better luck getting here because (￣▽￣)</p>
        <p>Only humans with a pure heart can enter the land of Aurorealis</p>
        <p class="hearts">❤ ❤ ❤</p>
    `;
    about.appendChild(text);
    wrapper.appendChild(about);
    main.textContent = "";
    main.appendChild(wrapper);
}

export default loadAbout;