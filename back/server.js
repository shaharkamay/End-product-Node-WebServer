const http = require('http');
const fs = require('fs');
const validStudent = require('./db');

const host = 'localhost';
const port = '5000';

const server = http.createServer((req, res) => {
    let body = "";
    res.writeHead(200, 'ok', { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'text/plain',
    });

    if (req.method === "GET" && req.url === "/") {
        res.write(body);
        res.end();
        return;
    }
        
    req.on('data', (data) => {
        const jsonData = JSON.parse(data);
        if(validName(jsonData.name) && validAge(jsonData.age) && validAbility(jsonData.ability)) {
            body = "Welcome to Cyber4s";
        } else {
            body = "We Are Sorry You cant sign In";
        }
    })

    req.on('end', () => {
        res.end(body);
    })
})

server.listen(port, host, (err) => {
    if(err) console.log('error');
    else console.log(`server is running on ${host} in port ${port}`);
});

function validName(name) {
    for (const validName of validStudent.nameNotEqual) {
        if (validName === name) return true;
    }
    return false;
}
function validAge(age) {
    return (age >= validStudent.minAge && age <= validStudent.maxAge);
}
function validAbility(ability) {
    for (const validAbility of validStudent.ability) {
        if (validAbility === ability) return true;
    }
    return false;
}