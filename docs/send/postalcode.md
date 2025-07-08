# Send Postal code SMS

This API allows you to send messages using postal codes.

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
  "sending_type": "postal_code",
  "from_number": "+98BANK",
  "message": "متن پیام",
  "params": [
    {
      "bank": "all",
      "postal_code": 131,
      "gender": 0,
      "age_from": 1330,
      "age_to": 1402,
      "mci": {
        "start": 0,
        "size": 1
      },
      "irancell": {
        "start": 0,
        "size": 0
      },
      "other": {
        "start": 0,
        "size": 0
      }
    },
    {
      "bank": "all",
      "postal_code": 141,
      "gender": 0,
      "age_from": 1330,
      "age_to": 1402,
      "mci": {
        "start": 0,
        "size": 1
      },
      "irancell": {
        "start": 0,
        "size": 0
      },
      "other": {
        "start": 0,
        "size": 0
      }
    }
  ],
  "other_recipients": [
    "+989120000000",
    "+989350000000"
  ],
  "send_time": "2025-02-28 10:52:02"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                                        |
| --------- | ---- |----------|------------------------------------------------------------------------------------|
| sending_type | string | Yes      | Type of sending, must be "postal_code" for this endpoint                           |
| from_number | string | Yes      | Sender's phone number in E.164 format (e.g., +98BANK)                              |
| message | string | Yes      | Message content to be sent to the recipients                                       |
| params | array | Yes      | Array of objects containing postal code and recipient details                      |
| bank | string | Yes      | Bank number status "all" for all numbers or "white" for none blacklist             |
| postal_code | integer | Yes      | Postal code to target recipients , most be between 2 to 5 digits                   |
|gender | integer | Yes      | Gender of recipients (0 for all,1 for male,                          2 for female) |  
| age_from | integer | Yes      | Minimum birth year of recipients (e.g., 1330), must be between 1300 to 1410        |
| age_to | integer | Yes      | Maximum birth year of recipients (e.g., 1402), must be between 1300 to 1410        |
| mci | object | Yes      | MCI number details, contains start and size for selecting MCI numbers |
| irancell | object | Yes      | Irancell number details, contains start and size for selecting Irancell numbers |
| other | object | Yes      | Other number details, contains start and size for selecting other numbers |
| other_recipients | array | No | List of additional recipient phone numbers in E.164 format (e.g., +989120000000) |
| send_time | string | No | Scheduled time for sending the message in YYYY-MM-DD HH:MM:SS format (timezone is UTC) |


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
    "sending_type": "postal_code",
    "from_number": "+98BANK",
    "message": "متن پیام",
    "params": [
        {
            "bank": "all",
            "postal_code": 131,
            "gender": 0,
            "age_from": 1330,
            "age_to": 1402,
            "mci": {
                "start": 0,
                "size": 1
            },
            "irancell": {
                "start": 0,
                "size": 0
            },
            "other": {
                "start": 0,
                "size": 0
            }
        },
        {
            "bank": "all",
            "postal_code": 141,
            "gender": 0,
            "age_from": 1330,
            "age_to": 1402,
            "mci": {
                "start": 0,
                "size": 1
            },
            "irancell": {
                "start": 0,
                "size": 0
            },
            "other": {
                "start": 0,
                "size": 0
            }
        }
    ],
    "other_recipients": [
        "+989120000000",
        "+989350000000"
    ],
    "send_time": "2025-02-28 10:52:02"
}'
```
