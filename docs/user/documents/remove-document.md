# Remove User Document
This API allows you to remove user document.

## 📍 Endpoint

```
GET {base_url}/api/user/documents/remove
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "document_id": "6"
}
```

## 📝 Parameters

| Parameter   | Type   | Required | Description                            |
|-------------|--------|----------|----------------------------------------|
| document_id | string | Yes      | The ID of document you want to remove. |

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
curl '{base_url}/api/user/documents/remove' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'Authorization: your-api-token' \
  -H 'content-type: application/json' \
  --data-raw '{"document_id":6}'
```
