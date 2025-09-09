# وارد کردن شماره دفترچه تلفن
این API به شما امکان وارد کردن شماره‌های دفترچه تلفن به یک دفترچه تلفن خاص را می‌دهد.

## 📍 نقطه پایانی

```
POST {base_url}/api/phonebooks/{phonebook_id}/import
```

## 🧾 هدرها

| کلید | مقدار |
| --- | ----- |
| Authorization | YOUR_TOKEN_HERE |
| Content-Type | application/json |


## 📝 پارامترها

| پارامتر | نوع | الزامی | توضیحات                                                           |
|-----------|------| -------- |-----------------------------------------------------------------------|
| file      | file | بله | فایلی که باید وارد شود، باید یک فایل اکسل معتبر حاوی شماره تلفن‌ها باشد. |

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
curl --location --globoff '{base_url}/api/phonebooks/12345/import' \
--header 'Authorization: API TOKEN' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--form 'file=@"/phonebook-import.xlsx"'
```
