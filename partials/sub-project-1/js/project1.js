
const cursor = document.getElementById('cursor');


let tmrID = null;

addEventListener('mousemove', (eventData)=>{  /* add event listener to window , no need to mention window hence global */
    // console.log(eventData.pageX,eventData.pageY);

    if(tmrID){  // truthy
        clearTimeout(tmrID);
        tmrID = null;
    }
    cursor.style.opacity = 0.9;
    cursor.style.left = `${eventData.pageX}px`;
    cursor.style.top = `${eventData.pageY}px`;

    tmrID = setTimeout(()=>{
        cursor.style.opacity = 0;
    },3000)

});
document.body.addEventListener('mouseleave',()=>{
    cursor.style.opacity = 0;
})

document.body.addEventListener('mouseenter',()=>{
    // console.log("Leave");
    cursor.style.opacity = 1;
})

// let x=0;

// const tmrId1 = setInterval(()=>{
//     console.log("print this..." + x++);
// },500);

// const btn1 =  document.querySelector('#btn1');

// btn1.addEventListener('click',()=> clearInterval(tmrId1));



// let x=0;

// const tmrId1 = setTimeout(()=>{
//     console.log("print this..." + x++);
// },5000);

// const btn1 =  document.querySelector('#btn1');

// btn1.addEventListener('click',()=> clearTimeout(tmrId1));

// let curTimeOut;

// function timer(){
//     curTimeOut = setTimeout(()=>{
//         cursor.style.opacity = 0;
//         // console.log("Clear")
//     },3000);
    
// }




// addEventListener('mousemove',()=>{
//     clearTimeout(curTimeOut);
//     cursor.style.opacity=1;
//     timer();
   

// });
