const celebrityModel  = require('../models/celebrityCollection');

const celbController = async (req,res) =>{
    try {
        const celebrity = await celebrityModel.create(req.body)
        console.log(celebrity)
    if(!celebrity){
        throw Error("unable to insert celebrity")
    }else {
        res.status(200).json({error:false,data:celebrity,message:'celebrity inserted!'})
    }
    } catch (error) {
        res.status(500).json({error:true, message:error})
    }
}

module.exports = {celbController};