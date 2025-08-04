sdocument.addEventListener("DOMContentLoaded", function () {
  // Search Functionality
  const searchInput = document.querySelector(".searchbar input");
  const products = document.querySelectorAll(".product");

  searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    products.forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

  // Hover Effect on Products
  products.forEach((product) => {
    product.addEventListener("mouseenter", function () {
      product.style.transform = "scale(1.1)";
      product.style.transition = "0.3s ease-in-out";
      product.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
    });

    product.addEventListener("mouseleave", function () {
      product.style.transform = "scale(1)";
      product.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });

    // Add to Cart Alert
    product.addEventListener("click", function () {
      const productName = product.querySelector("h3").textContent;
      alert($,{productName},"Added to Cart 🛒💖");
    });
  });

  // Smooth Scrolling for Navigation
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});