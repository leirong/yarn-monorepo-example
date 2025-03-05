# CLI 计算器工具

一个简单的命令行计算器工具，基于 Node.js 实现。

## 安装

```bash
npm install -g @lryarn/cli
```

## 使用方法

安装后，你可以使用 calc 命令来进行计算：

### 基本运算

```bash
# 加法
calc add 1 2

# 减法
calc minus 5 3
```

## 开发

1. 克隆仓库

```bash
git clone <repository-url>
```

2. 安装依赖

```bash
yarn install
```

3. 本地测试

```bash
yarn link
calc --help
```

## 依赖

- commander: 命令行界面工具
- chalk: 终端样式美化
- core: 核心计算模块
