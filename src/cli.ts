#!/usr/bin/env node
import { Command } from 'commander';
import OpenAI from 'openai';

const program = new Command()
  .name('zxcvbnm')
  .description('AI agent for your terminal')
  .version('1.0.0');

program
  .command('explain <file>')
  .description('Explain code file')
  .action(async (file: string) => {
    console.log(`🤖 Explaining ${file}...`);
    // AI logic here
  });

program.parse();
