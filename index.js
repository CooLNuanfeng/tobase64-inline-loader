'use strict';
const loaderUtils = require('loader-utils');
const mimeType = require('mime-types');
const fileLoader = require('file-loader');
const path = require('path');


module.exports = function(content){
    if (this.cacheable) {
		this.cacheable();
	}

    let options = loaderUtils.getOptions(this) || {};

    var opts = Object.assign({},{
        limit : 1024 * 10
    },options);

    // console.log(opts.limit);
    let extension = path.parse(this.resourcePath).ext.substring(1);
        extension = extension.toLowerCase();

    let type = mimeType.lookup(extension),
		data = content.toString('base64');


    if (!type) {
		throw new Error(`${extension} type is not supported`);
	}

    if(content.length < opts.limit){
        let url = JSON.stringify(`data:${type};charset=utf-8;base64,${data}`);
        return `module.exports = ${url}`;
    }else{
        return fileLoader.call(this,content);
    }

}

module.exports.raw = true;
