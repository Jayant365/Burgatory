var email = ["jayant@bluebash.co", "two", "three"];
var passwo = ["1234", "two", "three"];
var l = email.length;




$("#signup-form").submit(function (e) {
    //	alert("done");
    e.preventDefault();


    const emails = [];
    const pass = [];
    var em = $("#email").val();
    var pas = $("#password").val();
    var cpas = $("#cpassword").val();

    if (pas.length > 6) {
        if (pas == cpas) {
            emails.push(em);
            pass.push(pas);
            //emails.push("fdafa");

            var storede = JSON.parse(localStorage.getItem("email"));
            //alert("fdfdafa");
            var storedp = JSON.parse(localStorage.getItem("passw"));

            if (storedp != null) {

                //alert(storedp);

                emails.push(storede);
                pass.push(storedp);
                //alert("pushs");
            }
            localStorage.setItem("email", JSON.stringify(emails));

            localStorage.setItem("passw", JSON.stringify(pass));
            alert("Signup Completed");

            window.location.href = "login.html";

        } else {
            alert("Passwords do not match");
        }
    } else {
        alert("Password must be at least 8 characters");
    }

});