# Send Jobs SMS

This API allows you to send messages to recipients based on job categories. You can specify the main and sub job
categories, as well as the operators of the recipients.

## 📍 Endpoint

```
POST {base_url}/api/send
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "sending_type": "job",
  "from_number": "+98PRO",
  "message": "متن پیام",
  "params": [
    {
      "main_category_id": 1,
      "sub_category_id": 1,
      "operator": [
        {
          "start": 0,
          "size": 3373,
          "id": 2
        },
        {
          "start": 1,
          "size": 2,
          "id": 13
        }
      ]
    },
    {
      "main_category_id": 1,
      "sub_category_id": 2,
      "operator": [
        {
          "start": 0,
          "size": 1452,
          "id": 2
        },
        {
          "start": 1,
          "size": 500,
          "id": 13
        }
      ]
    }
  ]
}
```

## 📝 Parameters

| Parameter               | Type    | Required | Description                                                   |
|-------------------------|---------|----------|---------------------------------------------------------------|
| sending_type            | string  | Yes      | Type of sending, must be "job" for this endpoint              |
| from_number             | string  | Yes      | Sender's phone number in E.164 format (e.g., +98BANK)         |
| message                 | string  | Yes      | Message content to be sent to the recipients                  |
| params                  | array   | Yes      | Array of objects containing parameters for sending            |
| params.main_category_id | integer | Yes      | ID of the main job category                                   |
| params.sub_category_id  | integer | NO       | ID of the sub job category                                    |
| params.operator         | array   | NO       | Array of operator of recipients                               |
| params.operator.start   | integer | NO       | Starting index for the operator                               |
| params.operator.size    | integer | NO       | Number of recipients to send to for the operator              |
| params.operator.id      | integer | NO       | ID of the operator (1 for MCI, 2 for Irancell, 13 for Others) |

## 📝 Notes

- The `from_number` must be a valid sender number assigned to your account.
- The `operator.id` should correspond to valid operator IDs in the system.
  endpoint.

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
  "sending_type": "job",
  "from_number": "+98PRO",
  "message": "متن پیام",
  "params": [
    {
      "main_category_id": 1,
      "sub_category_id": 1,
      "operator": [
        {
          "start": 0,
          "size": 3373,
          "id": 2
        },
        {
          "start": 1,
          "size": 2,
          "id": 13
        }
      ]
    },
    {
      "main_category_id": 1,
      "sub_category_id": 2,
      "operator": [
        {
          "start": 0,
          "size": 1452,
          "id": 2
        },
        {
          "start": 1,
          "size": 500,
          "id": 13
        }
      ]
    }
  ]
}`
```
