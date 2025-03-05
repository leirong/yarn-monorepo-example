# @lryarn/core

数学计算的核心功能模块。

## 安装

```bash
npm install @lryarn/core
```

## 使用方法

```typescript
import { add, subtract, divided, multiply } from '@lryarn/core'

// 加法
const sum = add(1, 2) // 返回 3

// 减法
const difference = subtract(5, 3) // 返回 2

// 除法
const divided = divide(6, 2) // 返回 3

// 乘法
const amass = multiply(6, 2) // 返回 12
```

## API

### add(a: number, b: number): number

执行加法运算。

参数：

- a: 第一个数字
- b: 第二个数字
  返回：两个数字的和

### subtract(a: number, b: number): number

执行减法运算。

参数：

- a: 第一个数字
- b: 第二个数字
  返回：两个数字的差

### divide(a: number, b: number): number

执行除法运算。

参数：

- a: 第一个数字
- b: 第二个数字
  返回：两个数字的商
