const Message = require("../dbMessages")

exports.userMsg = async(req,res)=>{
    const {name,message,timestamps,uid,roomId} = req.body
    
    const data =  await Message.create({
        name,
        message,
        timestamps,
        uid,
        roomId
    })

    res.status(201).json({
        success:true,
        data
    })
}

exports.allMsg = async(req,res)=>{
    const data = await Message.find({roomId:req.params.id})
    res.status(200).json({
        success:true,
        data
    })
}