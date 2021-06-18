import knex from '../db.js'

const USER_TABLE_NAME = 'users';
const TODO_TABLE_NAME = 'todos';

export const User = knex(USER_TABLE_NAME)
export const Todo = knex(TODO_TABLE_NAME)