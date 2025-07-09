# Get Cities

This API allows you to retrieve the list of cities in a specific county, which can be used to filter recipients based on their location.

## 📍 Endpoint

```
GET {base_url}/api/send/banks/cities?county_id={county_id}
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter       | Type    | Required | Description                                                          |
|-----------------|---------|----------|----------------------------------------------------------------------|
| county_id       | integer | Yes      | ID of the county to retrieve cities for                             |



## ✅ Success Response

```json
{
  "data": [
    {
      "id": 12,
      "name": "بیرجند"
    }
  ],
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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "گزینه انتخاب شده county id صحیح نمی باشد",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "county_id": [
        "گزینه انتخاب شده county id صحیح نمی باشد"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/banks/cities?county_id={county_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' '
```
