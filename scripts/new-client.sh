#!/usr/bin/env bash
# Scaffold a new client for cold outreach demos.
# Usage: ./scripts/new-client.sh jane-doe "Jane Doe" "Jane Doe Photography"

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ID="${1:?Usage: $0 <client-id> [photographer-name] [brand-name]}"
NAME="${2:-Your Name}"
BRAND="${3:-Studio Name Photography}"
SLUG="$(echo "$ID" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')"

CLIENT_DIR="$ROOT/public/clients/$SLUG"
CONFIG="$ROOT/src/content/clients/$SLUG.ts"
TEMPLATE="$ROOT/src/content/clients/template.ts"

if [[ -f "$CONFIG" ]]; then
  echo "Error: client '$SLUG' already exists at $CONFIG"
  exit 1
fi

mkdir -p "$CLIENT_DIR/photos"
cp "$ROOT/public/portfolio/portrait-b.jpg" "$CLIENT_DIR/profile.jpg" 2>/dev/null || true

cp "$TEMPLATE" "$CONFIG"
sed -i "s/id: \"template\"/id: \"$SLUG\"/" "$CONFIG"
sed -i "s/brand: \"Studio Name Photography\"/brand: \"$BRAND\"/" "$CONFIG"
sed -i "s/brandShort: \"Studio\"/brandShort: \"$(echo "$BRAND" | awk '{print $1}')\"/" "$CONFIG"
sed -i "s/name: \"Your Name\"/name: \"$NAME\"/" "$CONFIG"
sed -i "s|portraitPath: \"/portfolio/portrait-b.jpg\"|portraitPath: \"/clients/$SLUG/profile.jpg\"|" "$CONFIG"

echo ""
echo "Created client: $SLUG"
echo "  Config:  $CONFIG"
echo "  Photos:  $CLIENT_DIR/photos/"
echo "  Profile: $CLIENT_DIR/profile.jpg (placeholder)"
echo ""
echo "Next steps:"
echo "  1. Edit $CONFIG — update copy, social links, and image paths"
echo "  2. Add photos to public/clients/$SLUG/photos/"
echo "  3. Register in src/content/registry.ts:"
echo "       import { client as ${SLUG//-/}Client } from \"./clients/$SLUG\";"
echo "       Add \"$SLUG\" to CLIENT_IDS and registry"
echo "  4. Set NEXT_PUBLIC_CLIENT=$SLUG in .env.local"
echo "  5. Deploy a new Vercel project with NEXT_PUBLIC_CLIENT=$SLUG"
