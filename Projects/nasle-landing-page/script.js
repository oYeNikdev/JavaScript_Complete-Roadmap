const root = document.documentElement;
const flavourOptions = document.querySelectorAll(".flavour-option");
const flavourName = document.querySelector(".label-flavour");
const bagCount = document.querySelector(".bag-count");
const bagButton = document.querySelector(".bag-button");
const addButton = document.querySelector(".add-button");
const saleButton = document.querySelector(".sale-button");
const packageActions = document.querySelector(".package-actions");
const packageOutput = document.querySelector(".package-output");
const toast = document.querySelector(".toast");

let itemCount = 0;
let toastTimer;

try {
    itemCount = Number.parseInt(localStorage.getItem("nasleBagCount") || "0", 10);
} catch (error) {
    itemCount = 0;
}

if (!Number.isFinite(itemCount) || itemCount < 0) {
    itemCount = 0;
}

bagCount.textContent = itemCount;
bagButton.setAttribute("aria-label", `Shopping bag, ${itemCount} items`);

function addToBag() {
    itemCount += 1;
    bagCount.textContent = itemCount;
    bagButton.setAttribute("aria-label", `Shopping bag, ${itemCount} items`);
    try {
        localStorage.setItem("nasleBagCount", itemCount);
    } catch (error) {
        // The bag still works for this session if storage is unavailable.
    }

    if (toast) {
        toast.classList.add("visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove("visible");
        }, 1800);
    }
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

if (addButton) {
    addButton.addEventListener("click", addToBag);
}

if (saleButton) {
    saleButton.addEventListener("click", addToBag);
}

document.querySelectorAll(".product-add").forEach((button) => {
    button.addEventListener("click", addToBag);
});

if (packageActions) {
    packageActions.addEventListener("click", (event) => {
        const lostPackageButton = event.target.closest("[data-lost-package]");

        if (!lostPackageButton) {
            return;
        }

        const packageNumber = lostPackageButton.dataset.lostPackage;
        packageOutput.textContent = `Package #${packageNumber} lost`;
    });
}

const stockistForm = document.querySelector(".stockist-form");

if (stockistForm) {
    const formOutput = stockistForm.querySelector(".form-output");

    stockistForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!stockistForm.checkValidity()) {
            formOutput.textContent = "Please complete all fields with valid details.";
            stockistForm.reportValidity();
            return;
        }

        const formData = new FormData(stockistForm);
        const businessName = formData.get("business").trim();
        formOutput.textContent = `Thank you, ${businessName}. Your enquiry has been received.`;
        stockistForm.reset();
    });
}
