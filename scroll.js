document.getElementById('scrollButton').addEventListener('click', function () {
    document.querySelector('.container-content').scrollIntoView({
        behavior: 'smooth'
    });
});


let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }