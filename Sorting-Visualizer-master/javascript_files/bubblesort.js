// function runtime_bubble(){
//     let start = performance.now()
//     bubble();
//     let end=performance.now();
//     let time_taken=end-start;
//     let t=document.querySelector("#run_time");
//     t.innerHTML='Run Time : '+time_taken+' millisecs';
// }
async function bubble() {
    // let k=n;
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : O(n'+ '<sup>2</sup>'+')';
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'red';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'Dodgerblue';
            ele[j+1].style.background = 'Dodgerblue';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}


const bubSortbtn = document.querySelector(".bubblesort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let t=document.querySelector("#run_time");
    let start = performance.now();
    t.innerHTML='Algorithm is running......';
    await bubble();
    let end=performance.now();
    let time_taken=end-start;
    t.innerHTML='Run Time : '+time_taken+' millisecs';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});