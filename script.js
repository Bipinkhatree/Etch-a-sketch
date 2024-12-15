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
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = "#FF6347";
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