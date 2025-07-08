# Confirm OTP Login

This endpoint is used to confirm the login process by verifying the OTP (from SMS or Google Authenticator).

## 📍 Endpoint

```
POST {base_url}/api/acl/auth/confirm_otp
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "token": "your-temporary-token",
  "otp": "otp-code"
}
```

## 📝 Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| token | string | The temporary token received from the Login API |
| otp | string | The OTP received via SMS or generated from Google Authenticator |

## ✅ Success Response

```json
{
  "data": {
    "token": "22c392ffebe7286ee8021cfef7d7cad5",
    "method": "login"
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```
🎉 The returned token is the final token that can be used to access authorized APIs.

⏱ Valid for: 10 hours

## ❌ Error Response — Invalid or Expired Token or OTP (401)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "اطلاعات وارد شده صحیح نمی باشد",
    "message_parameters": [],
    "message_code": "400-1",
    "errors": {}
  }
}
```

## ❌ Error Response — Validation Error (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه otp الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "otp": [
        "تکمیل گزینه otp الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/acl/auth/confirm_otp' \
--header 'Content-Type: application/json' \
--data '{
  "token": "your-login-step-token",
  "otp": "otp-code"
}'
```
