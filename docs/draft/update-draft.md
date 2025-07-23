# Update Draft

This API allows you to create a new draft message under a specific draft group.

⚠️ Important: Maximum length for the `message` field is 1400 characters.

## 📍 Endpoint

```
PUT {base_url}/api/user/draft
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "draft_id": 123456,
  "message": "تست پیام پیشفرض"
}
```

## 📝 Parameters

| Parameter | Type    | Required | Description                                                              |
|-----------|---------|----------|--------------------------------------------------------------------------|
| draft_id  | integer | Yes      | The unique identifier of the draft you want to update.                   |
| message   | string  | Yes      | The content of the draft message. The maximum length is 1400 characters. |

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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه draft id الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "draft_id": [
        "تکمیل گزینه draft id الزامی است"
      ],
      "message": [
        "تکمیل گزینه message الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location --request PUT '{base_url}/api/user/draft' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "draft_id":123456,
    "message":"تست پیام پیشفرض"
}'
```
