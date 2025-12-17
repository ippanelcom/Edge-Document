# Upload User Document
This API allows you to upload user document.

## 📍 Endpoint

```
GET {base_url}/api/user/documents/upload
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "document_id": "6",
  "files[]": "file.xlsx"
}
```

## 📝 Parameters

| Parameter   | Type   | Required | Description                                                                       |
|-------------|--------|----------|-----------------------------------------------------------------------------------|
| document_id | string | Yes      | The ID of document you want to upload.                                            |
| files[]     | file   | Yes      | File containing the phone numbers and any additional data needed for placeholders |

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
curl --location '{base_url}/api/user/documents/upload' \
--header 'Content-Type: multipart/form-data' \
--header 'Authorization: your-api-token' \
--form 'document_id="6"' \
--form 'files[0]=@"1.png"' \
--form 'files[1]=@"2.png"'
```
