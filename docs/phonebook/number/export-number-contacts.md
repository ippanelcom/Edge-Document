# Phonebook Number Contact Export
This API allows you to export phonebook numbers contacts based on specific criteria such as creation date, phonebook title.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/numbers/contact-list/export
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
curl --location '{base_url}/api/phonebooks/numbers/contact-list/export?from_created_at=1745785800&number=+989121234568&phonebook_title=title&phonebook_id=12345' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
