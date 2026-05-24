#!/usr/bin/env bash
# Cinematic aerial hero images for Republik Works (Unsplash, 1920px).
set -euo pipefail
DIR="$(cd "$(dirname "$0")/../public/clients/republik-works/photos" && pwd)"
BASE="https://images.unsplash.com/photo"
Q="auto=format&fit=crop&q=75"

mkdir -p "$DIR"
dl() { curl -fsSL "$1" -o "$DIR/$2" && echo "✓ $2"; }

# Hero + featured — misty mountain aerial (landscape-friendly)
dl "${BASE}-1501854140801-50d01698950b?w=1920&${Q}" aerial-mountains.jpg
# Gallery — coastal cliffs from above
dl "${BASE}-1505142468610-359e7d316be0?w=1920&${Q}" aerial-coast-cliffs.jpg
# Gallery — city street aerial
dl "${BASE}-1449824913935-59a10b8d2000?w=1920&${Q}" aerial-city-dusk.jpg
# Gallery — ocean coastline aerial
dl "${BASE}-1507525428034-b723cf961d3e?w=1920&${Q}" aerial-coast.jpg

echo "Done — $(du -sh "$DIR" | cut -f1) in $DIR"
