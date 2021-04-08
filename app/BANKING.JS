accountDetail = {
    accountNumber: 62182927773,
    balance: 50000,
    name: "sachin ps",
    adhar: 737589766789,
}

withdraw = function (amountToBeWithdrawn) {
    if (accountDetail.balance > 0 && accountDetail.balance >= amountToBeWithdrawn) {
        accountDetail.balance = accountDetail.balance - amountToBeWithdrawn
    }
    else {
        alert("insufficient balance")
    }

}
var balanceButton = document.getElementById("button")
balanceButton.onclick = function () { document.getElementById('balance').innerHTML = accountDetail.balance }
var withDrawButton = document.getElementById("withdraw")
withDrawButton.onclick = function name() {
    var amountToBeWithdrawn = document.getElementById("wdr").value;
    withdraw(amountToBeWithdrawn);
    document.getElementById("balance").innerHTML = accountDetail.balance
}
deposit = function name(amountToDeposit) {
    if (amountToDeposit > 0) {
        accountDetail.balance = accountDetail.balance + parseInt(amountToDeposit)
    }
    else {
        alert("invalid amount")
    }
}
var depositButton = document.getElementById("deposit")
depositButton.onclick = function name() {
    var amountToBeDeposit = document.getElementById("dpst").value;
    deposit(amountToBeDeposit);
    document.getElementById("balance").innerHTML = accountDetail.balance
}


