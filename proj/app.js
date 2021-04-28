let ps=[];
let box=document.getElementById("er");
let width = box.offsetWidth;
let height = box.offsetHeight;
function setup() {
  console.log(height)
  let cd=createCanvas(width,height);
  cd.parent(box);
  cd.style('z-index','-1');
  cd.position(0,0);
  for(let i=0;i<45;i++){
    ps.push(new particle());
  }
}

function draw() {
  background(256);
  for(let i=0;i<45;i++){
    ps[i].move();
    ps[i].display();
    ps[i].checkedge();

  }
}
class particle{

  constructor(){
    this.xPosition=0;
    this.yposition=0;
    this.speed= createVector(random(-2,5),random(-2,4))
    this.size=random(20,35);
    this.time=0;
  }
  move(){


    this.xPosition=this.xPosition+this.speed.x;
    this.yposition=this.yposition+this.speed.y;
    this.time=this.time+1;
  }
  display(){
    fill('black')
    circle(this.xPosition,this.yposition,this.size);
  }
  checkedge(){
    if(this.xPosition>width||this.xPosition<0){
      this.speed.x=-1*this.speed.x;
    }
   if(this.yposition>width||this.yposition<0){
     this.speed.y=-1*this.speed.y;
   }
  }

}
