const figlet = require('figlet');
const inquirer = require('inquirer')
const express = require("express") 
const fs= require("fs")
const Table = require('console.table');

figlet('Employee\n    Trancker!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});