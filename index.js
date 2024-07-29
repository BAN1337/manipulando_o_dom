function saveHouse(){
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    let area = document.querySelector("input[name='area']").value

    let newListValue = document.createElement('li')
    newListValue.innerText = `Número da Casa: ${number}; Bairro: ${neighborhood}; Cidade: ${city}; Área: ${area} m²; `

    let removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.setAttribute('onclick', 'removeHouse(this)')
    removeButton.innerText = 'Remover'

    newListValue.appendChild(removeButton)

    document.getElementById('house-list').appendChild(newListValue)
}

function removeHouse(element){
    document.querySelector('ul#house-list').removeChild(element.parentNode)
}