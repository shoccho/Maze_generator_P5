let rows;
let cols;
const scl = 10;
let cells = [];
let current;
let stack=[];
function setup() {

  createCanvas(400, 400);
  rows = height / scl;
  cols = width / scl;
  background(0);
   //cell = new Cell(1,1);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      var c=new Cell(i,j);
      console.log(c.i);
      cells.push(c);
      
    }
  }
  current=cells[0];
}

function draw() {
 background(0,0,255);
  
  for(c in cells){
    cells[c].show(); 
  }
  current.visited=true;
  current.highlight();
  let next=current.checkNeighbors();
  if(next!=null){
    next.visited=true;
  
  stack.push(current);
  let x=current.i-next.i;
    if (x==1) {
      current.walls[0]=false;
      next.walls[2]=false;
    } else if (x==-1) {
      next.walls[0]=false;
      current.walls[2]=false;
    } 
    let y=current.j-next.j;
    if (y==1) {
      current.walls[3]=false;
      next.walls[1]=false;
    } else if(y==-1) {
      next.walls[3]=false;
      current.walls[1]=false;
    } 
    
    current=next;
  }
  else if(stack.length>0 ){
    current=stack.pop();
  }
}