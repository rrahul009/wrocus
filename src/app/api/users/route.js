const nodemailer =require("nodemailer");

export async function POST(request) {
  try {
    // Parse the JSON body of the request
    const { firstName, lastName, company, phoneNumber, websiteUrl, email } = await request.json();

    // Configure the email transporter using direct credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use another service
      auth: {
        user: 'rrahulkumaryadav347@gmail.com', 
        pass: 'nhjp lsgo esnw wfle', // It's better to use environment variables for credentials
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // Sender's email
      to: 'rkumar1@kloudrac.com', // Recipient's email
      subject: 'New Contact Form Submission',
      replyTo: email,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phoneNumber}
        Company: ${company}
        Website: ${websiteUrl}
      `,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Website:</strong> ${websiteUrl}</p>
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
