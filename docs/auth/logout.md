# Logout

This endpoint allows users to log out and invalidate their authentication token.

## 📍 Endpoint

```
POST {base_url}/api/acl/auth/logout
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## ✅ Success Response

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
curl --location '{base_url}/api/acl/auth/logout' \
--header 'Content-Type: application/json' \
--header 'Authorization: your-token'
```
