function setup() {
  createCanvas(640, 480);
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
  circle(287, 134, 2);
  circle(293, 134, 2);
  circle(299, 134, 2);
  circle(305, 134, 2);
  circle(311, 134, 2);
  circle(317, 134, 2);
  circle(323, 134, 2);
  circle(329, 134, 2);
  circle(335, 134, 2);
  circle(341, 134, 2);
  circle(347, 134, 2);
  circle(353, 134, 2);
  
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(255, 0, 0);
  circle(287, 134, 2);
  circle(293, 134, 2);
  circle(299, 134, 2);
  circle(305, 134, 2);
  circle(311, 134, 2);
  circle(317, 134, 2);
  circle(323, 134, 2);
  circle(329, 134, 2);
  circle(335, 134, 2);
  circle(341, 134, 2);
  circle(347, 134, 2);
  circle(353, 134, 2);
  
  //반사판
  stroke(72, 0, 0);
  fill(64, 0, 0);
  circle(125, 335, 25);
  circle(515, 335, 25);
  
  //머플러 팁
  stroke(32);
  strokeWeight(1);
  noFill();
  circle(302, 391, 30);
  circle(338, 391, 30);
  
  stroke(16);
  circle(302, 391, 26);
  circle(338, 391, 26);
}