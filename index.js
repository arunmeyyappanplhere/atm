val='';
function starIt(){
    let h1 = document.getElementById("star-pin");
    prev = h1.innerText;
    if (prev.length < 4){
        val = prev + "*";
        h1.innerText = val;
    };
};

function clearStars(){
    let h1 = document.getElementById("star-pin");
    h1.innerText = '';
};

function checkPin(){
    let nextPage = document.getElementById("no-pin");
    let pin = document.getElementById("star-pin");
    if(pin.innerText.length == 4){
        window.location.href="options.html";
    }
    else{
        clearStars();
        nextPage.innerText = "WRONG PIN!";
    };
};

function notAvlb(){
    let h3 = document.getElementById("not-av-h3");
    h3.innerText="Service currently not available.";
    h3.style.color="red"
};

function starIta(a){
    let h1 = document.getElementById("amount");
    h1.innerHTML= h1.innerText+a.toString();
};


function withdraw(){
    cashBalance = 1000;
    if (cashBalance==0){
        let h3 = document.getElementById("not-av-h3");
        h3.innerText="Sorry your Balance is nil."; 
    }
    else{
        window.location.href='withdraw.html'; 
    };
};

function clearAmount(){
    let h1 = document.getElementById("amount");
    h1.innerText = '';
};

function entered(){
    
    cashBalance = parseInt(localStorage.getItem("Balance"))
    amountNeeded = parseInt(document.getElementById('amount').innerText);
        if(cashBalance < amountNeeded){
            let noBalance = document.getElementById("no-msg");
            noBalance.innerText="Insufficient balance.";
            noBalance.style.color = "red"
        }
        else if(amountNeeded % 100 != 0){
            let noBalance = document.getElementById("no-msg");
            noBalance.innerText="Enter a multiple of 100";
            noBalance.style.color = "red"
        }
        else{
            newBalance = cashBalance - amountNeeded
            let doneTransaction = document.getElementById("no-msg");
            doneTransaction.innerText=`₹ ${amountNeeded} Withdrawn.`;
            doneTransaction.style.color = "green";
            localStorage.setItem("Balance", newBalance)
        };
    clearAmount();
}

function balance(){
    let doneTransaction = document.getElementById("not-av-h3");
    doneTransaction.innerText=`₹ ${parseInt(localStorage.getItem("Balance"))} Available.`;
    doneTransaction.style.color = "green";
};

function deposit(){
    window.location.href='deposit.html';

}

function depositEntered(){
    cashBalance = parseInt(document.getElementById("amount").innerText);
    oldBalance = parseInt(localStorage.getItem("Balance"));
    newBalance = cashBalance + oldBalance;
    localStorage.setItem("Balance", newBalance);
    console.log(newBalance)
    clearAmount();

    let doneDeposited = document.getElementById("no-msg");
    doneDeposited.innerText=`₹ ${cashBalance} Deposited.`;
    doneDeposited.style.color = "green";
}

function checkNewPin1(){
    let newPin = document.getElementById("star-pin");
        if (newPin.innerText.length == 4){
            window.location.href='pin-change2.html'
        }
        else{
            let errH1 = document.getElementById("no-pin");
            errH1.innerText = "PIN length must be 4."
            errH1.style.color = "red";
        }
    };

function checkNewPin2(){
    let newPin = document.getElementById("star-pin");
        if (newPin.innerText.length == 4){
            let errH1 = document.getElementById("no-pin");
            errH1.innerText = "PIN changed successfully."
            errH1.style.color = "green";
            
        }
        else{
            let errH1 = document.getElementById("no-pin");
            errH1.innerText = "PIN length must be 4."
            errH1.style.color = "red";
        }
    };

function menu(){
    window.location.href='options.html';
}