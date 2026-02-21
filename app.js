var fut = new Date("Feb 21, 2024 00:00:00").getTime(); // ← đổi ngày tương lai bạn muốn (ví dụ Tết 2027)

let x = setInterval(function() {
    var now = new Date().getTime();
    var D = fut - now;

    if (D < 0) {
        clearInterval(x);
        window.location.href = "intro.html";
        return;
    }

    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((D % (1000 * 60)) / 1000);

    // Pad số 0 cho đẹp
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000); // 1 giây cập nhật 1 lần (mượt hơn)