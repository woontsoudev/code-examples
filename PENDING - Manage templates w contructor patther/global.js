'use strict';

var helloTemplate = document.querySelector('.hello-template');
var helloDiv = document.importNode(helloTemplate.content, true);
document.querySelector('body').appendChild(helloDiv);