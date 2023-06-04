const buttonsEl = document.querySelectorAll("button");
const inputField = document.querySelector("#result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "→") {
      deleteLastNumber();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputField.value = " ";
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}

function deleteLastNumber() {
  inputField.value = inputField.value.slice(0, -1);
}
