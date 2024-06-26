const { check, validationResult } = require("express-validator");

const validatePlayer = [
    check('name')
        .trim()
        .escape()
        .isString()
        .isLength({ min: 1 })
        .withMessage("Name cannot be empty"),
    check('jersey')
        .trim()
        .escape()
        .isInt( {min:0} )
        .withMessage("Jersey must be a number, and may not contain decimals and or negative numbers."),
    check('position')
        .trim()
        .escape()
        .isString()
        .isLength({ min: 1 }),
    check('team')
        .trim()
        .escape()
        .isString()
        .isLength({ min: 1 }),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validatePlayer };
