import User from './../models/User'

export default (req, res) => {
    const { page, filter } = req.query
    const options = {
        page: parseInt(page, 10),
        limit: 5,
        select: '-password'
    }
    User.paginate({ name: { "$regex": filter, "$options":"i"} }, options)
    .then((users) => {
        if (!users.docs || !users.docs.length) {
            return res.status(404)
                .json({ status: false, data: []})
        }

        return res.status(200).json({ status: true, data: users })
    })
    .catch((err) => res.status(500).json({ 'status': false, 'data': err }))
}