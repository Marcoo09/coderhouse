// JavaScript Document
	$(document).ready(function(){
			var canvas = $("#canvas1")[0];
			var ctx = canvas.getContext("2d");
			
				ctx.canvas.width  = 360;
				ctx.canvas.height = 640;
				
			var cWidth = $("#canvas1").width();
			var cHeight = $("#canvas1").height();
			
			var game_loop, gameOver_loop, start_loop;
			var is_start, is_over;
			
			var player;
			var jumping;
			var startJump;
			var storePos;
			var velocity;
			
			var score;
			
			var tubes;
			var timer;
			var tubeToDraw;
			
			var textPosX = cWidth/2;
			var textPosY = cHeight/2;

			var fondo= new Image();
			fondo.src="../imagenes/fondo.png";
			
			
			
			var tubeSprite = $("#tube")[0];
			
			
			
			$(document).keydown(function(event){
				event.preventDefault();
				var key = event.which;
				
				if(key == 32){
					jumping = true;
					startJump = true;
				}else if((key == 13 && is_start) || (key == 13 && is_over)){
					init();
				}
			})
			
			function init(){
				
				is_start = false;
				is_over = false;
				
				score = 0;
				
				player = {posX: (cWidth/100)*10, posY: (cHeight/2)-10, width: 20, height: 20};
				jumping = false;
				startJump = false;
				
				tubes = new Array(6);
				timer = 80;
				tubeToDraw = 0;
				
				for(var i = 0; i < tubes.length; i++){
					tubes[i] = {draw: false, onScreen: false, count: false, posX: cWidth, posY: 0, width: 60, height: 0};
				}
			
				if(typeof game_loop != "undefined"){
					clearInterval(game_loop);
				}
				clearInterval(start_loop);
				clearInterval(gameOver_loop);
				game_loop = setInterval(main, 30);
				
			}
			
			function startScreen(){
				is_start = true;
				if(typeof start_loop != "undefined"){
					clearInterval(start_loop);
				}
				clearInterval(game_loop);
				clearInterval(gameOver_loop);
				start_loop = setInterval(start, 500);
			}
			
			function overScreen(){
				is_over = true;
				if(typeof gameOver_loop != "undefined"){
					clearInterval(gameOver_loop);
				}
				clearInterval(game_loop);
				clearInterval(start_loop);
				gameOver_loop = setInterval(over, 500);
			}
			
			function start(){
				drawBackground();
				ctx.save();
				
				var title = "Flappy Pixel";
				ctx.font = "bold 45px Courier";
				
				// Color con Imagenes
				//ctx.fillStyle = "white";
				
				//Color sin imagenes
				ctx.fillStyle = "black";
				
				ctx.textAlign = "center";
				ctx.fillText(title, textPosX, textPosY-77);
				
				ctx.font = "bold 25px Courier";
				
				var jump = "Space to jump";
				var restart = "Enter to (re)start";
				
				ctx.fillText(jump, textPosX, textPosY-17);
				ctx.fillText(restart, textPosX, textPosY+28);
				
				
				ctx.restore();
			}
			
			function over(){
				drawBackground();
				ctx.save();
				
				var title = "Game Over";
				ctx.font = "bold 45px Courier";
				
				// Color con Imagenes
				//ctx.fillStyle = "white";
				
				//Color sin imagenes
				ctx.fillStyle = "black";
				
				ctx.textAlign = "center";
				ctx.fillText(title, textPosX, textPosY-75);
				
				ctx.font = "bold 30px Courier";
				var scoreText = "Score: " + score;
				ctx.fillText(scoreText, textPosX, textPosY-15);
				
				ctx.font = "bold 20px Courier";
				ctx.fillStyle = "black";
				var restartText = "Press Enter to start again";
				ctx.fillText(restartText, textPosX, textPosY+44);
				
				ctx.restore();
			}
			
			function main(){
				drawBackground();
				borderCollision();
				collision();
				drawPlayer();
				drawTubes();
				drawScore();
				moveTubes();
				if(jumping){
					jump();
				}else{
					playerGravity();
				}
				scoreCount();
			}
			
			function drawBackground(){
				ctx.save();
				
					ctx.fillStyle="white";
					ctx.fillRect(0,0,cWidth, cHeight );
					ctx.strokeStyle="blue";
					ctx.strokeRect(0,0,cWidth, cHeight );
				
				

				//ctx.drawImage(fondo,0,0,cWidth,cHeight);
				
				if(is_start || is_over){
					//Menu con Imagenes
					//ctx.drawImage(menuSprite, 0, 0, cWidth, cHeight);
				}
				
				ctx.restore();
			}
			
			function drawScore(){
				var scoreText = "Score: " + score;
				ctx.save();
				ctx.font = "bold 35px Courier";
				
				// Color con Imagenes
				//ctx.fillStyle = "white";
				
				//Color sin imagenes
				ctx.fillStyle = "black";
				
				ctx.textAlign = "center";
				ctx.fillText(scoreText, textPosX, textPosY-265);
				ctx.restore();
			}
			
			function drawPlayer(){
				ctx.save();
				//Jugador sin imagen
				ctx.fillStyle = "magenta";
				ctx.fillRect(player.posX, player.posY, player.width, player.height);
				ctx.strokeStyle = "black";
				ctx.strokeRect(player.posX, player.posY, player.width, player.height);
				
				//Jugador con imagen
				//ctx.drawImage(playerSprite, player.posX, player.posY);
				ctx.restore();
			}
			
			function drawTubes(){
				timer++;
				if(timer > 80){
					tubes[tubeToDraw].posX = cWidth+30;
					tubes[tubeToDraw].posY = (cHeight/100)*10;
					tubes[tubeToDraw].height = Math.floor((Math.random()*300)+50);
					tubes[tubeToDraw].draw = true;
					tubes[tubeToDraw].count = true;
					
					tubes[tubeToDraw+1].posX = cWidth+30;
					tubes[tubeToDraw+1].posY = tubes[tubeToDraw].posY+tubes[tubeToDraw].height+70;
					tubes[tubeToDraw+1].height = ((cHeight/100)*90) - tubes[tubeToDraw+1].posY;
					tubes[tubeToDraw+1].draw = true;
					
					switch(tubeToDraw){
						case 0:
							tubeToDraw = 2;
							break;
						case 2:
							tubeToDraw = 4;
							break;
						case 4:
							tubeToDraw = 0;
							break;
					}
					timer = 0;
				}
				
			
				ctx.save();
				for(var i = 0; i < tubes.length; i++){
					if(tubes[i].draw){
						//Tubos sin imagen
						ctx.fillStyle = "red";
						
						//Tubos con Imagen
						//ctx.fillStyle = tubePat;
						
						ctx.fillRect(tubes[i].posX, tubes[i].posY, tubes[i].width, tubes[i].height);
						ctx.strokeStyle = "black";
						ctx.strokeRect(tubes[i].posX, tubes[i].posY, tubes[i].width, tubes[i].height);
					}
				}
				ctx.restore();
			}
			
			function scoreCount(){
				for(var i = 0; i < tubes.length; i++){
					if(tubes[i].posX+tubes[i].width < player.posX && tubes[i].count){
						score++;
						tubes[i].count = false;
					}
				}
			}
			
			function playerGravity(){
				player.posY += 5;
			}
			
			function moveTubes(){
				for(var i = 0; i < tubes.length; i++){
					if(tubes[i].draw){
						tubes[i].posX -= 3;
					}
				}
			}
			
			function jump(){
				if(startJump){
					storePos = player.posY;
					velocity = 10;
					startJump = false;
				}
				
				if(player.posY > (storePos-30)){
					player.posY -= velocity;
					if(velocity > 1){
						velocity -= 2;
					}
				}else{
					jumping = false;
				}
			}
			
			function borderCollision(){
				if(player.posY < ((cHeight/100)*10)){
					overScreen();
				}
				
				if(player.posY+player.height > ((cHeight/100)*90)){
					overScreen();
				}
			}
			
			function collision(){
				for(var i = 0; i < tubes.length; i++){
					if(tubes[i].draw &&
						player.posX + player.width > tubes[i].posX &&
						player.posX < tubes[i].posX + tubes[i].width &&
						player.posY < tubes[i].posY + tubes[i].height &&
						player.posY + player.height > tubes[i].posY
					){
						overScreen();
					}
				}
			} 
			startScreen();
		})