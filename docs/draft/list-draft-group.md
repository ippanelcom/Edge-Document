# List Draft Groups
This API allows you to list all draft groups under your account.

## 📍 Endpoint

```
GET {base_url}/api/user/draft/group/list
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## ✅ Success Response

```json
{
  "data": [
    {
      "title": "Sample Draft",
      "draft_group_id": 10001,
      "user_id": 20001,
      "time": 1700000000
    },
    {
      "title": "Sample Draft",
      "draft_group_id": 10002,
      "user_id": 20001,
      "time": 1700001000
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 10,
    "to": 2,
    "total": 2,
    "status": true,
    "message": "Success",
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
curl --location '{base_url}/api/user/draft/group/list' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
