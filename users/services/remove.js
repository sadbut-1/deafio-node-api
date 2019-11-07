import User from '../models/User'

export default (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({ status: false, data: {}}))
}