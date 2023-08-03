const product = document.getElementById("product");
const productMenu = document.querySelector(".product_dropdown");

const company = document.getElementById("company");
const companyMenu = document.querySelector(".company_dropdown");

const connect = document.getElementById("connect");
const connectMenu = document.querySelector(".connect_dropdown");




product.addEventListener("click", (e) => {
    e.preventDefault();
    productMenu.classList.toggle("open");
    // productMenu.style.display = "block";
    // connectMenu.style.display = "none";
    // companyMenu.style.display = "none";
});

company.addEventListener("click", (e) => {
    e.preventDefault();
    companyMenu.classList.toggle("open");
    // companyMenu.style.display = "block";
    // productMenu.style.display = "none";
    // connectMenu.style.display = "none";
});

connect.addEventListener("click", (e) => {
    e.preventDefault();
    connectMenu.classList.toggle("open");
    // connectMenu.style.display = "block";
    // productMenu.style.display = "none";
    // companyMenu.style.display = "none";
});




const hamurger = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");

const menu_links = document.querySelector(".menu-links");


hamurger.onclick = function()
{
    menu_links.classList.toggle("open");
    closeBtn.style.display = "block";
    hamurger.style.display = "none";
}

closeBtn.onclick = function()
{
    menu_links.classList.remove("open");
    closeBtn.style.display = "none";
    hamurger.style.display = "block";
}




const proBtn = document.getElementById("productBtn");
const dropPro = document.getElementById("dropPro");

proBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropPro.classList.toggle("back");
})


const companyBtn = document.getElementById("companyBtn");
const dropCom = document.getElementById("dropCom");

companyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropCom.classList.toggle("back");
})


const connectBtn = document.getElementById("connectBtn");
const dropCon = document.getElementById("dropCon");

connectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropCon.classList.toggle("back");
})