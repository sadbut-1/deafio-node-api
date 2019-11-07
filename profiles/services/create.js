import Profile from '../models/Profile'

export default (req, res) => {
    let profile = new Profile(req.body)
    profile.save()
    .then((created) =>{
        return res.status(201).json({ 'status': true, 'data': created })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err }))
    
}