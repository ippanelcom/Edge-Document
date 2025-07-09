# Update Phonebook
This API allows you to update an existing phonebook entry by its ID.

## 📍 Endpoint

```
PUT {base_url}/api/phonebooks/{phonebook_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title": "title",
  "options": [
    "123"
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                         |
| --------- | ---- |----------|---------------------------------------------------------------------|
| phonebook_id | string | Yes      | The unique identifier of the phonebook entry you want to update.    |
| title     | string | No       | The title of the phonebook entry. Maximum length is 200 characters. |
| options   | array  | No       | An array of option ids to be associated with the phonebook entry.   |

## ✅ Success Response

```json
{
  "data": null,
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
curl --location '{base_url}/api/send' \
curl --location --globoff --request PUT '{base_url}/api/phonebooks/{phonebook_id}' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "title": "title",
    "options": [
        "123"
    ]
}'
```
