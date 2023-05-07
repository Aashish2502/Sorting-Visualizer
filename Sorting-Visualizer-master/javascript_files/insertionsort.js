async function insertion() {
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : O(n'+ '<sup>2</sup>'+')';
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background='green';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j=i-1;let x=ele[i].style.height;
        ele[i].style.background='blue';
        await waitforme(delay);
        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(x))){
            console.log('In while()')
            ele[j].style.background='red';
            ele[j+1].style.height=ele[j].style.height;
            j--;
            await waitforme(delay);
            // let k=i;
            for(let k=i ;k>=0;k--){
                ele[k].style.background='green';
                // k--;
            }
        }
        ele[j+1].style.height=x;
        ele[j+1].style.background='green';  
    }
    
}

const insSortbtn = document.querySelector(".insertionsort");
insSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let t=document.querySelector("#run_time");
    let start = performance.now();
    t.innerHTML='Algorithm is running......';
    await insertion();
    let end=performance.now();
    let time_taken=end-start;
    t.innerHTML='Run Time : '+time_taken+' millisecs';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});