# Send Peer to Peer by File

This API allows you to send multiple messages to multiple recipients in a peer-to-peer format using a file. Each message can have its own set of recipients.

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
  "sending_type": "peer_to_peer_file",
  "from_number": "+983000505",
  "send_time": "2025-03-12 21:20:02",
  "files[]": "file.csv"
}
```

This request uses `multipart/form-data` format to handle file uploads.

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| sending_type | string | Yes | Type of sending, must be "peer_to_peer_file" for this endpoint |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505) |
| send_time | string | No | Scheduled time for sending the message in YYYY-MM-DD HH:MM:SS. Timezone is UTC. |
| files[] | file | Yes | The file containing recipient numbers and personalized messages. Supported formats: CSV, XLSX |

### File Format

The uploaded file must follow this format:

#### CSV Format
```
recipient,message
09123456789,Personalized message for first recipient
09123456788,Personalized message for second recipient
09123456787,Personalized message for third recipient
```

#### Excel Format
The Excel file should have two columns:
- Column A: Recipient numbers
- Column B: Personalized messages

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
    "message": "تکمیل گزینه فایل ها الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "files": [
        "تکمیل گزینه فایل ها الزامی است"
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
--form 'sending_type="peer_to_peer_file"' \
--form 'from_number="+983000505"' \
--form 'send_time="2025-04-25 10:10:10"' \
--form 'files[]=@"/path/to/your/file.csv"' \
```
