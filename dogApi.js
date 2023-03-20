//https://dog.ceo/api/breeds/image/random
//.then - Promises
// asynchronous programing


const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('getnewDog')
const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' 
      height=600 width=600/>`
    })
}

dogButton.onclick = () => getNewDog();