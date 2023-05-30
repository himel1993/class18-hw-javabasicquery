let incrementBtn = document.querySelector(".increment");
let output = document.querySelector('.output')

// * increment function

function incrementNum () {
    let newValue =  Number(output.value);
    newValue = newValue + 5;
    output.value = newValue;
    
}


incrementBtn.addEventListener("click", incrementNum);


//* DECREMENT FUNCTION

let decrementBtn = document.querySelector(".decrement");

function derementNum (){
    
    let newValue = Number(output.value);

    if (newValue == 0) {
        return false;
    }


    newValue = newValue - 1;
    output.value = newValue

}

decrementBtn.addEventListener("click", derementNum)


//* RANGE SLIDER
let slider = document.querySelector(".slider");
let result = document.querySelector('.rangeSlider .output h2 span')


function updatePrice(){
    
    let newValue = slider.value;
    
    result.innerHTML = newValue
}

slider.addEventListener('input',updatePrice )


//* RANDOM COLOR CHANGER
let colorBtn = document.querySelector("#colorChanger");
let body = document.querySelector('body')


function colorChange () {
   
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}

colorBtn.addEventListener('click',colorChange)



//* HOVER
let box = document.querySelector('.box')
let frontImg = box.querySelector('.front')
let backImg = box.querySelector('.back')


function changeImageFront(){
    frontImg.classList.add("hovered");
}

box.addEventListener("mouseenter", changeImageFront);

function    changeImageBack(){
 frontImg.classList.remove("hovered");
}


box.addEventListener("mouseleave", changeImageBack);