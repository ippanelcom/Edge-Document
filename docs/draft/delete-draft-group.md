# Delete Draft Group

This API allows you to delete an existing draft group by providing its ID. This is useful for managing your draft groups and keeping your drafts organized.

⚠️ If you delete a draft group, all drafts within that group will also be deleted.

## 📍 Endpoint

```
POST {base_url}/api/user/draft/group/delete
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "draft_group_id": 56570
}
```

## 📝 Parameters

| Parameter      | Type    | Required | Description                                                                           |
|----------------|---------|----------|---------------------------------------------------------------------------------------|
| draft_group_id | integer | Yes      | The ID of the draft group you want to delete. This is required to identify the group. |

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
curl --location '{base_url}/api/user/draft/group/delete' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "draft_group_id": 56570
}'
```
