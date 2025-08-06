# Calculate SMS Price

This endpoint is used to calculate the price of sending an SMS message. It returns the cost for MCI and other networks, along with the number of parts the message will be split into.

## 📍 Endpoint

```
POST {base_url}/api/send/calculate-price
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "number": "+983000505",
  "message": "تست"
}
```

## 📝 Parameters

| Parameter | Type   | Required | Description                                                   |
|-----------|--------|----------|---------------------------------------------------------------|
| number    | string | Yes      | The  Sender's phone number in E.164 format (e.g., +983000505) |
| message   | string | Yes      | The message content to be sent                                |

## ✅ Success Response

```json
{
  "data": {
    "mci_price": 2370,
    "other_price": 2503,
    "parts": 1
  },
  "meta": {
    "status": true,
    "message": "calculate successfully",
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
curl --location '{base_url}/api/send/calculate-price' \
--header 'Authorization: APIKEY/TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "number": "+983000505",
    "message": "تست"
}'
```
