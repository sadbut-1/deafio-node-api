import Profile from '../models/Profile'

export default (req, res) => {
    Profile.find({})
    .populate('user')
    .then((profiles) => {
        if (!profiles || !profiles.length) {
            return res.status(404)
                .json({ status: false, data: []})
        }

        return res.status(200).json({ status: true, data: profiles })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err.message }))
}