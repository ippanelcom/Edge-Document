# ارسال پیامک دفترچه تلفن

این API به شما امکان ارسال پیام به یک یا چند دفترچه تلفن را می‌دهد.

## 📍 لینک دسترسی

```
POST {base_url}/api/send
```

## 🧾 هدرهای درخواست

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📤 بدنه درخواست

```json
{
  "sending_type": "phonebook",
  "from_number": "+983000505",
  "message": "تست",
  "params": [
    {
      "phonebook_id": "123654",
      "type": "all",
      "start": "1",
      "size": "2"
    },
    {
      "phonebook_id": "456987",
      "type": "detail",
      "number_ids": [
        "123",
        "456",
        "789"
      ]
    }
  ]
}
```

## 📝 پارامترها

| پارامتر       | نوع    | ضروری                 | توضیحات                                                                              |
|---------------|--------|-----------------------|--------------------------------------------------------------------------------------|
| sending_type  | string | بله                   | نوع ارسال، باید "phonebook" باشد                                                     |
| from_number   | string | بله                   | شماره فرستنده در فرمت E.164 (مثال: +983000505)                                       |
| message       | string | بله                   | متن پیامی که میخواهید ارسال نمایید. این متن نباید بیش از 1400 کارکتر یا 20 پارت باشد |
| params        | array  | بله                   | آرایه‌ای از اشیاء شامل تنظیمات دفترچه تلفن                                           |
| phonebook_id  | string | بله (برای نوع detail) | شناسه دفترچه تلفن                                                                    |
| type          | string | بله                   | نوع ارسال: "all" برای همه مخاطبین، "detail" برای مخاطبین خاص                         |
| start         | string | خیر                   | شماره ردیف شروع (فقط برای نوع all)                                                   |
| size          | string | خیر                   | تعداد مخاطبین برای ارسال (فقط برای نوع all)                                          |
| number_ids    | array  | بله (برای نوع detail) | لیست شناسه‌های شماره‌های خاص                                                         |
| send_time     | string | خیر                   | زمان مورد نظر برای ارسال پیام در فرمت YYYY-MM-DD HH:MM:SS. منطقه زمانی UTC است.      |

## 📝 انواع ارسال

### نوع "all"

برای ارسال به همه مخاطبین دفترچه تلفن یا بخشی از آن‌ها:

- `phonebook_ids`: لیست شناسه‌های دفترچه تلفن
- `start`: شماره ردیف شروع (اختیاری)
- `size`: تعداد مخاطبین (اختیاری)

### نوع "detail"

برای ارسال به مخاطبین خاص:

- `phonebook_id`: شناسه دفترچه تلفن
- `number_ids`: لیست شناسه‌های شماره‌های خاص

## 📝 نکات

- `from_number` باید سرشماره معتبری باشد که به حساب شما اختصاص یافته است.
- دفترچه تلفن‌ها باید از قبل در سیستم تعریف شده باشند.
- برای نوع "all"، اگر `start` و `size` مشخص نشوند، به همه مخاطبین ارسال می‌شود.
- تعداد پارامترهای داخل آرایه `params` نباید بیش از 100 عدد باشد
## ✅ پاسخ موفق

```json
{
  "data": {
    "message_outbox_ids": [
      1123544244
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

## ❌ پاسخ خطا — دفترچه تلفن یافت نشد (404)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "دفترچه تلفن یافت نشد",
    "message_parameters": [],
    "message_code": "404-1",
    "errors": {}
  }
}
```

## 🧪 نمونه درخواست

```bash
curl --location '{base_url}/api/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN' \
--data '{
    "sending_type": "phonebook",
    "from_number": "+983000505",
    "message": "تست",
    "params": [
        {
            "phonebook_id": "123654",
            "type": "all",
            "start": "1",
            "size": "2"
        }
    ]
}'
```
