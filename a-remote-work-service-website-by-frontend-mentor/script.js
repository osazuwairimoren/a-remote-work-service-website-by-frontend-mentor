// open nav on clicking menu icon
function openNav() {
    document.getElementById("mobileNav").style.display = "block";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("openNav").style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
// close nav by clicking close menu
function closeNav() {
    document.getElementById("mobileNav").style.display = "none";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    document.body.style.backgroundColor = "white";
}
// toggle dropdowns
function dropdownOne() {
    let dropdownOne = document.getElementById("dropdownOneMobile");
    if (dropdownOne.style.display == "block") {
        dropdownOne.style.display = "none";
    } else {
        dropdownOne.style.display = "block";
    }
}
function dropdownTwo() {
    let dropdownTwo = document.getElementById("dropdownTwoMobile");
    if (dropdownTwo.style.display == "block") {
        dropdownTwo.style.display = "none";
    } else {
        dropdownTwo.style.display = "block";
    }
}
