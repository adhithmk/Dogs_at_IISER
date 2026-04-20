# Quick Image Extraction Guide

## Your Google Drive Folder
https://drive.google.com/drive/folders/1DmGks50EfnLZW2D_HfD1vNMFScK0dYBj?usp=sharing

## Step-by-Step Process

### 1. Open the Main Folder
Click the link above to see all the dog folders (Dog 1, Dog 2, etc.)

### 2. For Each Dog Folder:

#### A. Open the Dog Folder
- Click on "Dog 1" folder
- You'll see all the images for that dog

#### B. Extract Image URLs
For each image in the folder:

**Method 1 - Right Click Method:**
1. Right-click on an image
2. Select "Share"
3. Click "Copy link"
4. Convert the link:
   - FROM: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - TO: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Method 2 - URL Bar Method:**
1. Click on an image to open it
2. Look at the URL in the browser
3. Copy the FILE_ID from: `drive.google.com/file/d/FILE_ID/view`
4. Create: `https://drive.google.com/uc?export=view&id=FILE_ID`

### 3. Format for CSV
For each dog, collect all image URLs and separate them with commas:

**Example for Dog 1:**
```
https://drive.google.com/uc?export=view&id=1ABC123,https://drive.google.com/uc?export=view&id=2DEF456,https://drive.google.com/uc?export=view&id=3GHI789
```

### 4. Update the CSV
1. Open `public/dog id(Sheet1).csv`
2. Replace the "Pictures" column with your new URLs
3. Save the file

## Quick Template

Copy this template and replace the FILE_IDs:

```csv
Aadhaar ID name,Pictures
Dog 1,https://drive.google.com/uc?export=view&id=DOG1_IMG1,https://drive.google.com/uc?export=view&id=DOG1_IMG2
Dog 2,https://drive.google.com/uc?export=view&id=DOG2_IMG1,https://drive.google.com/uc?export=view&id=DOG2_IMG2,https://drive.google.com/uc?export=view&id=DOG2_IMG3
Dog 3,https://drive.google.com/uc?export=view&id=DOG3_IMG1
```

## Pro Tips

1. **Work in batches** - Do 5 dogs at a time
2. **Use a spreadsheet** - Keep track of which dogs you've done
3. **Test as you go** - Update CSV for 1-2 dogs and test the website
4. **Multiple images** - Most dogs will have 2-5 photos
5. **File ID format** - Usually looks like: `1A2b3C4d5E6f7G8h9I0j`

## Expected Results

After updating the CSV:
- Each dog card will show actual photos
- Detail pages will have image galleries with next/back buttons
- Thumbnail navigation at the bottom
- Professional photo viewing experience

## Need Help?

If you get stuck on any dog, just give me the folder link and I'll help you extract the specific image URLs!
