const User = require("../models/userModel")

const create = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const usercheck = await User.findOne({ email })
        if (usercheck) {
            return res.send("had email rah kayn deja");
        }
        const save = await newUser.save();
        res.status(201).json({message: "User t9ad bnnajah"});
    }
    catch (err) {
        console.error("Error fax katbghi tsawb chi  user:", err);
        res.status(500).json({ message: "Server fih chi error", error: err.message });
    }
}
const  getUser = async (req,res) => {
    try {
        const UserData = await User.find()
        if(!UserData || UserData === 0)
            res.status(404).json({message: "User makaynch"})
        res.status(200).json(UserData)
    } catch (error) {
        console.error(error)
    }
}
const getUserbyId = async (req,res) => {
    try {
        const id = req.params.id;
        const usercheck = await User.findById(id);
        if(!usercheck)
            res.status(404).json({message: "User makaynch"})
        res.status(200).json(usercheck)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateUser = async (req,res) => {
    try {
        const id = req.params.id;
        const usercheck = await User.findById(id);
        if(!usercheck)
            res.status(404).json({message: "User makaynch"})
        const UserUpdate = await User.findByIdAndUpdate(id, req.body, {
            new:true,
        })
        // res.status(200).json(UserUpdate)
        res.status(200).json({message: "User tbdl bnajah"})
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}
const deleteUser = async (req,res) => {
    try {
        const id = req.params.id;
        const usercheck = await User.findById(id);
        if(!usercheck)
            res.status(404).json({message: "User makaynch"})
        await User.findByIdAndDelete(id)
        res.status(200).json({message: "User tms7 bnnajah"})
    } catch (error) {
            res.status(500).json({message:error.message})
    }
}
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.getUserbyId = getUserbyId;
exports.create = create;
exports.getUser = getUser;