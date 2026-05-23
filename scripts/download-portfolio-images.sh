#!/usr/bin/env bash
# Re-download placeholder portfolio images from Unsplash (1400px / q65).
# Replace files in public/portfolio/ with real client photos when ready.

set -euo pipefail
DIR="$(cd "$(dirname "$0")/../public/portfolio" && pwd)"
BASE="https://images.unsplash.com/photo"
Q="auto=format&fit=crop&q=65"

dl() { curl -fsSL "$1" -o "$DIR/$2" && echo "✓ $2"; }

dl "${BASE}-1506905925346-21bda4d32df4?w=1920&${Q}" hero.jpg
dl "${BASE}-1534528741775-53994a69daeb?w=1400&${Q}" portrait-a.jpg
dl "${BASE}-1502920917128-1aa500764cbd?w=1400&${Q}" portrait-b.jpg
dl "${BASE}-1519741497674-611481863552?w=1400&${Q}" wedding-a.jpg
dl "${BASE}-1511285560929-80b456fea0bc?w=1400&${Q}" wedding-b.jpg
dl "${BASE}-1606216794074-735e91aa2c92?w=1400&${Q}" wedding-c.jpg
dl "${BASE}-1449824913935-59a10b8d2000?w=1400&${Q}" city-street.jpg
dl "${BASE}-1492684223066-81342ee5ff30?w=1400&${Q}" event-crowd.jpg
dl "${BASE}-1528360983277-13d401cdc186?w=1400&${Q}" japan-temple.jpg
dl "${BASE}-1500530855697-b586d89ba3ee?w=1400&${Q}" japan-street.jpg
dl "${BASE}-1507525428034-b723cf961d3e?w=1400&${Q}" beach.jpg
dl "${BASE}-1505142468610-359e7d316be0?w=1400&${Q}" ocean-cliffs.jpg
dl "${BASE}-1470071459604-3b5ec3a7fe05?w=1400&${Q}" misty-forest.jpg
dl "${BASE}-1469854523086-cc02fe5d8800?w=1400&${Q}" desert-road.jpg
dl "${BASE}-1501854140801-50d01698950b?w=1400&${Q}" aerial-forest.jpg
dl "${BASE}-1502086223501-7ea6ecd79368?w=1400&${Q}" ocean-sunset.jpg
dl "${BASE}-1524504388940-b1c1722653e1?w=1400&${Q}" fashion-portrait.jpg
dl "${BASE}-1511671782779-c97d3d27a1d4?w=1400&${Q}" concert.jpg
dl "${BASE}-1506794778202-cad84cf45f1d?w=1400&${Q}" man-portrait-a.jpg
dl "${BASE}-1507003211169-0a1dd7228f2d?w=1400&${Q}" man-portrait-b.jpg
dl "${BASE}-1544005313-94ddf0286df2?w=1400&${Q}" woman-portrait-a.jpg
dl "${BASE}-1438761681033-6461ffad8d80?w=400&${Q}" testimonial-woman.jpg
dl "${BASE}-1573496359142-b8d87734a5a2?w=400&${Q}" testimonial-professional.jpg
dl "${BASE}-1472099645785-5658abf4ff4e?w=400&${Q}" testimonial-man.jpg

echo "Done — $(du -sh "$DIR" | cut -f1) total"
