let share = document.querySelector("#share")

let hidden = document.querySelector("#hidden")

let container = document.querySelector(".small_container")

share.addEventListener('mouseover', () => {
    hidden.style.display = "flex"
})

container.addEventListener('mouseleave', () => {
    hidden.style.display = "none"
})