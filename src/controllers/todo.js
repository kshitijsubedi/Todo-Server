import HttpStatus from 'http-status-codes';

import * as todoService from '../services/todoService.js';

/**
 * Create a new todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function create(req, res, next) {
    todoService
      .create(req.body,req.user.id)
      .then(data => res.status(HttpStatus.CREATED).json({ data }))
      .catch(err => {
        next(JSON.stringify(err))});
  }

  /**
 * Update a todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function update(req, res, next) {
    todoService
      .update(req.body,req.params.id,req.user.id)
      .then(data => res.status(HttpStatus.OK).json({ data }))
      .catch(err => {
        next(JSON.stringify(err))});
  }
  /**
 * Fetch all todos.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function fetch(req, res, next) {
    todoService
      .fetch(req.user.id)
      .then(data => res.status(HttpStatus.OK).json({ data }))
      .catch(err => {
        next(JSON.stringify(err))});
  }
  /**
 * Delete a todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function remove(req, res, next) {
    todoService
      .remove(req.params.id,req.user.id)
      .then(data => res.status(HttpStatus.GONE).json({ data }))
      .catch(err => {
        next(JSON.stringify(err))});
  }
