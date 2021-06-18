import Joi from 'joi';
import validate from '../utils/validate.js';
import * as userService from '../services/userService.js';

// Validation schema
const loginSchema = Joi.object({
  email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
  password: Joi.string()
        .min(6)
        .required()
});

const registerSchema = Joi.object({
  name: Joi.string()
        .min(3)
        .max(32),
  email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
  password: Joi.string()
            .min(6)
            .required(),
  repeat_password: Joi.ref('password'),
        })

/**
 * Validate create/update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function userValidator(req, res, next) {
  return validate(req.body, loginSchema)
    .then(() => next())
    .catch(err => next(err));
}

function registerValidator(req,_res,next){
  return validate(req.body, registerSchema)
    .then(() => next())
    .catch(err => {
      console.log('====>',err)
      next(err)});
}

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findUser(req, res, next) {
  return userService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findUser, userValidator,registerValidator };
