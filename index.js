'use restrict'

createBubble = () => {
    let textElement = document.createElement(`h1`);
    textElement.innerHTML = `It's bubble!`;
    textElement.setAttribute("class", "bubbleText");
    textElement.style.filter = "blur(2px)";

    let bubble = document.createElement(`div`);
    bubble.appendChild(textElement);
    bubble.setAttribute("class", "bubble");

    bubble.addEventListener("mouseenter", () => {
        bubble.style.border = "2px solid #2190B3";
        bubble.style.color = "black";
        textElement.style.filter = "blur(0px)"
    });

    bubble.addEventListener("mouseout", () => {
        bubble.style.border = "2px solid #B8E3E4";
        bubble.style.color = "white";
        textElement.style.filter = "blur(2px)";
    });

    bubble.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    const notation = document.createElement(`div`);
    notation.setAttribute('class', 'notation');
    const notationText = document.createElement('h4');
    notationText.innerHTML = "Press outside to close";
    notation.appendChild(notationText);

    const layout = document.createElement(`div`);
    layout.setAttribute(`class`, `allDiv`);
    layout.appendChild(bubble);
    layout.appendChild(notation);

    layout.hidden = true;
    return layout;
};


createButton = () => {
    let button = document.createElement("button");
    button.setAttribute('class', 'btn');
    let buttonText = document.createElement(`h1`);
    buttonText.innerHTML = "Press me!";
    buttonText.setAttribute('class', "btn");
    button.appendChild(buttonText);
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.hidden = true;
        bubble.hidden = false;
    });
    return button;
}

let button = createButton();
let bubble = createBubble();

document.addEventListener("click", (event) => {
    event.preventDefault()
    button.hidden = false;
    bubble.hidden = true;
});

document.body.append(button, bubble);