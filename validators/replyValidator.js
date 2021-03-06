const { check } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* Validation/Sanitization */
exports.validate = (method) => {
  switch (method) {
    case 'createReply': {
      return [
        // Validate
        check('name', 'Name must be between 1 and 30 characters').isLength({ min: 1, max: 30 }).trim().optional(),
        check('body', 'Body must be between 1 and 2000 characters').isLength({ min: 1, max: 2000 }).trim(),

        // Sanitize
        sanitizeBody('name').trim(),
        sanitizeBody('body').trim(),
      ];
    }
    default:
      return [];
  }
};
