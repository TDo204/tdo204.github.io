let counterValue = 0;
let counterText = document.getElementById("counter");
let loopResult = document.getElementById("forLoopResult");
let oddsResult = document.getElementById("oddNumberResult");

function tickUp() {
    counterValue++;
    counterText.innerText = counterValue;
}

function tickDown() {
    counterValue--;
    counterText.innerText = counterValue;
}

function runForLoop() {
    loopResult.innerText = "";

    for (let i = 0; i <= counterValue; i++) {
        loopResult.innerText = loopResult.innerText + " " + i;
    }
}

function showOddNumbers() {
    oddsResult.innerText = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i%2 == 1) {
            oddsResult.innerText = oddsResult.innerText + " " + i;
        }
    }
}

function addMultiplesToArray() {
    const array = [];

    for (let i = 5; i <= counterValue; i++) {
        if (i%5 == 0) {
            array.push(i);
        }
    }

    array.reverse();
    console.log(array);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(carNumber) {
    switch(carNumber) {
        case 1:
            car = carObject1;
            break;
        case 2:
            car = carObject2;
            break;
        case 3:
            car = carObject3;
            break;
        default:
            car = {
                cType: "",
                cMPG: "",
                cColor: ""
            };
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");

    switch(colorNumber) {
        case 1:
            paragraph.style.color = "red";
            break;
        case 2:
            paragraph.style.color = "green";
            break;
        case 3:
            paragraph.style.color = "blue";
            break;
        default:
            paragraph.style.color = "black";
    }

    
}