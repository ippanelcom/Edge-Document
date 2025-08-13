# Show User

This API allows you to retrieve the details of a specific user by their user ID. It returns the user's information such
as name, email, telephone number, ACL role ID, description, expiration time, status, and more.

## 📍 Endpoint

```
GET {base_url}/api/user/show?user_id=123456
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter | Type    | Required | Description                                                                                             |
|-----------|---------|----------|---------------------------------------------------------------------------------------------------------|
| user_id   | integer | Yes      | The ID of the user whose details you want to retrieve. This is required to identify which user to show. |

## ✅ Success Response

```json
{
  "data": {
    "status": "active",
    "time": 1560257010,
    "uname": "testuser",
    "document_block": "no",
    "special_disc": 0,
    "parent": {
      "user_id": 1,
      "uname": "parentusername"
    },
    "user_id": 123456,
    "accounting_id": null,
    "is_reseller": "yes",
    "name": "محمد محمدی",
    "national_id": "1234569874",
    "certificate_id": "1234569874",
    "tell": "+982112345678",
    "mobile": "9123456789",
    "address": "تهران، خیابان ولیعصر، پلاک 123",
    "company": "شرکت تست",
    "postalcode": 1234567890,
    "send_block": "no",
    "email": "test@test.com",
    "add_status": "normal",
    "acl_role_id": 1234,
    "last_login": 1754819326,
    "confirm": "0",
    "user_create": "yes",
    "show_status": "active",
    "expire_time": null,
    "user_description": "تست فنی",
    "description": "تست فنی",
    "is_bought_panel": "1",
    "main_parent": "admin",
    "credit": {
      "credit": 9071593.719021048,
      "user_id": 123456
    },
    "acl_role": {
      "acl_role_id": 1234,
      "acl_role_name": "نمایندگی ویژه"
    },
    "parent_id": 1,
    "need_changing_password": "no"
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
curl --location '{base_url}/api/user/show?user_id=123456' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json'
```
