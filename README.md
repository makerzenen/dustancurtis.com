# dustancurtis.com

## Build

`yarn build`

## Run Locally

`yarn start`

## Deploy

`yarn build`

`tar -cvzf ~/repo/dustancurtis.com/build dustancurtis.com.tar.gz`

`scp ~/repo/dustancurtis.com/dustancurtis.com.tar.gz user@dustancurtis.com /var/www/dustancurtis.com/dustancurtis.com.tar.gz`

`tar -xvzf dustancurtis.tar.gz /var/www/dustancurtis.com/html`

`chmod -R 755 /var/www/dustancurtis.com/html`

`chown -R nginx:nginx /var/www/dustancurtis.com/html`
