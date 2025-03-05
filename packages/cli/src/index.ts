#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'
import { add, minus } from '@lry/core'

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
  .command('minus')
  .description('计算减法')
  .argument('<number>', '第一个数字')
  .argument('<number>', '第二个数字')
  .action((num1, num2) => {
    console.log(chalk.green(minus(Number(num1), Number(num2))))
  })

program.parse()
