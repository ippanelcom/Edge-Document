# Get Pattern By Code
This API allows you to retrieve a specific pattern by its code.

## 📍 Endpoint

```
GET {base_url}/api/patterns/{pattern_code}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- | -------- |-----------------------------------------------------------------------|
| pattern_code | string | Yes      | The unique code of the pattern you want to retrieve.                  |

## ✅ Success Response

```json
{
  "data": {
    "id": "67728ab9asdasd4c04a562",
    "partner_id": null,
    "verifier_user_id": null,
    "verifier_partner_id": null,
    "title": null,
    "username": "user",
    "user_id": "1234",
    "pattern_code": "aibg4dsfertj5ht",
    "pattern_message": "پترن تست دستگاه ثبت شماره\r\n%number%",
    "admin_comment": "متن پترن مورد تائید است.",
    "pattern_description": "description",
    "website": null,
    "pattern_status": "active",
    "pattern_status_fa": "فعال",
    "pattern_status_id": 1,
    "pattern_is_share": false,
    "reject_text": "",
    "type": "sms",
    "variable": [
      {
        "name": "number",
        "type": "string",
        "len": 20
      }
    ],
    "delimiter": "%",
    "updated_at": "2024-12-30T11:59:35.103000Z",
    "time": 1735559975,
    "pattern_type": "normal",
    "readonly": false,
    "pattern_state_revision": null,
    "pattern_message_revision": null,
    "pattern_is_share_revision": null,
    "pattern_description_revision": null,
    "pattern_delimiter_revision": null,
    "pattern_variable_revision": null,
    "pattern_type_revision": "",
    "pattern_state_log": null,
    "pattern_message_log": null,
    "pattern_is_share_log": null,
    "pattern_description_log": null,
    "pattern_delimiter_log": null,
    "pattern_variable_log": null,
    "pattern_type_log": null,
    "revision": {
      "type": "",
      "variable": null,
      "pattern_status_id": null,
      "pattern_status_fa": null,
      "pattern_message": null,
      "pattern_description": null,
      "pattern_is_share": null,
      "delimiter": null
    },
    "pattern_log": null
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
curl --location '{base_url}/api/patterns/aibg4dsfertj5ht' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
