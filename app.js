// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдшэээгр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе.
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];
// Тоглогчын ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо буух болгонд аль талаараа буухыг хадгалах, 1-6 гэсэн утгыг хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6)+ 1;
console.log("Шоо:" + dice);
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').innerHTML = 0;
document.querySelector('#current-0').innerHTML = 0;
document.querySelector('#current-1').innerHTML = 0;

document.querySelector('.dice').style.display = "none";