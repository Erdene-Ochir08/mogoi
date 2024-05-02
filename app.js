var canvas = document.querySelector('.canvas');
var ctx = canvas.getContext("2d");
var gridSize = 20;
var snakeColor = "green";
var foodColor = "red";

var snake = [{x:12,y:8}];
var food = {x:2,y:5};

function drawFood(){
	ctx.fillStyle = foodColor;
	ctx.fillRect(food.x*gridSize,food.y*gridSize, gridSize,gridSize);
}
function drawSnake(snakeEl){
	snakeEl.forEach( segment=>{
		ctx.fillStyle = snakeColor;
		ctx.fillRect(segment.x*gridSize,segment.y*gridSize, gridSize,gridSize);
	});
}
var dx=1, dy=0;
function update(){
	var head = {x:snake[0].x+dx, y:snake[0].y+dy};
	
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		// random 0-19
		var r1= Math.floor(Math.random()*20);
		var r2= Math.floor(Math.random()*20);
		food = {x:r1,y:r2}
	}else{
		snake.pop();
	}
	if(head.y<0 || head.y>19){
		alert("You lose");
		snake = [{x:5,y:10}];
	}

	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawFood();
	drawSnake(snake);
}
setInterval(update,200);

document.addEventListener("keydown",(event)=>{
	console.log(event.key);
	switch(event.key){
		case "ArrowUp":
			if(dy!==1){
				dx=0;
				dy=-1;
			}
			break;
		case "ArrowDown":
			if(dy!==-1){
				dx=0;
				dy=1;
			}
			break;
		case "ArrowLeft":
			if(dx!==1){
				dx=-1;
				dy=0;
			}
			break;
		case "ArrowRight":
			if(dx!==-1){
				dx=1;
				dy=0;
			}
			break;
	}
});