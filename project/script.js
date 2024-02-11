document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById("btn-primary");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const videoPopup = document.getElementById("videoPopup");

    openPopupBtn.addEventListener("click", function() {
        videoPopup.style.display = "flex";
    });

    closePopupBtn.addEventListener("click", function() {
        videoPopup.style.display = "none";
    });
});
