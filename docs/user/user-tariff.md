# User Tariff

This API allows you to retrieve the tariff information for a specific user. It provides details about the available
tariffs, including operator IDs, names, and pricing in both Persian and English formats.

## 📍 Endpoint

```
GET {base_url}/api/user/get_tariff
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
      "operator_id": 84,
      "name": "پیام صوتی کد فعالسازی",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 84,
      "name": "پیام صوتی کد فعالسازی",
      "persian_other": "1330.0",
      "english_other": "3325.0"
    },
    {
      "operator_id": 4,
      "name": "1000",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 4,
      "name": "1000",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 34,
      "name": "2000",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 34,
      "name": "2000",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 7,
      "name": "3000",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 7,
      "name": "3000",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 8,
      "name": "50001-50009",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 8,
      "name": "50001-50009",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 40,
      "name": "50004",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 40,
      "name": "50004",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 6,
      "name": "خط ثابت",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 6,
      "name": "خط ثابت",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 36,
      "name": "BTS",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 36,
      "name": "BTS",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 92,
      "name": "998",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 92,
      "name": "998",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 3,
      "name": "9000clubs",
      "persian_mci": "2660.0",
      "english_mci": "6650.0"
    },
    {
      "operator_id": 3,
      "name": "9000clubs",
      "persian_other": "2926.0",
      "english_other": "7315.0"
    },
    {
      "operator_id": 55,
      "name": "9000",
      "persian_mci": "1330.0",
      "english_mci": "3325.0"
    },
    {
      "operator_id": 55,
      "name": "9000",
      "persian_other": "1463.0",
      "english_other": "3657.5"
    },
    {
      "operator_id": 66,
      "name": "Samantel",
      "persian_mci": "2660.0",
      "english_mci": "6650.0"
    },
    {
      "operator_id": 66,
      "name": "Samantel",
      "persian_other": "2926.0",
      "english_other": "7315.0"
    },
    {
      "operator_id": 165,
      "name": "EVENT",
      "persian_mci": "2660.0",
      "english_mci": "6650.0"
    },
    {
      "operator_id": 165,
      "name": "EVENT",
      "persian_other": "2926.0",
      "english_other": "7315.0"
    }
  ],
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
curl --location '{base_url}/api/user/get_tariff' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json'
```
