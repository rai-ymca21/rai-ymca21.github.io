function myFunction(Btn, id) {
    const more = id;
    const myBtn = Btn;
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(myBtn);

    if (moreText.style.display === "inherit") {
    btnText.innerHTML = "&nbsp;&nbsp;&or;&nbsp;&nbsp;";
    moreText.style.display = "none";
    } 
    else {
    btnText.innerHTML = "&nbsp;&nbsp;&and;&nbsp;&nbsp";
    moreText.style.display = "inherit";
    }
}
function redirect(){
var email = "rai.ymca21@gmail.com"
var mailto_link = 'mailto:' + email
window = window.open(mailto_link, 'emailWindow')
if (window && window.open && !window.closed)         
    window.close()
}
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}