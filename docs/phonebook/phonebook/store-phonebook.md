# Store Phonebook
This API allows you to create a new phonebook entry.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title": "تست",
  "options": [
    "123",
    "456"
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                       |
| --------- | ---- |----------|-------------------------------------------------------------------|
| title     | string | Yes      | The title of the phonebook entry. Maximum 200 characters.         |
| options   | array  | No       | An array of option ids to be associated with the phonebook entry. |


## ✅ Success Response

```json
{
  "data": {
    "id": 1234,
    "title": "تست",
    "count": "0",
    "export_status": null,
    "import_status": null,
    "created_at": "2024-08-12T08:52:17+00:00",
    "options": [
      {
        "id": 123,
        "title": "نام خانوادگی",
        "type": "string"
      },
      {
        "id": 456,
        "title": "نام",
        "type": "string"
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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه عنوان الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "title": [
        "تکمیل گزینه عنوان الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/phonebooks' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "title": "تست",
    "options": [
        "123",
        "456"
    ]
}'
```
