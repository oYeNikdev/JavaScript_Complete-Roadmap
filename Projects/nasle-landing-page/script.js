const root = document.documentElement;
const flavourOptions = document.querySelectorAll(".flavour-option");
const flavourName = document.querySelector(".label-flavour");
const bagCount = document.querySelector(".bag-count");
const bagButton = document.querySelector(".bag-button");
const addButton = document.querySelector(".add-button");
const saleButton = document.querySelector(".sale-button");
const toast = document.querySelector(".toast");

let itemCount = 0;
let toastTimer;

function addToBag() {
    itemCount += 1;
    bagCount.textContent = itemCount;
    bagButton.setAttribute("aria-label", `Shopping bag, ${itemCount} items`);

    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
    }, 1800);
}

flavourOptions.forEach((option) => {
    option.addEventListener("click", () => {
        flavourOptions.forEach((item) => {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        option.classList.add("active");
        option.setAttribute("aria-pressed", "true");
        root.style.setProperty("--accent", option.dataset.colour);
        flavourName.innerHTML = `${option.dataset.flavour}<br>Minéral`;
    });
});

addButton.addEventListener("click", addToBag);
saleButton.addEventListener("click", addToBag);
