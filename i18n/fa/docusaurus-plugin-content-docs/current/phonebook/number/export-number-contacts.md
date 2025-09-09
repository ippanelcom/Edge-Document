# صادرات مخاطبین شماره دفترچه تلفن
این API به شما امکان صادرات مخاطبین شماره‌های دفترچه تلفن بر اساس معیارهای خاص مانند تاریخ ایجاد و عنوان دفترچه تلفن را می‌دهد.

## 📍 نقطه پایانی

```
GET {base_url}/api/phonebooks/numbers/contact-list/export
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات |
| --------- | ---- |----------| ----------- |
| from_created_at   | string | خیر       | زمان برای فیلتر کردن شماره‌هایی که بعد از این تاریخ ایجاد شده‌اند. فرمت: Unix timestamp (ثانیه از epoch). |
| number            | string | خیر       | شماره تلفن برای فیلتر. فرمت: E.164 (مثال: +989121234568). |
| phonebook_title   | string | خیر       | عنوان دفترچه تلفن برای فیلتر. |
| phonebook_id      | string | خیر       | شناسه دفترچه تلفن برای فیلتر. |

## ✅ پاسخ موفق

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

## 🧪 مثال درخواست

```bash
curl --location '{base_url}/api/phonebooks/numbers/contact-list/export?from_created_at=1745785800&number=+989121234568&phonebook_title=title&phonebook_id=12345' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN'
```
