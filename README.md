# Фронт + Nginx
## Порядок запуска проекта
- Postgres + Golang APP (updater) [yanlex-wow-guild-postgres + yanlex-wow-guild-updater](https://github.com/Yanlex/wow-guild-db )
- Front + Nginx - [wow-guild-front-nginx](https://github.com/Yanlex/wow-guild-front-nginx)
- ExpressJS API [yanlex-wow-guild-api](https://github.com/Yanlex/wow-guild-api-js )

### Docker
Требуется создать сеть
`docker network create wowguild`

### Билдим фронт
`npm install`
`npm run build`

### CERTBOT
Установите Certbot и необходимые зависимости:
`sudo apt install certbot python3-certbot-nginx`
Для получения SSL-сертификата выполните команду:
`sudo certbot --nginx`

### Настраиваем nginx
Находясь в папке nginx, обратите внимание что нужно заменить sanyadev.ru на свйо домен указанный при получении сертефиката certbot.
`sudo cp /etc/letsencrypt/options-ssl-nginx.conf ./certs && sudo cp /etc/letsencrypt/ssl-dhparams.pem ./certs`
`sudo cp /etc/letsencrypt/live/sanyadev.ru/fullchain.pem ./certs && sudo cp /etc/letsencrypt/live/sanyadev.ru/privkey.pem ./certs`

В файле nginx.conf меняем эти параметры в соотвествии с вашими, если вы меняли
`server_name wow-guild-front-nginx;`
`proxy_pass http://yanlex-wow-guild-api:3000;`

### Разворачиваем контейнер
Запуск из папки nginx
`docker compose up -d --build`