# نمایش کاربر

این API به شما اجازه می‌دهد تا جزئیات یک کاربر زیرمجموعه خاص را با شناسه کاربر دریافت کنید.

## 📍 لینک دسترسی

```
GET {base_url}/api/user/show?user_id=123456
```

## 🧾 هدرها

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📝 پارامترها

| پارامتر | نوع     | الزامی | توضیحات                                            |
|---------|---------|--------|----------------------------------------------------|
| user_id | integer | بله    | شناسه کاربری که می‌خواهید جزئیات آن را دریافت کنید |

## ✅ پاسخ موفق

```json
{
  "data": {
    "status": "active",
    "time": 1560257010,
    "uname": "testuser",
    "document_block": "no",
    "special_disc": 0,
    "parent": {
      "user_id": 1,
      "uname": "parentusername"
    },
    "user_id": 123456,
    "accounting_id": null,
    "is_reseller": "yes",
    "name": "محمد محمدی",
    "national_id": "1234569874",
    "certificate_id": "1234569874",
    "tell": "+982112345678",
    "mobile": "9123456789",
    "address": "تهران، خیابان ولیعصر، پلاک 123",
    "company": "شرکت تست",
    "postalcode": 1234567890,
    "send_block": "no",
    "email": "test@test.com",
    "add_status": "normal",
    "acl_role_id": 1234,
    "last_login": 1754819326,
    "confirm": "0",
    "user_create": "yes",
    "show_status": "active",
    "expire_time": null,
    "user_description": "تست فنی",
    "description": "تست فنی",
    "is_bought_panel": "1",
    "main_parent": "admin",
    "credit": {
      "credit": 9071593.719021048,
      "user_id": 123456
    },
    "acl_role": {
      "acl_role_id": 1234,
      "acl_role_name": "نمایندگی ویژه"
    },
    "parent_id": 1,
    "need_changing_password": "no"
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

## 🧪 مثال درخواست

```bash
curl --location '{base_url}/api/user/show?user_id=123456' \
--header 'Authorization: Your Apikey' \
--header 'Content-Type: application/json'
```
