class Ball{

constructor(x,y,width,height,angle){
var options = {
    density:1,
    frictionAir:0.000005
}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world, this.body);


console.log(this.body);
}

display(){
push();
ellipseMode(RADIUS);
fill(254,0,255)
ellipse(this.body.position.x,this.body.position.y,25,25);
pop();
}


}