# webpack-sftp-client

## INTRODUCTION

A plugin for webpack as an sftp client

## INSTALL

```
npm install webpack-sftp-client
```

## USAGE

```
var WebpackSftpClient = require('webpack-sftp-client');

new WebpackSftpClient({
    port: '22',
    host: 'exmaple.com',
    username: 'root',
    password: 'password',
    path: './build/',
    remotePath: '/data/website/demo/'
})
```

Copyright (c) 2016 - 2017 zhangyuhang

MIT (http://www.opensource.org/licenses/mit-license.php)
