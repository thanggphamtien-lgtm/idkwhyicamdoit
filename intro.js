var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function(){
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
})


// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}
// Thêm vào cuối cùng của file intro.js

function autoScale() {
    const container = document.getElementById('main-content');
    if (!container) return;

    // Kích thước chuẩn bạn muốn hiển thị (giống trong CSS)
    const baseWidth = 1742;
    const baseHeight = 980;

    // Lấy kích thước thực tế của trình duyệt người dùng
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán tỷ lệ thu nhỏ
    const scaleX = windowWidth / baseWidth;
    const scaleY = windowHeight / baseHeight;

    // Chọn tỷ lệ nhỏ hơn để đảm bảo không bị mất nội dung
    const scale = Math.min(scaleX, scaleY);

    // Áp dụng scale
    container.style.transform = `scale(${scale})`;
}

// Chạy hàm khi trang web load xong
window.onload = autoScale;

// Chạy hàm khi người dùng thay đổi kích thước trình duyệt hoặc xoay điện thoại
window.onresize = autoScale;

// Gọi thêm 1 lần sau 100ms để chắc chắn các trình duyệt mobile tính toán đúng
setTimeout(autoScale, 100);
function autoScale() {
    const container = document.getElementById('main-content');
    if (!container) return;

    const baseWidth = 1742; 
    const baseHeight = 980;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính tỷ lệ scale chuẩn
    const scaleX = windowWidth / baseWidth;
    const scaleY = windowHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY);

    // Chỉ áp dụng scale nếu có sự thay đổi đáng kể để tránh lag animation
    container.style.transform = `scale(${scale})`;
}

// Thay vì gọi liên tục, dùng debounce để mượt hơn khi xoay màn hình
window.addEventListener('resize', () => {
    clearTimeout(window.scaleTimeout);
    window.scaleTimeout = setTimeout(autoScale, 200);
});

window.addEventListener('load', autoScale);
autoScale();