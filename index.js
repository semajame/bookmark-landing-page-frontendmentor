import { contact } from "./email.js";
import { open, close } from "./menu.js";

const content = document.querySelector(".button-content");
const simpleButton = document.querySelector(".simple");
const speedyButton = document.querySelector(".speedy");
const easyButton = document.querySelector(".easy");

let contentHTML = '';

    contentHTML += ` 
    
    <div class="left-button-content">
        <img src="/images/illustration-features-tab-1.svg" alt="Tab 1 Image">
    </div>

    <div class="right-button-content">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
        </p>

        <div class="more-info-container">
            <a href="#">
                More info
            </a>
        </div>
    </div>

    `
    simpleButton.classList.toggle("active");

function simple(){

    let simpleHTML = '';

    
    simpleHTML += `

    <div class="left-button-content">
        <img src="/images/illustration-features-tab-1.svg" alt="Tab 1 Image">
    </div>

    <div class="right-button-content">
        <h2>
            Bookmark in one click
        </h2>

        <p>
            Organize your bookmarks you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
        </p>

        <div class="more-info-container">
            <a href="#">
                More info
            </a>
        </div>
    </div>

    `

    content.innerHTML = simpleHTML;
    speedyButton.classList.remove("active");
    simpleButton.classList.add("active");
    easyButton.classList.remove("active");
    
}

function speedy(){

    let speedyHTML = '';

    speedyHTML += `

    <div class="left-button-content">
        <img src="/images/illustration-features-tab-2.svg" alt="Tab 2 Image">
    </div>

    <div class="right-button-content">
        <h2>
            Intelligent search
        </h2>

        <p>
            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
        </p>

        <div class="more-info-container">
            <a href="#">
                More info
            </a>
        </div>
    </div>

    `

    content.innerHTML = speedyHTML;
    speedyButton.classList.add("active");
    simpleButton.classList.remove("active");
    easyButton.classList.remove("active");

}

function easy(){


    let easyHTML = '';

    easyHTML += `

    <div class="left-button-content">
        <img src="/images/illustration-features-tab-3.svg" alt="Tab 3 Image">
    </div>

    <div class="right-button-content">
        <h2>
            Share your bookmarks
        </h2>

        <p>
            Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
        </p>

        <div class="more-info-container">
            <a href="#">
                More info
            </a>
        </div>
    </div>

    `
    content.innerHTML = easyHTML;
    speedyButton.classList.remove("active");
    simpleButton.classList.remove("active");
    easyButton.classList.add("active");
}


content.innerHTML = contentHTML;
simpleButton.addEventListener("click", simple);
speedyButton.addEventListener("click", speedy);
easyButton.addEventListener("click", easy);

