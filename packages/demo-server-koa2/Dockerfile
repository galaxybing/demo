FROM keymetrics/pm2:8-alpine
MAINTAINER wangyh@317hu.com
LABEL maintainer="galaxyw <galaxbing@hotmail.com>"

COPY . /server-app
WORKDIR /server-app
EXPOSE 3001

RUN ls -al -R

CMD [ "pm2-runtime", "start", "pm2-app.json" ]

