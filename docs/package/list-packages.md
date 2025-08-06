# List Packages

This API allows you to list all packages (ACL Roles) under your reseller account. You can use the page and per_page
parameters to paginate through the results.

## 📍 Endpoint

```
GET {base_url}/api/acl/package/list?page=1&per_page=10
```

## 🧾 Headers

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## 📝 Parameters

| Parameter     | Type    | Required | Description                                                   |
|---------------|---------|----------|---------------------------------------------------------------|
| page          | integer | No       | The page number to retrieve. Default is 1.                    |
| per_page      | integer | No       | The number of items per page. Default is 10. Maximum is 1000. |
| package_id    | integer | No       | Filter by specific package ID.                                |
| name          | string  | No       | Filter by package name.                                       |
| register_type | string  | No       | Filter by registration type (e.g., online,webservice).        |
| type          | string  | No       | Filter by package type (e.g., user,reseller).                 |
| price         | integer | No       | Filter by package price.                                      |
| special_disc  | integer | No       | Filter by special discount.                                   |
| status        | string  | No       | Filter by package status (e.g., active, inactive).            |

⚠️ Important: To exclude a filter from the query, do not include it at all in the request. Avoid sending it with an
empty string or null value.

## ✅ Success Response

```json
{
  "data": [
    {
      "acl_role_id": 123,
      "acl_role_parent_id": 1,
      "acl_role_name": "package name",
      "price": 2000000,
      "special_disc": 20,
      "min_sms_charge": 0,
      "time": 1740216700,
      "user_id": 123,
      "type": "normal",
      "acl_type": "user",
      "status": "active",
      "priority": null,
      "expire_time": null,
      "acl_role_type_registration": "online",
      "is_transferred": "0",
      "election": "0",
      "updated_at": "2025-02-22 09:31:40",
      "updated_at_man": null
    },
    {
      "acl_role_id": 123,
      "acl_role_parent_id": 1,
      "acl_role_name": "package name",
      "price": 2000000,
      "special_disc": 20,
      "min_sms_charge": 0,
      "time": 1740216700,
      "user_id": 123,
      "type": "normal",
      "acl_type": "user",
      "status": "active",
      "priority": null,
      "expire_time": null,
      "acl_role_type_registration": "online",
      "is_transferred": "0",
      "election": "0",
      "updated_at": "2025-02-22 09:31:40",
      "updated_at_man": null
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 62,
    "path": "https://baseurl/api/acl/package/list",
    "per_page": 2,
    "to": 1,
    "total": 62,
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
curl --location '{base_url}/api/acl/package/list?page=1&per_page=10&package_id=1234' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
