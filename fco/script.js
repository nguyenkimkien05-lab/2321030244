// Lấy các phần tử HTML

const fcOnline = document.getElementById("fcOnline");

const gameWindow = document.getElementById("gameWindow");

const closeGame = document.getElementById("closeGame");

const closeGame2 = document.getElementById("closeGame2");


// ===========================
// CLICK FC ONLINE
// ===========================

fcOnline.addEventListener("click", function() {

    gameWindow.style.display = "block";

});


// ===========================
// ĐÓNG GAME BẰNG NÚT X
// ===========================

closeGame.addEventListener("click", function() {

    gameWindow.style.display = "none";

});


// ===========================
// ĐÓNG GAME BẰNG NÚT
// ===========================

closeGame2.addEventListener("click", function() {

    gameWindow.style.display = "none";

});


// ===========================
// ĐỒNG HỒ
// ===========================

function updateClock() {

    const now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    hour = hour.toString().padStart(2, "0");

    minute = minute.toString().padStart(2, "0");

    document.getElementById("clock").textContent =
        hour + ":" + minute;
}


// Chạy đồng hồ

updateClock();

setInterval(updateClock, 1000);