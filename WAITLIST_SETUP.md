# Waitlist 邮件配置指南

## 1. 环境变量配置

创建一个 `.env.local` 文件在项目根目录，并添加以下配置：

```env
# SMTP 邮件服务配置
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 2. 使用 Gmail 配置步骤

如果你使用 Gmail，请按照以下步骤：

1. **启用二步验证**
   - 登录你的 Google 账户
   - 进入 "安全" 设置
   - 启用二步验证

2. **生成应用专用密码**
   - 在 Google 账户安全设置中
   - 选择 "应用专用密码"
   - 生成一个新的应用密码
   - 使用这个密码作为 `SMTP_PASS`

## 3. 其他邮件服务配置

### Outlook/Hotmail
```env
SMTP_HOST=smtp.live.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### QQ邮箱
```env
SMTP_HOST=smtp.qq.com
SMTP_PORT=587
SMTP_USER=your-email@qq.com
SMTP_PASS=your-authorization-code
```

### 163邮箱
```env
SMTP_HOST=smtp.163.com
SMTP_PORT=587
SMTP_USER=your-email@163.com
SMTP_PASS=your-authorization-code
```

## 4. 功能说明

当用户提交 waitlist 表单时：
- 前端会验证邮箱格式
- 如果格式正确，会调用 API 发送确认邮件
- 邮件会从 `hello@synctown.ai` 发送到用户邮箱
- 用户会收到一封包含欢迎信息和特权说明的 HTML 邮件

## 5. 启用真正的邮件发送

当前API使用模拟邮件发送。要启用真正的邮件发送：

1. 确保已安装 nodemailer：
   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. 在 `app/api/waitlist/route.ts` 中找到注释的代码块，取消注释：
   ```javascript
   // 找到这一行：
   // const nodemailer = require('nodemailer')
   // 取消注释，并取消整个代码块的注释
   ```

3. 配置正确的环境变量（见上面的步骤）

## 6. 自定义邮件内容

你可以在 `app/api/waitlist/route.ts` 中修改邮件内容和样式。

## 7. 数据存储

目前邮件发送成功后，用户信息会在控制台输出。你可以添加数据库存储逻辑来保存用户信息。

## 8. 测试

1. 确保环境变量正确配置
2. 启动开发服务器：`npm run dev`
3. 访问 `/waitlist` 页面
4. 填写表单测试邮件发送功能 