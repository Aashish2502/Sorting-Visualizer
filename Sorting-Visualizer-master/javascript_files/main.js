//swap function, which swaps heights of DOM elements
function swap(el1, el2) {
    console.log('swapping '+el1.style.height+' and '+el2.style.height);
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function disableSortingBtn(){
    document.querySelector(".bubblesort").disabled = true;
    document.querySelector(".insertionsort").disabled = true;
    document.querySelector(".mergesort").disabled = true;
    document.querySelector(".quicksort").disabled = true;
    document.querySelector(".selectionsort").disabled = true;
}

function enableSortingBtn(){
    document.querySelector(".bubblesort").disabled = false;
    document.querySelector(".insertionsort").disabled = false;
    document.querySelector(".mergesort").disabled = false;
    document.querySelector(".quicksort").disabled = false;
    document.querySelector(".selectionsort").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#size_input").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#size_input").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arr_size = document.querySelector('#size_input');


arr_size.addEventListener('input', function(){
    console.log(arr_size.value, typeof(arr_size.value));
    createNewArray(parseInt(arr_size.value));
});

let delay = 260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 50) {
    //deleting the previous bars
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*1.5}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        // bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : _____________ ';
    let t=document.querySelector("#run_time");
    t.innerHTML='Run Time : 0 sec';
}


const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arr_size.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arr_size.value);
});