import type TelegramBot from "node-telegram-bot-api";

declare global {
  interface Window {
    Telegram: TelegramBot
  }
}