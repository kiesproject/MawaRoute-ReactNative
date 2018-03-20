#!/usr/bin/env bash

curl \
  -F "file=@app/build/outputs/apk/release/MawaRoute-v1.0-${CIRCLE_BUILD_NUM}.apk" \
  -F "token=${DEPLOY_GATE_API_KEY}" \
  -F "message=Build #${CIRCLE_BUILD_NUM}" \
  -F "distribution_key=36250c170dbb1c5e9a81ebfa7e201150346981a6" \
  -F "release_note=Build #${CIRCLE_BUILD_NUM}" \
  https://deploygate.com/api/users/kies/apps
