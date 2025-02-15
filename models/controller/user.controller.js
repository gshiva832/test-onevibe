const User = require('../userCollection')

const userCreate = async (req,res) => {
    try{
        const data = await User.create(req.body)
        console.log(data)
        if(!data){
            throw Error('unable insert user')
        }else {
            res.json({error: false,data:data,message:"User created"})
        }
        
    }catch(error) {
        console.log(error)
        res.status(500).json({error:true,message:error})
    }
}

const userRead = async (req,res)=>{
    try{
        const read = await User.find({})
        res.json({error:false, data:read,message:'reading users'})
    }catch (error){
        console.log(error)
        res.status(500).json({error:true,message:error})
    }
}

const userReads = async(req,res) =>{
    const _id = req.params.id
    try {
            const users = await User.findById(_id)
            if(!users){
                throw Error ('unable read user')
            }
            res.json({error:false,data:users,message:'reading user by ID'})
    } catch (error) {
        res.status(500).json({error:true,message:error})
    }
}

const updateUser = async(req,res)=>{
    
    try {
        const update = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!update){
            throw Error('unable update user')
        }
        res.json({error:false,data:update,message:'find by Id and updating'})
    } catch (error) {
        res.status(500).json({error:true,message:error})
    }
}

const deleteUser = async(req,res)=>{
    try {
        const deleteUSer = await User.findByIdAndDelete(req.params.id,req.body,{new:true,runValidators:true})
        if(!deleteUSer){
            throw Error('unable to delete user')
        }
        res.json({error:false,data:deleteUSer, message:'user deleted by given ID'})
    } catch (error) {
        res.status(500).json({error:true,message:error})
    }
}


module.exports = {
    userCreate,
    userRead,
    userReads,
    updateUser,
    deleteUser
}