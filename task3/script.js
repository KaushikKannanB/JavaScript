document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener('click', function(){
        document.getElementById("lightbox-img").src = this.src;
        document.getElementById("lightbox").style.display = 'flex';
    });
});
document.getElementById("close").addEventListener('click',function(){
    document.getElementById("lightbox").style.display = 'none';
});