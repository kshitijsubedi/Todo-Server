import Boom from '@hapi/boom';
import {User} from '../models/index.js';
import {hashPassword,compareHash} from '../utils/bcrypt.js';
import { generateJwt,verifyJwt } from '../utils/jwt.js';

/**
 * Get a user.
 *
 * @returns {Promise}
 */
export async function getUser(userid) {
  return await User.where('id', userid)
  .then(user => user)
    .catch( (err) => {
      return Boom.notFound('User not found');
    });
}

export async function loginUser(user){
  const {email,password} = user;
  return await User.where('email',email)
  .then (data=>{
    if(compareHash(password,data[0].password)){
     return generateJwt(data[0])
    }
    else {
      throw Boom.badRequest('Email or Password wrong!')
    }
  })
  .catch(err=>{
    throw Boom.notFound('User doesnot Exists. Try Registering first')
  })
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export async function registerUser(user) {
  const {name,email,password} = user;
  const hasedPassword = hashPassword(password)
  return await User.insert(
    [
      {name,email,password:hasedPassword}
    ]
  ).then (data=>'Successfully Registered. You can login Now 🎉')
  .catch(err=> {
    if(err.code==23505){
      return Boom.conflict('Email Already Exists. You might want to Login??')
    }
    return Boom.teapot('Sorry. Try Again!')
  })
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         user
 * @returns {Promise}
 */
export function updateUser(id, user) {
  return new User({ id }).save({ name: user.name });
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}
