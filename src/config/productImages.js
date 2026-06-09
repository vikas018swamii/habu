// Product Images Configuration
// Simply add your image paths here - no need to edit the component!

// Instructions:
// 1. Add your images to: public/images/products/
// 2. Add the image paths below
// 3. The products will automatically display them

export const productImages = {
  // Electric Rickshaws
  twoWheelers: 
    [
        { image: '/images/products/1.jpeg' },
        { image: '/images/products/2.jpeg' },
        { image: '/images/products/3.jpeg' },
        { image: '/images/products/4.jpeg' },
        { image: '/images/products/5.jpeg' },
        { image: '/images/products/6.jpeg' },
        { image: '/images/products/7.jpeg' },
        { image: '/images/products/8.jpeg' },
        { image: '/images/products/9.jpeg' },
        { image: '/images/products/10.jpeg' },
        { image: '/images/products/11.jpeg' },
        { image: '/images/products/12.jpeg' },
        { image: '/images/products/13.jpeg' },
        { image: '/images/products/14.jpeg' },
        { image: '/images/products/15.jpeg' },
        { image: '/images/products/16.jpeg' },
        { image: '/images/products/17.jpeg' },
        { image: '/images/products/18.jpeg' },
        { image: '/images/products/19.jpeg' },
        { image: '/images/products/20.jpeg' },
        { image: '/images/products/21.jpeg' },
        { image: '/images/products/22.jpeg' },
        { image: '/images/products/23.jpeg' },
        { image: '/images/products/24.jpeg' },
        { image: '/images/products/25.jpeg' },
        { image: '/images/products/26.jpeg' },
        { image: '/images/products/27.jpeg' },
        { image: '/images/products/28.jpeg' },
        { image: '/images/products/29.jpeg' },
        { image: '/images/products/30.jpeg' },
        { image: '/images/products/31.jpeg' },
        { image: '/images/products/32.jpeg' },
        { image: '/images/products/33.jpeg' }
      ],
  

  // Two Wheelers
  twoWheelersSection: [
    { image: '/images/products/a.jpeg' },
    { image: '/images/products/b.jpeg' },
    { image: '/images/products/c.jpeg' },
    { image: '/images/products/d.jpeg' } // Add your two wheeler image paths here
    // Add more two wheeler images:
    // { image: '/images/products/your-image.jpg' },
  ],

  // Batteries
  batteries: [
    {
      type: 'Lithium-Ion 48V',
      image: '/images/products/battery-li-60ah.jpg', // Add your image path here
      capacity: '60Ah',
      chargingTime: '4-5 hours',
      warranty: '3 years',
      priceRange: '₹35,000 - ₹45,000',
      features: ['Long Life', 'Fast Charging', 'Lightweight']
    },
    {
      type: 'Lithium-Ion 48V',
      image: '/images/products/battery-li-50ah.jpg', // Add your image path here
      capacity: '50Ah',
      chargingTime: '3-4 hours',
      warranty: '3 years',
      priceRange: '₹28,000 - ₹35,000',
      features: ['Compact', 'Efficient', 'Maintenance-Free']
    },
    {
      type: 'Lead-Acid 48V',
      image: '/images/products/battery-lead.jpg', // Add your image path here
      capacity: '120Ah',
      chargingTime: '8-10 hours',
      warranty: '1 year',
      priceRange: '₹15,000 - ₹20,000',
      features: ['Affordable', 'Reliable', 'Easy Replacement']
    }
  ]
}
