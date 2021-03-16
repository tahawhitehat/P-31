class Drops{
   constructor(x, y,r) {
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        
        }
        
        this.body = Bodies.circle(x, y,r, options);
        this.Visiblity = 255;
        this.x = x;
        this.y = y;
        this.r = r

        World.add(world, this.body);
        }
        update() {
            var maxDrops = 100
            for (var i=0; i<maxDrops; i++){
                drops.push(new createDrop(random(0,400)), (random(0,400)))
            }
            if(this.Drops.position.y > height){
                 Mattter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
            }
        }

    }
    