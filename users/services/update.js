import User from '../../users/models/User'

export default (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body.userData)
        .then((user) => {
            return res.status(201).json({ status: true, data: user._id})
        })
        .catch(err => res.status(500).json({ status: false, data: {}}))
}