# Get Provinces

This API allows you to retrieve the list of provinces in Iran, which can be used to filter recipients based on their location.

## 📍 Endpoint

```
GET {base_url}/v2/api/send/banks/provinces
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
      "id": 89,
      "name": "تهران"
    },
    {
      "id": 90,
      "name": "یزد"
    },
    {
      "id": 91,
      "name": "کرمانشاه"
    },
    {
      "id": 92,
      "name": "اصفهان"
    },
    {
      "id": 93,
      "name": "قزوین"
    },
    {
      "id": 94,
      "name": "آذربایجان شرقی"
    },
    {
      "id": 95,
      "name": "گلستان"
    },
    {
      "id": 96,
      "name": "همدان"
    },
    {
      "id": 97,
      "name": "کرمان"
    },
    {
      "id": 98,
      "name": "خراسان شمالی"
    },
    {
      "id": 99,
      "name": "زنجان"
    },
    {
      "id": 100,
      "name": "لرستان"
    },
    {
      "id": 101,
      "name": "سیستان وبلوچستان"
    },
    {
      "id": 102,
      "name": "البرز"
    },
    {
      "id": 103,
      "name": "سمنان"
    },
    {
      "id": 104,
      "name": "بوشهر"
    },
    {
      "id": 105,
      "name": "کردستان"
    },
    {
      "id": 106,
      "name": "هرمزگان"
    },
    {
      "id": 107,
      "name": "گیلان"
    },
    {
      "id": 108,
      "name": "کهگیلویه وبویراحمد"
    },
    {
      "id": 109,
      "name": "مازندران"
    },
    {
      "id": 110,
      "name": "فارس"
    },
    {
      "id": 111,
      "name": "خوزستان"
    },
    {
      "id": 112,
      "name": "چهارمحال وبختیاری"
    },
    {
      "id": 113,
      "name": "آذربایجان غربی"
    },
    {
      "id": 114,
      "name": "قم"
    },
    {
      "id": 115,
      "name": "اردبیل"
    },
    {
      "id": 116,
      "name": "مرکزی"
    },
    {
      "id": 117,
      "name": "خراسان رضوی"
    },
    {
      "id": 118,
      "name": "ایلام"
    },
    {
      "id": 119,
      "name": "خراسان جنوبی"
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
curl --location '{base_url}/v2/api/send/banks/provinces' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' '
```
