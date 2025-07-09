# Get Counties

This API allows you to retrieve the list of counties in a specific province, which can be used to filter recipients based on their location.

## 📍 Endpoint

```
GET {base_url}/api/send/banks/counties?province_id={province_id}
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter       | Type    | Required | Description                                                          |
|-----------------|---------|----------|----------------------------------------------------------------------|
| province_id     | integer | Yes      | ID of the province to retrieve counties for                         |



## ✅ Success Response

```json
{
  "data": [
    {
      "id": 147,
      "name": "بیرجند"
    },
    {
      "id": 246,
      "name": "نامشخص"
    },
    {
      "id": 884,
      "name": "طبس"
    },
    {
      "id": 901,
      "name": "قائنات"
    },
    {
      "id": 990,
      "name": "بشرویه"
    },
    {
      "id": 1026,
      "name": "خوسف"
    },
    {
      "id": 1031,
      "name": "درمیان"
    },
    {
      "id": 1053,
      "name": "زیرکوه"
    },
    {
      "id": 1056,
      "name": "سرایان"
    },
    {
      "id": 1058,
      "name": "سربیشه"
    },
    {
      "id": 1080,
      "name": "فردوس"
    },
    {
      "id": 1110,
      "name": "نهبندان"
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
    "message": "گزینه انتخاب شده province id صحیح نمی باشد",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "province_id": [
        "گزینه انتخاب شده province id صحیح نمی باشد"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/banks/counties?province_id={province_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' '
```
