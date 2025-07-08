# Send File SMS

This API allows you to send messages using a file containing phone numbers.

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
  "sending_type": "file",
  "from_number": "+983000505",
  "message": "متن پیام",
  "files[]": "file.csv",
  "send_time": "2025-03-12 21:20:02",
  "other_recipients": [
    "+989120000000",
    "+989350000000"
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| sending_type | string | Yes | Type of sending, must be "file" for this endpoint |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505) |
| message | string | Yes | Message content to be sent to the recipients |
| files[] | file | Yes | File containing phone numbers, must be in CSV or XLSX format |
| send_time | string | No | Scheduled time for sending the message in YYYY-MM-DD HH:MM:SS format (timezone is UTC) |
| other_recipients | array | No | Additional recipients in E.164 format (e.g., +989120000000) |


## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `send_time` is optional; if not provided, the message will be sent immediately.
- The `files[]` parameter must contain a valid file with phone numbers. The file can be in CSV or XLSX format.
- The `other_recipients` array is optional and can be used to add additional recipients not included in the file.


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
--form 'sending_type="file"' \
--form 'from_number="+983000505"' \
--form 'message="متن پیام"' \
--form 'files[]=@"/path/to/your/file.csv"' \
--form 'send_time="2025-03-12 21:20:02"' \
--form 'other_recipients[]="+989120000000"' \
--form 'other_recipients[]="+989350000000"'
```
