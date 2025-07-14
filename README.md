# SyncTown Waitlist Backend

这是SyncTown的waitlist后端API服务器。

## 功能特点

- ✅ 邮箱格式验证
- ✅ 角色选择验证
- ✅ 重复邮箱检查
- ✅ 自动发送欢迎邮件
- ✅ 数据持久化存储
- ✅ CORS支持
- ✅ 错误处理

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `env.example` 到 `.env.local` 并配置设置：

```bash
cp env.example .env.local
```

编辑 `.env.local` 文件，添加配置：

#### 邮件配置 (可选)
```
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=587
SMTP_USER=hello@synctown.ai
SMTP_PASS=your-password
```

#### AWS DynamoDB 配置 (推荐)
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_DYNAMODB_WAITLIST_TABLE=synctown-waitlist
```

**注意**: 
- 如果不配置邮件，系统仍会工作但不发送邮件
- 如果不配置AWS，系统会使用本地文件存储

### 3. 创建DynamoDB表 (如果使用AWS)

```bash
npm run create-table
```

### 4. 启动服务器

开发模式（自动重启）：
```bash
npm run dev
```

生产模式：
```bash
npm start
```

服务器将在 `http://localhost:3001` 启动。

## API端点

### POST /api/waitlist
添加用户到waitlist

**请求体:**
```json
{
  "email": "user@example.com",
  "role": "Music Producer"
}
```

**响应:**
```json
{
  "message": "Thank you for joining the waitlist!",
  "success": true
}
```

### GET /api/waitlist/stats
获取waitlist统计信息

**响应:**
```json
{
  "total": 42,
  "byRole": {
    "Music Producer": 15,
    "Singer/Songwriter": 12,
    "Beat Maker": 8,
    "Other": 7
  }
}
```

## 数据存储

### DynamoDB (推荐)
生产环境使用AWS DynamoDB进行数据存储：
- 高可用性和可扩展性
- 按需付费
- 自动备份

### 本地文件存储 (开发/测试)
如果没有配置AWS凭证，系统会回退到本地 `waitlist.json` 文件存储。

## 邮件配置

支持的邮件服务商：
- Gmail
- Zoho Mail
- Outlook
- 其他标准SMTP服务

### Gmail配置示例

1. 开启两步验证
2. 生成应用专用密码
3. 使用应用专用密码作为 `SMTP_PASS`

## 部署

可以部署到：
- Heroku
- Vercel
- Netlify Functions
- AWS Lambda
- 任何支持Node.js的服务器

## 文件结构

```
├── server.js          # 主服务器文件
├── package.json       # 依赖配置
├── env.example        # 环境变量示例
├── waitlist.json      # 数据存储文件（自动生成）
└── README.md          # 说明文档
```

## 安全注意事项

- 不要将 `.env` 文件提交到版本控制
- 使用强密码和应用专用密码
- 考虑添加请求频率限制
- 生产环境使用HTTPS

## 故障排除

### 邮件发送失败
1. 检查SMTP配置
2. 确认邮件服务商设置
3. 查看服务器日志

### 端口冲突
修改 `.env` 文件中的 `PORT` 值

### 数据丢失
`waitlist.json` 文件包含所有数据，请定期备份 