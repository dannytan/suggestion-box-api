const { Suggestion } = require('../models');

/**
 * Create a suggestion
 * @param {Object} suggestionBody
 * @returns {Promise<Suggestion>}
 */
const createSuggestion = async (suggestionBody) => {
  const suggestion = await Suggestion.create(suggestionBody);
  return suggestion;
};

/**
 * Query for suggestions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySuggestions = async (filter, options) => {
  const suggestions = await Suggestion.paginate(filter, options);
  return suggestions;
};

const getSuggestionById = async () => {};

module.exports = {
  createSuggestion,
  querySuggestions,
  getSuggestionById,
};
