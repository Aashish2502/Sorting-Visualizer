async function Partition(ele,l,h){
    console.log('In partition()');
    let pivot=ele[h].style.height;
    ele[h].style.background='red';
    let i=l-1;
    await waitforme(delay);
    for(let j = l; j <= h - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[h].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[h]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[h].style.background = 'pink';
    ele[i].style.background = 'green';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        // await waitforme(delay);
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}
async function quick(ele ,l , h) {
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : O(nlogn) ';
    console.log('In quick()');
    console.log('In quickSort()', `l=${l} h=${h}`, typeof(l), typeof(r));
    if(l < h){
        let pivot_index = await Partition(ele, l, h);
        await quick(ele, l, pivot_index - 1);
        await quick(ele, pivot_index + 1, h);
    }
    else{
        if(l >= 0 && h >= 0 && l <ele.length && h <ele.length){
            ele[h].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const qckSortbtn = document.querySelector(".quicksort");
qckSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const ele = document.querySelectorAll(".bar");
    let l=0,h=ele.length -1;
    let t=document.querySelector("#run_time");
    let start = performance.now();
    t.innerHTML='Algorithm is running......';
    await quick(ele,l,h);
    let end=performance.now();
    let time_taken=end-start;
    t.innerHTML='Run Time : '+time_taken+' millisecs';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});