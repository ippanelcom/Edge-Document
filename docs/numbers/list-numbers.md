# List Numbers
This API allows you to list all numbers that belong to users.

## 📍 Endpoint

```
GET {base_url}/api/number/numbers?page=1&per_page=10
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| page      | int  | No       | Page number for pagination (default is 1) |
| per_page  | int  | No       | Number of items per page (default is 10) |


## ✅ Success Response

```json
{
  "data": [
    {
      "id": 10001,
      "number": "+981234567890",
      "operator_id": 1,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10002,
      "number": "+981234567891",
      "operator_id": 2,
      "alias": "Sample Alias",
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10003,
      "number": "+981234567892",
      "operator_id": 3,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10004,
      "number": "+981234567893",
      "operator_id": 4,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10005,
      "number": "+981234567894",
      "operator_id": 5,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    }
  ],
  "meta": {
    "status": true,
    "message": "Success",
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
curl --location '{base_url}/api/number/numbers?page=1&per_page=10' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
