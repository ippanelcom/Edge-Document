# Phonebook Number Import
This API allows you to import phonebook numbers into a specific phonebook.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks/{phonebook_id}/import
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |


## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
|-----------|------| -------- |-----------------------------------------------------------------------|
| file      | file | Yes | The file to be imported, must be a valid Excel file containing phone numbers. |

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
curl --location --globoff '{base_url}/api/phonebooks/12345/import' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--form 'file=@"/phonebook-import.xlsx"'
```
