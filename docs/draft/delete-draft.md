# Delete Draft

This API allows you to delete one or more draft messages. You can specify the draft IDs you want to delete, and the API
will remove them from your account.

## 📍 Endpoint

```
POST {base_url}/api/user/draft/delete
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "draft_ids": [
    100626
  ]
}
```

## 📝 Parameters

| Parameter | Type  | Required | Description                                                                                     |
|-----------|-------|----------|-------------------------------------------------------------------------------------------------|
| draft_ids | array | Yes      | An array of draft IDs to delete. You can specify multiple IDs to delete several drafts at once. |

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
curl --location '{base_url}/api/user/draft/delete' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "draft_ids":[100626]
}'
```
