// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдшэээгр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе.
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];
// Тоглогчын ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Программ эхлэхэд бэлдэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";

// Шоо буух болгонд аль талаараа буухыг хадгалах, 1-6 гэсэн утгыг хувьсагчид санамсаргүйгээр үүсгэж өгнө.
document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6)+ 1;
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
});