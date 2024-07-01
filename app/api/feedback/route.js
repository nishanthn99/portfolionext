import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req,res) => {
    const { email,textfeed } = await req.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS,  //Your Gmail password or App Password
      },
    });
    // if ( !process.env.EMAIL_USER|| !process.env.EMAIL_PASS) {
    //   console.error('Missing email credentials');
    //   return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    // }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nishanthsherugar@gmail.com', // Your email address where you want to receive form submissions
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\nMessage: ${textfeed} this is a mail`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
