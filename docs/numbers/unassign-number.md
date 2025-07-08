# Unassign Number
This API allows you to unassign a number from a user.

## 📍 Endpoint

```
POST {base_url}/api/numbers/unassign
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "number_id": 10,
  "target_user_id": 123,
  "number": "+983000505",
  "target_user": "testuser"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| number_id | integer | Yes | The ID of the number to be assigned. |
| target_user_id | integer | Yes | The ID of the user to whom the number will be assigned. |
| number | string | No | The number in E.164 format to be assigned. |
| target_user | string | No | The username of the user to whom the number will be assigned. |


## 📝 Notes
- `number_id`  Required if `number` is not provided.
- `target_user_id` Required if `target_user` is not provided.
- `number`        Required if `number_id` is not provided.
- `target_user`    Required if `target_user_id` is not provided.


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
    "message": "تکمیل گزینه number id الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "number_id": [
        "تکمیل گزینه number id الزامی است"
      ],
      "number": [
        "تکمیل گزینه number الزامی است"
      ]
    }
  }
}
```

## ❌ Error Response — Invalid Request (400)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "number not assigned to user",
    "message_parameters": [],
    "message_code": "400-1",
    "errors": {}
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/numbers/unassign' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data '{
    "number_id": 10,
    "target_user_id": 123,
    "number": "+983000505",
    "target_user": "testuser"
}'
```
