document.querySelectorAll(".saa-fq-question").forEach((btn) => {
  btn.addEventListener("click", () => {

    const item = btn.parentElement;

    // Close all
    document.querySelectorAll(".saa-fq-item").forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");

  });
});

  // Show popup when page loads
  window.onload = function() {
    document.getElementById("popupOverlay").style.display = "flex";
  };

  function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
  }