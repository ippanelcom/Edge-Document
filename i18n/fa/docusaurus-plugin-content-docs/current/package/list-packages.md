# فهرست پکیج‌ها

این API به شما امکان فهرست‌سازی تمام پکیج‌ها (نقش‌های ACL) تحت حساب ریسلر شما را می‌دهد. می‌توانید از پارامترهای page و
per_page برای صفحه‌بندی نتایج استفاده کنید.

## 📍 لینک دسترسی

```
GET {base_url}/api/acl/package/list?page=1&per_page=10
```

## 🧾 هدرها

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📝 پارامترها

| پارامتر       | نوع     | اجباری | توضیحات                                                 |
|---------------|---------|--------|---------------------------------------------------------|
| page          | integer | خیر    | شماره صفحه برای دریافت. پیش‌فرض 1 است.                  |
| per_page      | integer | خیر    | تعداد آیتم‌ها در هر صفحه. پیش‌فرض 10 است. حداکثر 1000.  |
| package_id    | integer | خیر    | فیلتر بر اساس شناسه مشخص پکیج.                          |
| name          | string  | خیر    | فیلتر بر اساس نام پکیج.                                 |
| register_type | string  | خیر    | فیلتر بر اساس نوع ثبت‌نام (مثل: `online`,`webservice`). |
| type          | string  | خیر    | فیلتر بر اساس نوع پکیج (مثل: `user`,`reseller`).        |
| price         | integer | خیر    | فیلتر بر اساس قیمت پکیج.                                |
| special_disc  | integer | خیر    | فیلتر بر اساس تخفیف ویژه.                               |
| status        | string  | خیر    | فیلتر بر اساس وضعیت پکیج (مثل: `active`, `inactive`).   |

⚠️ مهم: برای حذف یک فیلتر از کوئری، آن را اصلاً در درخواست قرار ندهید. از ارسال آن با مقدار خالی یا null خودداری کنید.

## ✅ پاسخ موفق

```json
{
  "data": [
    {
      "acl_role_id": 123,
      "acl_role_parent_id": 1,
      "acl_role_name": "package name",
      "price": 2000000,
      "special_disc": 20,
      "min_sms_charge": 0,
      "time": 1740216700,
      "user_id": 123,
      "type": "normal",
      "acl_type": "user",
      "status": "active",
      "priority": null,
      "expire_time": null,
      "acl_role_type_registration": "online",
      "is_transferred": "0",
      "election": "0",
      "updated_at": "2025-02-22 09:31:40",
      "updated_at_man": null
    },
    {
      "acl_role_id": 123,
      "acl_role_parent_id": 1,
      "acl_role_name": "package name",
      "price": 2000000,
      "special_disc": 20,
      "min_sms_charge": 0,
      "time": 1740216700,
      "user_id": 123,
      "type": "normal",
      "acl_type": "user",
      "status": "active",
      "priority": null,
      "expire_time": null,
      "acl_role_type_registration": "online",
      "is_transferred": "0",
      "election": "0",
      "updated_at": "2025-02-22 09:31:40",
      "updated_at_man": null
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 62,
    "path": "https://baseurl/api/acl/package/list",
    "per_page": 2,
    "to": 1,
    "total": 62,
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
curl --location '{base_url}/api/acl/package/list?page=1&per_page=10&package_id=1234' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
