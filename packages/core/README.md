# @lry/core

数学计算的核心功能模块。

## 安装

```bash
npm install @lry/core
```

## 使用方法

```typescript
import { add, minus } from '@lry/core'

// 加法
const sum = add(1, 2) // 返回 3

// 减法
const difference = minus(5, 3) // 返回 2
```

## API

### add(a: number, b: number): number

执行加法运算。

参数：

- a: 第一个数字
- b: 第二个数字
  返回：两个数字的和

### minus(a: number, b: number): number

执行减法运算。

参数：

- a: 第一个数字
- b: 第二个数字
  返回：两个数字的差
