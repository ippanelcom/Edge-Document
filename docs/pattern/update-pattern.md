# Update Pattern
This API allows you to update an existing pattern.

## 📍 Endpoint

```
PUT {base_url}/api/patterns/normal/{pattern_code}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 Request Body

```json
{
  "title": "Updated Pattern",
  "description": "Updated description",
  "is_share": true,
  "message": "Updated message with %var%",
  "website": "https://updatedsite.com",
  "variable": [
    {
      "name": "var",
      "type": "string"
    }
  ]
}
```

## 📝 Parameters

| Parameter | Type | Required | Description                                       |
| --------- | ---- |----------|---------------------------------------------------|
| title     | string | No       | The title of the pattern.                         |
| description | string | Yes      | A brief description of the pattern.               |
| is_share  | boolean | Yes      | Whether the pattern can be shared with sub users. |
| message   | string | Yes      | The message content of the pattern, with variables. |
| website   | string | No       | The website associated with the pattern.          |
| variable  | array  | Yes      | An array of variables used in the pattern.        |
| name      | string | Yes      | The name of the variable.                          |
| type      | string | Yes      | The type of the variable (string, number).  |

## ✅ Success Response

```json
{
  "data": {
    "id": "67b1b80sdf55sff8f3d069472",
    "title": "Updated Pattern",
    "username": "user",
    "pattern_code": "zcxxc465465zxc",
    "pattern_message": "Updated message with %var%",
    "admin_comment": null,
    "pattern_description": "Updated description",
    "pattern_status": "pending",
    "pattern_is_share": true,
    "reject_text": "",
    "type": "sms",
    "variable": [
      {
        "name": "var",
        "type": "string",
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

## 🧪 Example Request

```bash
curl --location '{base_url}/api/patterns/normal/zcxxc465465zxc' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' \
--data-raw '{
    "title": "Updated Pattern",
    "description": "Updated description",
    "is_share": true,
    "message": "Updated message with %var%",
    "variable": [
        {
            "name": "var",
            "type": "string"
        }
    ]
}'
```
