// Tip Calculator JS //

//Get initial amounts from prompt boxes, using + to ocnvert string to number.
var preTip = +prompt('How much does your bill come to?');
var tipPercent = +prompt('What rate are you tipping at? excluding the % sign.')

//Calculate tip amount then add to preTtip to give total
var tipAmount = (preTip / 100) * tipPercent;
var newBillAmount = preTip + tipAmount;

alert('Your total bill is £'+newBillAmount.toFixed(2)+', made up of your initial bill of £'+preTip.toFixed(2)+' and your tip of £'+tipAmount.toFixed(2))+'.';