import User from './../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default (req, res) => {
    User.findOne({ email: req.body.email })
        .then((userInfo) =>{
            if (!userInfo) {
                return res.status(404).json({ status: false, message: "User not found", data: []})
            }
            if (bcrypt.compareSync(req.body.password, userInfo.password)) { 
                const token = jwt.sign({ id: userInfo._id }, process.env.SECRET_KEY, { expiresIn: '1h' }) 
                res.status(200).json({ status: true, message: "user found!!!", data: { token: token } })
            } else {
                res.status(400).json({ status: false, message: "Invalid user/password!!!", data: null })
            }
        })
        .catch((err) => res.status(500).json({ 'status': false, 'data': err }))
}