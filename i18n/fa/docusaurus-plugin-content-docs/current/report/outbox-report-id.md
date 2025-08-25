# دریافت گزارش ارسال پیامک بر اساس شناسه

این API به شما امکان دریافت گزارش تفصیلی از یک پیام ارسالی خاص با استفاده از شناسه آن را می‌دهد.

## 📍 نقطه پایانی

```
GET {base_url}/api/report/by_bulk?messages_outbox_id={messages_outbox_id}
```

## 🧾 هدرهای درخواست

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📝 پارامترها

| پارامتر            | نوع    | الزامی | توضیحات                                                              |
|--------------------|--------|--------|----------------------------------------------------------------------|
| messages_outbox_id | string | بله    | شناسه منحصر به فرد پیام ارسالی که می‌خواهید گزارش آن را دریافت کنید. |

## ✅ پاسخ موفق

```json
{
  "data": {
    "username": "*****",
    "number_color": null,
    "number": "+98votp",
    "number_id": "154845",
    "messages_outbox_id": "5544778899",
    "state": "finish",
    "type": "sendvoice",
    "time_send": "1744121368",
    "time": "1744121368",
    "rcpts_count": "1",
    "exit_count": "1",
    "status": "پایان یافته",
    "return": 0,
    "partner_id": null,
    "in_delivery_line": 0,
    "valid": null,
    "message": "1234",
    "part": "1",
    "cost": 1064,
    "summary": "ارسال کد فعالسازی صوتی : 1234",
    "user_ip": "1.1.0.1",
    "user_id": "99885544",
    "reject_comment": null,
    "files_path": "1/send/SZiasdasdasdgghgf.wav",
    "parent_id": "98554",
    "state_id": 6
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
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

## 🧪 نمونه درخواست

```bash
curl --location --request GET '{base_url}/api/report/by_bulk?messages_outbox_id={messages_outbox_id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
