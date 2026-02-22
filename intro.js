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
// Thêm vào cuối file intro.js
function resizeVirtualScreen() {
    const screen = document.getElementById('virtualScreen');
    if (!screen) return;

    // Kích thước mong muốn (PC)
    const targetWidth = 1742;
    const targetHeight = 980;

    // Kích thước thực tế (Điện thoại)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán tỷ lệ scale
    const scale = Math.min(windowWidth / targetWidth, windowHeight / targetHeight);

    // Sử dụng zoom cho trình duyệt hỗ trợ (Chrome, Safari) để mượt hơn
    // Nếu không hỗ trợ thì fallback sang transform
    if ('zoom' in screen.style) {
        screen.style.zoom = scale;
    } else {
        screen.style.transform = `scale(${scale})`;
    }
}

// Lắng nghe các sự kiện
window.addEventListener('resize', resizeVirtualScreen);
window.addEventListener('load', resizeVirtualScreen);
// Chạy ngay khi load
resizeVirtualScreen();