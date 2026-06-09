# Product Images

Place your product images in this folder.

## Instructions:

1. **Add your product images here** (JPG, PNG, or WebP format)
2. **Recommended sizes:**
   - Electric Rickshaws: 800x600px or similar
   - Customized Products: 800x600px or similar
   - Batteries: 600x600px or similar
3. **Update the config file:** Open `src/config/productImages.js`
4. **Add your image paths** - that's it!

## How to Add Images:

Open `src/config/productImages.js` and update the `image` property:

```javascript
{
  name: 'HABU Pro',
  image: '/images/products/your-image-name.jpg', // ← Just change this path!
  mileage: '120 km',
  // ... rest of the properties
}
```

## Example File Structure:
```
public/
  images/
    products/
      habu-pro.jpg          ← Electric Rickshaw images
      habu-plus.jpg
      habu-standard.jpg
      food-cart.jpg          ← Customized product images
      delivery-ev.jpg
      mobile-shop.jpg
      battery-li-60ah.jpg    ← Battery images
      battery-li-50ah.jpg
      battery-lead.jpg
```

**That's it! Just add the path and your image will appear in the products page.**
