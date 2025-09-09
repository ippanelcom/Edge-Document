# Get Jobs Categories

This API allows you to retrieve the list of job categories available for sending messages.

## 📍 Endpoint

```
GET {base_url}/api/send/jobs/categories
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |


## ✅ Success Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "صنایع و اصناف"
    },
    {
      "id": 2,
      "name": "املاک، خودرو و حمل و نقل"
    },
    {
      "id": 3,
      "name": "رستوران و صنعت غذا"
    },
    {
      "id": 4,
      "name": "عکاسان و خدمات الکترونیکی و رایانه‌ای"
    },
    {
      "id": 5,
      "name": "پوشاک و صنایع مرتبط"
    },
    {
      "id": 6,
      "name": "لوازم خانگی، تاسیسات و صنعت ساختمان"
    },
    {
      "id": 7,
      "name": "سایر"
    },
    {
      "id": 8,
      "name": "سلامت، زیبایی و لوازم شخصی"
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

## 🧪 Example Request

```bash
curl --location '{base_url}/api/send/jobs/categories' \
--header 'Content-Type: application/json' \
--header 'Authorization: APIKEY OR TOKEN'
```
