import Profile from '../models/Profile'

export default (req, res) => {
    Profile.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({ status: false, data: {}}))
}