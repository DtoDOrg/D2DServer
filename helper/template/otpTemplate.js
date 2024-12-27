export const OTPTemplate = otp => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 95%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        color: #333;
      }
      .otp {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        color: #4CAF50;
        margin-top: 20px;
      }
      .content {
        font-size: 16px;
        color: #555;
        margin-top: 20px;
        text-align: center;
      }
      .footer {
        font-size: 12px;
        color: #999;
        margin-top: 30px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>OTP Verification</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>Your OTP for verification code is:</p>
        <div class="otp">${otp}</div>
        <p>Use this OTP to complete your verification process. If you didn't request this, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>Thank you for using our service!</p>
      </div>
    </div>
  </body>
  </html>
`;
