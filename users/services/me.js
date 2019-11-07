import User from '../../users/models/User'

export default (req, res) => {
    console.log(req.body.userId)
    User.findOne({ _id : req.body.userId })
    .then((user) => {
        if (!user) {
            return res.status(404)
                .json({ status: false, data: []})
        }

        return res.status(200).json({ status: true, data: user })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err.message }))
}