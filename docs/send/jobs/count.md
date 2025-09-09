# Get Recipients Count

This API allows you to retrieve the count of recipients based on various filters such as birth year, province, county,
city

## 📍 Endpoint

```
GET {base_url}/api/send/jobs/number-count?main_category_id={category_id}
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter        | Type    | Required | Description                                                          |
|------------------|---------|----------|----------------------------------------------------------------------|
| main_category_id | integer | Yes      | ID of the main job category                                          |
| sub_category_id  | integer | No       | ID of the sub-category within the main job                           |
| operator_id      | integer | No       | ID of the mobile operator (1 for MCI, 2 for Irancell, 13 for Others) |
| start            | integer | No       | Starting index for recipients                                        |
| size             | integer | No       | Number of recipients to send                                         |

## ✅ Success Response

```json
{
  "data": {
    "mci_count": 15322,
    "irancell_count": 0,
    "other_count": 0
  },
  "meta": {
    "status": true,
    "message": "count",
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
    "message": "گزینه انتخابی شناسه دسته بندی اصلی صحیح نمی باشد",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "main_category_id": [
        "گزینه انتخابی شناسه دسته بندی اصلی صحیح نمی باشد"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/jobs/number-count?main_category_id={category_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: APIKEY OR TOKEN' '
```
