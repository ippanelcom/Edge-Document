# Phonebook Option List
This API allows you to retrieve a list of all phonebook options.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/options/list-new
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
|-----------| ---- |----------| ----------- |
| type      | string | Yes      | The type of the option. Can be `int`, `string`, or `date`. |
| title     | string | Yes      | The title of the option.                                   |
| page      | integer | No       | The page number for pagination (default is 1)               |
| per_page  | integer | No       | The number of entries per page (default is 10, max is 1000) |


## ✅ Success Response

```json
{
  "data": [
    {
      "id": 1234,
      "title": "میزان بدهی",
      "type": "string",
      "created_at": "2025-02-09T14:17:10+00:00"
    },
    {
      "id": 1235,
      "title": "تاریخ پایان",
      "type": "date",
      "created_at": "2024-10-30T07:16:50+00:00"
    },
    {
      "id": 1236,
      "title": "تعداد اقساط",
      "type": "int",
      "created_at": "2024-10-23T08:05:55+00:00"
    },
    {
      "id": 1237,
      "title": "تاریخ تولد",
      "type": "date",
      "created_at": "2024-10-20T09:29:54+00:00"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "{base_url}/api/phonebooks/options/listNew",
    "per_page": 10,
    "to": 4,
    "total": 4,
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
curl --location '{base_url}/api/phonebooks/options/list-new?type=int&title=t1' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN''
```
