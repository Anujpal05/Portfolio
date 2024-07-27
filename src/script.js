import { nodemailer } from "nodemailer";

const sendMail = (value) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "ajpal7141@gmail.com",
        pass: "vrlftsrydofbmxid",
      },
    });
    const mailOptions = {
      from: `"Portfolio" ${import.meta.env.VITE_SENDER}`,
      to: import.meta.env.VITE_SENDER,
      subject: "Contact Mail",
      html: `<h1>Hello,Anuj</h1>
                          <p>Mr. ${value.name} recently see Your portfolio And he was sending some message. </p>
                          <p>${value.message}</p>
                          <p>For Contact ${value.email}</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      console.log("Sending mail");
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
