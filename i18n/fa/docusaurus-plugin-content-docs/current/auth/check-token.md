# چک کردن توکن یا کلید دسترسی

شما میتوانید با استفاده از این بخش بررسی کنید که آیا توکن و یا کلید دسترسی کاربر معتبر هست یا خیر. در صورت معتبر بودن
توکن و یا کلید دسترسی، اطلاعات مربوط به کاربر را مشاهده خواهید کرد.

## 📍 لینک دسترسی

```
POST {base_url}/api/acl/auth/check_token
```

## 🧾 هدر درخواست

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## ✅ خروجی API در صورت موفقیت آمیز بودن

```json
{
  "data": {
    "user_name": "ippanel",
    "user_id": 58745,
    "document_block": false,
    "is_reseller": true,
    "send_block": false,
    "name": "test"
  },
  "meta": {
    "status": true,
    "message": "انجام شد",
    "message_parameters": [],
    "message_code": "200-1"
  }
}
```

## ❌ خروجی درخواست در صورت منقضی شدن یا اشتباه بودن توکن

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
curl --location '{base_url}/api/acl/auth/check_token' \
--header 'Content-Type: application/json' \
--header 'Authorization: your-token'
```
