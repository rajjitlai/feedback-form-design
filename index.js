const button = document.querySelector(".button")
const feedback = document.querySelector(".container")
button.addEventListener("click", () => {
    feedback.innerHTML = `<h1>Thank you for your feedback</h1>`
    setTimeout(() => {
        window.location.reload();
    }, 7000);
})