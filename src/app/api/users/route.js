const nodemailer = require("nodemailer");
const cors = require('cors');
app.use(cors({
    origin: 'https://wrocus.vercel.app' // Allow requests from this origin
}));

export async function POST(request) {
    try {
        // Parse the JSON body of the request
        const { firstname, lastname, websiteurl, email, company, phonenumber, message } = await request.json();


        // Configure the email transporter using direct credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or use another service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Define the email options
        const mailOptions = {
            from: email, // Sender's email
            to: 'rkumar1@kloudrac.com', // Recipient's email
            subject: 'New Contact Form Submission',
            replyTo: email,
            text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phonenumber}
        Company: ${company}
        Website: ${websiteurl}
        Message:${message}
      `,
            html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phonenumber}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${websiteurl}</p>
             <p><strong>Website:</strong> ${message}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return a success response
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        // Return an error response
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}
