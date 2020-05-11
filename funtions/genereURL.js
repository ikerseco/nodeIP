const GnUrid = () => {
    var karaktereak =  'qwertyuiopasdfghjklñzxcvbnm1234567890\"!·$%&/()=?\'\`+*|@#~'
    var urlData = ""
    for (var i = 0; i < 30; i++) {
     var nun =   parseInt(Math.floor(Math.random()*karaktereak.length))
     var letra = karaktereak.charAt(nun)
     urlData += letra
    }
    console.log(urlData)
    return urlData
}
module.exports = GnUrid