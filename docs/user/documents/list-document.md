# User Document List
This API allows you to retrieve a list of all user documents.

## 📍 Endpoint

```
GET {base_url}/api/user/documents
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## ✅ Success Response

```json
{
  "data": [
    {
      "id": 3,
      "title": "تعهدنامه خرید خط 9000",
      "description": "فرم تعهدنامه جهت درخواست خرید خط با سرشماره 9000",
      "need_file": "1",
      "show_profile": "1",
      "expire_after_days": "0",
      "show_order": "0",
      "file_count": "1",
      "files_structure": null,
      "sample_file": [
        {
          "title": "خرید خط حقوقی",
          "address": "https://cdn.ippanel.com/ippanel/docs/%D8%AD%D9%82%D9%88%D9%82%DB%8C-9000.docx"
        },
        {
          "title": "خرید خط حقیقی",
          "address": "https://cdn.ippanel.com/ippanel/docs/%D8%AD%D9%82%DB%8C%D9%82%DB%8C-9000.docx"
        }
      ],
      "user_document": null
    }
  ],
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
curl --location '{base_url}/api/user/documents' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
