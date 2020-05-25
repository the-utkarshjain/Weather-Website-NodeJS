console.log('Client side javascript file is loaded!')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.querySelector('#message-1')
const message_2 = document.querySelector('#message-2')

weatherform.addEventListener('submit', (e)=>{
    e.preventDefault()

    message_1.textContent = 'Loading...'
    message_2.textContent =''

    const location = search.value
    console.log(location)

    fetch('/weather?address='+encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if(data.error){
            message_1.textContent = data.error
        }else{
            message_1.textContent = data.forecast
            message_2.textContent = data.location
        }
    })
}) 
})