import Boom from '@hapi/boom';
import { verifyJwt } from '../utils/jwt.js';

export default function checkAuth(req, res, next) {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader!== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];
        verifyJwt(token).then(data=>{
          req.user = data;
          next()
        })
        .catch(err=>{
          res.json(Boom.unauthorized('Invalid Token'))
        })
    } else {
      res.json(Boom.unauthorized('No Token Provided.'))
    }
}
