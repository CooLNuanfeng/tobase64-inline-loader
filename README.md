# tobase64-inline-loader

webpack loader to image | svg | ttf ... to change base64
webpack loader 用来将 图片 svg 字体等文件  转换 为base64 格式

## install 安装

    npm install tobase64-inline-loader -D



## Usage 使用

```
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader : 'tobase64-inline-loader',
                    options : {
                        limit : 1000,
                        name : '[name].[ext]?[hash:8]',
                        outputPath: 'assets/'
                    }
                }]
            }
        ]
    }
```

## Options 配置

* `limit` — The limit can be specified with a query or options parameter. (Defaults to set 10kb).<br />
If the file is greater than the limit (in bytes) the file-loader is used and no change base64

limit  - 限制转换文件的大小，默认10kb以下进行转换

* other Options like  [file-loader](https://github.com/webpack-contrib/file-loader)

其他配置限于未转化base64的，参考 file-loader
