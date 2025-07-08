# Get Ticket By ID
This API allows you to get a specific ticket by its ID.

## 📍 Endpoint

```
GET {base_url}/api/ticket/show?ticket_id={ticket_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |


## 📝 Parameters

| Parameter | Type | Required | Description                                             |
| --------- | ---- | -------- |---------------------------------------------------------|
| ticket_id | integer | Yes      | The ID of the ticket you want to retrieve.              |

## ✅ Success Response

```json
{
  "data": {
    "id": 100001,
    "ticket_id": 100001,
    "user_id": 200001,
    "parent_id": 300001,
    "importance": "acute",
    "subject": "Sample ticket with file",
    "category": "Plugins, Domains, API",
    "category_id": 10,
    "sub_category_id": 20,
    "state": "replied",
    "state_id": 3,
    "sub_state_id": null,
    "description": "Sample description for file upload",
    "close_desc": null,
    "user_seen": 1,
    "sms_notification": 0,
    "created_at": "2025-01-01 10:00:00",
    "attachment": "https://storage.example.com/sampleuser/ticket/samplefile.zip",
    "interactions": [
      {
        "id": 400001,
        "description": "Sample reply",
        "agent_id": 200001,
        "agent_username": "sampleagent",
        "created_at": "2025-01-01 10:10:00",
        "attachment": "https://storage.example.com/sampleuser/ticket/sample-reply.zip",
        "partner_title": "sampleagent",
        "private": 0,
        "username": "sampleagent"
      }
    ],
    "forward": {
      "id": 500001,
      "from": 200001,
      "ticket_id": 100001,
      "to": 1,
      "created_at": "2025-01-01T10:00:00.000000Z",
      "updated_at": "2025-01-01T10:10:00.000000Z",
      "deleted_at": null,
      "seen": true
    },
    "manager_comment": "",
    "jira_id": 40001,
    "rate": 0
  },
  "meta": {
    "status": true,
    "message": "Success",
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

## ❌ Error Response — Validation Error (422)
```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه ticket id الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "ticket_id": [
        "تکمیل گزینه ticket id الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/ticket/show?ticket_id={ticket_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
