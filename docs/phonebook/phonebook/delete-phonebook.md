# Delete Phonebook
This API allows you to delete list of phonebook entries by their IDs.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks/delete-list
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "listPhonebooks": [
    860108
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- | -------- |-----------------------------------------------------------------------|
| listPhonebooks | array | Yes      | An array of phonebook IDs to be deleted. Each ID must be a valid integer. |


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
curl --location '{base_url}/api/phonebooks/delete-list' \
--header 'Authorization: Your Apikey/Token' \
--header 'Content-Type: application/json' \
--data '{
    "listPhonebooks": [
        860108
    ]
}'
```
