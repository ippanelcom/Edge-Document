# Get Genders

This API allows you to retrieve the list of Genders, which can be used to filter recipients based on 

## 📍 Endpoint

```
GET {base_url}/api/send/banks/genders
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
      "id": 1,
      "name": "مرد"
    },
    {
      "id": 2,
      "name": "زن"
    },
    {
      "id": 3,
      "name": "سازمانی- حقوقی"
    }
  ]
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
curl --location '{base_url}/api/send/banks/genders' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' '
```
