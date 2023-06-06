const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => { 

  const bill = Number(billInput.value)
  const percentTip = Number(tipInput.value)/100
  const totalTip = bill * percentTip
  const tipAndBill = totalTip + bill
  const perPerson = tipAndBill / numberOfPeople
  perPersonTotal.innerText = `$${perPerson.toFixed(2).toLocaleString('en-US')}`

  }

  const increasePeople = () => {
    numberOfPeople +=1
  numberOfPeopleDiv.innerText = numberOfPeople 
    calculateBill()
  }
  
  
  const decreasePeople = () => {
    
    if(numberOfPeople <=1 ){
        return
    } 
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    
    calculateBill()
  }