# Get Parents Tree
Returns the full hierarchy (reseller tree) of a specific user.

## 📍 Endpoint

```
GET {base_url}/api/user/parents_tree?user_id={user_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| user_id   | integer | Yes      | The ID of the user for whom you want to retrieve the parent tree. |

## ✅ Success Response

```json
{
  "data": {
    "selected_user": {
      "id": 123,
      "username": "user",
      "is_reseller": true
    },
    "main_parent": {
      "id": 584,
      "username": "mainparent",
      "is_reseller": true
    },
    "tree": [
      {
        "id": 1,
        "username": "ippanel",
        "is_reseller": "yes"
      },
      {
        "id": 464,
        "username": "res1",
        "is_reseller": "yes"
      },
      {
        "id": 8555,
        "username": "res2",
        "is_reseller": "yes"
      },
      {
        "id": 98798,
        "username": "res3",
        "is_reseller": "yes"
      }
    ]
  },
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

## ❌ Error Response — Invalid Request (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "تکمیل گزینه user id الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "user_id": [
        "تکمیل گزینه user id الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/user/parents_tree?user_id={user_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
