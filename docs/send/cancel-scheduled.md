# Cancel Scheduled Message

Use this API to cancel a message scheduled for future delivery. Note: You can only cancel messages at least 5 minutes before their scheduled send time.

## 📍 Endpoint

```
POST {base_url}/api/send/cancel
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "message_outbox_id": 1148303263
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| message_outbox_id | integer | Yes | The ID of the message you want to cancel. This ID is returned when you send a message. |

## 📝 Notes
- You can only cancel messages that are scheduled for future delivery.


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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه پیام الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "message": [
        "تکمیل گزینه پیام الزامی است"
      ]
    }
  }
}
```

## Error Response — Validation Error (404)
```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "پیام مورد نظر یافت نشد",
    "message_parameters": [],
    "message_code": "400-1",
    "errors": {}
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/cancel' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
    "message_outbox_id":1148303263
}'
```
