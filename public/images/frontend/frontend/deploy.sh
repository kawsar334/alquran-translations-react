git pull
yarn run build
pm2 delete "handy-web-next-js-dev"
pm2 start npm --name "handy-web-next-js-dev" -- start
