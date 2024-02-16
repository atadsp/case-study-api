#! /bin/sh

source .env
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;
nvm use
npm run watch