// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let contactPage = document.getElementById("contact-page");

    contactPage.innerHTML = "";

    let thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message!";

    thankYouMessage.style.fontSize = "24px";

    contactPage.appendChild(thankYouMessage);
  });
});
