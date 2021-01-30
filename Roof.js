class Roof{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{idStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTRE);
        fill(128,128,128)
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
        }
        
        
        }
