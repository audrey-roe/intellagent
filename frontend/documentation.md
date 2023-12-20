
### to start using the frontend, 
before building, 

run this in the terminal

    export NODE_OPTIONS=--openssl-legacy-provider

then run

    npm run build

then serve the build with 

    serve -s build

** if there are unknown errors, try removing the nodemodules and the package lock files
    rm -rf node_modules package-lock.json
    npm install


#### to start using the backend,
run the build with,

    npm run build 

then grant execution permissions to the www.js file,

    chmod +x ./dist-server/bin/www.js

then serve the build with
    npm run server:dev   


### Pubilc and private kneys for jwt tokens 
if sha pulic and private keys are not present, then use this command to create the files 
    openssl genpkey -algorithm RSA -out id_rsa_priv.pem
    openssl rsa -pubout -in id_rsa_priv.pem -out id_rsa_pub.pem
