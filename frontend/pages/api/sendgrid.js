import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
	const { body } = req;
	try {
		await sendgrid.send({
			from: 'info@hayashiwhisky.com',
			to: 'info@hayashiwhisky.com',
			subject: `Hayashi :: Contact`,
			html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${body.name} </p><br>
      <p><strong>Email: </strong> ${body.email} </p><br>
      <p><strong>Subject: </strong> ${body.subject} </p><br>
      <p><strong>Message: </strong> ${body.message} </p><br>
      `,
		});
	} catch (error) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
