const util = require('util');
const path = require('path');
const to = require('../util/to');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});

const mailOptions = {
    from: `Herbert Viana <process.env.EMAIL>`, // sender address
};

/**
 * @param {Object} options
 * @argument {String} to - sent email TO
 * @argument {String} subject - email subject
 * @argument {Html} html - html template
 *
 */
exports.sendEmail = async function sendEmail(options) {
    const [error, info] = await to(transporter.sendMail({...mailOptions, ...options}));
    if (error) {
        throw new Error(error.message);
    }
    return info;
}
