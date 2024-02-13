// Calculate Triangle Area
function calculateTriangleArea(){
    // get Triangle Base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // get Triangle Height value
    const triangleHeightInput = document.getElementById('triangle-heigth');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // Calculate Triangle area
    let triangleArea = (0.5 * base * height);
    // console.log(result);

    const resultTransfer = document.getElementById('triangle');
    // const para = document.createElement('h2');
    resultTransfer.innerText = triangleArea;

    // resultTransfer.appendChild(para);
};



// Calculate Rectangle Area
function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('triangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);


    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);

    const rectangleArea = (width * length);
    // console.log(rectangleArea);

    const rectangleResult = document.getElementById('rectangle');
    // const para2 = document.createElement('p');
    rectangleResult.innerText = rectangleArea;

    // rectangleResult.appendChild(para2);
}

// Calculate parallelogram Area
function calculateParallelogramArea(){
    const parallelogramBase = document.getElementById('Parallelogram-base');
    const parallelogramBaseText = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseText);

    const parallelogramHeight = document.getElementById('Parallelogram-height');
    const parallelogramHeightText = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightText);

    const parallellogramArea = (base * height);

    const parallellogramResult = document.getElementById('parallelogram');
    // const para = document.createElement('p');

    parallellogramResult.innerText = parallellogramArea;

    // parallellogramResult.appendChild(para);
}
/*_____________________________________________________________________*/

// Calculate parallelogram Area
// function calculateParallelogramArea(){
//     const base = getInputValueById('Parallelogram-base');
//     // console.log(base);
//     const height = getInputValueById('Parallelogram-height');
//     // console.log(height);

//     const parallelogramArea = 'The Rectangle Area is = ' + (base * height);
//     // console.log(parallelogramArea);

//     setInnerTextById('parallelogram', area);

// }

// function getInputValueById(inputField){
//     const inputValue = document.getElementById(inputField);
//     const inputTextValue = inputValue.value;
//     const inputText = parseFloat(inputTextValue);

//     return inputText;
// }

// function setInnerTextById(element, area){
//     const elementId = document.getElementById(element);
//     elementId.innerText = area;
    
// }