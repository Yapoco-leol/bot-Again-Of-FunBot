// 1. Cargar la configuración del archivo .env
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 2. Acceder al token usando process.env
const token = process.env.DISCORD_TOKEN;

client.login(token);