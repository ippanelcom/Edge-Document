# List Draft
This API allows you to list all drafts under a specific draft group.

## 📍 Endpoint

```
GET {base_url}/api/user/draft/list?draft_group_id={draft_group_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- |----------| ----------- |
| draft_group_id | integer | No       | The ID of the draft group to list drafts from. |

⚠️ Important: To exclude a filter from the query, do not include it at all in the request. Avoid sending it with an empty string or null value.

## ✅ Success Response

```json
{
  "data": [
    {
      "draft_group_id": 10001,
      "user_id": 20001,
      "draft_id": 30001,
      "time": 1700000000,
      "message": "Sample default message",
      "type": "normal"
    },
    {
      "draft_group_id": 10001,
      "user_id": 20001,
      "draft_id": 30002,
      "time": 0,
      "message": "Sample default message",
      "type": "normal"
    },
    {
      "draft_group_id": 10002,
      "user_id": 20001,
      "draft_id": 30003,
      "time": 1700001000,
      "message": "Another sample message",
      "type": "normal"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 10,
    "to": 3,
    "total": 3,
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
curl --location '{base_url}/api/user/draft/list?draft_group_id=10001' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
