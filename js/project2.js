

class Box{
    #width;
    #height;
    #dx;
    #dy;
    #elm;
    

    // get elm(){
    //     return this.#elm;
    // }
    
    constructor(){
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        this.#width = 22 + (Math.random() * 12);
        this.#height =  this.#width; //20 + (Math.random() * 10);
        this.#dx = Math.random() * 13 * (Math.random() < 0.5? -1: 1);
        this.#dy = Math.random() * 13 * (Math.random() < 0.5? -1: 1);
        this.#elm.style.left = `${Math.random() * (innerWidth - this.#width)}px`;
        this.#elm.style.top = `${Math.random() * (innerHeight - this.#height)}px`;
        this.#elm.style.width = `${this.#width}px`;
        this.#elm.style.height = `${this.#height}px`;
        document.body.append(this.#elm);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.4 + Math.random();
        this.#elm.style.backgroundColor = `rgba(${red},${green}, ${blue}, ${alpha})`;
        this.#elm.style.borderRadius = `${Math.random() * 101}%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
    }
    
    move(){
        let distX = Math.abs((cursor.offsetLeft - this.#elm.offsetLeft));
        let distY = Math.abs((cursor.offsetTop - this.#elm.offsetTop));
        let dist = Math.sqrt(Math.pow(distX,2) + (Math.pow(distY,2)));
        // console.log(distX);
        // console.log(distY);
        // console.log(dist);
        let min = ((cursor.offsetWidth-20)+this.#elm.offsetWidth);
        // console.log(min);
        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0 /* || dist<=min */){
            this.#dy = -this.#dy;
        }
        if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0 /* || dist<=min */){      
            this.#dx = -this.#dx;
        } 
        
        if(dist<min){
            
            this.#dx = -(this.#dx*2);
            this.#dy = -(this.#dy*2);
            this.#elm.style.transform= `rotate(${90}deg)`;

            
            setTimeout(()=>{
                this.#dx=(this.#dx/2);
                this.#dy=(this.#dy/2);
     
            },1000);
        };
        
        console.log(this.#dx);
        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx}px`;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy}px`; 
        
        
    }
    
    
    
    
        
    
};


const boxes = [];
for(let i = 0; i < 50; i++){
    boxes.push(new Box());
}

// setInterval(()=>{
// }, 50);


function box(timestamp){
    
    boxes.forEach(box => box.move());


    requestAnimationFrame(box);
}

requestAnimationFrame(box);
