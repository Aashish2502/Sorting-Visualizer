async function selection() {
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : O(n'+ '<sup>2</sup>'+')';
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_temp=ele[i].style.height;let k=i;
        // ele[i].style.background='blue';
        if(ele[i].style.background=='red'){ele[i].style.background='blue';}
            else{
                ele[i].style.background='red';
            }
        // await waitforme(delay);
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            if(ele[j].style.background=='red'){ele[j].style.background='blue';}
            else{
                ele[j].style.background='red';
            }
            await waitforme(delay);
            if(parseInt(min_temp)>parseInt(ele[j].style.height)){
                k=j;
                min_temp=ele[j].style.height;
            }
        }
        swap(ele[i],ele[k]);
        ele[i].style.background='green';
    }
}

const selSortbtn = document.querySelector(".selectionsort");
selSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let t=document.querySelector("#run_time");
    let start = performance.now();
    t.innerHTML='Algorithm is running......';
    await selection();
    let end=performance.now();
    let time_taken=end-start;
    t.innerHTML='Run Time : '+time_taken+' millisecs';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});