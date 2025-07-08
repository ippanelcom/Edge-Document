# Check Token

This endpoint allows you to validate your authentication token and get the associated user information.

## 📍 Endpoint

```
POST {base_url}/api/acl/auth/check_token
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type  | application/json |

## ✅ Success Response

```json
{
  "data": {
    "user_name": "ippanel",
    "user_id": 58745,
    "document_block": false,
    "is_reseller": true,
    "send_block": false,
    "name": "test"
  },
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
curl --location '{base_url}/api/acl/auth/check_token' \
--header 'Content-Type: application/json' \
--header 'Authorization: your-token'
```
