# My Credit
This API allows you to check your current credit balance.

## 📍 Endpoint

```
GET {base_url}/api/payment/credit/mine
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## ✅ Success Response

```json
{
  "data": {
    "credit": 6084722932.705052,
    "yesterday_credit": 195251925510.55,
    "gift": 0,
    "gift_expires_at": null,
    "updated_at": "2025-06-30 18:07:06"
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
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
curl --location '{base_url}/api/payment/credit/mine' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
