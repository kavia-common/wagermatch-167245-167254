#!/bin/bash
cd /home/kavia/workspace/code-generation/wagermatch-167245-167254/wagerfinder_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

