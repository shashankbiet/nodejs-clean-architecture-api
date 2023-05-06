const { validationResult } = require("express-validator");
const status = require("../app/shared/constants/status");
const logger = require("../config/logger");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    logger.error(`url: ${req.originalUrl}, error: ${JSON.stringify(extractedErrors)}`);
    return res.status(status.badRequest.code).json({
        errors: extractedErrors,
    });
};

module.exports = validate;
