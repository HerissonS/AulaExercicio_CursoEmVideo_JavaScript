function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>No momento são ${hora}h</strong>`

    if (hora >= 5 && hora < 12) {
        foto.innerHTML = '<img src="/Aula12Ex/img/dia.jpg" alt="Foto atual" id="photo">'
    } else if (hora >= 12 && hora < 18) {
        foto.innerHTML = '<img src="/Aula12Ex/img/tarde.jpg" alt="Foto atual" id="photo">'
    } else {
        foto.innerHTML = '<img src="/Aula12Ex/img/noite.jpg" alt="Foto atual" id="photo">'
    }

}