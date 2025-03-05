#!/usr/bin/env node
import { add, divide, subtract } from '@lryarn/core'
import chalk from 'chalk'
import { Command } from 'commander'

const program = new Command()

program.name('num-cli').description('计算数字加减').version('0.0.1')

program
  .command('add')
  .description('计算加法')
  .argument('<number>', '第一个数字')
  .argument('<number>', '第二个数字')
  .action((num1, num2) => {
    console.log(chalk.green(add(Number(num1), Number(num2))))
  })

program
  .command('subtract')
  .description('计算减法')
  .argument('<number>', '第一个数字')
  .argument('<number>', '第二个数字')
  .action((num1, num2) => {
    console.log(chalk.green(subtract(Number(num1), Number(num2))))
  })

program
  .command('divide')
  .argument('<number>', '第一个数字')
  .argument('<number>', '第二个数字')
  .action((num1, num2) => {
    console.log(chalk.green(divide(Number(num1), Number(num2))))
  })

program.parse()
