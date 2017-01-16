/*!
 *  <https://github.com/sqhtiamo/webpack-sftp-client.git>
 *
 * Copyright (c) 2016-2017, Cloughzhang(Zhang Yuhang).
 * Licensed under the MIT License.
 */

'use strict';

var ClientLib = require('scp2');

var glob = require('glob');

var client = new ClientLib.Client();

function WebpackSftpClient(options) {
    this.options = options;
}

WebpackSftpClient.prototype.apply = function (compiler) {

    var self = this;

    compiler.plugin('done', function (compilation) {

        var remotePath = self.options.remotePath;
        var path = self.options.path;
        var username = self.options.username;
        var host = self.options.host;
        var password = self.options.password;
        var port = self.options.port || '22';

        client.on('connect', function () {
            // console.log('connected');
        });
        client.on('ready', function () {
            // console.log('ready');
        });
        client.on('transfer', function (buf, up, total) {
            up = up + 1;
            console.log(buf)
            // console.log('transfer ' + up  + '/' + total + ' data', up < total);
        });
        client.on('read', function (p) {
            // console.log('read ' + p);
        });
        client.on('close', function () {
            // console.log('close');
        });
        client.on('end', function () {
            // console.log('end');
        });

        ClientLib.scp(path,
            username + ':' + password + '@' + host + ':' + port + ':' + remotePath, client,
            function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Transfer with SFTP Completed');
                }
            }
        );
    });
};


module.exports = WebpackSftpClient;
