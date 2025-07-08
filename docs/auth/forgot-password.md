# Forgot Password

This section provides endpoints to reset your password when you've forgotten it.

## Request OTP for Password Reset
This endpoint is used to request an OTP (One-Time Password) for changing the password.
### 📍 Endpoint

```
POST {base_url}/api/acl/auth/forgot_password
```

### 🧾 Headers

| Key | Value |
| --- | ----- |
| Content-Type | application/json |

### 📤 Request Body

```json
{
  "username": "your-username",
  "mobile": "your-mobile-number"
}
```

### ✅ Success Response

```json
{
  "data": {
    "token": "6b1059f512b4fe9acd8bdb22351b0b51"
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```

### ❌ Error Response — Invalid or Expired Token (401)

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

### ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه نام کاربری الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "username": [
        "تکمیل گزینه نام کاربری الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request
```bash
curl --location '{base_url}/api/acl/auth/forgot_password' \
--header 'Content-Type: application/json' \
--data '{
    "username":"your-username",
    "mobile":"your-mobile-number"
}'
```

## Change Password Using Token
This endpoint is used to change the password using the OTP received in the previous step.
### 📍 Endpoint

```
POST {base_url}/api/acl/auth/change_password_by_token
```

### 🧾 Headers

| Key | Value |
| --- | ----- |
| Content-Type | application/json |

### 📤 Request Body

```json
{
  "token": "token-from-forgot-password",
  "otp": "otp-code",
  "password": "new-password"
}
```

### 📝 Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| token | string | The token received from the forgot-password endpoint |
| otp | string | The OTP code sent to the user's mobile number |
| password | string | New password |

### ✅ Success Response

```json
{
  "data": null,
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```

### ❌ Error Response — Invalid or Expired Token (401)

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

### ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه گذرواژه الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "password": [
        "تکمیل گزینه گذرواژه الزامی است"
      ]
    }
  }
}
```

### 🧪 Example Request
```bash
curl --location '{base_url}/api/acl/auth/change_password_by_token' \
--header 'Content-Type: application/json' \
--data '{
    "token":"token-from-forgot-password",
    "otp":"otp-code",
    "password":"new-password"
}'
```
