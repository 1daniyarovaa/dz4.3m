let row = document.querySelector('.row')

fetch(`https://api.escuelajs.co/api/v1/users`)
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += 
        `
        <div class="card">
        <img class="" src="${item.avatar}" alt=""/>
        <h1>${item.email}</h1>
        <h2>${item.password}</h2>
        <h3>${item.name}</h3>
        <h4>${item.role}</h4>
        </div>
        `
    })
})
row('all')