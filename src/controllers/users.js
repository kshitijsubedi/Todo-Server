import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService.js';

/**
 * Get user detail.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetch(req, res, next) {
  userService
    .getUser(req.user.id)
    .then(data => res.json({ data }))
    .catch(err => 
      next(JSON.stringify(err.output.payload))
    );
}

/**
 * Login user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function login(req, res, next) {
 console.log(req.body)
  userService
    .loginUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => res.status(err.output.statusCode).json(err.output.payload));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function register(req, res, next) {
  userService
    .registerUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => {
      res.status(err.output.statusCode).json(err.output.payload)});
}

/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => res.status(err.output.statusCode).json(err.output.payload));
}

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteUser(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => res.status(err.output.statusCode).json(err.output.payload));
}
