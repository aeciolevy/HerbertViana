const to = require('../util/to');
const LeadModel = require('../models/lead');
const { ErrorRequest, STATUS_CODE } = require('../handlers/reqError');
const { sendEmail } = require('../handlers/email');

exports.registerLead = async(req, res) => {
    const { email } = req.body;
    // register email
    const [error, findLead] = await to(LeadModel.findOne({ email }));
    if (error) {
        throw new ErrorRequest(STATUS_CODE.UNPROCESSABLE, error.message);
    }

    let newLead;
    // create new document if email does not exist
    if (!findLead) {
         newLead = new LeadModel({
            email,
        });
        const [errorSave] = await to(newLead.save());
        if (errorSave) {
            throw new ErrorRequest(STATUS_CODE.UNPROCESSABLE, errorSave.message);
        }
    }
    // send email
    const [errorEmail] = await to(sendEmail({
        to: email,
        subject: 'Ebook - Manutenção',
        html: `
            <h1> Parabéns seu ebook está em anexo.</h1>
        `,
    }));
    if (errorEmail) {
        throw new ErrorRequest(STATUS_CODE.UNPROCESSABLE, errorEmail.message);
    }

    return { status: 'endpoint working'}
}
