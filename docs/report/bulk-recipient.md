# Get Bulk Recipients
This API allows you to get the recipients of a specific sent message using its ID. If the message status is finalized, the delivery status for each recipient will also be returned.

## 📍 Endpoint

```
GET {base_url}/api/report/recipients?page=1&per_page=10&bulk_id={messages_outbox_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| bulk_id   | string | Yes      | The ID of the sent message to retrieve recipients for. |
| page      | integer | No       | The page number for pagination (default is 1). |
| per_page  | integer | No       | The number of recipients per page (default is 10). |

## ✅ Success Response

```json
{
  "data": [
    {
      "recipient": "+989190000000",
      "message": "متن پیام",
      "is_readable": true,
      "msg_parts": "1",
      "message_status": "1"
    },
    {
      "recipient": "+989120000000",
      "message": "با سلام",
      "is_readable": true,
      "msg_parts": "1",
      "message_status": "1"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/report/recipients",
    "per_page": 10,
    "to": 2,
    "total": 2,
    "status": true,
    "message": "انجام شد",
    "message_code": "200-1"
  }
}
```
`message_status` field can have the following values:

- `0`: Sent to the operator
- `1`: Operator received the message
- `2`: Message delivered to the recipient
- `3`: Message not delivered to the recipient
- `4`: Blacklisted number

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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه bulk_id الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "bulk_id": [
        "تکمیل گزینه bulk_id الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/report/recipients?page=1&per_page=10&bulk_id={messages_outbox_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
