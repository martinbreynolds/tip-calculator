// Tip Calculator JS //

//Get initial amounts from prompt boxes, using + to convert string to number.
var preTipFromPrompt = +prompt('How much does your bill come to?');
var tipPercentFromPrompt = +prompt('What rate are you tipping at? excluding the % sign.')

//Function to calculate tip amount then add to preTtip to give total.

function tipCalculator(preTip, tipPercent){

    // Tip Calculations
    var tipAmount = (preTip / 100) * tipPercent;
    var newBillAmount = preTip + tipAmount;

    // Return and Display Alert Box with Total and Workings
    return (
        alert('Your total bill is £'+newBillAmount.toFixed(2)+', made up of your initial bill of £'+preTip.toFixed(2)+' and your tip of £'+tipAmount.toFixed(2))+'.'
    )
};

// Call the Function
tipCalculator(preTipFromPrompt, tipPercentFromPrompt);