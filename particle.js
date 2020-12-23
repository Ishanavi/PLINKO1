class Particle
{
    constructor(x,y,r)
    {
        var options = 
        {
            restitution:0.8
        }

        this.r = r;
        this.red = random(0,255)
        this.blue = random(0,255)
        this.green = random(0,255)

        this.body = Bodies.circle(x,y,this.r,this.red,this.blue,this.green,options);
        World.add(world,this.body);
    }
      display()
      {
          var pos = this.body.position
          var angle = this.body.angle
          push()
          translate(pos.x,pos.y)
          rotate(angle)
          fill(this.red,this.blue,this.green)
          ellipseMode(CENTER)
          ellipse(0,0,this.r,this.r)
          pop()
      }
}
