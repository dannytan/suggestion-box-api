const Joi = require('joi');

const createSuggestion = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const getSuggestions = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    populate: Joi.string(),
  }),
};

const getSuggestion = {};

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
