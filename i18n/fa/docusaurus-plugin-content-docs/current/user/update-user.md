# بروزرسانی کاربر

این API به شما اجازه می‌دهد تا جزئیات یک کاربر زیرمجموعه خود را بروزرسانی کنید.

## 📍 لینک دسترسی

```
PUT {base_url}/api/user/update
```

## 🧾 هدرهای درخواست

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📤 بدنه درخواست

```json
{
  "user_id": 123,
  "name": "name",
  "password": "q8?696Q]%U|q",
  "company": "test",
  "email": "test@test.com",
  "tell": "02122222222",
  "acl_id": 1234,
  "description": "description",
  "expire_time": "2026-08-09",
  "status": "active",
  "send_block": "no",
  "special_disc": 120,
  "is_bought_panel": 1
}
```

## 📝 پارامترها

| پارامتر     | نوع     | الزامی | توضیحات                                  |
|-------------|---------|--------|------------------------------------------|
| user_id     | integer | بله    | شناسه کاربری که می‌خواهید بروزرسانی کنید |
| name        | string  | خیر    | نام و نام خانوادگی جدید کاربر            |
| email       | string  | خیر    | آدرس ایمیل جدید کاربر                    |
| password    | string  | خیر    | کلمه عبور جدید                           |
| acl_id      | integer | خیر    | شناسه نقش دسترسی جدید                    |
| company     | string  | خیر    | نام شرکت جدید                            |
| tell        | string  | خیر    | شماره تلفن جدید                          |
| description | string  | خیر    | توضیحات جدید                             |
| expire_time | string  | خیر    | تاریخ انقضای جدید به فرمت YYYY-MM-DD     |
| status      | string  | خیر    | وضعیت جدید کاربر (active, inactive)      |

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

## ❌ پاسخ خطا — کاربر یافت نشد (404)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "کاربر مورد نظر یافت نشد",
    "message_parameters": [],
    "message_code": "404-1",
    "errors": {}
  }
}
```

## ❌ پاسخ خطا — داده‌های نامعتبر (422)

```json
{
  "data": null,
  "meta": {
    "status": false,
    "message": "داده‌های ارسالی نامعتبر است",
    "message_parameters": [],
    "message_code": "422-1",
    "errors": {
      "mobile": [
        "فرمت شماره موبایل صحیح نیست"
      ]
    }
  }
}
```

## 🧪 مثال درخواست

```bash
curl --location '{base_url}/api/user/update' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json' \
--data '{
    "user_id": 123,
    "name": "name",
    "password": "q8?696Q]%U|q",
    "company": "test",
    "email": "test@test.com",
    "tell": "02122222222",
    "acl_id": 1234,
    "description": "description",
    "expire_time": "2026-08-09",
    "status": "active",
    "send_block": "no",
    "special_disc": 120,
    "is_bought_panel": 1
}'
```
