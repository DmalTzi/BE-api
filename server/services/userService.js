const User = require("./../models/userModel")

const createUser = async(data) => {
    try{
        return await User.create(data)
    }catch(err){
        console.log(err)
    }
}

const findOneUser =  async(data) => {
    try{
        return await User.findOne({"email": data})
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createUser,
    findOneUser
}