# Phonebook Number Show
This API allows you to retrieve the details of a specific phonebook contact by its unique identifier. You can use this endpoint to get information such as the contact's name, number, email, and associated tags.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/numbers/contact-list/{contact_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- |----------|-------------|
| contact_id | string | Yes      | The unique identifier of the contact whose details you want to retrieve. |

## ✅ Success Response

```json
{
  "data": {
    "id": 1234,
    "phonebook_id": 12345,
    "pre": "آقای",
    "name": "حسن",
    "email": "",
    "number": "+98912000000",
    "created_at": "2025-05-18T10:40:47+00:00",
    "updated_at": "2025-05-18T10:40:47+00:00",
    "phonebook_title": "title",
    "is_send_blacklist": true,
    "is_receive_blacklist": false,
    "tags": [
      {
        "id": 10,
        "number_id": "123",
        "phonebook_id": "12345",
        "tag": "tag test",
        "created_at": "2025-05-19T11:51:07.687000Z",
        "updated_at": "2025-05-19T11:51:07.687000Z"
      }
    ]
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
curl --location '{base_url}/api/phonebooks/numbers/contact-list/{contact_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
