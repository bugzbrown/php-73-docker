const inquirer = require('inquirer');
const c = require('chalk');
module.exports = {
    askDetails: () => {
        const questions = [
            {
                name: 'db_database',
                type: 'input',
                message: `Enter the database name:`,
                default: 'database',
            },
            {
                name: 'db_user',
                type: 'input',
                default: 'dbuser',
                message: 'Enter the database user:',
            },
            {
                name: 'db_password',
                type: 'password',
                default: 'password',
                message: `Enter the database password (${c.green("default value is 'password'")}:`,
            },
            {
                name: 'db_root_password',
                type: 'password',
                default: 'root',
                message: `Enter the database ${c.red('root user')} password (${c.green("default value is 'root'")}:`,
            },
        ];
        return inquirer.prompt(questions);
    },
    askAdvanced: () => {
        const q = [
            {
                name: 'configure_advanced',
                message: 'Configure advanced settings',
                type: 'confirm',
                default: false,
            }
        ];
        return inquirer.prompt(q);
    },
    askPorts: () => {
        const q = [
            {
                name: 'apache_port',
                message: 'Apache default port',
                default: 80,
                type: 'number'
            },
            {
                name: 'apache_ssl_port',
                message: 'Apache SSL port',
                default: 443,
                type: 'number'
            },
            {
                name: 'mysql_port',
                message: 'Mysql default port',
                default: 3306,
                type: 'number'
            },
            {
                name: 'redis_port',
                message: 'Redis default port',
                default: 6379,
                type: 'number'
            },
        ];
        return inquirer.prompt(q);
    },
    confirmOverWrite: () => {
        const q = [
            {
                name: 'confirm',
                message: 'Overwrite files',
                type: 'confirm',
                default: false,
            }
        ];
        return inquirer.prompt(q);
    },
};