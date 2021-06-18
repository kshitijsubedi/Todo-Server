import jwt from 'jsonwebtoken';


export function generateJwt(data) {
    try{
        return jwt.sign(data,process.env.SECRET_KEY);
    }
    catch (err){
        return err
    }
}

export async function verifyJwt (token){
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
      } catch(err) {
        throw err
      }
}
