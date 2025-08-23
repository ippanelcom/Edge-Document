# 🔐 Authentication

Authentication is required for all API endpoints in the IPPanel Edge API. This section covers all authentication-related endpoints including login, token management, and password recovery.

### ℹ️ Important Note

You only need to use the authentication endpoints in this section if you are a reseller and plan to implement the registration/login flow inside your own system.

If you are just a regular user of the platform and simply want to use the APIs for your own account, you don’t need to implement this section. Instead, you can authenticate using an API key.

#### To generate an API key:

- Log in to your user panel.

- Navigate to Developers → Access Keys.

- Create your access key and use it for API requests.

## Base URL

All authentication endpoints use the base URL: `https://edge.ippanel.com/v1`

## Authentication Methods

IPPanel Edge API offers several authentication methods:

- **Username/Password Authentication** - Standard login method
- **OTP Authentication** - Login using a one-time password sent to your mobile number
- **Token Authentication** - All API requests require a token obtained through login

## Headers

After authentication, include your token in all API requests using the following header:

```
Authorization: YOUR_TOKEN_HERE
```

## API Endpoints

This section includes the following authentication endpoints:

- [Login API](./login) - Authenticates the user and initiates the login process.
- [Send SMS OTP](./sms-otp) - Request an OTP (One-Time Password) via SMS
- [Confirm OTP Login](./confirm-otp) - Confirm the login process by verifying the OTP (from SMS or Google Authenticator).
- [Forgot Password](./forgot-password) - Password recovery process
- [Logout](./logout) - End your session
- [Check Token](./check-token) - Validate your token
