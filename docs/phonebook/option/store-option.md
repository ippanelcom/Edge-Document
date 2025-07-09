# Phonebook Option Store
This API allows you to store a phonebook option.

## 📍 Endpoint

```
POST {base_url}/api/phonebooks/options
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "type": "int",
  "title": "option1"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                |
| --------- | ---- |----------|------------------------------------------------------------|
| type      | string | Yes      | The type of the option. Can be `int`, `string`, or `date`. |
| title     | string | Yes      | The title of the option.                                   |


## ✅ Success Response

```json
{
  "data": {
    "id": 123456,
    "title": "option1",
    "type": "int",
    "created_at": "2025-05-19T08:47:27+00:00"
  },
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

## 🧪 Example Request

```bash
curl --location --globoff '{base_url}/api/phonebooks/options' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--data '{
    "type": "int",
    "title": "option1"
}'
```
