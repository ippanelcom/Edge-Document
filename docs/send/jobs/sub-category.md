# Get Jobs Categories

This API allows you to retrieve the list of sub-categories for a specific main job category.

## 📍 Endpoint

```
GET {base_url}/api/send/jobs/sub-categories?main_category_id={category_id}
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter        | Type    | Required | Description                                                |
|------------------|---------|----------|------------------------------------------------------------|
| main_category_id | integer | Yes      | ID of the main job category to retrieve sub-categories for |

## ✅ Success Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "صنفی",
      "main_id": "1",
      "main_name": "صنایع و اصناف"
    },
    {
      "id": 3,
      "name": "قصابان و کاشی‌سازان و فخاران",
      "main_id": "1",
      "main_name": "صنایع و اصناف"
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
    "message": "گزینه انتخاب شده شناسه دسته بندی اصلی صحیح نمی باشد",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "main_category_id": [
        "گزینه انتخاب شده شناسه دسته بندی اصلی صحیح نمی باشد"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/jobs/sub-categories?main_category_id={category_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: APIKEY OR TOKEN'
```
