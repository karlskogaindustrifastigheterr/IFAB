var slideIndex = 1;
var currentModal = null;

function openModal(modalId) {
    slideIndex = 1;
    currentModal = document.getElementById(modalId);

    showSlides(slideIndex);
    currentModal.getElementsByClassName("lighbox-modal")[0].style.display = "block";
}

function closeModal() {
    currentModal.getElementsByClassName("lighbox-modal")[0].style.display = "none";
    currentModal = null;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    return true;
}

function showSlides(n) {
    var i;
    var slides = currentModal.getElementsByClassName("mySlides");

    var dots = currentModal.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function initLightBoxes(lightboxes) {
    var template = document.getElementById("lightbox-modal-template");
    var containerElement = document.getElementById("lightbox-container");

    for (var i = 0; i < lightboxes.length; i++) {
        lightBoxSettings = lightboxes[i];

        var newElement = document.createElement("div");

        newElement.id = lightBoxSettings.id;
        newElement.innerHTML = template.innerHTML;

        var imageContainer = newElement.getElementsByClassName("lightbox-slide-image-container")[0];

        imageContainer.innerHTML = getImageHtml(lightBoxSettings.imageUrls);

        var thumbContainer = newElement.getElementsByClassName("lightbox-slide-image-thumb-container")[0];

        thumbContainer.innerHTML = getThumbHtml(lightBoxSettings.imageUrls);

        containerElement.appendChild(newElement);
    }
}

function getImageHtml(imageUrls) {
    var html = "";
    for (var i = 0; i < imageUrls.length; i++) {
        var currentImageNumber = i + 1;
        var currentUrl = imageUrls[i];
        html += "<div class='mySlides'> " +
            "<div class='numbertext'>" + currentImageNumber + " / " + imageUrls.length + "</div>" +
            "<img src='images/" + currentUrl + "' style='width:100%'>" +
            "</div>"
    }
    return html;
}

function getThumbHtml(imageUrls) {
    var html = "";
    for (var i = 0; i < imageUrls.length; i++) {
        var currentImageNumber = i + 1;
        var currentUrl = imageUrls[i];
        html += "<div class='column'>" +
            "<img class='demo' src='images/" + currentUrl + "' onclick='currentSlide(" + currentImageNumber + ")'>" +
            "</div>"
    }
    return html;
}
