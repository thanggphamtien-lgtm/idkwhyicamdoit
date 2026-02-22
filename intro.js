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
// Đảm bảo mọi thứ chạy sau khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    
    function perfectScale() {
        const wrapper = document.getElementById('perfect-wrapper');
        if (!wrapper) return;

        // Kích thước thiết kế chuẩn
        const baseW = 1742;
        const baseH = 980;

        // Kích thước thực tế màn hình
        const winW = window.innerWidth;
        const winH = window.innerHeight;

        // Tính tỷ lệ scale (fit cả ngang và dọc)
        const scale = Math.min(winW / baseW, winH / baseH);

        // Áp dụng scale bằng thuộc tính CSS cực mạnh
        // backface-visibility giúp fix lỗi mờ hình trên một số trình duyệt mobile
        wrapper.style.transform = `scale(${scale})`;
        wrapper.style.webkitTransform = `scale(${scale})`;
    }

    // Lắng nghe sự kiện để cập nhật khi xoay điện thoại
    window.addEventListener('resize', perfectScale);
    
    // Gọi lần đầu
    perfectScale();

    // Fix lỗi cho một số dòng máy yếu, gọi lại sau 300ms
    setTimeout(perfectScale, 300);
});