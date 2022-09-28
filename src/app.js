console.log("app.js is running")

const rootDisplay = document.querySelector('#root')

fetch('http://localhost:3000/results')
    .then(response => { return response.json()})
    .then(data => {
        data.forEach(rcw_text => {
            const text = `<div>`+rcw_text+`</div>`
            rootDisplay.insertAdjacentHTML("beforeend", text)
        })
    })
    .catch(err => console.log(err))