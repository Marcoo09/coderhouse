$(document).ready(function() {
        var canvas = $("#canvas")[0];
        var contexto = canvas.getContext("2d");
        var canvasWidth = $("#canvas").width();
        var canvasHeight = $("#canvas").height();
        var score = 0;
        var timer = 0;
        var player = {
            direction: "state",
            x: (canvasWidth / 2) - 7,
            y: (canvasHeight / 2) - 7,
            width: 15,
            height: 15
        };
        var coin = {
            draw: false,
            x: 0,
            y: 0,
            width: 10,
            height: 10
        };
        var enemy = new Array(2);
        var numberOfEnemies = 0;
        var spanEnemy = 5;
        for (var i = 0; i < enemy.length; i++) {
            if (i % 2 == 0) {
                enemy[i] = {
                    draw: false,
                    velocity: 0,
                    direction: "down",
                    x: 0,
                    y: 0,
                    width: 30,
                    height: 30
                }
            } else {
                enemy[i] = {
                    draw: false,
                    velocity: 0,
                    direction: "down",
                    x: canvasWidth - 30,
                    y: canvasHeight - 30,
                    width: 30,
                    height: 30
                }
            }
        }
        var disparo = new Array(2);
        for (var i = 0; i < disparo.lenth; i++) {
            if (i % 2 == 0) {
                disparo[i] = {
                    draw: false,
                    direction: "rigth",
                    timer: 0,
                    velocity: 8,
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 4
                }
            } else {
                disparo[i] = {
                    draw: false,
                    direction: "left",
                    timer: 0,
                    velocity: 8,
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 4
                }
            }
        }

        function init() {
            if (typeof game_loop != "undefined") {
                clearInterval(game_loop);
            }
            game_loop = setInterval(main, 30);
        }
        $(document).keydown(function(event) {
            var key = event.which;
            switch (key) {
                case 39:
                    player.direction = "rigth";
                    break;
                case 37:
                    player.direction = "left";
                    break;
                case 38:
                    player.direction = "top";
                    break;
                case 40:
                    player.direction = "down";
                    break;
            }
        })

        function main() {
            setBackground();
            coinTimer();
            probabilidadCoin();
            borderColision();
            coinColision();
            increaseEnemies();
            movePlayer();
            moveEnemis();
            drawPlayer();
            drawEnemy(numberOfEnemies);
            drawCoin();
            drawScore();
        }

        function setBackground() {
            contexto.save();
            contexto.fillStyle = "white";
            contexto.fillRect(0, 0, canvasWidth, canvasHeight);
            contexto.strokeStyle = "black";
            contexto.strokeRect(0, 0, canvasWidth, canvasHeight)
            contexto.restore();
        }
        setBackground();

        function drawPlayer() {
            contexto.save();
            contexto.fillStyle = "blue";
            contexto.fillRect(player.x, player.y, player.width, player.height);
            contexto.restore();
        }

        function drawEnemy(number) {
            for (var i = 0; i < number; i++) {
                contexto.save();
                if (enemy[i].draw) {
                    contexto.fillStyle = "red";
                    contexto.fillRect(enemy[i].x, enemy[i].y, enemy[i].width,
                        enemy[i].height);
                }
                contexto.restore();
            }
        }

        function drawCoin() {
            if (coin.draw) {
                contexto.save();
                contexto.fillStyle = "yellow";
                contexto.fillRect(coin.x, coin.y, coin.width, coin.height);
                contexto.strokeStyle = "black";
                contexto.strokeRect(coin.x, coin.y, coin.width, coin.height);
                contexto.restore();
                if (timer > 300) {
                    coin.draw = false;
                }
            }
        }

        function increaseEnemies() {
            if (spanEnemy < score && numberOfEnemies < enemy.length) {
                enemy[numberOfEnemies].velocity = Math.floor((Math.random() *
                    4) + 1)
                enemy[numberOfEnemies].draw = true;
                numberOfEnemies++;
                spanEnemy += 10;
            }
        }

        function movePlayer() {
            switch (player.direction) {
                case "rigth":
                    player.x += 3;
                    break;
                case "left":
                    player.x -= 3;
                    break;
                case "top":
                    player.y -= 3;
                    break;
                case "down":
                    player.y += 3;
                    break;
                default:
                    player.x = player.x;
                    player.y = player.y;
            }
        }

        function moveEnemis() {
            for (var i = 0; i < numberOfEnemies; i++) {
                switch (enemy[i].direction) {
                    case "top":
                        enemy[i].y -= enemy[i].velocity;
                        break;
                    case "down":
                        enemy[i].y += enemy[i].velocity;
                        break;
                    default:
                        enemy[i].x = enemy[i].x;
                        enemy[i].y = enemy[i].y;
                }
            }
        }

        function borderColision() {
                //colision con paredes
                if (player.y <= 5 && player.direction == "top") {
                    player.y = 0;
                    player.direction = "state";
                } else if (player.x <= 5 && player.direction == "left") {
                    player.x = 0;
                    player.direction = "state";
                } else if (player.y + player.height >= canvasHeight - 5 &&
                    player.direction == "down") {
                    player.y = canvasHeight - player.height;
                    player.direction = "state";
                } else if (player.x + player.width >= canvasWidth - 5 &&
                    player.direction == "rigth") {
                    player.x = canvasWidth - player.width;
                    player.direction = "state";
                }
                //colision con enemigo
                for (var i = 0; i < numberOfEnemies; i++) {
                    if (enemy[i].y <= 5 && enemy[i].direction == "top") {
                        enemy[i].y = 0;
                        enemy[i].direction = "down";
                    } else if (enemy[i].y + enemy[i].height >= canvasHeight -
                        5 && enemy[i].direction == "down") {
                        enemy[i].y = canvasHeight - enemy[i].height;
                        enemy[i].direction = "top";
                    }
                }
            }
            //buscar teoria de colisiones

        function coinColision() {
            if (coin.draw && player.x + player.width > coin.x && player
                .x < coin.x + coin.width && player.y < coin.y + coin.height &&
                player.y + player.height > coin.y) {
                coin.draw = false;
                score += 5;
                //condicionpara aumentar el tamaño definidamente, para indefinida sacar la condicion
                if (player.width < 50 && player.height < 70) {
                    player.width += 2;
                    player.height += 4;
                }
            }
        }

        function probabilidadCoin() {
            if (!coin.draw && Math.floor((Math.random() * 400) + 1) < 4) {
                coin.x = Math.floor((Math.random() * (canvasWidth -
                    coin.width)));
                coin.y = Math.floor((Math.random() * (canvasHeight -
                    coin.height)));
                coin.draw = true;
            }
        }

        function coinTimer() {
            if (coin.draw) {
                timer++
            } else {
                timer = 0;
            }
        }

        function drawScore() {
                var text = "Score: " + score;
                contexto.font = "20px Arial";
                contexto.fillStyle = "black";
                contexto.fillText(text, 10, 30);
            }
            /*function shooter(){
						for(var i=0; i<disparo.length;i++){

								if(enemy[i].draw ){

									disparo[i].timer++;

									if(disparo[i].timer>100){disparo[i].timer=0;console.log("disparo");
									}
								}

						}*/
        init();
        //Javascript object Notation (Json)
    }) // JavaScript Document