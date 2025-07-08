# Send SMS OTP

This endpoint allows the user to request an OTP (One-Time Password) via SMS, using the token received in the login step.

## 📍 Endpoint

```
POST {base_url}/api/acl/auth/send_sms_otp
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Content-Type | application/json |

## 📤 Request Body

```json
{
    "token": "your-login-step-token"
}
```

## ✅ Success Response

```json
{
  "data": {
    "method": "sms",
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
⚠️ The token used here must be a temporary login token received from the login API. If valid and not expired, an OTP will be sent via SMS.
## ❌ Error Response — Invalid or Expired Token (401)

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

## 🧪 Example Request

```bash
curl --location '{base_url}/api/acl/auth/send_sms_otp' \
--header 'Content-Type: application/json' \
--data '{
  "token": "your-login-step-token"
}'
```
