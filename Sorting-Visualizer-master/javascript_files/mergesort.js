async function merge(ele,low,mid,high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        // await waitforme(delay);
        console.log('In merge left loop');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // color
        ele[low + i].style.background = 'blue';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        // await waitforme(delay);
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = 'red';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    await waitforme(delay)
    while(i < n1){
        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    // await waitforme(delay);
    while(j < n2){
        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }

}
async function mergeSort(ele,n) {
    let comp=document.querySelector("#complexcity");
    comp.innerHTML='Time Complexcity : O(nlogn) ';
    console.log('In merge()');
    // const ele = document.querySelectorAll(".bar");
    let p,i,l,mid,h;
    for(p=2;p<=n;p=p*2){
        for(i=0;i+p-1<n;i=i+p){
            l=i;h=i+p-1;mid=parseInt((l+h)/2);
            await merge(ele,l,mid,h);
        }
        if(n-i>parseInt(p/2)){
            l = i;
            h = i+p-1;
            mid = parseInt((l+h)/2);
            await merge(ele, l, mid, n-1);
        } 
    }
    if(parseInt(p/2) < n){
        await merge(ele,0,parseInt(p/2)-1,n-1);
    }
}

//     for(let i = 0; i < ele.length-1; i++){
//         console.log('In ith loop');
//         for(let j = 0; j < ele.length-i-1; j++){
//             console.log('In jth loop');
//             ele[j].style.background = 'blue';
//             ele[j+1].style.background = 'red';
//             if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
//                 console.log('In if condition');
//                 await waitforme(delay);
//                 swap(ele[j], ele[j+1]);
//             }
//             ele[j].style.background = 'Dodgerblue';
//             ele[j+1].style.background = 'Dodgerblue';
//         }
//         ele[ele.length-1-i].style.background = 'green';
//     }
//     ele[0].style.background = 'green';
// }

const mrgSortbtn = document.querySelector(".mergesort");
mrgSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    let ele = document.querySelectorAll('.bar');
    let siz=ele.length;
    let t=document.querySelector("#run_time");
    let start = performance.now();
    t.innerHTML='Algorithm is running......';
    await mergeSort(ele,siz);
    let end=performance.now();
    let time_taken=end-start;
    t.innerHTML='Run Time : '+time_taken+' millisecs';
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});