// Amount........
const depositAmount = document.querySelector("#deposit");
const withdrawAmount = document.querySelector("#withdraw");

// Input.........
const depositInput = document.querySelector("#deposit-input");
const withdrawInput = document.querySelector("#withdraw-input");
// buttons.........
const depositBtn = document.querySelector("#deposit-btn");
const withdrawBtn = document.querySelector("#withdraw-btn");

function getInputValue(inputId) {
  const inputValue = inputId.value;
  const convertedInputValue = parseFloat(inputValue);
  inputId.value = "";
  return convertedInputValue;
}
function updateAmount(prevAmount, inputValue) {
  const totalAmount = parseFloat(prevAmount.innerText) + parseFloat(inputValue);
  prevAmount.innerText = totalAmount;
}

const currentBalance = () => {
  const blanceAmount = document.querySelector("#blance");
  const parseBlanceAmount = parseFloat(blanceAmount.innerText);
  return parseBlanceAmount;
};

const blanceUpdate = (isAdd, input) => {
  const blanceAmount = document.querySelector("#blance");
  const previousBalance = currentBalance();
  if (isAdd == true) {
    blanceAmount.innerText = previousBalance + input;
  } else {
    blanceAmount.innerText = previousBalance - input;
  }
};
//handeler for deposite btn
depositBtn.addEventListener("click", () => {
  const depositInputValue = getInputValue(depositInput);
  if (depositInputValue > 0) {
    updateAmount(depositAmount, depositInputValue);
    blanceUpdate(true, depositInputValue);
  }
});

//handeler for withdraw btn
withdrawBtn.addEventListener("click", () => {
  const withdrawInputValue = getInputValue(withdrawInput);
  const checkCurrentBalance = currentBalance();
  if (withdrawInputValue > 0 && withdrawInputValue <= checkCurrentBalance) {
    updateAmount(withdrawAmount, withdrawInputValue);
    blanceUpdate(false, withdrawInputValue);
  }
  if (withdrawInputValue > checkCurrentBalance) {
    console.log("not allowed to withdraw money!");
  }
});
