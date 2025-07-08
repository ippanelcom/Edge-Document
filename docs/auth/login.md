# Login API

This endpoint allows users to authenticate using their username and password.

## 📍 Endpoint

```
POST {base_url}/api/acl/auth/login
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Content-Type | application/json |

## 📤 Request Body

```json
{
    "username": "your-username",
    "password": "your-password"
}
```

## ✅ Success Response

```json
{
  "data": {
    "method": "ga", // or "sms" or "login"
    "token": "84cd3ef65b0700dea4ac7942e61df4a5"
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```

## 🔄 method Meaning (Login Flow Explanation)

Depending on the user's 2FA (Two-Factor Authentication) settings, one of the following scenarios will occur after a successful login:

1. **Google Authenticator (ga)**
   - `method` will be "ga"
   - Use the token to submit your Google Authenticator code

2. **SMS OTP (sms)**
   - `method` will be "sms" 
   - An OTP will be sent to your registered mobile number
   - Use the token along with the OTP code for authentication

3. **Direct Login (login)**
   - `method` will be "login"
   - Authentication is complete, and the token can be used for API requests

## ❌ Error Response

```json
{
  "errors": {
    "username": [
      "نام کاربری یا رمز عبور اشتباه است"
    ]
  },
  "meta": {
    "status": false,
    "message": "درخواست معتبر نیست",
    "message_parameters": [],
    "message_code": "422-1"
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/acl/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "your-username",
  "password": "your-password"
}'
```
