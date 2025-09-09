# لیست گزینه‌های دفترچه تلفن
این API به شما امکان دریافت فهرستی از تمام گزینه‌های دفترچه تلفن را می‌دهد.

## 📍 نقطه پایانی

```
GET {base_url}/api/phonebooks/options/list-new
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات |
|-----------| ---- |----------| ----------- |
| type      | string | بله      | نوع گزینه. می‌تواند `int`، `string` یا `date` باشد. |
| title     | string | بله      | عنوان گزینه.                                   |
| page      | integer | خیر       | شماره صفحه برای صفحه‌بندی (پیش‌فرض 1)               |
| per_page  | integer | خیر       | تعداد مدخل‌ها در هر صفحه (پیش‌فرض 10، حداکثر 1000) |


## ✅ پاسخ موفق

```json
{
  "data": [
    {
      "id": 1234,
      "title": "میزان بدهی",
      "type": "string",
      "created_at": "2025-02-09T14:17:10+00:00"
    },
    {
      "id": 1235,
      "title": "تاریخ پایان",
      "type": "date",
      "created_at": "2024-10-30T07:16:50+00:00"
    },
    {
      "id": 1236,
      "title": "تعداد اقساط",
      "type": "int",
      "created_at": "2024-10-23T08:05:55+00:00"
    },
    {
      "id": 1237,
      "title": "تاریخ تولد",
      "type": "date",
      "created_at": "2024-10-20T09:29:54+00:00"
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "{base_url}/api/phonebooks/options/listNew",
    "per_page": 10,
    "to": 4,
    "total": 4,
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

## 🧪 مثال درخواست

```bash
curl --location '{base_url}/api/phonebooks/options/list-new?type=int&title=t1' \
--header 'Content-Type: application/json' \
--header 'Authorization: API TOKEN'
```
