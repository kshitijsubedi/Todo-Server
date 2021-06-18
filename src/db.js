import knexJs from 'knex';
import knexConfig from './knexfile.js';

/**
 * Database connection.
 */

let knex = knexJs(knexConfig);
export default knex;
