# Update User

This API allows you to update the details of an existing user. You can modify various attributes such as name, password,
company, email, telephone number, ACL role ID, description, expiration time, status, and more.

## 📍 Endpoint

```
POST {base_url}/api/user/update
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "user_id": 123,
  "name": "name",
  "password": "q8?696Q]%U|q",
  "company": "test",
  "email": "test@test.com",
  "tell": "02122222222",
  "acl_id": 1234,
  "description": "description",
  "expire_time": "2026-08-09",
  "status": "active",
  "send_block": "no",
  "special_disc": 120,
  "is_bought_panel": 1
}
```

## 📝 Parameters

| Parameter       | Type    | Required | Description                                                                                                                                                           |
|-----------------|---------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| password        | string  | No       | The password for the user. Must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character. |
| acl_id          | integer | No       | The ACL role ID for the user. This determines the permissions and access level of the user within the system. Must be a valid ACL role ID.                            |
| name_family     | string  | No       | The full name of the user. This is optional but recommended for better identification.                                                                                |
| email           | string  | No       | The email address of the user. This is optional but recommended for account recovery and notifications.                                                               |
| description     | string  | No       | A brief description or notes about the user. This is optional and can be used for internal purposes.                                                                  |
| company         | string  | No       | The company name of the user. This is optional and can be used for business accounts.                                                                                 |
| expire_time     | string  | No       | The expiration time for the user's account in Gregorian calendar format (YYYY-MM-DD).                                                                                 |
| tell            | string  | No       | The telephone number of the user. This is optional and can be used for contact purposes.                                                                              |
| status          | string  | No       | The status of the user account. Can be "active" or "inactive".                                                                                                        |
| send_block      | string  | No       | Indicates whether to send a block message to the user. Can be "yes" or "no".                                                                                          |
| special_disc    | integer | No       | The discount amount for the user. This is optional and can be used for promotional purposes.                                                                          |
| is_bought_panel | integer | No       | Indicates whether the user has purchased a panel. Can be 1 (yes) or 0 (no).                                                                                           |
| user_id         | integer | Yes      | The ID of the user to be updated. This is required to identify which user to update.                                                                                  |

⚠️ Note: If the user's first and last name were obtained through a civil registration inquiry, they cannot be changed.

## ✅ Success Response

```json
{
  "data": null,
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
curl --location '{base_url}/api/user/update' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": 123,
    "name": "name",
    "password": "q8?696Q]%U|q",
    "company": "test",
    "email": "test@test.com",
    "tell": "02122222222",
    "acl_id": 1234,
    "description": "description",
    "expire_time": "2026-08-09",
    "status": "active",
    "send_block": "no",
    "special_disc": 120,
    "is_bought_panel": 1
}'
```
