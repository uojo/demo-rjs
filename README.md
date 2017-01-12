# demo-rjs #
用途：JS、CSS 打包工具


## 执行 ##

- `node tools/r.js -o tools/build_dir.js` www目录下的所有文件打包
- `node tools/r.js -o tools/build_file.js` 单个文件打包


### 目录结构 ###

    ./assets/js/dxy/
    ├── www 存放源文件
    │   └── js 
    │       └── app 页面模块
    │       └── lib 三方类库
    │       └── mod 模块目录
    │       └── common.js 共有模块
    │       └── page1.js 页面文件
    │       └── ...
    │   └── page1.html 实例页1
    │   └── ...
    ├── tools 打包配置
    │   └── build.js 配置文件
    │   └── r.js 打包工具
    ├── www-built 目录www的一份打包压缩后的拷贝

## 参考 ##

- https://github.com/requirejs/example-multipage
- https://github.com/requirejs/r.js/blob/master/build/example.build.js
- http://www.cnblogs.com/snandy/archive/2012/06/06/2536969.html