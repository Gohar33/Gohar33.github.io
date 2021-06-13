const readButton = document.querySelector(".btn")
const text = document.querySelector(".text")


readButton.addEventListener('click', () => {
    text.classList.toggle('show-more')
    if (readButton.innerText === "Read More") {
        readButton.innerText = "Read Less"
    } else {
        readButton.innerText = "Read More"
    }
})