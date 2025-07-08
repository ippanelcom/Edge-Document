# List Patterns
This API allows you to list all patterns under your account.

## 📍 Endpoint

```
GET {base_url}/api/patterns?page={page_number}&per_page={items_per_page}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description                                                           |
| --------- | ---- | -------- |-----------------------------------------------------------------------|
| page      | int  | No       | The page number to retrieve (default is 1)                            |
| per_page  | int  | No       | Number of items per page (default is 10, max is 100)                 |
| filter[code] | string | No       | Optional, The code of the pattern you want to filter by. If omitted, all patterns will be returned.                                 |
| filter[title] | string | No       | Optional, The title of the pattern you want to filter by. If omitted, all patterns will be returned.                                 |
| filter[is_share] | boolean | No       | Optional, Filter by shared patterns. If omitted, both shared and non-shared patterns will be returned. |
| filter[state] | string | No       | Optional, Filter by pattern state (e.g., "active", "inactive"). If omitted, all states will be returned. |
| filter[type] | string | No       | Optional, Filter by pattern type (e.g., "normal", "systemic"). If omitted, all types will be returned. |

⚠️ Important: To exclude a filter from the query, do not include it at all in the request. Avoid sending it with an empty string or null value.


## ✅ Success Response

```json
{
  "data": [
    {
      "id": "67b1b80sdf55sff8f3d069472",
      "partner_id": null,
      "verifier_user_id": null,
      "verifier_partner_id": null,
      "title": null,
      "username": "user",
      "user_id": "1234",
      "pattern_code": "zcxxc465465zxc",
      "pattern_message": "خوش امدید: کد تایید شما %code%",
      "admin_comment": "لطفا نام مجموعه را در متن پترن درج نمایید تا گیرنده متوجه مرجع پیام باشد.\nلطفا آدرس سایت را در متن یا توضیحات پترن درج نمایید تا پترن قابل بررسی باشد.\n",
      "pattern_description": "description",
      "website": null,
      "pattern_status": "inactive",
      "pattern_status_fa": "رد شده",
      "pattern_status_id": 2,
      "pattern_is_share": false,
      "reject_text": "",
      "type": "sms",
      "variable": [
        {
          "name": "code",
          "type": "string",
          "len": 20
        }
      ],
      "delimiter": "%",
      "updated_at": "2025-02-16T10:04:03.237000Z",
      "time": 1739700243,
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
    {
      "id": "67728abasdasda4554c04a562",
      "partner_id": null,
      "verifier_user_id": null,
      "verifier_partner_id": null,
      "title": null,
      "username": "user",
      "user_id": "1234",
      "pattern_code": "aibg4oasdasd4545tj5ht",
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
    {
      "id": "673717dfgdfg654c0f5602",
      "partner_id": null,
      "verifier_user_id": null,
      "verifier_partner_id": null,
      "title": null,
      "username": "user",
      "user_id": "1234",
      "pattern_code": "8tx1asdf1q436n",
      "pattern_message": "با سلام\r\nکد فعالسازی شما %code%",
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
          "name": "code",
          "type": "integer",
          "len": 0
        }
      ],
      "delimiter": "%",
      "updated_at": "2024-11-15T09:43:28.117000Z",
      "time": 1731663808,
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
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 10,
    "to": 3,
    "total": 3,
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
    "message": "تکمیل گزینه code الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "code": [
        "تکمیل گزینه code الزامی است"
      ],
      "title": [
        "تکمیل گزینه title الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/patterns' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
