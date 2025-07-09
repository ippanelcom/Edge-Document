# Phonebook Number Delete
This API allows you to delete a list of phone numbers from your phonebook. You can specify multiple numbers to be deleted in a single request.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks/numbers/delete-list
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "listNumbers": [
    1234
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- |----------|-----------------------------------------------------------------------|
| listNumbers | array | Yes      | An array of phone numbers to be deleted from the phonebook. The numbers should be in integer format. |




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
curl --location '{base_url}/api/phonebooks/numbers/add-list-new' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
    "listNumbers": [
       1234
    ]
}'
```
