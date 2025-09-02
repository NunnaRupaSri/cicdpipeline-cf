#!/bin/bash
cd /home/ec2-user/node-app
nohup node app.js > app.log 2>&1 &
