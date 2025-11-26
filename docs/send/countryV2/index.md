# Send Country SMS

This API allows you to send messages to all numbers in a specific province or county or city.

## 📍 Endpoint

```
POST {base_url}/api/send
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "sending_type": "geolocation",
  "from_number": "+98BANK",
  "message": "تست",
  "params": [
    {
      "province_id": 1,
      "county_id": 2,
      "city_id": 5,
      "pre": "912",
      "gender" : 2,
      "from_age" : 1354,
      "to_age": 1364,
      "operator": [
        {
          "start": 0,
          "size": 10,
          "id": 1
        }, 
        {
          "start": 0,
          "size": 20,
          "id": 2
        }
      ]
    }
  ],
  "other_recipients": [
    "+989121111111",
    "+989351111111"
  ]
}
```

## 📝 Parameters

| Parameter        | Type    | Required | Description                                                                              |
|------------------|---------|----------|------------------------------------------------------------------------------------------|
| sending_type     | string  | Yes      | Type of sending, must be "country" for this endpoint                                     |
| from_number      | string  | Yes      | Sender's phone number in E.164 format (e.g., +98BANK)                                    |
| message          | string  | Yes      | Message content to be sent to the recipients                                             |
| params           | array   | Yes      | Array of objects containing parameters for sending                                       |
| province_id      | integer | NO       | ID of the province to target recipients, must be a valid ID from IPPanel                 |
| county_id        | integer | NO       | ID of the county to target recipients, must be a valid ID from IPPanel                   |
| city_id          | integer | NO       | ID of the city to target recipients, must be a valid ID from IPPanel                     |
| pre              | integer | NO       | Prefix number to filter recipients (e.g., 938)                                           |
| gender           | integer | NO       | Gender of recipients (1 for male, 2 for female)                                          |
| from_age         | integer | NO       | Minimum birth year of recipients (e.g., 1330), must be between 1300 to 1410              |
| to_age           | integer | NO       | Maximum birth year of recipients (e.g., 1401), must be between 1300 to 1410              |
| operator         | array   | NO       | Array of target operators                                                                |
| other_recipients | array   | No       | Additional recipients to include, specified as an array of phone numbers in E.164 format |

## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `send_time` is optional; if not provided, the message will be sent immediately.
- The `other_recipients` array is optional and an array of phone numbers that will receive the message in addition to the province or county or city recipients.

## ✅ Success Response

```json
{
  "data": {
    "message_outbox_ids": [
      1123594208
    ]
  },
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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه پیام الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "message": [
        "تکمیل گزینه پیام الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location --globoff '{base_url}/api/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
  "sending_type": "geolocation",
  "from_number": "+98BANK",
  "message": "تست",
  "params": [
    {
      "province_id": 1,
      "county_id": 2,
      "city_id": 5,
      "pre": "912",
      "gender" : 2,
      "from_age" : 1354,
      "to_age": 1364,
      "operator": [
        {
          "start": 0,
          "size": 10,
          "id": 1
        }, 
        {
          "start": 0,
          "size": 20,
          "id": 2
        }
      ]
    }
  ],
  "other_recipients": [
    "+989121111111",
    "+989351111111"
  ]
}'
```
