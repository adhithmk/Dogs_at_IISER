# Image Setup Guide for Dogs of IISER

## How to Extract Direct Image URLs from Google Drive

### Step 1: Access Each Google Drive Folder
Open each folder link from your original CSV:
- Dog 1: https://drive.google.com/drive/folders/1VqBKM59gAaWjlJab4r31FiRdE87HfIrn
- Dog 2: https://drive.google.com/drive/folders/1RF8OeyF2Pw-PVdcuHzoVcHJHjgXUcZhn
- etc...

### Step 2: Get Direct Image URLs
For each image in the folder:

1. **Right-click on the image** in Google Drive
2. **Select "Share"**
3. **Click "Copy link"**
4. **Convert to direct image URL**:

**FROM:** `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
**TO:** `https://drive.google.com/uc?export=view&id=FILE_ID`

**Example:**
- Original: `https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing`
- Direct: `https://drive.google.com/uc?export=view&id=1ABC123XYZ789`

### Step 3: Update the CSV File

#### Multiple Images Per Dog
Use comma-separated URLs in the "Pictures" column:

```csv
Pictures
https://drive.google.com/uc?export=view&id=1ABC123XYZ789,https://drive.google.com/uc?export=view&id=2DEF456UVW012,https://drive.google.com/uc?export=view&id=3GHI789RST345
```

#### Single Image Per Dog
Just put one URL:

```csv
Pictures
https://drive.google.com/uc?export=view&id=1ABC123XYZ789
```

### Step 4: Replace the Original CSV
1. Open `public/dog id(Sheet1).csv`
2. Replace the "Pictures" column with your direct image URLs
3. Save the file
4. Refresh the website

## Features You'll Get

### Image Gallery Navigation
- **Next/Previous buttons** to browse multiple images
- **Thumbnail strip** at the bottom for quick navigation
- **Image counter** (e.g., "2 / 5")
- **Smooth transitions** between images

### Responsive Design
- **Mobile-friendly** touch gestures
- **Keyboard navigation** (arrow keys)
- **Click on thumbnails** to jump to specific images

### Fallback for Google Drive Folders
If you keep the original folder links, users will see:
- **Clickable placeholders** that open the Google Drive folder
- **Clear instructions** to view photos
- **Professional appearance** while maintaining functionality

## Quick Template

Copy this template and replace `IMAGE_ID_X` with actual file IDs:

```csv
Aadhaar ID name,Pictures
Dog 1,https://drive.google.com/uc?export=view&id=IMAGE_ID_1,https://drive.google.com/uc?export=view&id=IMAGE_ID_2
Dog 2,https://drive.google.com/uc?export=view&id=IMAGE_ID_1
Dog 3,https://drive.google.com/uc?export=view&id=IMAGE_ID_1,https://drive.google.com/uc?export=view&id=IMAGE_ID_2,https://drive.google.com/uc?export=view&id=IMAGE_ID_3
```

## Testing

After updating the CSV:
1. **Refresh the browser** (Ctrl+F5 or Cmd+Shift+R)
2. **Click on any dog card**
3. **Test the image gallery** with next/back buttons
4. **Check thumbnails** and image counter

## Troubleshooting

### Images Not Showing?
- Check that URLs use the `uc?export=view&id=` format
- Ensure Google Drive files are set to "Anyone with the link can view"
- Verify no extra spaces in CSV cells

### Only First Image Showing?
- Make sure URLs are comma-separated with no spaces
- Check that CSV formatting is correct

### Need Help?
The website will show placeholder images for any missing or broken links, so it's safe to test incrementally.
