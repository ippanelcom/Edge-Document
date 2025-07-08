# Get Bulk Stats
This API allows you to get statistics about your sent messages.

## 📍 Endpoint

```
GET {base_url}/api/report/bulk_stats?bulk_id={messages_outbox_id}
```

## 🧾 Headers

| Key | Value |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 Parameters

| Parameter | Type | Required | Description |
| --------- | ---- | -------- | ----------- |
| bulk_id   | string | Yes      | The ID of the bulk message to retrieve statistics for. |

## ✅ Success Response

```json
{
  "data": {
    "operators_blacklist": {
      "irancell": {
        "en": 0,
        "fa": 0
      },
      "mci": {
        "en": 0,
        "fa": 0
      }
    },
    "operators_failed": {
      "irancell": {
        "en": 0,
        "fa": 0
      },
      "mci": {
        "en": 0,
        "fa": 0
      }
    },
    "operators_pending": {
      "irancell": {
        "en": 0,
        "fa": 0
      },
      "mci": {
        "en": 0,
        "fa": 0
      }
    },
    "operators_sent": {
      "irancell": {
        "en": 0,
        "fa": 0
      },
      "mci": {
        "en": 0,
        "fa": 0
      }
    },
    "operators_delivered": {
      "irancell": {
        "en": 0,
        "fa": "1"
      },
      "mci": {
        "en": 0,
        "fa": 0
      }
    }
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
    "message": "تکمیل گزینه bulk_id الزامی است",
    "message_parameters": [],
    "message_code": "400-2",
    "errors": {
      "bulk_id": [
        "تکمیل گزینه bulk_id الزامی است"
      ]
    }
  }
}
```

## 🧪 Example Request

```bash
curl --location '{base_url}/api/report/bulk_stats?bulk_id={messages_outbox_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
