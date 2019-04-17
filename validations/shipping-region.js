import Joi from 'joi';

// Declare the Joi validation schema
const schema = Joi.object().keys({
  shippingRegion: Joi.string().required(),
});

/**
 *
 * @param payload
 * @returns {Promise|SchemaType|ValidationResult<any>|*|string|boolean|void|ActiveX.IXMLDOMParseError}
 */
const validateShippingRegion = (payload) => {
  return Joi.validate(payload, schema); // Validate the payload against the schema and ret
};

export default validateShippingRegion;