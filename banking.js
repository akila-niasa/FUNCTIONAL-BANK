function getInput(inputField){
const inputId=document.getElementById(inputField)
const inputText=inputId.value
const inputIdNumber=parseFloat(inputText)
inputId.value=''
return inputIdNumber
}
function addmoney(totalMoney,inputIdNumber){
    const previousDeposite=document.getElementById(totalMoney)
    const previousDepositeText=previousDeposite.innerText;
    const newDeposite=parseFloat(previousDepositeText)
    previousDeposite.innerText=newDeposite+inputIdNumber
}

function Balance(){
 const updateBalance=document.getElementById("upgrade")
 const updateBalanceText=updateBalance.innerText
 const previousBalanceNum=parseFloat(updateBalanceText)
 return previousBalanceNum
}

function  newBalance(Ammount,isAdd){
    const updateBalance=document.getElementById("upgrade")
    console.log(updateBalance);
    previousBalanceNum=Balance();
   if(isAdd==true){
    updateBalance.innerText=previousBalanceNum+Ammount
   }
   else{
       updateBalance.innerText=previousBalanceNum-Ammount
   }
}


// button
document.getElementById("depositeButton").addEventListener("click",function(){
const newAmmount =getInput("depsite")
if(newAmmount>0){
    addmoney("totalDepo",newAmmount)
newBalance(newAmmount,true)
}
else{
    alert('input a valid number')
}
})

document.getElementById("withdrowButton").addEventListener("click",function(){
   const newOutput= getInput("withdrowinput")
   const currentNewBalance=newBalance()
  if(newOutput>0 && newOutput<currentNewBalance){
    addmoney("withdraw",newOutput)
    newBalance(newOutput,false)
  }
  else{
      return ("input a valid number")
  }

})