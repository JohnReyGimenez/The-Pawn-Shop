document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#startgamebtn").addEventListener("click", function() {
        showSection('game');
    });

    document.querySelector("#dashboardbtn").addEventListener("click", function() {
        showSection('dashboard')
    });

})

function showSection () {
    const sections = document.querySelector(".section")
    sections.foreach(section => {
        section.style.display = 'none';
    })
}