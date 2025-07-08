# Create Draft Group
This API allows you to create a new draft group. 

⚠️ Important: You can create a maximum of 20 draft groups. If you try to create more, you will receive an error.

## 📍 Endpoint

```
POST {base_url}/api/user/draft/group
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title":"عنوان گروه پیش‌نویس"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| title     | string | Yes      | The title of the draft group you want to create. The maximum length is 200 characters.|

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
    "message": "تکمیل گزینه title الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "title": [
        "تکمیل گزینه title الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/user/draft/group' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data-raw '{
    "title": "عنوان گروه پیش‌نویس"
}'
```
