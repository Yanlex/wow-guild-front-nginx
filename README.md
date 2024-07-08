# Фронт + Nginx
## Порядок запуска проекта
- Postgres + Golang APP (updater) [yanlex-wow-guild-postgres + yanlex-wow-guild-updater](https://github.com/Yanlex/wow-guild-db )
- Front + Nginx - [wow-guild-front-nginx](https://github.com/Yanlex/wow-guild-front-nginx)
- ExpressJS API [yanlex-wow-guild-api](https://github.com/Yanlex/wow-guild-api-js )

### Docker
Требуется создать сеть
`docker network create wowguild`

### Билдим фронт
`npm run build`

### Настраиваем nginx
В файле nginx.conf меняем эти параметры в соотвествии с вашими, если вы меняли
`server_name wow-guild-front-nginx;`
`proxy_pass http://yanlex-wow-guild-api:3000;`

### Разворачиваем контейнер
`docker build -t yanlex-wow-guild-front-nginx  .`
`docker run --network=wowguild --name yanlex-wow-guild-front-nginx -p 80:80 -d yanlex-wow-guild-front-nginx`