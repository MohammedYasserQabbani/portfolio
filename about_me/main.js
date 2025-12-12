let img = document.querySelector('.img-pro');
let container = document.querySelector('body');
let title = document.querySelector('.text h2');
let desc = document.querySelector('.text p');
let date = document.querySelector('.work-date');
let link = document.querySelector('.text a');

const companies = {
    startech: {
        name: "STARTECH",
        desc: "Working as a Laravel Developer and System Analyst, contributing to backend development, system analysis, and architecture design.",
        date: "Since May 15, 2024 — Present",
        img: "./img/startech.png",
        bg: "#1f242d",
        link: "https://sta.sa/"
    },

    royatech: {
        name: "ROYATECH",
        desc: "Co-founder of the company, leading the Software Project Development department and overseeing the creation and delivery of innovative programming projects.",
        date: "Since January 1, 2025 — Present",
        img: "./img/royatech.png",
        bg: "#1f242d",
        link: "https://www.facebook.com/share/14KQcfFWNhT/"
    }
};

function changeCompany(type) {
    let c = companies[type];

    img.src = c.img;
    container.style.background = c.bg;
    title.textContent = c.name;
    desc.textContent = c.desc;
    date.textContent = c.date;
    link.href = c.link;
}
