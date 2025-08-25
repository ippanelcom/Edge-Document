# لیست شماره‌ها

این API به شما امکان مشاهده لیست تمام شماره‌هایی که متعلق به شما هستند را می‌دهد.

## 📍 لینک دسترسی

```
GET {base_url}/api/number/numbers?page=1&per_page=10
```

## 🧾 هدرهای درخواست

| کلید          | مقدار               |
|---------------|---------------------|
| Authorization | توکن یا کلید دسترسی |
| Content-Type  | application/json    |

## 📝 پارامترها

| پارامتر  | نوع | اجباری | توضیحات                               |
|----------|-----|--------|---------------------------------------|
| page     | int | خیر    | شماره صفحه برای صفحه‌بندی (پیش‌فرض 1) |
| per_page | int | خیر    | تعداد آیتم‌ها در هر صفحه (پیش‌فرض 10) |

## ✅ پاسخ موفق

```json
{
  "data": [
    {
      "id": 10001,
      "number": "+981234567890",
      "operator_id": 1,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10002,
      "number": "+981234567891",
      "operator_id": 2,
      "alias": "Sample Alias",
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10003,
      "number": "+981234567892",
      "operator_id": 3,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10004,
      "number": "+981234567893",
      "operator_id": 4,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    },
    {
      "id": 10005,
      "number": "+981234567894",
      "operator_id": 5,
      "alias": null,
      "gets": 0,
      "is_66_char": 0
    }
  ],
  "meta": {
    "status": true,
    "message": "Success",
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
curl --location '{base_url}/api/number/numbers?page=1&per_page=10' \
--header 'Content-Type: application/json' \
--header 'Authorization: Your Apikey/Token' 
```
