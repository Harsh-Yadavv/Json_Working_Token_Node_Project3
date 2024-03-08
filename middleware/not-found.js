

const notFound = (req, res) => {
    return res.status(404).send('msg: Oops! The route you are looking for does not exist.')
}

module.exports = notFound