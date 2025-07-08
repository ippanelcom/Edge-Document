# List Users
This API allows you to list all users under your reseller account.

## 📍 Endpoint

```
GET {base_url}/api/user/list?page=1&per_page=10
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type    | Required | Description                                                                                                  |
| --------- |---------| -------- |--------------------------------------------------------------------------------------------------------------|
| page | integer | No | Page number for pagination (default is 1)                                                                    |
| per_page | integer | No | Number of users per page (default is 10)                                                                     |
| username | string  | No | Filter by username (optional)                                                                                |
| name | string  | No | Filter by name (optional)                                                                                    |
| add_status | string  | No | Filter by Create status of the user. Can get one or this `status`,`normal`,`online`,`webservice`  (optional) |
| national_id | string  | No | Filter by national ID (optional)                                                                             |
| acl_role_id | integer | No | Filter by ACL role ID (optional)                                                                             |
| tell | string  | No | Filter by telephone number (optional)                                                                        |
| mobile | string  | No | Filter by mobile number (optional)                                                                           |
| is_reseller | string  | No | Filter by reseller status (`yes` or `no`) (optional)                                                         |
| document_block | string  | No | Filter by document block status (`yes` or `no`) (optional)                                                   |
| created_from | string  | No | Filter by creation date from (format: timestamp UTC) (optional)                                              |
| created_to | string  | No | Filter by creation date to (format: timestamp UTC) (optional)                                                |
| expire_from | string  | No | Filter by expiration date from (format: timestamp UTC) (optional)                                            |
| expire_to | string  | No | Filter by expiration date to (format: timestamp UTC) (optional)                                              |
| is_bought_panel | string  | No | Filter by purchased panel status (`1` or `0`) (optional)                                                     |
| login_status | integer | No | Indicates whether the user is logged in. Can get one status:`0` and mean never login (optional)                                           |
| sub_reseller | integer | No | Accepts either `0` or `1`. `0` indicates that the user is a direct sub-reseller and `1` indicates that the user is an indirect sub-reseller (i.e., part of the downline but not directly under the requester). If omitted, all users (both direct and indirect) will be returned (optional) |

⚠️ Important: To exclude a filter from the query, do not include it at all in the request. Avoid sending it with an empty string or null value.

## ✅ Success Response

```json
{
  "data": [
    {
      "status": "active",
      "time": 1747570721,
      "uname": "user1",
      "document_block": "yes",
      "special_disc": 0,
      "parent": 123654,
      "user_id": 123654,
      "accounting_id": null,
      "is_reseller": "yes",
      "name": "name and family",
      "national_id": "1587459321",
      "certificate_id": "1587459321",
      "tell": null,
      "mobile": "+989122222222",
      "address": "adress",
      "company": "test",
      "postalcode": 4758896654,
      "send_block": "yes",
      "email": "",
      "add_status": "webservice",
      "acl_role_id": 123,
      "last_login": 1747573019,
      "confirm": "0",
      "user_create": "no",
      "show_status": "active",
      "expire_time": null,
      "user_description": null,
      "description": null,
      "is_bought_panel": "1",
      "main_parent": "main_parent_name",
      "credit": {
        "credit": 0,
        "user_id": 123654
      },
      "acl_role": {
        "acl_role_id": 123,
        "acl_role_name": "package_name"
      }
    },
    {
      "status": "active",
      "time": 1747570721,
      "uname": "user1",
      "document_block": "yes",
      "special_disc": 0,
      "parent": 123654,
      "user_id": 123654,
      "accounting_id": null,
      "is_reseller": "yes",
      "name": "name and family",
      "national_id": "1587459321",
      "certificate_id": "1587459321",
      "tell": null,
      "mobile": "+989122222222",
      "address": "adress",
      "company": "test",
      "postalcode": 4758896654,
      "send_block": "yes",
      "email": "",
      "add_status": "webservice",
      "acl_role_id": 123,
      "last_login": 1747573019,
      "confirm": "0",
      "user_create": "no",
      "show_status": "active",
      "expire_time": null,
      "user_description": null,
      "description": null,
      "is_bought_panel": "1",
      "main_parent": "main_parent_name",
      "credit": {
        "credit": 0,
        "user_id": 123654
      },
      "acl_role": {
        "acl_role_id": 123,
        "acl_role_name": "package_name"
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 46,
    "path": "https://baseurl/api/user/list",
    "per_page": 1,
    "to": 1,
    "total": 46,
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
curl --location '{base_url}/api/user/list?page=1&per_page=10' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
