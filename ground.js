class Ground{
    constructor(x,y,width,height){
   this.ground=Bodies.rectangle(x,y,width,height,{isStatic:true})
   World.add(world,this.ground)
     this.width=width
     this.height=height 
    }   
   display(){
       fill ("yellow")
   var pos=this.ground.position
   rectMode(CENTER)
   rect(pos.x,pos.y,this.width,this.height)
   
   }
   
   
   }