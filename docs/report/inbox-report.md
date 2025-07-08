# Get Inbox Report
This API allows you to get reports of received messages. If you want to get new received messages, you can use the from_id parameter in the request body. This parameter is the ID of the last message you received. The API will return all messages received after this ID. You can use the page and per_page parameters to paginate through the results.

## 📍 Endpoint

```
POST {base_url}/api/report/messages-inbox
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
  "per_page": 10,
  "filters" : {
    "from_id":125
  }
}
```

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| page | integer | No | The page number to retrieve (default is 1) |
| per_page | integer | No | The number of items per page (default is 10) |
| filters | object | No | An object containing various filters to apply to the report results |
| from_id | integer | No | The ID of the last message received, used to get new messages after this ID |


## ✅ Success Response

```json
{
  "data": [
    {
      "messages_inbox_id": 123,
      "from": "+989122222222",
      "number": "+981000123",
      "message": "message text",
      "type": "normal",
      "time": 1747808125,
      "seen": "0"
    },
    {
      "messages_inbox_id": 122,
      "from": "+989122222222",
      "number": "+981000123",
      "message": "message text",
      "type": "normal",
      "time": 1747808120,
      "seen": "0"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 4066539,
    "path": "https://baseurl/api/report/messages-inbox",
    "per_page": 2,
    "to": 1,
    "total": 4066539,
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
curl --location '{base_url}/api/report/messages-inbox' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data '{
    "page": 1,
    "per_page": 10,
    "filters" : {
        "from_id":125
    }
}'
```
