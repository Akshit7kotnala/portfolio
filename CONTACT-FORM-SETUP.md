# Contact Form Setup Guide

Your portfolio now has a dedicated contact form page at `/contact` that visitors can fill out to send you messages.

## 🚀 Quick Setup (Free - Web3Forms)

To enable email delivery, you need to get a free API key from Web3Forms:

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email: **akshit7kotnala@gmail.com**
4. Verify your email
5. Copy your Access Key

### Step 2: Add Access Key to Your Code

1. Open `app/contact/page.tsx`
2. Find this line (around line 29):
   ```typescript
   access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key from Web3Forms

### Step 3: Test It!

1. Visit `http://localhost:3000/contact` in your browser
2. Fill out the form and submit
3. Check your email at akshit7kotnala@gmail.com

## 📋 Features

Your contact form includes:

- ✅ Name, Email, Subject, and Message fields
- ✅ Form validation
- ✅ Loading state while sending
- ✅ Success/Error notifications
- ✅ Dark mode support
- ✅ Opens in a new tab when clicked from homepage
- ✅ Direct email link as fallback

## 🔐 Security

- No backend required
- Form data goes directly to Web3Forms' secure API
- They forward the email to you
- Free tier: 250 submissions per month
- No credit card required

## 🎨 How It Works

1. User clicks "Say Hello" on your homepage
2. Opens `/contact` page in a new tab
3. User fills out the form
4. Form submits to Web3Forms API
5. Web3Forms sends you an email with the message
6. User sees success confirmation

## Alternative: Mailto Fallback

If you prefer not to set up Web3Forms, the form includes a direct email link at the bottom that users can click to email you directly using their email client.

## 🌐 After Deployment

Once you deploy to Vercel, the contact form will work at:

- `https://your-domain.vercel.app/contact`

Make sure to test it after deployment!
