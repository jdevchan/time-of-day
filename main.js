setInterval(function() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')

    let date = new Date()
    
    let hours = date.getHours()
    let min = date.getMinutes()

    if (hours < 10) hours = '0' + hours;
    if (min < 10) min = '0' + min;

    let verb = hours >= 0 && hours <= 1

    if(verb) {
        verb = "é"
    } else {
        verb = "são"
    }

    msg.innerHTML = `Agora ${verb} ${hours + ':' + min}hs.`

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
});
