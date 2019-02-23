# 基础使用方式：

REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
server-app                  0.0.3               22edbf591945        33 minutes ago      142MB
server-app                  0.0.2               9aed93c83665        About an hour ago   703MB

```bash
# docker container run -p 8081:3001 -it server-app:0.0.1 /bin/bash
docker image build -t server-app:latest .
docker image build -t dhub-intra.317hu.com/server-app:latest .
# 容器如果没有前台执行的程序，docker会认为不需要保留这个进程，就会直接退出；
# 所以容器启动后，一直循环运行状态；不然，没事干，它就退出了：
# 
# CMD ./node_modules/pm2/bin/pm2 start pm2-app.json && while true; do echo run...; sleep 1; done

docker container run -d -p 8081:3001 server-app:latest

docker container exec -it [containerID] /bin/bash
```

# 构建容器

## node 

- https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image


## npm install

```
1. RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行。
2. 另外，一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令。

RUN npm install --registry=https://registry.npm.taobao.org

CMD [ "pm2-runtime", "start", "pm2.json" ]
```

## pm2 在容器初始运行时，启用

1. [keymetrics/pm2](https://hub.docker.com/r/keymetrics/pm2)

- alpine stretch jessie slim wheezy

```
# server-app:latest
# Dockerfile
# 
# FROM keymetrics/pm2:latest-alpine
FROM keymetrics/pm2:8-alpine

# Bundle APP files
COPY . /server-app
WORKDIR /server-app
EXPOSE 3001

# Show current folder structure in logs
RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2-app.json" ]

# docker image build -t server-app .
```

2. npm install --save-dev pm2

- ./node_modules/pm2/bin/pm2 --version

```
# server-app:0.0.2
# Dockerfile
# 
FROM node:8.12

COPY . /server-app
WORKDIR /server-app
EXPOSE 3001
CMD ./node_modules/pm2/bin/pm2 start pm2-app.json && while true; do echo run...; sleep 1; done

# docker image build -t server-app:0.0.2 .
```

# 同步操作目录

- 同步 apps + server
```
#
docker run -d -p 8001:3001 -v "$(pwd)"/server-app/apps:/server-app/apps dhub-intra.317hu.com/server-app:0.0.3
# ？宿主机的目录，需要初始运行前就存在对应的共享文件；
docker run -d -p 8001:3001 -v /Users/galaxyw/web/server-app/apps:/server-app/apps server-app:0.0.2
docker run -d -p 8001:3001 -v "$PWD/server-app/apps":/server-app/apps server-app:0.0.2
docker run -d -p 8001:3001 -v "$(pwd)"/server-app/apps:/server-app/apps server-app:0.0.2


docker run -d -p 8001:3001 -v dhub-intra.317hu.com/server-app:0.0.4
```

# registry 注册服务器

- https://github.com/docker/docker.github.io/blob/master/registry/deploying.md


# 配置项目模块路由 + 上传项目资源

deploy.sh 流程控制
- 脚手架:local 触发发布服务器
  - 生成 dhub-intra.317hu.com 镜像资源包：根据生成的构建包，创建 apps 和 server/app-koa-router.js
    - 部署环境，直接安装运行容器！

