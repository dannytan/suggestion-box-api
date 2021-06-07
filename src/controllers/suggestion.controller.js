const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { suggestionService } = require('../services');

const createSuggestion = catchAsync(async (req, res) => {
  const suggestion = await suggestionService.createSuggestion({ ...req.body, user: req.user.id });
  res.status(httpStatus.CREATED).send(suggestion);
});

const getSuggestions = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'populate']);
  const result = await suggestionService.querySuggestions(filter, options);
  res.send(result);
});

// eslint-disable-next-line no-unused-vars
const getSuggestion = catchAsync(async (_req, _res) => {});

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestion,
};
