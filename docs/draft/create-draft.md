# Create Draft
This API allows you to create a new draft message under a specific draft group. 

⚠️ Important: You can create a maximum of 200 drafts. If you try to create more, you will receive an error.
## 📍 Endpoint

```
POST {base_url}/api/user/draft
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "draft_group_id":123456,
  "message":"تست پیام پیشفرض"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- |---------| ----------- |
| draft_group_id | integer | Yes     | The ID of the draft group where this draft will be created. |
| message | string | Yes     | The content of the draft message. The maximum length is 1400 characters.|

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
    "message": "تکمیل گزینه draft group id الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "draft_group_id": [
        "تکمیل گزینه draft group id الزامی است"
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
curl --location '{base_url}/api/user/draft' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data-raw '{
    "draft_group_id": 123456,
    "message": "تست پیام پیشفرض"
}'
```
