import * as nodemailer from 'nodemailer';

export const firstUpperCase = (str) => {
  return str.replace(/^\S/, (s) => {
    return s.toUpperCase();
  });
};

/**
 * 邮箱发送
 * @param email 邮箱
 */
export const sendEmail = async (email: string) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'wyliuxsen@163.com', // generated ethereal user
        pass: 'liujh123', // generated ethereal password
      },
    });
    const secert = Math.random()
      .toString(36)
      .substr(8);
    const mailOptions = {
      from: 'wyliuxsen@163.com', // sender address
      to: email, // list of receivers
      subject: '邮箱验证', // Subject line
      text: `验证码是${secert}`, // plain text body
      // html: '<b>Hello world email?</b>', // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(secert);
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
};
