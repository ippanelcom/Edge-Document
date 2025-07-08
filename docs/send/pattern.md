# Send Pattern SMS
This API allows you to send messages using a pattern.

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
  "sending_type": "pattern",
  "from_number": "+983000505",
  "code": "xxxxxxxxxxxxxxx",
  "recipients": [
    "+989120000000"
  ],
  "params": {
    "code": "متن جایگذاری"
  }
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- | -------- |-----------------------------------------------------------------------|
| sending_type | string | Yes | Type of sending, must be "pattern" for this endpoint                  |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505)              |
| code | string | Yes | The pattern code to be used for sending the message                   |
| recipients | array | Yes | List of recipient phone number in E.164 format (e.g., +989120000000). Only one recipient is allowed for this endpoint. |
| params | object | Yes | Object containing parameters to replace in the pattern code. The keys must match the placeholders in the pattern. |

## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `recipients` array must contain valid phone numbers in E.164 format.
- The `params` object must contain key-value pairs where keys match the placeholders in the pattern code.


## ✅ Success Response

```json
{
  "data": {
    "message_outbox_ids": [
      1123594208
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
    "sending_type": "pattern",
    "from_number": "+983000505",
    "code": "xxxxxxxxxxxxxxx",
    "recipients": [
        "+989120000000"
    ],
    "params": {
        "code": "متن جایگذاری"
    }
}'
```
