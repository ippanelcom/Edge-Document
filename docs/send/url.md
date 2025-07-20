# Send SMS With URL

This document describes how to send an SMS using a URL request to the API. The request can be made using either an API key or a username/password combination for authentication.


## 📍 Endpoint

```
GET {base_url}/api/send/webservice'
```

## 📤 Request Body

```json
{
  "apikey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "from": "+983000505",
  "message": "متن پیام",
  "to": "+989120000000",
  "username": "username",
  "password": "password"
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                         |
| --------- | ---- |----------|---------------------------------------------------------------------|
| `apikey`  | string | Maybe    | Your API key for authentication.                                     |
| `from`    | string | Yes      | The sender's phone number in E.164 format.                           |
| `message` | string | Yes      | The content of the SMS message to be sent.                           |
| `to`      | string | Yes      | The recipient's phone number in E.164 format.                        |
| `username`| string | Maybe       | Username for additional authentication (if required).                |
| `password`| string | Maybe       | Password for additional authentication (if required).                |


## 📝 Notes
In each request, you can use one of the following alternative keys for each parameter:

- For the `apikey` parameter, you can use:
`api_key`, `apikey`, `apiKey`, `x-api-key`, `ApiKey`, `api-key`, `ApiKey`, `key`, `access_key`,
`accessKey`, `auth_key`, `authorization`, `token`, `secret`, `api_token`

- For the `from` parameter, you can use:
`From`, `from`, `sender`, `src`, `source`, `from_number`, `sender_number`, `origin`, `originator`, `caller`,
`caller_id`, `sms_from`, `fromNum`

- For the `message` parameter, you can use:
`Message`, `message`, `msg`, `text`, `txt`, `body`, `content`, `sms`, `message_body`, `messageText`

- For the `to` parameter, you can use:
`To`, `to`, `recipient`, `dst`, `destination`, `to_number`, `recipient_number`, `target`, `receiver`

- For the `username` parameter, you can use:
`UserName`, `username`, `uname`, `user`, `to_number`, `recipient_number`, `target`, `receiver`, `login`,
`user_name`, `userid`, `userName`

- For the `password` parameter, you can use:
`Password`, `password`, `pass`, `passwd`, `pwd`, `user_password`, `passcode`, `login_password`,
`auth_pass`, `user_pass`, `secret`, `access_password`

Authentication must be provided using either an `API key` or a `username/password` combination — not both.

## ✅ Success Response

```json
{
  "data": {
    "message_outbox_ids": [
      123654789
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

## 🧪 Example Request

```bash
curl -X GET '{base_url}/api/send/webservice?from=+983000505&message=متن پیام&to=+989120000000&username=username&password=password'
```
OR
```bash
curl -X GET '{base_url}/api/send/webservice?from=+983000505&message=متن پیام&to=+989120000000&apikey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```
