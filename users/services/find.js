import User from '../models/User'

export default (req, res) => {
    User.findById(req.params.id).select('-password')
    .then((user) => {
        if (!user) {
            return res.status(404)
                .json({ status: false, data: []})
        }

        return res.status(200).json({ status: true, data: user })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err.message }))
}