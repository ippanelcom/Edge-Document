# Delete Pattern
This API allows you to delete an existing pattern by its code.

## 📍 Endpoint

```
DELETE {base_url}/api/patterns/normal/{pattern_code}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description                                                          |
| --------- | ---- | -------- |----------------------------------------------------------------------|
| pattern_code | string | Yes      | The code of the pattern you want to delete.                    |

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

## ❌ Error Response — Pattern Not Found (404)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "پترن مورد نظر یافت نشد",
    "message_parameters": [],
    "message_code": "404-1",
    "errors": {}
  }
}
```

## 🧪 Example Request

```bash
curl --location --request DELETE '{base_url}/api/patterns/normal/zcxxc465465zxc' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
