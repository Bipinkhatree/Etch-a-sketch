let container = document.querySelector("#container");



for (let i = 0; i < 256; i++) {
    let child = document.createElement("div");
    child.classList.add("child");
    container.appendChild(child);


};

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


let gridChangeBtn = document.querySelector("#btn-grid");

function removeDivs() {
    container.innerHTML = ''
};


gridChangeBtn.addEventListener("click", () => {
    removeDivs();


})
