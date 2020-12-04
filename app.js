// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдшэээгр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];

// Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Программ эхлэхэд бэлдэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоо шидэх эвент selector
document.querySelector(".btn-roll").addEventListener("click", function(){
    // 1-6 гэсэн утгыг хувьсагчид санамсаргүйгээр үүсгэж өгнө.
    var diceNumber = Math.floor(Math.random() * 6)+ 1;
    
    //Шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    
    // Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргана.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Тоглогчийн ээлжийн тоо, буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if(diceNumber !== 1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        // Цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // Улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Шоог түр алга болгох. (Нэг буухад)
        diceDom.style.display = "none";
    }
});