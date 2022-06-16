var brush;

/*function preload(){
  eraserImg = loadImage('Eraser.png')
}*/
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {

  if(mouseIsPressed){
    if(mouseX < 100){
      if(mouseY < 100){
       brush = 'red'
      } else if(mouseY < 200){
        brush = 'blue'
      }else if(mouseY < 300){
        brush = 'green'
      }else if(mouseY < 400){
        brush = 'yellow'
      }else if(mouseY < 500){
        brush = 'orange'
      }else if(mouseY < 600){
        brush = 'purple'
      }else if(mouseY < 700){
        brush = 'black'
      }
    }
    stroke(brush)
    line(mouseX , mouseY, pmouseX,pmouseY)
  }
  noStroke()
  fill('red')
  rect(0,0,100,100)

  fill('blue')
  rect(0,100,100,100)

  fill('green')
  rect(0,200,100,100)

  fill('yellow')
  rect(0,300,100,100)

  fill('orange')
  rect(0,400,100,100)

  fill('purple')
  rect(0,500,100,100)

  fill('black')
  rect(0,600,100,100)
  
  small = createButton('Small')
  small.position(width - 100,20)

  medium = createButton('Medium')
  medium.position(width - 100,50)

  large = createButton('Large')
  large.position(width - 100,80)

  small.mousePressed(function(){
    strokeWeight(3)
  })

  medium.mousePressed(function(){
    strokeWeight(6)
  })

  large.mousePressed(function(){
    strokeWeight(9)
  })

eraser = createImg('eraser2.png');
eraser.position(width - 100,height -200)
eraser.size(50,50)
eraser.mousePressed(function(){
  brush = 'white'
})

 c = createButton('Clear')
 c.position(width - 100,height - 100)

 
 c.mousePressed(function(){
   clear()
 })
}