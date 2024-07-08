# Используйте официальный образ Nginx как базовый
FROM nginx:stable

# Удалите стандартный конфигурационный файл Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируйте пользовательский конфигурационный файл из хоста в контейнер
COPY nginx.conf /etc/nginx/conf.d/

# Копируйте статические файлы сайта из хоста в соответствующую директорию в контейнере
COPY ./public_html /usr/share/nginx/html

# Команда запуска Nginx
CMD ["nginx", "-g", "daemon off;"]
