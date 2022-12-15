const hours = setInterval(function () {
    
    const msg = document.getElementById('msg')
    const img = document.getElementById('img')

    const date = new Date()
    
    const hours = date.getHours()
    const min = date.getMinutes()

    function zero(num) {
        return num >= 10 ? num: `0${num}`;
    }

    const verb = hours >= 0 && hours <= 1

    if(verb) {
        verb = "é"
    } else {
        verb = "são"
    }

    msg.innerHTML = `Agora ${verb} ${zero(hours) + ':' + zero(min)}hs.`

    if(hours >= 5 && hours < 12) {
        img.setAttribute('src', 'images/manha.jpg')
        document.body.style.background = '#e2cd9f'
    } else if(hours >= 12 && hours <= 18) {
        img.setAttribute('src', 'images/tarde.jpg')
        document.body.style.background = '#b9846f'
    } else {
        img.setAttribute('src', 'images/noite.jpg')
        document.body.style.background = '#515154'
    }
})