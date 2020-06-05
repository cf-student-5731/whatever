let user,
correct_pass=(/^[0-9]{4}$/),
passTry=3,
currentBalance=850

function UserCard()
{
	user = prompt("Insert your card! \n1.Yes \n2.No")
	if (user !== "" && user !== null) 
	{
		Password()
	}
	else
	{
		UserCard()
    }
    
    userWidth=150; //Prompt-Box-Mindest-Breite
    userHeight=150; //Prompt-Box-Mindest-Höhe
    xPromptStart=600,yPromptStart=400; //Wo die Prompt-Box erscheinen soll
}

function Password() 
{
    let passwordEntry = parseInt(prompt("Enter your PIN!"))
    checkPassword(passwordEntry)
}

function checkPassword(userInput) 
{
    if (correct_pass.test(userInput)){
        AccountType()
    } 
    else 
    {
        while (!(correct_pass.test(userInput))) 
        {
            if (passTry === 1) 
            {
                alert("Incorrect PIN.")
                alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support.") 
                exit()
                break
            } 
            else 
            {
                passTry -= 1
                alert("Incorrect PIN. Please try again.")
                alert("You have " + passTry + " chance/s to try")
                Password()
            }
        }
    }
}

function AccountType() 
{
    let accountType = parseInt(prompt("Which type of account do you want to use? \n 1. Savings \n 2. Current \n 3. Credit"))
    if (accountType !== "" && accountType !== null && !isNaN(accountType)) 
    {
        selectFunction()
    } 
    else 
    {
        alert("Please make a valid selection")
        AccountType()
    }
}

function selectFunction() 
{
    let atmFunctions = parseInt(prompt("Hello, what can we do for you? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit"))
    if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) 
    {
        switch (atmFunctions) 
        {
            case 1:
                inquiry()
                break
            case 2:
                withdrawal()
                break
            case 3:
                deposit()
                break
            case 4:
                exit()
                break
            default:
                alert("Please make a valid selection")
                selectFunction()
        }
    } 
    else 
    {
        alert("Please make a valid selection")
        selectFunction()
    }
}

function inquiry() 
{
    alert("Your current balance is \u20ac" + currentBalance)
    toContinue()
}

function deposit() 
{
    let depositAmount = parseInt(prompt("How much do you want to deposit?"))
    if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) 
    {
        currentBalance += depositAmount
        alert("You have successfully deposited $" + depositAmount + "\n" + "You now have \u20ac" + currentBalance)
        toContinue();
    } 
    else 
    {
        alert("Error: Please enter a valid number!")
        deposit()
    }
}

function withdrawal() 
{
    let withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $10"))
    if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) 
    {
        if (withdrawalAmount >= 10) 
        {
            if (withdrawalAmount <= currentBalance) 
            {
                currentBalance -= withdrawalAmount
                alert("Transaction successful!")
                alert("Your remaining balance is \u20ac" + currentBalance)
                toContinue()
            } 
            else 
            {
                alert("You do not have sufficient funds!")
                withdrawal()
            }
        } 
        else 
        {
            alert("You must withdraw at least \u20ac10")
            withdrawal()
        }
    } 
    else 
    {
        alert("Error: Please enter a valid number!")
        withdrawal()
    }
} 

function toContinue()
{
    let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"))
    if (yesOrNo !== "" && yesOrNo !== null) 
    {
        if (yesOrNo === 2)
        {
            exit()
        }
        else
        {
            selectAccountType() 
        }
    } 
    else 
    {
        alert("Please make a valid selection")
        toContinue()
    }
}

function exit() 
{
    alert("Thank you for choosing our bank!")       
} 

document.getElementById("atm").addEventListener("click", UserCard)