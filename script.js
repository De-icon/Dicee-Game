const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    var dice1 = Math.floor(Math.random() * 6) + 1 
    
    const img1 = document.querySelector('.img1')
    const randomImg1 = "/images/dice"+dice1+".png"

    img1.setAttribute('src', randomImg1)


    var dice2 = Math.floor(Math.random() * 6) + 1 
    
    const img2 = document.querySelector('.img2')
    const randomImg2 = "/images/dice"+dice2+".png"

    img2.setAttribute('src', randomImg2)

    var header = document.querySelector('h1')
    if (dice1 > dice2) {
        header.innerText = "Player 1 wins"
    }else if (dice1 < dice2) {
        header.innerText = "Player 2 wins"
    } else {
        header.innerText = "Draw"
    }
})