function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  
  // 목
  fill(250, 225, 210); // 피부색(목)
  noStroke();
  rect(230, 250, 140, 150);
  
  // 상체
  stroke(0);
  line(230, 300, 75, 350);
  fill(0);
  quad(230, 300, 75, 350, 70, 400, 230, 400); // 왼쪽 어깨
  quad(370, 300, 525, 350, 530, 400, 370, 400); //오른쪽 어깨
  rect(230, 300, 140, 100);
  fill(250, 225, 210); // 피부색(목)
  noStroke();
  circle(300, 300, 140);
  
  // 귀 1
  fill(255, 230, 215); // 피부색
  noStroke();
  ellipse(205, 200, 40, 50); // 왼쪽 귀 1
  ellipse(200, 170, 40, 50); // 왼쪽 귀 2
  stroke(255, 230, 215);
  line(182, 170, 187, 200); //빈 공간 커버
  
  // 귀 2
  fill(255, 230, 215); // 피부색
  noStroke();
  ellipse(395, 200, 40, 50); // 오른쪽 귀 1
  ellipse(400, 170, 40, 50); // 오른쪽 귀 2
  stroke(255, 230, 215);
  line(418, 170, 413, 200); //빈 공간 커버
  
  // 얼굴
  fill(255, 230, 215); // 피부 색
  noStroke();
  ellipse(300, 160, 180, 300); // 얼굴

  // 머리
  fill(0, 0, 0); // 머리카락 색 (검정)
  arc(300, 140, 220, 260, PI, 0, CHORD); // 머리카락
  triangle(190, 140, 210, 140, 210, 190);
  triangle(410, 140, 390, 140, 390, 190);

  // 눈 1
  stroke(0);
  fill(255); // 눈 흰자
  ellipse(255, 158, 45, 16); // 왼쪽 눈
  fill(0); // 눈동자 색 (검정)
  ellipse(255, 158, 18, 15); // 왼쪽 눈동자

  // 눈 2
  fill(255); // 눈 흰자
  ellipse(345, 158, 45, 16); // 오른쪽 눈
  fill(0); // 눈동자 색 (검정)
  ellipse(345, 158, 18, 15); // 오른쪽 눈동자

  // 코
  fill(255, 230, 215); // 피부 색
  stroke(205, 180, 160);
  beginShape(); // 코
  vertex(295, 155);
  vertex(295, 170);
  vertex(292, 185);
  vertex(289, 193);
  vertex(285, 201);
  vertex(282, 210);
  vertex(284, 219);
  vertex(291, 223);
  vertex(297, 222);
  vertex(300, 223);//Center
  vertex(303, 222);
  vertex(309, 223);
  vertex(316, 219);
  vertex(318, 210);
  vertex(315, 201);
  vertex(311, 193);
  vertex(308, 185);
  vertex(305, 170);
  vertex(305, 155);
  endShape();
  

  // 입
  noFill();
  stroke(255, 0, 64);
  strokeWeight(4);
  arc(300, 230, 150, 60, radians(45), radians(135)); // 입
  
}