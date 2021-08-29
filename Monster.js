class Monster{
    constructor(XMLDocument,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png");
    }
    display(){
        push();
       translate(this.body.position.x, this.body.position.y);
       ImageMode(CENTER);
       image(this.image,0,0, this.width, this.height);
       pop();
    }
}
