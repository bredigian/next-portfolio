import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

transporter
  .verify()
  .then(() => {
    console.log("Ready for send emails")
  })
  .catch((error) => {
    console.log(error)
  })

export default transporter
