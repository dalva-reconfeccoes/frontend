FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm ci --registry http://element.basis.com.br/repository/npm-registry/ && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --output-path=dist

FROM nginx:1.15

COPY --from=builder /ng-app/dist /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY ./proxy.conf /etc/nginx/conf.d/proxy.conf
