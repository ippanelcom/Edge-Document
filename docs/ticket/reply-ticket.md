# Reply To Ticket
This API allows you to reply to a specific ticket.

## 📍 Endpoint

```
POST {base_url}/api/ticket/interaction
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | multipart/form-data |

## 📤 Request Body

```json
{
  "ticket_id": 100001,
  "description": "Sample reply",
  "file": "file1.zip"
}
```

## 📝 Parameters

| Parameter | Type    | Required | Description |
| --------- |---------| -------- | ----------- |
| ticket_id | integer | Yes | The ID of the ticket you are replying to. |
| description | string  | Yes | The content of your reply. |
| file | file    | No  | An optional file attachment for your reply. ormat and can be a zip file or jpg/png type. The maximum file size is 10 MB. |

## ✅ Success Response

```json
{
  "data": {
    "interaction_id": 400001,
    "ticket": {
      "id": 100001,
      "user_id": 200001,
      "parent_id": 300001
    }
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
    "message": "تکمیل گزینه ticket id الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "ticket_id": [
        "تکمیل گزینه ticket id الزامی است"
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
curl --location '{base_url}/api/ticket/interaction' \
--header 'Content-Type: multipart/form-data' \
--header 'Authorization: Your Apikey/Token' \
--form 'ticket_id="100001"' \
--form 'description="Sample reply"' \
--form 'file=@"/path/to/your/file.zip"'
```
