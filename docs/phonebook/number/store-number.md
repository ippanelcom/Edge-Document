# Phonebook Number Store
This API allows you to add new contacts to your phonebook in bulk. You can specify multiple contacts in a single request, including their phone numbers, names, email addresses, and additional options.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks/numbers/add-list-new
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "list": [
    {
      "number": "+989121236547",
      "pre": "آقای",
      "name": "حسن",

      "email" : "hasan@gmail.com",
      "options": {
        "46258": "15",
        "46027" : "1992/10/08"
      },
      "phonebook_id": "1234"
    }
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- |----------|-----------------------------------------------------------------------|
| list      | array | Yes      | An array of objects containing phonebook numbers entries to be added. |
| number    | string | Yes      | The phone number in E.164 format.                                     |
| pre | string | No       | The prefix for the name (e.g., Mr., Ms.).                             |
| name      | string | No       | The name of the contact.                                              |
| email     | string | No       | The email address of the contact.                                     |
| options   | object | No       | Additional options as key-value pairs.                                |
| phonebook_id | string | Yes      | The ID of the phonebook to which the contact belongs.                 |

## 📝 Notes
- The `options` object can contain any additional fields you want to store for the contact, such as custom fields or metadata. Key names in the `options` object should be existing option IDs from your phonebook configuration.


## ✅ Success Response

```json
{
  "data": {
    "added": 1,
    "errors": 0,
    "existences": 0
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "201-1"
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
curl --location '{base_url}/api/phonebooks/numbers/add-list-new' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "list": [
        {
            "number": "+989121236547",
            "pre": "آقای",
            "name": "حسن",
            "options": {
                "46258": "15",
                "46027" : "1992/10/08"
            },
            "phonebook_id": "1234"
        }
    ]
}'
```
