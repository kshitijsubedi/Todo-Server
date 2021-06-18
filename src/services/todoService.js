import Boom from '@hapi/boom';
import {Todo} from '../models/index.js';

/**
 * Get all todo list.
 *
 * @returns {Promise}
 */
 export async function fetch(userid) {
    return await Todo.where('owner_id', userid)
    .then(data => data)
      .catch( (err) => {
        return Boom.notFound('Todo not found.');
      });
  }
 
/**
 * Create a todo.
 *
 * @returns {Promise}
 */
 export async function create(data,userid) {
   let userdata = {'owner_id':userid}
    let insertdata = {...data,...userdata}
    return await Todo.insert(insertdata)
    .then(user => ({message:"Todo List created."}))
      .catch( (err) => {
        if(err.code==23505){
          return Boom.conflict('Todo Already Exists!')
        }
        else return Boom.badRequest('Unable To create Todo!');
      });
  } 
  /**
 * Update a todo list.
 *
 * @returns {Promise}
 */
 export async function update(body,todo_id,userid) {
    return await Todo.where('id', todo_id).update(body)
    .then(data => ({message:"Todo List updated."}))
      .catch( (err) => {
        return Boom.badImplementation('Fail to Update.');
      });
  }
  /**
 * Remove todo list.
 *
 * @returns {Promise}
 */
 export async function remove(todo_id,userid) {
    return await Todo.where('id',todo_id).del()
    .then(data => ({message:'Todo List deleted'}))
      .catch( (err) => {
        return Boom.badImplementation('Fail to remove list.');
      });
  }