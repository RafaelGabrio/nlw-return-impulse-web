import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "488339296c1539",
        pass: "024c63b9d598b8"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <Oi@feedget.com>',
            to: 'Rafael Gábrio <rafaelgabriosi@gmail.com>',
            subject,
            html: body,
        })
    }
}