# Phonebook List
This API allows you to list all phonebook entries associated with your account.

## 📍 Endpoint

```
GET {base_url}/api/phonebooks/list-new?page=1&per_page=10
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description                                                 |
| --------- | ---- | -------- |-------------------------------------------------------------|
| page      | integer | No       | The page number for pagination (default is 1)               |
| per_page  | integer | No       | The number of entries per page (default is 10, max is 1000) |
| title     | string  | No       | Filter by phonebook title                                   |
| id        | integer | No       | Filter by phonebook ID                                      |


## ✅ Success Response

```json
{
  "data": [
    {
      "id": 123654,
      "title": "تست",
      "count": 12,
      "export_status": 0,
      "import_status": 0,
      "created_at": "2025-01-19T12:26:25+00:00",
      "updated_at": "2025-03-11T13:38:08+00:00",
      "options": []
    },
    {
      "id": 838550,
      "title": "تست 2",
      "count": 1,
      "export_status": 0,
      "import_status": 0,
      "created_at": "2025-01-29T14:29:57+00:00",
      "updated_at": "2025-02-15T11:11:25+00:00",
      "options": [
        {
          "id": 1234,
          "title": "تاریخ تولد",
          "type": "date"
        }
      ]
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 6,
    "path": "{base_url}/api/phonebooks/listNew",
    "per_page": 2,
    "to": 2,
    "total": 11,
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
curl --location --globoff '{base_url}/api/phonebooks/list-new' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' '
```
