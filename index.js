var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemeu;
function openmenu(){
    sidemeu = document.getElementById("sidemenu");
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
