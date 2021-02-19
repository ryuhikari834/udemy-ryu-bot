const Telegraf = require('telegraf');
const { findCourses } = require('./course');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => ctx.reply(`Hola ${ctx.from.first_name} 😍! ¿¿Qué quieres aprender hoy?? 📚

/course query=what_do_you_want language=preferred_language
Example: /course query=reactjs language=en \n\nPara buscar un curso usa la siguiente forma\n/course + nombre del curso \n\nEcho por @AlvaroNoel834`)
)

bot.command('course', (ctx) => {
    console.log(`${ctx.from.username} has requested: ${ctx.message.text}`)
    const message = ctx.message.text.replace('/course ', '');
    findCourses(ctx, message.split(' '))
})

bot.launch();