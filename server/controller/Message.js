const Rooms = require("../dbRooms")

exports.msg = async (req,res)=>{
    const name = req.body.groupName
    const data = await Rooms.create({name})

    res.status(201).json({
        success:true,
        data
    })

}

// all message
exports.allmsg = async(req,res)=>{
    const data = await Rooms.find()
    res.status(200).json({
        success:true,
        data
    })
}

// single room 
exports.singleRoom = async(req,res)=>{
    const data = await Rooms.findById(req.params.id)
    res.status(200).json({
        success:true,
        data
    })
}