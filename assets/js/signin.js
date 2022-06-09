var email = ["jayant@bluebash.co", "two", "three"];
var passwo = ["1234", "two", "three"];
var storede = JSON.parse(localStorage.getItem("email"));
var storedp = JSON.parse(localStorage.getItem("passw"));
var l = storede.length;

$("#login-form").submit(function (e) {
    e.preventDefault();

    var em = $("#email").val();
    var pas = $("#password").val();
    for (var i = 0; i < l; i++) {

        if (em == storede[i] && pas == storedp[i]) {

            window.location.href = "index.html";

            (e).attr('action', 'index.html');
            break;
            e.submit();
        }
    }
    alert("Incorrect credentials");
});