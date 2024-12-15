let container = document.querySelector("#container");



for (let i = 0; i < 256; i++) {
    let child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);





};
let gridChangeBtn = document.querySelector("#btn-grid");





function applyEventListeners() {
    let childs = document.querySelectorAll(".child");

    childs.forEach(child => {
        let = child.dataset.interactionCount = 0;
        child.addEventListener("mouseenter", () => {


            // Calculate the opacity reduction (darken by 10% per interaction)

            child.dataset.interactionCount = parseInt(child.dataset.interactionCount) + 1;

            let interactionCount = parseInt(child.dataset.interactionCount);
            let opacity = 1 - (interactionCount * 0.1); // Decrease opacity by 10% each time



            // Limit opacity to 0 (fully transparent)
            opacity = Math.max(opacity, 0);


            function generateRandomColor() {
                let r = Math.floor(Math.random() * 256); // Random red value
                let g = Math.floor(Math.random() * 256); // Random green value
                let b = Math.floor(Math.random() * 256); // Random blue value
                return `rgb(${r}, ${g}, ${b})`; // Return the RGB color as a string
            }
            child.style.backgroundColor = generateRandomColor();
            child.style.opacity = opacity;

        });

        child.addEventListener("mouseleave", () => {
            setTimeout(() => {
                child.style.backgroundColor = 'blueviolet';
            }, 150);
        });

    });
}


function removeDivs() {
    container.innerHTML = ''
};


const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

gridChangeBtn.addEventListener("click", () => {

    let noOfGrids = prompt("Please enter the number of grids less than or equal to 100...");
    if (noOfGrids > 100) {
        prompt("Please ensure you have entered less than or equal to 100....")
    } else {
        removeDivs();
        for (let i = 0; i < (noOfGrids * noOfGrids); i++) {
            let child = document.createElement('div');
            child.classList.add("child");
            container.appendChild(child);
            const childSize = Math.min(containerWidth, containerHeight) / noOfGrids - 5;
            child.style.width = `${childSize}px`;
            child.style.height = `${childSize}px`;

            applyEventListeners();


        }
    }
})


applyEventListeners();