# Check User Existence

This API allows you to check if a user exists by their username. It returns a success message if the username is available for registration or an error message if the username already exists or if there are validation issues.

## 📍 Endpoint

```
POST {base_url}/api/user/check_exist
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "user_name": "username"
}
```

## 📝 Parameters

| Parameter     | Type    | Required | Description                                               |
|---------------|---------|----------|-----------------------------------------------------------|
| username      | string  | Yes      | The username of the user you want to check existence for. |

## ✅ Success Response

```json
{
  "data": null,
  "meta": {
    "status": true,
    "message": "این نام کاربری قابل ثبت می باشد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```

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

## ❌ Error Response — User Already Exists (409)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "نام کاربری وارد شده قبلا ثبت شده است",
    "message_parameters": [],
    "message_code": "400-1",
    "errors": {}
  }
}
```

## ❌ Error Response — Missing Required Fields (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "نام کاربری باید شامل حروف انگلیسی بزرگ و کوچک و اعداد و - و . باشد",
    "message_parameters": [],
    "message_code": "400-1",
    "errors": {}
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/user/check_exist' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json' \
--data '{
    "user_name": "username"
}'
```
