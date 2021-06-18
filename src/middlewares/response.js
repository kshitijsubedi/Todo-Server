export default function responsify(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Author','me');
    if (!req.method == 'GET' && req.headers['content-type'] !== 'application/json') {
        res.status(400).json('Server requires application/json')
    } else {
      next()
    }
}