const jwt = require('jsonwebtoken');

const user = async(req, res, next) => {
    const authHeader = req.headers['authorization']
    const auttoken = authHeader.split(' ')[1]
    if(auttoken === undefined) return res.status(403).json({message:"authorization fail"})

    try{
        const decode = await jwt.verify(auttoken,process.env.JWT_SECRET)
    if(decode.role === "user"){
        req.nickname = decode.nickname
        next()
    }else{
        return res.status(403).json({message:"authorization fail"})
    }
    }catch(err){
        return res.status(403).json({message:"authorization fail"})
    }
}

module.exports = {
    user
}