const User = require('../models/User.js')
const GnUrid = require('../funtions/genereURL.js')



exports.GenUrl = async (req,res) =>{
    console.log(req.headers)
    let data = req.params.data.split("%")
    const Gmail = data[0]
    const webN  = data[1]
    let jsonData = { gmail: Gmail, url : null, }
    let UserAr = null
    await User.find({},(err, dat) => {
       dat.length != 0 ?(
          UserAr = dat 
       ):(
          UserAr = null
       ) 
    })
    console.log(UserAr)
    if(UserAr != null){
        while(jsonData.url == null){
            let idUrl = GnUrid()
            UserAr.forEach((dat)=>{
                if(dat.url != idUrl){
                    jsonData.url =  idUrl
                }       
            }) 
        }
    }else{
        let idUrl = GnUrid() 
        console.log(idUrl)
        jsonData.url = idUrl

    }
    console.log("idUrl")
    const newUrl = new User(jsonData);
    newUrl.save((err, dat) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la peticion', err });
        if (!dat) return res.status(404).send({ message: `dato` });
        res.status(200).send(req.headers)
    })
}