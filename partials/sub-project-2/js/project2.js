

const boxElm =  document.querySelector('#box');


// boxElm.style.top = `${innerHeight-boxElm.clientHeight}px`;


// let height= boxElm.clientHeight; 

// const tmr1 = setInterval(()=>{

    
//     if(height < innerHeight){
//         height++;
//     }else{
//         height--;
        
//     }
//     boxElm.style.top = `${height-boxElm.clientHeight}px`;
// },10);

let y =0;
let up = false;



setInterval(()=>{
    boxElm.style.top = `${(y)}px`;
    y += !up ? Math.sin(5):Math.sin(-5);

    if(y +boxElm.offsetHeight >= innerHeight){
        up = true
    }else if(y<=0){
        up =false
    }
    
},10);

