function load() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var date = new Date()
    
    var hours = date.getHours()
    var min = date.getMinutes()

    var verb = hours >= 0 && hours <= 1

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

}
