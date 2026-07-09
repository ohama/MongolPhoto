#!/usr/bin/env bash
# scripts/optimize-images.sh <input-dir> <output-dir>
# Resize to max 2000px long edge, strip EXIF/GPS, JPEG quality 82.
# Requires: brew install imagemagick
#
# Rationale: -strip removes EXIF/GPS so trip-photo locations do not leak
# on the public Pages site (sips cannot do this reliably).
set -euo pipefail
IN="$1"; OUT="$2"
mkdir -p "$OUT"
shopt -s nullglob nocaseglob
for f in "$IN"/*.jpg "$IN"/*.jpeg "$IN"/*.png; do
  base="$(basename "$f")"
  magick "$f" -resize '2000x2000>' -strip -quality 82 "$OUT/${base%.*}.jpg"
done
echo "Done: $(ls "$OUT" | wc -l) file(s) -> $OUT"
