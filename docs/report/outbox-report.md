# Get Outbox Report
With this API, you can retrieve a general report of your SMS sending requests. It provides information about sent bulk messages but does not include individual message details. To access message-level data, please refer to the detailed APIs described later in this documentation.You can use the page and limit parameters to paginate through the results.

## 📍 Endpoint

```
POST {base_url}/api/report/new_list
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "page": 1,
  "limit": 10,
  "filters": {
    "username": "*",
    "number": "+98217000070",
    "messages_outbox_id": "1100972179",
    "create_from_date": "1744102007",
    "create_to_date": "1744102007",
    "send_from_date": "1744102007",
    "send_to_date": "1744102007",
    "from_exit_count": 1,
    "to_exit_count": 100,
    "message": "تست",
    "state_id": "6"
  }
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| page | integer | No | The page number for pagination. Default is 1. |
| limit | integer | No | The number of records per page. Default is 10. |
| filters | object | No | An object containing various filters to apply to the report. |
| filters.username | string | No | Filter by username (supports wildcard `*`). |
| filters.number | string | No | Filter by sender number in E.164 format. |
| filters.messages_outbox_id | string | No | Filter by specific message outbox ID. |
| filters.create_from_date | string | No | Filter by creation date from (timestamp). |
| filters.create_to_date | string | No | Filter by creation date to (timestamp). |
| filters.send_from_date | string | No | Filter by send date from (timestamp). |
| filters.send_to_date | string | No | Filter by send date to (timestamp). |
| filters.from_exit_count | integer | No | Filter by minimum exit count. |
| filters.to_exit_count | integer | No | Filter by maximum exit count. |
| filters.message | string | No | Filter by message content. |
| filters.state_id | string | No | Filter by message state ID (e.g., `6` for sent). |


## 📝 Notes
- The `filters` object allows you to specify multiple criteria to narrow down the report results.
- The `state_id` can be used to filter messages by their status, such as sent, failed, or pending.
    - `0`: The message is in the process of create.
    - `1`: The message create successfully and is in the monitoring queue.
    - `2`: The message is in the process of sending.
    - `3`: The message rejected by the monitoring system.
    - `4`: The recipients of this message were either entered incorrectly or are not valid.
    - `5`: The message is in send queue.
    - `6`: The message was sent successfully.
    - `7`: The message sending has been canceled.
    - `8`: Insufficient credit for sending.
    - `9`: The message was not sent due to a system error.


## ✅ Success Response

```json
{
  "data": [
    {
      "username": "*****",
      "number_color": "#95E871",
      "number": "+981000",
      "number_id": "123654",
      "messages_outbox_id": "12545856",
      "state": "finish",
      "type": "pattern_transactional",
      "time_send": "1745409418",
      "time": "1745409418",
      "rcpts_count": "1",
      "exit_count": "1",
      "status": "پایان یافته",
      "partner_id": null,
      "in_delivery_line": 0,
      "valid": "approve",
      "message": "متن پیام",
      "part": null,
      "cost": 3990.2,
      "summary": null,
      "user_ip": null,
      "user_id": null,
      "files_path": null,
      "parent_id": null,
      "state_id": 6
    },
    {
      "username": "******",
      "number_color": "#95E871",
      "number": "+981000",
      "number_id": "1236587",
      "messages_outbox_id": "588459562",
      "state": "finish",
      "type": "pattern",
      "time_send": "1745409418",
      "time": "1745409418",
      "rcpts_count": "1",
      "exit_count": "1",
      "status": "پایان یافته",
      "partner_id": null,
      "in_delivery_line": 0,
      "valid": "approve",
      "message": "متن پیام",
      "part": null,
      "cost": 6144.9,
      "summary": null,
      "user_ip": null,
      "user_id": null,
      "files_path": null,
      "parent_id": null,
      "state_id": 6
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 32282040,
    "path": "/api/report/new_list",
    "per_page": 2,
    "to": 2,
    "total": 64564080,
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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "invalid state",
    "message_parameters": [],
    "message_code": "400-31",
    "errors": {}
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/report/new_list' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data '{
    "page": 1,
    "limit": 10,
    "filters": {
        "username": "*",
        "number": "+98217000070",
        "messages_outbox_id": "1100972179",
        "create_from_date": "1744102007",
        "create_to_date": "1744102007",
        "send_from_date": "1744102007",
        "send_to_date": "1744102007",
        "from_exit_count": 1,
        "to_exit_count": 100,
        "message": "تست",
        "state_id":"6"
    }
}'
```
