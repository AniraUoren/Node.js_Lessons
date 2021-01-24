const mysql = require('mysql2'); // для работы с mysql
const chalk = require('chalk'); // форматированный вывод в консоль


/*
 * 2) Создать простейшую консольную программу с использованием хотя
 * бы одной функции из стороннего модуля, локально установленного
 * с помощью NPM (модуль должен отличаться от рассмотренного на
 * уроке!).
*/

const connection = mysql.createConnection({
    host: '192.168.1.37',
    user: 'dbuser',
    password: 'qwe',
    database: 'koteyka'
});

function selectUsers(){
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields){
            if (err){
                console.log(err);
            }

            console.log(results);
            // console.log(fields);
        }
    )
}

// selectUsers();

/*
 * 3) Продвинутый блок: создать с помощью Node.js API консольную
 * программу, которая будет выводить что-либо в консоль разными
 * цветами и издавать звук(и) с помощью модуля или модулей,
 * отличных от рассмотренного на уроке.
*/

const error = chalk.bold.red;
const happy = chalk.italic.yellowBright;

console.log(error('Some error here!'));
console.log(happy('Something happened here!')); //не увидела разницы, между bold, italic и normal
console.log(happy.green('Something happened here! Crazy!'));

