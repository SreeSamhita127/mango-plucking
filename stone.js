class Stone{
    constructor(x,y,width,height){
        this.image = loadImage("images/stone.png");
        var options ={
            isStatic: false,
            density:2,
            friction:4
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
   }
};