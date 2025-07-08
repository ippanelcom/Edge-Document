# Create Pattern
This API allows you to create a new pattern.

## 📍 Endpoint

```
POST {base_url}/api/user/pattern
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title": "test pattern",
  "description": "پترن تستی",
  "is_share": false,
  "message": "پترن تستی %var% . کد شما %code%",
  "website": "https://yoursite.com",
  "variable": [
    {
      "name": "var",
      "type": "string"
    },
    {
      "name": "code",
      "type": "integer"
    }
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                                         |
| --------- | ---- |----------|---------------------------------------------------------------------|
| title     | string | No       | The title of the pattern.                                           |
| description | string | Yes      | A brief description of the pattern.                                 |
| is_share  | boolean | Yes      | Whether the pattern can be shared with sub users. Default is false. |
| message   | string | Yes      | The message template containing variables.                          |
| website   | string | No       | The website associated with the pattern.                            |
| variable  | array  | Yes      | An array of variable objects defining the variables used in the message. |
| name      | string | Yes      | The name of the variable.                                           |
| type      | string | Yes      | The type of the variable (`string`, `integer`).                   |

## ✅ Success Response

```json
{
  "data": {
    "id": "683c0ef4ad9979cd75066974",
    "title": "test pattern",
    "username": "username",
    "pattern_code": "jhaskdab45s6f4sfw",
    "pattern_message": "پترن تستی %var% . کد شما %code%",
    "admin_comment": null,
    "pattern_description": "پترن تستی",
    "pattern_status": "pending",
    "pattern_is_share": false,
    "reject_text": "",
    "type": "sms",
    "variable": [
      {
        "name": "var",
        "type": "string",
        "len": 40
      },
      {
        "name": "code",
        "type": "integer",
        "len": 40
      }
    ],
    "delimiter": "%",
    "updated_at": "2025-06-01T08:27:32.244000Z",
    "time": 1748766452,
    "pattern_state_revision": null,
    "pattern_message_revision": null,
    "pattern_is_share_revision": null,
    "pattern_description_revision": null,
    "pattern_delimiter_revision": null,
    "pattern_state_log": null,
    "pattern_message_log": null,
    "pattern_is_share_log": null,
    "pattern_description_log": null,
    "pattern_delimiter_log": null
  },
  "meta": {
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
    "message": "تکمیل گزینه description الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "description": [
        "تکمیل گزینه description الزامی است"
      ],
      "message": [
        "تکمیل گزینه message الزامی است"
      ],
      "variable.0.name": [
        "تکمیل گزینه variable.0.name الزامی است"
      ],
      "variable.0.type": [
        "تکمیل گزینه variable.0.type الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/patterns/normal' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data-raw '{
    "title": "test pattern",
    "description": "پترن تستی",
    "is_share": false,
    "message": "پترن تستی %var% . کد شما %code%",
    "variable": [
        {
            "name": "var",
            "type": "string"
        },
        {
            "name": "code",
            "type": "integer"
        }
    ]
}'
```
