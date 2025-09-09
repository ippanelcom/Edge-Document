# بروزرسانی گزینه دفترچه تلفن
این API به شما امکان بروزرسانی گزینه دفترچه تلفن را می‌دهد.

## 📍 نقطه پایانی

```
PUT {base_url}/api/phonebooks/options/{option_id}
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |

## 📤 بدنه درخواست

```json
{
  "title": "option1"
}
```

## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات                                                |
| --------- | ---- |----------|------------------------------------------------------------|
| title     | string | خیر       | عنوان گزینه.                                   |


## ✅ پاسخ موفق

```json
{
  "data": true,
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
curl --location --globoff --request PUT '{base_url}/api/phonebooks/options/12345' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--data '{
    "title": "option1"
}'
```
