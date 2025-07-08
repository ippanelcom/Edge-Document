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
  "sending_type": "country",
  "from_number": "+98BANK",
  "message": "تست",
  "params": [
    {
      "bank": "all",
      "pre": 938,
      "province_id": 89,
      "county_id": 212,
      "city_id": 82,
      "gender": 0,
      "age_from": 1300,
      "age_to": 1401,
      "mci": {
        "start": 10,
        "size": 100
      },
      "irancell": {
        "start": 1,
        "size": 2
      },
      "other": {
        "start": 2,
        "size": 3
      }
    }
  ],
  "other_recipients": [
    "+989121111111",
    "+989351111111"
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                                    |
| --------- | ---- |----------|--------------------------------------------------------------------------------|
| sending_type | string | Yes      | Type of sending, must be "country" for this endpoint                           |
| from_number | string | Yes      | Sender's phone number in E.164 format (e.g., +98BANK)                          |
| message | string | Yes      | Message content to be sent to the recipients                                   |
| params | array | Yes      | Array of objects containing parameters for sending                             |
| bank | string | Yes      | Bank number status "all" for all numbers or "white" for none blacklist         |
| pre | integer | Yes      | Prefix number to filter recipients (e.g., 938), must be  between 2 to 6 digits |
| province_id | integer | Yes      | ID of the province to target recipients, must be a valid ID from IPPanel         |
| county_id | integer | NO       | ID of the county to target recipients, must be a valid ID from IPPanel           |
| city_id | integer | NO       | ID of the city to target recipients, must be a valid ID from IPPanel|
| gender | integer | Yes | Gender of recipients (0 for all,1 for male,                          2 for female)|
| age_from | integer | Yes      | Minimum birth year of recipients (e.g., 1330), must be between 1300 to 1410                                         |
| age_to | integer | Yes      | Maximum birth year of recipients (e.g., 1401), must be between 1300 to 1410                                         |
| mci | object | Yes      | MCI number range to filter recipients, with start and size                       |
| irancell | object | Yes      | Irancell number range to filter recipients, with start and size                  |
| other | object | Yes      | Other number range to filter recipients, with start and size                     |
| other_recipients | array | No       | Additional recipients to include, specified as an array of phone numbers in E.164 format |


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
curl --location '{base_url}/api/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
    "sending_type": "country",
    "from_number": "+98BANK",
    "message": "تست",
    "params": [
        {
            "bank": "all",
            "pre": 938,
            "province_id": 89,
            "county_id": 212,
            "city_id": 82,
            "gender": 0,
            "age_from": 1300,
            "age_to": 1401,
            "mci": {
                "start": 10,
                "size": 100
            },
            "irancell": {
                "start": 1,
                "size": 2
            },
            "other": {
                "start": 2,
                "size": 3
            }
        }
    ],
    "other_recipients": [
        "+989121111111",
        "+989351111111"
    ]
}`
```
