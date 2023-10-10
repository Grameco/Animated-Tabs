const home = document.querySelector(".home");
const about = document.querySelector(".about");
const explore = document.querySelector(".explore");
const contact = document.querySelector(".contact");

const homeContent = document.querySelector(".home-content");
const aboutContent = document.querySelector(".about-content");
const exploreContent = document.querySelector(".explore-content");
const contactContent = document.querySelector(".contact-content");

function toggleTab( tab, body ) {
    tab.addEventListener("click", () => {
        home.classList.remove("active");
        homeContent.classList.remove("active");
        about.classList.remove("active");
        aboutContent.classList.remove("active");
        explore.classList.remove("active");
        exploreContent.classList.remove("active");
        contact.classList.remove("active");
        contactContent.classList.remove("active");

        tab.classList.add('active');
        body.classList.add('active');
    })
}

toggleTab( home, homeContent );
toggleTab( about, aboutContent );
toggleTab( explore, exploreContent );
toggleTab( contact, contactContent);