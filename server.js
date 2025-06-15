const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'qq',
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: '1920343801@qq.com', 
        pass: 'lrctvrgiplnreiie'   
    }
});

app.post('/sendEmail', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        const mailOptions = {
            from: '"网站访客" <1920343801@qq.com>', 
            to: '3591238609@qq.com',                
            subject: `来自网站的新消息（${name}）`,
            text: `
                发件人: ${name}
                邮箱: ${email}
                
                消息内容:
                ${message}
            `
        };

        console.log('准备发送邮件:', mailOptions);
        
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: '邮件发送成功' });
    } catch (error) {
        console.error('邮件发送失败:', error);
        res.status(500).json({ success: false, message: '邮件发送失败' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`服务器运行在端口 ${PORT}`));