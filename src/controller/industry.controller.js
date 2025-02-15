const industryModel = require('../models/industriesCollection')

const industryController  = async (req,res) =>{
    try{
        const industry = await industryModel.create(req.body)
        console.log(industry)
        if(!industry
            
        ){
            throw Error('industry not details inserted')
        }else{
            res.status(200).json({error:false,data:industry,message:'industry inserted'})
        }
    }catch(error){
        res.status(500).json({error:true ,message:error})
    }
    
}

module.exports = { industryController }