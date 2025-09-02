#!/bin/bash
cd /home/ec2-user/node-app
if [ -f package.json ]; then
  npm install
else
  echo "package.json not found, skipping npm install"
fi
