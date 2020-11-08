class Block {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':false,  
        'friction':0.1,
        'density':0.1
      }
      this.Visibility = 225
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5
    }
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -105){
        score++
      }
    }
  };
  