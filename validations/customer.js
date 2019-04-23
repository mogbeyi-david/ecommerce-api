import Joi from 'joi';

// Declare the Joi validation schema
const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email,
  password: Joi.string().required().minlength(8).alphanum(),
});

/**
 *
 * @param payload
 * @returns {Promise|SchemaType|ValidationResult<any>|*|string|boolean|void|ActiveX.IXMLDOMParseError}
 */
const validateCustomer = (payload) => {
  return Joi.validate(payload, schema); // Validate the payload against the schema and return the results
};

export default validateCustomer;