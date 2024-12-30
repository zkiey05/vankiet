<script>
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Ẩn tất cả các slide
        }

        slideIndex++;

        if (slideIndex > slides.length) { slideIndex = 1 }  // Quay lại slide đầu tiên

        slides[slideIndex - 1].style.display = "block";  // Hiển thị slide hiện tại
        setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
    }

    showSlides(); // Khởi động slideshow
</script>
