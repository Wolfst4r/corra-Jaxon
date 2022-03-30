var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
    createCanvas(400, 400);

    // Movendo o fundo 
    path= createSprite (200,200);
    path.addImage (pathImg);
    
    path.scale=1.2;


    //Criando menino que corre 
    boy = createSprite(20, 380, 30, 30); 
    boy.addAnimation("Runner-1.png", "Runner-2.png"); 
    boy.scale= 0.07;

    // Criando Boundary (Limite) esquerdo  
    leftBoundary = createSprite(0, 0, 100, 800);
    leftBoundary.visible = false;

    //Crie Boundary direito 
    rightBoundary = createSprite(411, 100, 100, 800);
    rightBoundary.visible = false;
}

function draw() {
    background(0);
   
    // Menino se movendo no eixo X com o mouse
    boy.x = World.mouseX;
    
    edges = createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide (rightBoundary);
    boy.collide (leftBoundary);

    //Reiniciar o fundo
    path.velocityY = 4;
    console.log (path.y);

    if (path.y > 400){
        path.y = path.height/8;
    }

    
    drawSprites();

}




