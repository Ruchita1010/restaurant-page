const loadHome = () => {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    const introText = document.createElement("p");
    introText.innerText = "Welcome djkfdhgdfkjg skdkfhjdsfh dfjkg";
    container.appendChild(introText);
    main.appendChild(container);
}

export default loadHome;