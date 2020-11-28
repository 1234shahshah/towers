var a;
var circles=[];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
function setup() 
{
  engine = Engine.create();
  world = engine.world;

  polygon= Bodies.circle(50,200,20)
  World.add(world,polygon)

  slingshot=new SlingShot(this.polygon,{x:100,y:200})
              createCanvas(800,800);
              stroke(255)
              ground =new Ground(20,20,20,20)
              stand= new Ground(20,20,20,20)
              box1=new Box(20,20,20,20)
              box2=new Box(20,20,20,20)
              box3=new Box(20,20,20,20)
              box4=new Box(20,20,20,20)
              box5=new Box(20,20,20,20)
              box6=new Box(20,20,20,20)
              box7=new Box(20,20,20,20)
              box8=new Box(20,20,20,20)
              box9=new Box(20,20,20,20)
              box10=new Box(20,20,20,20)
              box11=new Box(20,20,20,20)
              box12=new Box(20,20,20,20)
              box13=new Box(20,20,20,20)
              box14=new Box(20,20,20,20)
              box15=new Box(20,20,20,20)
              box16=new Box(20,20,20,20)
            // camera=new Camera(width/2,height/2,0.5);
              //camera.on();
              a=height;
              circles.push(width/2)
              
}

function draw()
{
            //camera.zoom=camera.zoom+1
            background(0);  
            
            
            a=a-1;
            //camera.zoom=camera.zoom+0.01
          //camera.position={x:width/2,y:a}
          
            
            for (i=0;i<circles.length;i++)
          {
            circle(circles[i], height/2,20)
          }
          if(camera.position.x%width===0)
          {
            circles.push(camera.position.x+width/2)
          }
          // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
          drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 