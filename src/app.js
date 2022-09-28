console.log("app.js is running")

const rootDisplay = document.querySelector('#root')

fetch('http://localhost:3000/results')
    .then(response => { return response.json()})
    .then(data => {
        data.forEach(rcw => {
            const rcwItem = `<div><h3>`+rcw.cite+`</h3></div>` +
                            `<div><h3>`+rcw.title+`</h3></div>` +
                            `<div><p>`+rcw.content+`</p></div>`
            rootDisplay.insertAdjacentHTML("beforeend", rcwItem)
        })
    })
    .catch(err => console.log(err))