# خروج

با استفاده از این بخش توکن کاربر باطل شده و از حساب کاربری خارج می شود.

لازم به ذکر است اگر کاربر درحال استفاده از کلید دسترسی (APIKey) باشد، این عملیات انجام نخواهد شد.
## 📍 لینک دسترسی

```
POST {base_url}/api/acl/auth/logout
```

## 🧾 هدر درخواست

| Key           | Value            |
|---------------|------------------|
| Authorization | YOUR_TOKEN_HERE  |
| Content-Type  | application/json |

## ✅ خروجی API در صورت موفقیت آمیز بودن

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
curl --location '{base_url}/api/acl/auth/logout' \
--header 'Content-Type: application/json' \
--header 'Authorization: your-token'
```
