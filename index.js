document.querySelector('button').addEventListener('click', () => {
    const newColor = ['red', 'black', 'blue'][Math.floor(Math.random()*3)];
    document.body.style.background = newColor;
})


document.querySelector('button').style.background = 'red';
