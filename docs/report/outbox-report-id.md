# Get Outbox Report By ID
This API allows you to get a detailed report of a specific sent message using its ID.

## 📍 Endpoint

```
GET {base_url}/api/report/by_bulk?messages_outbox_id={messages_outbox_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| messages_outbox_id | string | Yes | The unique identifier of the sent message to retrieve the report for. |

## ✅ Success Response

```json
{
  "data": {
    "username": "*****",
    "number_color": null,
    "number": "+98votp",
    "number_id": "154845",
    "messages_outbox_id": "5544778899",
    "state": "finish",
    "type": "sendvoice",
    "time_send": "1744121368",
    "time": "1744121368",
    "rcpts_count": "1",
    "exit_count": "1",
    "status": "پایان یافته",
    "return": 0,
    "partner_id": null,
    "in_delivery_line": 0,
    "valid": null,
    "message": "1234",
    "part": "1",
    "cost": 1064,
    "summary": "ارسال کد فعالسازی صوتی : 1234",
    "user_ip": "1.1.0.1",
    "user_id": "99885544",
    "reject_comment": null,
    "files_path": "1/send/SZiasdasdasdgghgf.wav",
    "parent_id": "98554",
    "state_id": 6
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
curl --location --request GET '{base_url}/api/report/by_bulk?messages_outbox_id={messages_outbox_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
