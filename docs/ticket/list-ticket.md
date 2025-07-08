# List Tickets
This API allows you to list all tickets under your reseller account.

## 📍 Endpoint

```
GET {base_url}/api/ticket?page=1&per_page=10
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |


## 📝 Parameters

| Parameter | Type | Required | Description                                             |
| --------- | ---- | -------- |---------------------------------------------------------|
| page | integer | No | Page number for pagination (default is 1)               |
| per_page | integer | No | Number of tickets per page (default is 10, max is 1000) |
| username | string | No | Filter tickets by username (optional)                   |
| ticket_id | integer | No | Filter tickets by specific ticket ID (optional)         |
| category_id | integer | No | Filter tickets by category ID (optional)                |
| sub_category_id | integer | No | Filter tickets by sub-category ID (optional)           |
| state_id | integer | No | Filter tickets by state ID (optional)                   |

## 📝 Notes
- The `state_id` parameter can have the following values:
    - `1` Waiting for response
    - `2` Waiting for support
    - `3` Answered
    - `4` Closed
    - `5` Forwarded to another department
  
⚠️ Important: To exclude a filter from the query, do not include it at all in the request. Avoid sending it with an empty string or null value.

## ✅ Success Response

```json
{
  "data": [
    {
      "id": 100001,
      "ticket_id": 100001,
      "user_id": 200001,
      "parent_id": 300001,
      "category_id": 10,
      "sub_category_id": 20,
      "importance": "acute",
      "state_id": 3,
      "subject": "Sample ticket with file",
      "desc": "Sample description for file upload",
      "manager_comment": null,
      "close_desc": null,
      "admin_seen": 1,
      "user_seen": 1,
      "sms_notification": 0,
      "interaction_count": 1,
      "longest_interaction": 0,
      "min_rate": null,
      "deleted_at": null,
      "created_at": "2025-01-01T10:00:00.000000Z",
      "updated_at": "2025-01-01T11:00:00.000000Z",
      "jira_id": 40001,
      "rate": 0,
      "rate_comment": null,
      "user": {
        "user_id": 200001,
        "uname": "sampleuser"
      },
      "category": {
        "id": 10,
        "name": "Plugins, Domains, API"
      },
      "sub_category": {
        "id": 20,
        "title": "System Errors"
      },
      "state": {
        "id": 3,
        "name": "replied"
      },
      "forward": {
        "id": 500001,
        "from": 200001,
        "ticket_id": 100001,
        "to": 1,
        "created_at": "2025-01-01T10:00:00.000000Z",
        "updated_at": "2025-01-01T10:10:00.000000Z",
        "deleted_at": null,
        "seen": 1
      }
    },
    {
      "id": 100002,
      "ticket_id": 100002,
      "user_id": 200001,
      "parent_id": 300001,
      "category_id": 11,
      "sub_category_id": 21,
      "importance": "acute",
      "state_id": 3,
      "subject": "Sample ticket",
      "desc": "Sample ticket description",
      "manager_comment": null,
      "close_desc": null,
      "admin_seen": 1,
      "user_seen": 0,
      "sms_notification": 0,
      "interaction_count": 1,
      "longest_interaction": 1234,
      "min_rate": null,
      "deleted_at": null,
      "created_at": "2025-01-02T08:00:00.000000Z",
      "updated_at": "2025-01-02T09:00:00.000000Z",
      "jira_id": 40002,
      "rate": 0,
      "rate_comment": null,
      "user": {
        "user_id": 200001,
        "uname": "sampleuser"
      },
      "category": {
        "id": 11,
        "name": "System Questions"
      },
      "sub_category": {
        "id": 21,
        "title": "Other Issues"
      },
      "state": {
        "id": 3,
        "name": "replied"
      },
      "forward": {
        "id": 500002,
        "from": 200001,
        "ticket_id": 100002,
        "to": 1,
        "created_at": "2025-01-02T08:00:00.000000Z",
        "updated_at": "2025-01-02T08:00:00.000000Z",
        "deleted_at": null,
        "seen": 0
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 15,
    "per_page": 2,
    "to": 2,
    "total": 30,
    "status": true,
    "message": "Success",
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
curl --location '{base_url}/api/ticket?page=1&per_page=10' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
