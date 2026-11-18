#!/usr/bin/env bash
# Pushes the author line of the library READMEs out to every repository that carries it.
#
# The line lives in public/readme/author.md and is served from the site. Each
# library has its own scripts/sync-author.mjs that pulls it into the marked
# region of its README, and runs it on a weekly schedule. This is the "do it now"
# path after an edit: it starts that workflow in every repository.
#
# Deploy the site first, so the repositories fetch the new text.
#
# Usage: scripts/sync-author-line.sh

set -euo pipefail

REPOS=(
  react-native-chat
  react-native-zoom-reanimated
  react-native-background-downloader
  react-native-action-cable
  react-native-cloud-sync
)

for repo in "${REPOS[@]}"; do
  printf '%-36s ' "$repo"
  gh workflow run sync-author.yml -R "kesha-antonov/$repo" >/dev/null && echo "started"
done
