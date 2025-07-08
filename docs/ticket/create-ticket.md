# Create Ticket
This API allows you to create a new ticket.

## 📍 Endpoint

```
POST {base_url}/api/ticket
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | multipart/form-data |

## 📤 Request Body

```json
{
  "subject": "عنوان تیکت",
  "category_id": "123",
  "description": "متن تیکت",
  "sms_notification": "1",
  "file": "file1.zip"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| subject | string | Yes | The subject of the ticket. |
| category_id | string | Yes | The ID of the ticket category. |
| description | string | Yes | The content of the ticket. |
| sms_notification | string | No | If set to "1", the user will receive an SMS notification when the ticket is updated. Default is "0". |
| file | file | No | An optional file to attach to the ticket. |

## ✅ Success Response

```json
{
  "data": {
    "ticket_id": 123456
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
    "message": "تکمیل گزینه subject الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "subject": [
        "تکمیل گزینه subject الزامی است"
      ],
      "category_id": [
        "تکمیل گزینه category_id الزامی است"
      ],
      "description": [
        "تکمیل گزینه description الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/ticket' \
--header 'Content-Type: multipart/form-data' \
--header 'Authorization: Your Apikey/Token' \
--form 'subject="عنوان تیکت"' \
--form 'category_id="123"' \
--form 'description="متن تیکت"' \
--form 'sms_notification="1"' \
--form 'file=@"/path/to/your/file.zip"'
```
