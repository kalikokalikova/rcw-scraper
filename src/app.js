console.log("app.js is running")

const rootDisplay = document.querySelector('#root')

fetch('http://localhost:3000/results')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
