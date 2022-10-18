const output = document.getElementById('output');
const text = document.getElementById('text');


const wordArray = ["Test1","Test2","Test3"];


let index = 0;
let charIndex = 0;
let clear = false;



const typeText=()=>{
    console.log("test");
    if(!clear){
        text.innerText = wordArray[index].substring(0,charIndex++);
        if((wordArray[index].length +15) === charIndex){
            charIndex = wordArray[index].length;
            clear =true;
        } 
    }
}

const removeText=()=>{
    console.log("remove");
    if(clear){
        text.innerText = wordArray[index].substring(0,charIndex--);
        if(charIndex=== 0){
            clear =false;
            index++;
            if(index === wordArray.length) index =0;
        } 
    }
}











let t1 = 0;
let t2 = 0;

function type(timestamp){

    if (!t1) t1 = timestamp;
    if(!t2) t2 = timestamp;

    const diff1 = timestamp - t1;
    if(diff1>= 65){
        t1 = timestamp;
        typeText();
    }

    const diff2 = timestamp -t2;
    if(diff2>=35){
        t2 = timestamp;
        removeText();
    }
 




    requestAnimationFrame(type);
}

requestAnimationFrame(type);


// console.log(wordArray);

// let senIndex =0;


//     wordArray.forEach((elm)=>{
//         if(senIndex<wordArray.length){
//             const charArray = wordArray[senIndex++].split('');
//             console.log(charArray);
//             // type(charArray);
//         }
        
//     });
    
//     // type(charArray);
// // type('sdffsdfs'.split(''));

// function type(charArray){

    
//     let index=0;
    
    
//     setInterval(()=>{
//         if(index<charArray.length){
//             speed = 1000;
    
//             const item = document.createElement('span');
//             item.innerText= charArray[index++];
//             output.append(item);
//         }
//     },1000)
    
    
//     setInterval(()=>{
        
//         if(index == charArray.length){
            
//             setTimeout(()=>{
//                 output.lastChild.remove();
        
//             },2000)
        
//         }
    
//     },30);
// }