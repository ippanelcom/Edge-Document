# Send Peer to Peer SMS

This API allows you to send multiple messages to multiple recipients in a peer-to-peer format. Each message can have its own set of recipients.

## 📍 Endpoint

```
POST {base_url}/api/send
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "sending_type": "peer_to_peer",
  "from_number": "+983000505",
  "params": [
    {
      "recipients": [
        "+989120000000",
        "+989350000000"
      ],
      "message": "پیام اول"
    },
    {
      "recipients": [
        "+989130000000"
      ],
      "message": "پیام دوم"
    }
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| sending_type | string | Yes | Type of sending, must be "peer_to_peer" for this endpoint |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505) |
| params | array | Yes | Array of objects containing recipients and messages |
| recipients | array | Yes | List of recipient phone numbers in E.164 format (e.g., +989120000000) |
| message | string | Yes | Message content to be sent to the recipients |
| send_time | string | No | Scheduled time for sending the message in YYYY-MM-DD HH:MM:SS.timezone is UTC. |

## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `recipients` array must contain valid phone numbers in E.164 format.
- The `send_time` is optional; if not provided, the message will be sent immediately.


## ✅ Success Response

```json
{
  "data": {
    "message_outbox_ids": [
      1123594208,
      1123594210
    ]
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```
The response returns an array of message_outbox_ids – one ID per message sent (regardless of how many recipients it had).
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

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
    "sending_type": "peer_to_peer",
    "from_number": "+983000505",
    "params": [
        {
            "recipients": [
                "+989120000000",
                "+989350000000"
            ],
            "message": "پیام اول"
        },
        {
            "recipients": [
                "+989130000000"
            ],
            "message": "پیام دوم"
        }
    ]
}'
```
