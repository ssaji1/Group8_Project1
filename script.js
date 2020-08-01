/* Creating a function to check is the password are same*/
var check = function () {/*refered from w3sch00l*/
    if (document.getElementById('pswd').value ==
        document.getElementById('cpswd').value) {/*checking the conditionsfor same passwords*/
        alert("You are signed up now log in")/*aknowledging user that thier account is created*/
    } else {
        alert('Password does not match signin latter');/*aknowledging user that thier account is not created*/
    }
}