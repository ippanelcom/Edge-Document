# Send Keyword SMS

This API allows you to send messages using a keyword.

## 📍 Endpoint

```
POST {base_url}/api/send
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | multipart/form-data |

## 📤 Request Body

```json
{
  "sending_type": "keyword",
  "from_number": "+983000505",
  "message": "سلام {ex_B} م۱ {ex_C}",
  "files[]": "file.xlsx",
  "send_time": "2025-03-12 21:20:02"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| sending_type | string | Yes | Type of sending, must be "keyword" for this endpoint |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505) |
| message | string | Yes | Message content to be sent, can include placeholders for dynamic data |
| files[] | file | Yes | File containing the phone numbers and any additional data needed for placeholders |
| send_time | string | No | Scheduled time for sending the message in YYYY-MM-DD HH:MM:SS format (timezone is UTC) |


## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `send_time` is optional; if not provided, the message will be sent immediately.


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
--header 'Content-Type: multipart/form-data' \
--header 'Accept: application/json' \
--header 'Authorization: API TOKEN' \
--form 'sending_type="keyword"' \
--form 'from_number="+983000505"' \
--form 'message="سلام {ex_B} م۱ {ex_C}"' \
--form 'send_time="2025-04-25 10:10:10"' \
--form 'files[]=@"/path/to/your/file.xlsx"'
```
