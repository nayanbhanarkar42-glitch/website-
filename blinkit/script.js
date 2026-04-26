// ==============================
// WEBSITE MAIN SCRIPT
// ==============================

// Cart count
let cartCount = 0;

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // ADD TO CART FUNCTION
    // ======================
    let addButtons = document.querySelectorAll(".btn");
    let cartBox = document.getElementById("baba");

    addButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            cartCount++;
            cartBox.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> My Cart (${cartCount})`;
            alert("Product added to cart ✅");
        });
    });

    // ======================
    // SEARCH FUNCTION
    // ======================
    let searchInput = document.getElementById("search");
    let products = document.querySelectorAll("#nayan");

    searchInput.addEventListener("keyup", () => {
        let value = searchInput.value.toLowerCase();

        products.forEach((item) => {
            let text = item.innerText.toLowerCase();
            item.style.display = text.includes(value) ? "block" : "none";
        });
    });

    // ======================
    // LOGIN BUTTON
    // ======================
    let loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Login feature coming soon 🔐");
    });

});

// ==============================
// RESPONSIVE HELP (JS SIDE)
// ==============================
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        console.log("Mobile view active 📱");
    } else {
        console.log("Desktop view active 💻");
    }
});
