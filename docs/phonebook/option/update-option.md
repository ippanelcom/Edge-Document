# Phonebook Option Update
This API allows you to update a phonebook option.

## 📍 Endpoint

```
PUT {base_url}/api/phonebooks/options/{option_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title": "option1"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                |
| --------- | ---- |----------|------------------------------------------------------------|
| title     | string | No       | The title of the option.                                   |


## ✅ Success Response

```json
{
  "data": true,
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
curl --location --globoff --request PUT '{base_url}/api/phonebooks/options/12345' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--data '{
    "title": "option1"
}'
```
