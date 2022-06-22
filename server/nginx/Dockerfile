FROM nginx:latest

EXPOSE 80

WORKDIR /etc/nginx/sites-available
COPY sites-available .

WORKDIR /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/p2pcommunity.com.conf /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/cdn.p2pcommunity.com.conf /etc/nginx/sites-enabled/

RUN apt-get update

CMD ["nginx", "-g", "daemon off;"]