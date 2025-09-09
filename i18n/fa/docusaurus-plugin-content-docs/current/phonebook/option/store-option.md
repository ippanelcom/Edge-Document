# ذخیره گزینه دفترچه تلفن
این API به شما امکان ذخیره گزینه دفترچه تلفن را می‌دهد.

## 📍 نقطه پایانی

```
POST {base_url}/api/phonebooks/options
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 بدنه درخواست

```json
{
  "type": "int",
  "title": "option1"
}
```

## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات                                                |
| --------- | ---- |----------|------------------------------------------------------------|
| type      | string | بله      | نوع گزینه. می‌تواند `int`، `string` یا `date` باشد. |
| title     | string | بله      | عنوان گزینه.                                   |


## ✅ پاسخ موفق

```json
{
  "data": {
    "id": 123456,
    "title": "option1",
    "type": "int",
    "created_at": "2025-05-19T08:47:27+00:00"
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

## 🧪 مثال درخواست

```bash
curl --location --globoff '{base_url}/api/phonebooks/options' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--data '{
    "type": "int",
    "title": "option1"
}'
```
