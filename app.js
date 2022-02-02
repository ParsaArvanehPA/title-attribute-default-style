const body = document.querySelector('body');
const customTitleParent = document.querySelector('.custom-title-parent');

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    console.log(mouse.x, ' ,', mouse.y);
})

customTitleParent.addEventListener('mousemove', () => {
    removeCustomTitle();
    createCustomTitle();
})


const createCustomTitle = () => {
    const element = document.createElement('div');
    element.setAttribute('data-title', 'Custom Title - Hover Here');
    element.className = 'custom-title';
    element.style.top = mouse.y;
    element.style.left = mouse.x;

    body.appendChild(element);
}

const removeCustomTitle = () => {
    const element = document.querySelector('.custom-title');
    if(element) element.remove();
}
