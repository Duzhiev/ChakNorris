const btn = document.createElement('button');
btn.textContent = 'ЖМИ';

btn.addEventListener('click', async() => {
    const res = await fetch ('https://api.chucknorris.io/jokes/random')
    const joke = await res.json()
    const li = document.createElement('li')
    li.textContent = await joke.value
    await document.body.append(li)
})

document.body.append(btn)