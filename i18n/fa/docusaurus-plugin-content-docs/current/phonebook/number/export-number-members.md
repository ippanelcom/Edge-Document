# صادرات اعضای شماره دفترچه تلفن
این API به شما امکان صادرات شماره‌های دفترچه تلفن یک دفترچه تلفن همراه با گزینه‌های مرتبط را می‌دهد.

## 📍 نقطه پایانی

```
GET {base_url}/api/phonebooks/{phonebook_id}/export
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات |
| --------- | ---- |----------| ----------- |
| phonebook_id      | string | بله      | شناسه دفترچه تلفن برای فیلتر. |

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
curl --location '{base_url}/api/phonebooks/12345/export' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN'
```
