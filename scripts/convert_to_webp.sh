#!/bin/bash

# Script to convert all .jpg files in public/pages subdirectories to .webp format
# Usage: ./scripts/convert_to_webp.sh

set -e  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting conversion of .jpg files to .webp format...${NC}"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: cwebp is not installed. Please install webp tools first.${NC}"
    echo "On macOS: brew install webp"
    echo "On Ubuntu: sudo apt-get install webp"
    exit 1
fi

# Directory containing the page folders
PAGES_DIR="public/pages"

# Check if pages directory exists
if [ ! -d "$PAGES_DIR" ]; then
    echo -e "${RED}Error: Directory $PAGES_DIR does not exist${NC}"
    exit 1
fi

# Counter for converted files
converted_count=0
skipped_count=0

# Iterate through each subdirectory in public/pages
for dir in "$PAGES_DIR"/*/; do
    if [ -d "$dir" ]; then
        dir_name=$(basename "$dir")
        echo -e "${YELLOW}Processing directory: $dir_name${NC}"
        
        # Find all .jpg files in the current directory
        jpg_files=$(find "$dir" -maxdepth 1 -name "*.jpg" -type f)
        
        if [ -z "$jpg_files" ]; then
            echo -e "  ${YELLOW}No .jpg files found in $dir_name${NC}"
            continue
        fi
        
        # Convert each .jpg file to .webp
        while IFS= read -r jpg_file; do
            if [ -f "$jpg_file" ]; then
                # Get filename without extension
                filename=$(basename "$jpg_file" .jpg)
                # Get directory path
                file_dir=$(dirname "$jpg_file")
                # Create output path
                webp_file="$file_dir/$filename.webp"
                
                # Check if .webp file already exists
                if [ -f "$webp_file" ]; then
                    echo -e "  ${YELLOW}Skipping $filename.jpg (webp already exists)${NC}"
                    ((skipped_count++))
                    continue
                fi
                
                echo -e "  ${BLUE}Converting: $filename.jpg -> $filename.webp${NC}"
                
                # Run cwebp conversion
                if cwebp -q 15 "$jpg_file" -o "$webp_file"; then
                    echo -e "  ${GREEN}✓ Successfully converted $filename.jpg${NC}"
                    ((converted_count++))
                else
                    echo -e "  ${RED}✗ Failed to convert $filename.jpg${NC}"
                fi
            fi
        done <<< "$jpg_files"
    fi
done

echo -e "${GREEN}Conversion complete!${NC}"
echo -e "${GREEN}Files converted: $converted_count${NC}"
echo -e "${YELLOW}Files skipped: $skipped_count${NC}" 