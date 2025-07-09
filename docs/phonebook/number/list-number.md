# Phonebook Number List
This API allows you to retrieve a list of all phonebook numbers.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/numbers/contact-list
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- |----------| ----------- |
| from_created_at   | string | No       | Timestamp to filter numbers created after this date. Format: Unix timestamp (seconds since epoch). |
| number            | string | No       | Phone number to filter by. Format: E.164 (e.g., +989121234568). |
| phonebook_title   | string | No       | Title of the phonebook to filter by. |
| phonebook_id      | string | No       | ID of the phonebook to filter by. |
| page      | integer | No       | The page number for pagination (default is 1)               |
| per_page  | integer | No       | The number of entries per page (default is 10, max is 1000) |

## ✅ Success Response

```json
{
  "data": [
    {
      "id": 1233,
      "phonebook_id": 123456,
      "pre": "",
      "name": "",
      "email": "",
      "number": "+989123456788",
      "created_at": "2025-04-19T11:11:41+00:00",
      "updated_at": "2025-04-19T11:12:51+00:00",
      "phonebook_title": "تست 3532"
    },
    {
      "id": 1234,
      "phonebook_id": 123456,
      "pre": "",
      "name": "",
      "email": "",
      "number": "+989123456789",
      "created_at": "2025-04-19T11:11:41+00:00",
      "updated_at": "2025-04-19T11:12:51+00:00",
      "phonebook_title": "تست 3532"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "{base_url}/api/phonebooks/numbers/contact-list",
    "per_page": 10,
    "to": 2,
    "total": 2,
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
curl --location '{base_url}/api/phonebooks/numbers/contact-list' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
