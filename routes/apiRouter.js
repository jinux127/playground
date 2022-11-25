const DomesticCrawler = require('../service/scrapping');

const express = require('express');
const apiRouter = express.Router();
const nodemailer = require('nodemailer');

// 블로그 스크랩
apiRouter.get('/data', async function (req, res, next) {
  try {
    const crawler = new DomesticCrawler();
    const data = await crawler.crawlStart();

    res.json({ data, status: 200 });
  } catch (e) {
    console.log('erro', e);
    console.log('crawStart failed');
    res.json({ status: 405 });
  }
});

// 메일 전송
apiRouter.post('/mail', async function (req, res, next) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const { contents, email, name } = req.body;

  const mailOptions = {
    from: `Jinux's playground <${email}>`,
    to: process.env.TARGET_EMAIL,
    subject: `${name ? name : '익명'}님에게 쪽지가 수신되었습니다.`,
    html: `
      <h3>보낸이:${email}</h3>
      <div>
        ${contents}
      </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({
      message: 'Sent Message',
    });
  } catch (error) {
    res.status(405).json({
      message: 'error mail service',
    });
  }
});

module.exports = apiRouter;
