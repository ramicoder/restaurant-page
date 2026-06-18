import "./styles.css";
import homeLoader from "./home.js";
import aboutLoader from "./about.js"
homeLoader();

const content = document.getElementById("content");
const home = document.getElementById("homeBtn");
const about = document.getElementById("aboutBtn");
const reviews = document.getElementById("reviewsBtn");

home.style.backgroundColor = "gray";
home.addEventListener("click", () => {
    home.style.backgroundColor = "gray";
    about.style.backgroundColor = "aqua";
    reviews.style.backgroundColor = "aqua";
    content.innerHTML = "";
    homeLoader()
});

about.addEventListener("click", () => {
    home.style.backgroundColor = "aqua";
    about.style.backgroundColor = "gray";
    reviews.style.backgroundColor = "aqua";
    content.innerHTML = "";
    aboutLoader();
});
