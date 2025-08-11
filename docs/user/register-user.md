# Register User

This API allows you to register a new user under your reseller account. The new user will be created with the provided
details and assigned an ACL role.

## 📍 Endpoint

```
POST {base_url}/api/user/create
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📤 Request Body

```json
{
  "user_name": "newuser",
  "password": "StrongPassword123!",
  "national_code": "1234567890",
  "mobile_number": "09120000000",
  "birth_date": "1990-01-01",
  "acl_id": 12345
}
```

## 📝 Parameters

| Parameter     | Type    | Required | Description                                                                                                                                                                                                  |
|---------------|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| user_name      | string  | Yes      | The user_name for the new user. Must be unique and not already in use.                                                                                                                                        |
| password      | string  | Yes      | The password for the new user. Must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.                                    |
| national_code | string  | Yes      | The national code of the new user. Must be a valid Iranian national code.                                                                                                                                    |
| mobile_number | string  | Yes      | The mobile number of the new user. Must be a valid Iranian mobile number and must belong to the same person as the provided national ID.                                                                     |
| birth_date    | string  | Yes      | The birth date of the new user must be in the Gregorian calendar format (YYYY-MM-DD) and must exactly match the date recorded in the official national registry (as stated on the user's birth certificate). |
| acl_id        | integer | Yes      | The ACL role ID for the new user. This determines the permissions and access level of the user within the system. Must be a valid ACL role ID.                                                               |
| name_family   | string  | No       | The full name of the new user. This is optional but recommended for better identification.                                                                                                                   |
| email         | string  | No       | The email address of the new user. This is optional but recommended for account recovery and notifications.                                                                                                  |
| description   | string  | No       | A brief description or notes about the new user. This is optional and can be used for internal purposes.                                                                                                     |
| company       | string  | No       | The company name of the new user. This is optional and can be used for business accounts.                                                                                                                    |
| expire_time   | string  | No       | The expiration time for the new user's account in Gregorian calendar format (YYYY-MM-DD). If not provided, the account will not have an expiration date.                                                     |
| zip_code      | string  | No       | The postal code of the new user's address.                                                                                                                                                                   |
| tell          | string  | No       | The telephone number of the new user. This is optional and can be used for contact purposes.                                                                                                                 |
| address       | string  | No       | The physical address of the new user. This is optional and can be used for contact purposes.                                                                                                                 |

⚠️ Note: The account will not be activated if the national ID and mobile number do not belong to the same person, or if
the provided birth date does not exactly match the official records.

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

## ❌ Error Response — Missing Required Fields (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه شماره تماس الزامی است (و 1 خطای دیگر)",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "mobile_number": [
        "تکمیل گزینه شماره تماس الزامی است"
      ],
      "birth_date": [
        "تکمیل گزینه birth date الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/user/create' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json' \
--data '{
    "user_name": "username",
    "password": "q8?6Man96Q]%U|q",
    "national_code": "1111111111",
    "mobile_number": "0912000000",
    "birth_date": "1990-01-01",
    "acl_id": 12345
}'
```
