// Index About Page
document.getElementById("index01").src = "./assets/img/about_01.jpg";
document.getElementById("index02").src = "./assets/img/about_02.jpg";
document.getElementById("index03").src = "./assets/img/about_03.jpg";
document.getElementById("index04").src = "./assets/img/about_04.jpg";

// Team Home Page
document.getElementById("team01").src = "./assets/img/team-1.jpg";
document.getElementById("team02").src = "./assets/img/team-2.jpg";
document.getElementById("team03").src = "./assets/img/team-3.jpg";
document.getElementById("team04").src = "./assets/img/team-4.jpg";



// Alert Box
function submit1() {
    alert("Signup Successfully");
}

function booking1() {
    let num = document.forms["booking"]["mobile"].value;
    if (num.length != 10) {
        alert("Check your mobile number");
        return false;
    }
    else {
        alert("Table Booked Successfully");
        return true;
    }
}



// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});