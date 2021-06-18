import isEmpty from 'lodash';

/**
 * Utility helper for Joi validation.
 *
 * @param   {object}  data
 * @param   {object}  schema
 * @returns {Promise}
 */
function validate(data, schema) {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return Promise.reject(error);
  }
  else return Promise.resolve(value);
}

export default validate;
