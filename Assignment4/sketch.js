
let backupLight, hazardLight, leftTurnSignal, rightTurnSignal, startTime;

function setup() {
  createCanvas(640, 480);
  backupLight = 0;
  hazardLight = 0;
  leftTurnSignal = 0;
  rightTurnSignal = 0;
  startTime = millis();
  frameRate(30);
}


function draw() {
  //어두운 밤에서의 2012 Hyundai Veloster Turbo
  background(0);
  
  //좌측 제동등
  stroke(192, 0, 0);
  strokeWeight(6);
  fill(192, 0, 0);
  circle(150, 210, 4);
  circle(159, 211, 4);
  circle(167, 212, 4);
  circle(176, 213, 4);
  noFill();
  arc(142, 210, 16, 16, radians(255), radians(0));
  arc(142, 210, 34, 26, radians(255), radians(0));
  arc(142, 210, 50, 36, radians(255), radians(0));
  arc(142, 210, 68, 46, radians(255), radians(0));
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  circle(150, 210, 4);
  circle(159, 211, 4);
  circle(167, 212, 4);
  circle(176, 213, 4);
  noFill();
  arc(142, 210, 16, 16, radians(255), radians(0));
  arc(142, 210, 34, 26, radians(255), radians(0));
  arc(142, 210, 50, 36, radians(255), radians(0));
  arc(142, 210, 68, 46, radians(255), radians(0));
  
  //우측 제동등
  stroke(192, 0, 0);
  strokeWeight(6);
  fill(192, 0, 0);
  circle(490, 210, 4);
  circle(481, 211, 4);
  circle(473, 212, 4);
  circle(464, 213, 4);
  noFill();
  arc(498, 210, 16, 16, radians(180), radians(285));
  arc(498, 210, 34, 26, radians(180), radians(285));
  arc(498, 210, 50, 36, radians(180), radians(285));
  arc(498, 210, 68, 46, radians(180), radians(285));
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  circle(490, 210, 4);
  circle(481, 211, 4);
  circle(473, 212, 4);
  circle(464, 213, 4);
  noFill();
  arc(498, 210, 16, 16, radians(180), radians(285));
  arc(498, 210, 34, 26, radians(180), radians(285));
  arc(498, 210, 50, 36, radians(180), radians(285));
  arc(498, 210, 68, 46, radians(180), radians(285));
  
  //보조 제동등(상단)
  stroke(192, 0, 0);
  strokeWeight(6);
  fill(192, 0, 0);
  let secondaryBrakeLights;
  for(secondaryBrakeLights = 0; secondaryBrakeLights < 12; secondaryBrakeLights++){
    circle(287 + secondaryBrakeLights * 6, 134, 2);
  }
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  for(secondaryBrakeLights = 0; secondaryBrakeLights < 12; secondaryBrakeLights++){
    circle(287 + secondaryBrakeLights * 6, 134, 2);
  }
  
  //반사판
  let reflectivePlateColor = 64;
  stroke(reflectivePlateColor + 8, 0, 0);
  fill(reflectivePlateColor, 0, 0);
  circle(125, 335, 25);
  circle(515, 335, 25);
  
  //머플러 팁
  let exhaustColor = 16;
  stroke(exhaustColor + 16);
  strokeWeight(1);
  noFill();
  circle(302, 391, 30);
  circle(338, 391, 30);
  
  stroke(exhaustColor);
  circle(302, 391, 26);
  circle(338, 391, 26);
  
  //머플러 팁의 중심 위치
  let mufflerX1 = 302;
  let mufflerY = 391;
  let mufflerX2 = 338;
  let numPuffs = 60;

  //연기 입자
  for (let i = 0; i < numPuffs; i++) {
    let offset = i * 5;
    let animeTime = frameCount + offset;

    let cycleLength = 150;
    let t = (animeTime % cycleLength) / cycleLength;

    let startY = mufflerY;
    let endY = startY - 300;
    let y = lerp(startY, endY, t);

    //X 좌표: 좌우로 약간 흔들리는 효과 (Sin 함수 사용)
    let sway = sin(t * TWO_PI * 2) * 5;
    let x1 = mufflerX1 + sway;
    let x2 = mufflerX2 + sway;

    let startSize = 22;
    let endSize = 110;
    let smokeSize = lerp(startSize, endSize, t);
    //시간에 따라 투명도 및 색상 변화
    let startAlpha = 96;
    let endAlpha = 0;
    let alpha = lerp(startAlpha, endAlpha, t);

    let smokeColor = color(alpha, alpha, alpha, alpha);
    fill(smokeColor);
    noStroke();

    //머플러 팁에서 연기 그리기
    circle(x1, y, smokeSize);
    circle(x2, y, smokeSize);
  }
  
  //후진등
  if(backupLight === 1){
    fill(224, 224, 224);
    quad(169, 220, 186, 222, 187, 238, 172, 237);
    quad(471, 220, 454, 222, 453, 238, 468, 237);
  }
  let elapsedTime = millis() - startTime;
  //비상등
  if(hazardLight === 1){
    if(elapsedTime > 375){
      if(elapsedTime > 750){
        startTime = millis();
      }
      fill(255, 160, 0);
      quad(138, 217, 169, 220, 172, 237, 141, 234);
      quad(502, 217, 471, 220, 468, 237, 499, 234);
    }
  }
  //좌측 방향지시등
  else if(leftTurnSignal === 1){
    if(elapsedTime > 375){
      if(elapsedTime > 750){
        startTime = millis();
      }
      fill(255, 160, 0);
      quad(138, 217, 169, 220, 172, 237, 141, 234);
    }
  }
  //우측 방향지시등
  else if(rightTurnSignal === 1){
    if(elapsedTime > 375){
      if(elapsedTime > 750){
        startTime = millis();
      }
      fill(255, 160, 0);
      quad(502, 217, 471, 220, 468, 237, 499, 234);
    }
  }
}

function keyPressed(){
  //후진등 점등
  if(keyCode === DOWN_ARROW){
    backupLight = 1;
  }
  //후진등 소등
  else if(keyCode === UP_ARROW){
    backupLight = 0;
  }
  //비상등 점등 및 소등
  else if(key === 'h' || key === 'H' ){
    if(hazardLight === 0){
      hazardLight = 1;
    }
    else{
      hazardLight = 0;
    }
  }
  //좌측 방향지시등 점등 및 소등
  else if(keyCode === LEFT_ARROW){
    if(leftTurnSignal === 0){
      if(rightTurnSignal === 1){
        rightTurnSignal = 0;
      }
      leftTurnSignal = 1;
    }
    else{
      leftTurnSignal = 0;
    }
  }
  //우측 방향지시등 점등 및 소등
  else if(keyCode === RIGHT_ARROW){
    if(rightTurnSignal === 0){
      if(leftTurnSignal === 1){
        leftTurnSignal = 0;
      }
      rightTurnSignal = 1;
    }
    else{
      rightTurnSignal = 0;
    }
  }
  //gif 녹화 및 저장
  if(key === 's' || key === 'S'){
    saveGif('sketch', 10);
  }
}