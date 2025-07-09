# Phonebook Number Sample Import
This API allows you to get a sample import number for a specific phonebook. This is useful for understanding the format required for importing numbers.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/{phonebook_id}/import/get-sample
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description                                                          |
| --------- | ---- | -------- |----------------------------------------------------------------------|
| phonebook_id | string | Yes | The ID of the phonebook |

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
curl --location '{base_url}/api/phonebooks/12345/import/get-sample' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
