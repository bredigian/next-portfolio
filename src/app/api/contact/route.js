import { NextResponse } from "next/server"
import transporter from "@/config/nodemailer"

export const POST = async (req, res) => {
  const { email, name, message } = await req.json()

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.SMTP_USER,
      subject: "Contact from Portfolio",
      html: `
          <div style={{
              display: flex,
              flexDirection: column,
              alignItems: center,
              width: 100%,
              padding: "30px",
              border: "1px solid #ccc",
              borderRadius: "22px",
          }}>
              <h3>De: ${name}, ${email}</h3>
              <h3>Para: ${process.env.SMTP_USER}</h3>
              <p><b>Asunto: </b>${message}</p>
          </div>`,
    })
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
