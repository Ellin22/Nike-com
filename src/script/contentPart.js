const expandText = document.getElementById('expandcontent');

//create the function for the mouseEnter and mounseLeave
function handleMouseEnter() {
    this.style.maxHeight = '572px'; // Adjust the maximum height as needed
}

function handleMouseLeave() {
    this.style.maxHeight = '196px'; // Adjust the initial maximum height as needed
}

function addEventListeners() {
    expandText.addEventListener('mouseleave', handleMouseLeave);
    expandText.addEventListener('mouseenter', handleMouseEnter);
}

function removeEventListeners() {
    expandText.removeEventListener('mouseleave', handleMouseLeave);
    expandText.removeEventListener('mouseenter', handleMouseEnter);
}

//Responsiveness the expandcontent part
function handleWindowResize() {
    if (window.innerWidth >= 768) {
        addEventListeners();
    } else {
        removeEventListeners();
    }
}

// Initial 
handleWindowResize();

// resize the addEventlistener
window.addEventListener('resize', handleWindowResize);