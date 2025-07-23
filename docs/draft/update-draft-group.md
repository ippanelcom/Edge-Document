# Update Draft Group

This API allows you to update an existing draft group by providing its ID and a new title. The title must not exceed 200 characters.

## 📍 Endpoint

```
PUT {base_url}/api/user/draft/group
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "draft_group_id": 56570,
  "title": "عنوان گروه پیش‌نویس"
}
```

## 📝 Parameters

| Parameter      | Type    | Required | Description                                                                            |
|----------------|---------|----------|----------------------------------------------------------------------------------------|
| draft_group_id | integer | Yes      | The ID of the draft group you want to update. This is required to identify the group.  |
| title          | string  | Yes      | The title of the draft group you want to update. The maximum length is 200 characters. |

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
curl --location --request PUT '{base_url}/api/user/draft/group' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "draft_group_id": 56570,
    "title": "عنوان گروه پیش‌نویس"
}'
```
