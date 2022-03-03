function loginTypeFunction() {
    var type = document.getElementById("dropLoginType").value;

    if(type.includes("Admin")) {
        document.getElementById("user_login").style.display = "none";
        document.getElementById("admin_login").style.display = "block";
    } else {
        document.getElementById("admin_login").style.display = "none";
        document.getElementById("user_login").style.display = "block";
    }
}