import React from 'react';
import './Products.css';


const products = [
  {
    name: '5L Curd Bucket',
    description: 'Ideal for small families and retail stores.',
    imageUrl: 'products/10kg-bucket.jpg',
    specifications: [
      'Capacity: 5 Liters',
      'Material: Food-Grade PP',
      'Lid: Tamper-Evident',
      'Handle: Plastic Grip',
    ],
  },
  {
    name: '10L Curd Bucket',
    description: 'Perfect for medium-sized dairies and HORECA.',
    imageUrl: 'products/10kg-bucket.jpg',
    specifications: [
      'Capacity: 10 Liters',
      'Material: Food-Grade PP/HDPE',
      'Lid: Tamper-Evident Ring-Lock',
      'Handle: Heavy-Duty Plastic',
    ],
  },
  {
    name: '20L Curd Bucket',
    description: 'Designed for bulk packaging and large-scale use.',
    imageUrl: 'products/20kg-bucket.jpg',
    specifications: [
      'Capacity: 20 Liters',
      'Material: High-Strength HDPE',
      'Lid: Secure Ring-Lock System',
      'Handle: Reinforced for Heavy Loads',
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">
            High-quality curd buckets available in three convenient sizes.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => {
            const slug = product.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} className={`product-card product-${slug}`}>
                <div className="product-image-container">
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-specs">
                    {product.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                  <div className="product-actions">
                    <a 
                      href={`mailto:pvnindustries.tg@gmail.com?subject=Quote Request for ${encodeURIComponent(product.name)}`} 
                      className="btn-quote"
                    >
                      Request a Quote
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;