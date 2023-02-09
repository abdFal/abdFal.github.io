<?php

if ('/' === $_SERVER['REQUEST_URI']) {
require 'index.html';
} if (
false !== strpos($_SERVER['REQUEST_URI'], '/greeting'))
{ require 'index.html';}