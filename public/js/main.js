document.querySelector('button').addEventListener('click', getCharacterInfo)

async function getCharacterInfo(){
    const character = document.querySelector('#characterInput').value
    const res = await fetch(`/api/${character}`)
    const data = await res.json()

    console.log(data)
    document.querySelector('h2').innerText = character
    document.querySelector('#power').innerText = data.power
    document.querySelector('#age').innerText = data.age
    document.querySelector('#show').innerText = data.series
}