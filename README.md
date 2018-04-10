# tobase64-inline-loader

webpack loader to image | svg | ttf ... to change base64

## install

    npm install tobase64-inline-loader -D


## Usage

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
                    loader : 'base64-inline-loader',
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

## Options

* `limit` — The limit can be specified with a query or options parameter. (Defaults to set 10kb).<br />
If the file is greater than the limit (in bytes) the file-loader is used and no change base64

other Options like [file-loader](https://github.com/webpack-contrib/file-loader)
