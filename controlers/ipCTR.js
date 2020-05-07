
exports.GenUrl = (req,res) =>{
    console.log(req)
    res.status(200).send(req.headers)
}