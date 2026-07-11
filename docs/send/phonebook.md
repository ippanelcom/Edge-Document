# Send Phonebook SMS

This API allows you to send messages to one or more phonebooks.

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
  "sending_type": "phonebook",
  "from_number": "+983000505",
  "message": "تست",
  "params": [
    {
      "phonebook_id": "123654",
      "type": "all",
      "start": "1",
      "size": "2"
    },
    {
      "phonebook_id": "456987",
      "type": "detail",
      "number_ids": [
        "123",
        "456",
        "789"
      ]
    }
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- | -------- |-----------------------------------------------------------------------|
| sending_type | string | Yes | Type of sending, must be "phonebook" for this endpoint                |
| from_number | string | Yes | Sender's phone number in E.164 format (e.g., +983000505)              |
| message | string | Yes | Message content to be sent to the recipients                          |
| params | array | Yes | Array of objects containing phonebook details                         |
| phonebook_id | string | Yes | The phonebook ID to send messages to                                  |
| type | string | Yes | Type of phonebook sending, can be "all" or "detail"                   |
| start | string | No | Starting index for pagination                                         |
| size | string | No | Number of records to fetch                                            |
| phonebook_id | string | Yes | ID of the phonebook to send messages to (if type is "detail")         |
| number_ids | array | Yes | List of specific number IDs to send messages to (if type is "detail") |


## 📝 Notes
- The `from_number` must be a valid sender number assigned to your account.
- The `send_time` is optional; if not provided, the message will be sent immediately.

The type field can be `all` or `detail`. If the type is `all`, the `phonebook_ids` field is an array of phonebook IDs. If the type is `detail`, the `phonebook_id` field is a single phonebook ID and the `number_ids` field is an array of phone numbers to send the message to.

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
    "sending_type": "phonebook",
    "from_number": "+983000505",
    "message": "تست",
    "params": [
        {
            "phonebook_id": "123654",
            "type": "all",
            "start": "1",
            "size": "2"
        },
        {
            "phonebook_id": "456987",
            "type": "detail",
            "number_ids": [
                "123",
                "456",
                "789"
            ]
        }
    ]
}'
```
