# دریافت آمار ارسال

این API به شما امکان دریافت آمار و جزئیات یک پیام ارسالی با استفاده از شناسه آن را می دهد.

## 📍 لینک دسترسی

```
GET {base_url}/api/report/bulk_stats?bulk_id={messages_outbox_id}
```

## 🧾 هدرهای درخواست

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📝 پارامترها

| پارامتر | نوع    | الزامی | توضیحات                                          |
|---------|--------|--------|--------------------------------------------------|
| bulk_id | string | بله    | شناسه پیامی که می‌خواهید آمار آن را دریافت کنید. |

## ✅ پاسخ موفق

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

## ❌ پاسخ خطا — توکن نامعتبر یا منقضی (401)

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

## ❌ پاسخ خطا — درخواست نامعتبر (422)

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

## 🧪 مثال درخواست

```bash
curl --location '{base_url}/api/report/bulk_stats?bulk_id={messages_outbox_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
