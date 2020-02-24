const files = require('./libs/files');
const chalk = require('chalk');
const clear = require('clear');
const questions = require('./libs/questions');
clear();

// do we have a .gb
const hav = () => {
    if (files.directoryExists('.gb')) {
        console.log(chalk.red('.gb exists'));
    }else{
        console.log(chalk.red('.gb exists'));
    }
}
const run = async () => {
    if (files.directoryExists('.gb')){
        const {confirm} = await questions.confirmOverWrite();
        if (!confirm){
            console.log('Not overwriting current directoy')
            process.exit();
        }
    }

    console.log(chalk.yellow('Database Credentials'));
    const answ = await questions.askDetails();
    const {configure_advanced} = await questions.askAdvanced();
    if (configure_advanced){
        const advanced = await questions.advanced();
    }

    console.log(configure_advanced)
}

run();
