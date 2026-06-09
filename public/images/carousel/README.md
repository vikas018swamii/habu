# Carousel Images

Place your carousel images in this folder.

## Quick Start:

1. **Add your images here** (JPG, PNG, or WebP format)
2. **Recommended size:** 1200x600 pixels (2:1 aspect ratio)
3. **Update the config file:** Open `src/config/carouselImages.js`
4. **Add your image paths** - that's it!

## How to Add Images:

### Option 1: Simple (Just Paths)
Open `src/config/carouselImagesSimple.js` and add paths:
```javascript
export const carouselImagePaths = [
  '/images/carousel/your-image1.jpg',
  '/images/carousel/your-image2.jpg',
  '/images/carousel/your-image3.jpg',
]
```

### Option 2: Detailed (With Titles & Descriptions)
Open `src/config/carouselImages.js` and add:
```javascript
{
  id: 1,
  url: '/images/carousel/your-image.jpg',
  alt: 'Description',
  title: 'HABU Pro'
}
```

## Example File Structure:
```
public/
  images/
    carousel/
      rickshaw1.jpg  ← Your images here
      rickshaw2.jpg
      rickshaw3.jpg
```

**That's it! Just add the path and your image will appear in the carousel.**
