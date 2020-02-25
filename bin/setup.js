const files = require('./libs/files');
const chalk = require('chalk');
const clear = require('clear');
const questions = require('./libs/questions');
clear();

// do we have a .gb
const run = async () => {
    if (files.directoryExists('.gb')){
        console.log(chalk.red('You already have a configured environment'));
        console.log('Are you sure you want to overwrite the files?');
        const {confirm} = await questions.confirmOverWrite();
        if (!confirm){
            console.log('Not overwriting current directoy')
            process.exit();
        }
    }

    console.log(chalk.yellow('Database Credentials'));
    const answ = await questions.askDetails();
    const {configure_advanced} = await questions.askAdvanced();
    var advanced;
    if (configure_advanced){
        advanced = await questions.askPorts();
    }else{
        advanced = {
            apache_port:80,
            apache_ssl_port:443,
            mysql_port:3306,
            redis_port:6379
        }
    }
    var config = {...answ, ...advanced};
    await files.writeEnvFile(config);
    await files.setFirstRun();
    console.log(chalk.green('Setup complete'));
    console.log('You can now run:')
    console.log(chalk.whiteBright('yarn boot'))
    console.log('or')
    console.log(chalk.whiteBright('npm run boot'))
    console.log('to startup your environment')
}

run();
