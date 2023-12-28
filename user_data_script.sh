sudo apt update
sudo apt install nodejs
git clone https://github.com/veasnabig/auto-scaling-nodejs
cd auto-scaling-nodejs
sudo chmod -R 755 .
#install node module
npm install
# start the app
node index.js > index.out.log 2> index.err.log < /dev/null &