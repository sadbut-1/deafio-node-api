import User from './../models/User'

export default (req, res) => {
    let user = new User(req.body.userData)
    user.save()
    .then((created) =>{
        return res.status(201).json({ 'status': true, 'data': created })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err.message }))
    
}