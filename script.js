document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#startgamebtn").addEventListener("click", function() {
        showSection('game');
    });

    document.querySelector("#dashboardbtn").addEventListener("click", function() {
        showSection('dashboard')
    });

})

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section")
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

console.log('gay')