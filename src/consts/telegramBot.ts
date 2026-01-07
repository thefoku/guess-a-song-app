import type TelegramBot from 'node-telegram-bot-api/index';

export const tg: TelegramBot = window.Telegram;
export const webApp = tg.WebApp;