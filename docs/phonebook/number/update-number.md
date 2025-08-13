# Phonebook Number Update

This API allows you to update an existing phonebook contact by its ID. You can modify the contact's name, number, email,
and additional options.

## 📍 Endpoint

```
PUT {base_url}/api/phonebooks/numbers/update-new/{contact_id}
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "pre": "Mr.",
  "name": "name",
  "number": "+989121236547",
  "options": {
    "124": "2025-05-20"
  },
  "phonebook_id": "12345"
}
```

## 📝 Parameters

| Parameter    | Type   | Required | Description                                           |
|--------------|--------|----------|-------------------------------------------------------|
| number       | string | Yes      | The phone number in E.164 format.                     |
| pre          | string | No       | The prefix for the name (e.g., Mr., Ms.).             |
| name         | string | No       | The name of the contact.                              |
| email        | string | No       | The email address of the contact.                     |
| options      | object | No       | Additional options as key-value pairs.                |
| phonebook_id | string | Yes      | The ID of the phonebook to which the contact belongs. |

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

## 🧪 Example Request

```bash
curl --location --globoff --request PUT '{base_url}/api/phonebooks/numbers/update-new/234235' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "pre": "Mr.",
    "name": "name",
    "number": "+989121236547",
    "options": {
      "124": "2025-05-20"
    },
    "phonebook_id": "12345"
}'
```
