const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  setFirstRun: async () => {
      fs.writeFileSync('./.gb',new Date().toISOString())
  },
  writeEnvFile: async (config) => {
    var _ap = (txt) => {
        fs.appendFileSync('./.env', txt + "\n")
    };

    fs.writeFileSync('./.env','# ENV FILE' + "\n")
    _ap('# Created using interactive shell.')
    _ap('# https://github.com/bugzbrown/php-73-docker')
    _ap('# Date: ' + new Date().toISOString())
    _ap('')
    _ap('#####################')
    _ap('# DATABASE SETTINGS #')
    _ap('#####################')
    _ap('')
    _ap('DATABSE=mysql')
    _ap('MYSQL_USER=' + config.db_user)
    _ap('MYSQL_PASSWORD=' + config.db_password)
    _ap('MYSQL_DATABASE=' + config.db_database)
    _ap('')
    _ap('MYSQL_ROOT_PASSWORD=' + config.db_root_password)
    _ap('')
    _ap('')
    _ap('#################')
    _ap('# PORT SETTINGS #')
    _ap('#################')
    _ap('')
    _ap('# Apache ports')
    _ap('HOST_MACHINE_UNSECURE_HOST_PORT=80')
    _ap('HOST_MACHINE_SECURE_HOST_PORT=443')
    _ap('')
    _ap('# Mysql port')
    _ap('HOST_MACHINE_MYSQL_PORT=3306')
    _ap('')
    _ap('# Redis port')
    _ap('HOST_MACHINE_REDIS_PORT=6379')
    _ap('')
    _ap('')
    _ap('##################')
    _ap('# OTHER SETTINGS #')
    _ap('##################')
    _ap('')
    _ap('DOCUMENT_ROOT=./www')
    _ap('VHOSTS_DIR=./config/vhosts')
    _ap('APACHE_LOG_DIR=./logs/apache2')
    _ap('PHP_INI=./config/php/php.ini')
    _ap('')
    _ap('MYSQL_DATA_DIR=./data/mysql')
    _ap('MYSQL_LOG_DIR=./logs/mysql')
    _ap('')
  }
};