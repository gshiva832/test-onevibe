const serviceModel = require('../serviceCollection')

const serviceController = async (req,res) =>{
    try{
        const service = await serviceModel.create(req.body)
        console.log(service)
        if(!service){
            throw Error('unable to insert service')
        }else{
            res.status(200).json({error:false,data:service,message:'service created success!'})
        }
    }catch(error){
        res.status(500).json({error:true,message:error})
    }
}


module.exports = { serviceController }