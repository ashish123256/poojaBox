document.addEventListener("DOMContentLoaded", function () {
    function setupDropdown(buttonId, dropdownId) {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);
        const icon = button.querySelector("i");

        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("show");
                }
            });

            // Reset all icons
            document.querySelectorAll(".nav-links i").forEach(i => {
                i.classList.remove("fa-angle-up");
                i.classList.add("fa-angle-down");
            });

            // Toggle current dropdown
            dropdown.classList.toggle("show");

            // Toggle icon direction
            if (dropdown.classList.contains("show")) {
                icon.classList.remove("fa-angle-down");
                icon.classList.add("fa-angle-up");
            } else {
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!button.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove("show");
                icon.classList.remove("fa-angle-up");
                icon.classList.add("fa-angle-down");
            }
        });
    }

    // Setup dropdowns
    setupDropdown("shopBtn", "shopDropdown");
    setupDropdown("homeDecorBtn", "homeDropdown");

    // **Fix for Carousel Navigation**
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (prevBtn && nextBtn && carousel) {
        prevBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: -200, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            carousel.scrollBy({ left: 200, behavior: "smooth" });
        });
    } else {
        console.error("Carousel elements not found!");
    }


    const prevBtnr = document.querySelector('.prev-btnr');
        const nextBtnr = document.querySelector('.next-btnr');
        const reviewContainer = document.querySelector('.review-container');
        let index = 0;
        const totalReviews = document.querySelectorAll('.review').length;

        prevBtnr.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : totalReviews - 1;
            updateCarousel();
        });

        nextBtnr.addEventListener('click', () => {
            index = (index < totalReviews - 1) ? index + 1 : 0;
            updateCarousel();
        });

        function updateCarousel() {
            reviewContainer.style.transform = `translateX(-${index * 300}px)`;
        }

        const aboutText = document.getElementById("aboutText");
const toggleBtn = document.getElementById("toggleBtn");

let isExpanded = false;

toggleBtn.addEventListener("click", function() {
    if (isExpanded) {
        aboutText.style.maxHeight = "50px";  // Collapse text
        aboutText.style.whiteSpace = "nowrap";
        toggleBtn.innerText = "READ MORE";
    } else {
        aboutText.style.maxHeight = "none";  // Expand text
        aboutText.style.whiteSpace = "normal";
        toggleBtn.innerText = "READ LESS";
    }
    isExpanded = !isExpanded;
});


});

const wishlistCount = document.getElementById("wishlist-count");
const cartCount = document.getElementById("cart-count");

// Wishlist Button Click Event
document.querySelectorAll(".wishlist-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        
        // Get current count
        let count = parseInt(wishlistCount.textContent);
        
        if (this.classList.contains("active")) {
            count++;  // Increase count when added
        } else {
            count--;  // Decrease count when removed
        }

        wishlistCount.textContent = count; // Update display
    });
});



// Add to Cart Button Click Event
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        let count = parseInt(cartCount.textContent);
        count++;  // Increase cart count
        cartCount.textContent = count; // Update display
    });
});

document.getElementById("writeReviewBtn").addEventListener("click", function() {
    window.location.href = "https://www.google.com/search?hl=en-IN&gl=in&q=My+Pooja+Box+%7C+The+Art+of+Gifting&ludocid=3152242932090493179&lsig=AB86z5VAAdStEGcdne6yEYYWKbT0#lrd=0x390d1e26841f41b5:0x2bbf043ed4fd58fb,3";
});



document.querySelector(".country-selector").addEventListener("change", function () {
    alert("Selected Country: " + this.value);
});

document.querySelector(".social-btn:first-child").addEventListener("click", function () {
    window.open("https://www.facebook.com/MyPoojaBox/", "_blank");
});

document.querySelector(".social-btn:last-child").addEventListener("click", function () {
    window.open("https://www.instagram.com/mypoojabox/", "_blank");
});


function updateProductVisibility() {
    const screenWidth = window.innerWidth;
    const productSections = document.querySelectorAll(".product");

    productSections.forEach((section) => {
        const productCards = section.querySelectorAll(".product-card");

        productCards.forEach((card, index) => {
            if (screenWidth <= 650) {
                card.style.display = index === 0 ? "block" : "none"; // Show only 1 product
            } else if (screenWidth <= 1350) {
                card.style.display = index < 3 ? "block" : "none"; // Show only 3 products
            } else {
                card.style.display = "block"; // Show all products
            }
        });
    });
}

// Run on page load and resize
window.addEventListener("resize", updateProductVisibility);
window.addEventListener("load", updateProductVisibility);


