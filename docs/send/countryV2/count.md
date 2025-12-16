# Get Recipients Count

This API allows you to retrieve the count of recipients based on various filters such as birth year, province, county, city

## 📍 Endpoint

```
GET {base_url}/v2/api/send/banks/counts
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter   | Type    | Required | Description                                                |
|-------------|---------|----------|------------------------------------------------------------|
| from_age    | integer | No       | The minimum age of the recipients                          |
| to_age      | integer | No       | The maximum age of the recipients                          |
| province_id | integer | Yes      | The ID of the province to filter recipients                |
| county_id   | integer | No       | The ID of the county to filter recipients                  |
| city_id     | integer | No       | The ID of the city to filter recipients                    |
| gender      | integer | No       | The gender to filter recipients (1 for male, 2 for female) |
| pre         | string  | No       | The prefix of the phone numbers to filter recipients       |



## ✅ Success Response

```json
{
  "data": {
    "mci_count": 256171,
    "irancell_count": 134380,
    "other_count": 10425
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
curl --location '{base_url}/v2/api/send/banks/counts?province_id=1&city_id=1&from_age=1304&to_age=1404&gender=1&pre=912' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN'
```
