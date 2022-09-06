const divHover = document.querySelectorAll("div");
const wrapper = document.querySelector(".wrapper");


// divHover.forEach((e) => )

// divHover.addEventListener('click', (e) => {divHover.style.background = 'cyan'})

// on mouse over, turn all divs bg to cyan
function divHoverEffect(div) {
    div.addEventListener('mouseover', (e) => {div.style.border = 'cyan 10px solid'}
    )
}

divHover.forEach(div => divHoverEffect(div))

//on mouse over, turn the wrapper bg to blue
// wrapper.addEventListener('mouseover', (e) => {wrapper.style.background = 'blue'})

// testing staging