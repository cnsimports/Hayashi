import formidable from "formidable"
import Mailchimp from "mailchimp-api-v3";

export const config = {
  api: {
    bodyParser: false,
  },
};

const form = formidable();
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

const subscribe = (fields) => {
  return mailchimp.post(
    `/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    {
      email_address: fields.email,
      status: "subscribed",
    }
  );
};

// This implementation does not use Recaptcha
const verifyRecaptcha = () => Promise.resolve()

export default function handler(req, res) {
  // Get data submitted in request's body.
  form.parse(req, async (err, fields) => {
    if (!err) {
      if (!fields.email) {
        // Sends a HTTP bad request error code
        return res
          .status(400)
          .json({ status: "error", message: "Invalid data" });
      } else {
        verifyRecaptcha(
          process.env.RECAPTCHA_SECRET_KEY,
          fields.recaptcha_token
        )
          .then(() => {
            // Subscribe
            subscribe(fields)
              .then(() => {
                res.status(200).json({ status: "success" });
              })
              .catch((error) => {
                if (error.status === 400 && error.title === "Member Exists")
                  res.status(200).json({ status: "success" });
                else
                  res
                    .status(500)
                    .json({ status: "error", message: "Internal error" });
              });
          })
          .catch(() => {
            res
              .status(400)
              .json({ status: "error", message: "Recaptcha error" });
          });
      }
    }
  });
}

