import React from "react";
import "./Products.css";

const products = [
  {
    name: "5L Curd Bucket",
    imageUrl: "products/10kg-bucket.jpg",
    specifications: {
      Capacity: "5 Liters",
      Material: "Food-Grade PP",
      "Top Diameter": "210mm",
      "Bottom Diameter": "180mm",
      Height: "290mm",
      Weight: "271g",
      Lid: "Tamper-Evident Gasket Lid",
      Printing: "Up to 6-Color Dry Offset",
      "Use Cases": "Retail, small restaurants, catering",
    },
  },
  {
    name: "10L Curd Bucket",
    imageUrl: "products/10kg-bucket.jpg",
    specifications: {
      Capacity: "10 Liters",
      Material: "Food-Grade PP/HDPE",
      "Top Diameter": "265mm",
      "Bottom Diameter": "225mm",
      Height: "275mm",
      Weight: "552g",
      Lid: "Tamper-Evident Ring-Lock Lid",
      Printing: "Up to 6-Color Dry Offset",
      "Use Cases": "Dairies, restaurants, food service",
    },
  },
  {
    name: "20L Curd Bucket",
    imageUrl: "products/20kg-bucket.jpg",
    specifications: {
      Capacity: "20 Liters",
      Material: "High-Strength HDPE",
      "Top Diameter": "320mm",
      "Bottom Diameter": "275mm",
      Height: "340mm",
      Weight: "750g",
      Lid: "Secure Ring-Lock System",
      Printing: "Up to 6-Color Dry Offset",
      "Use Cases": "Bulk storage, industrial kitchens, B2B supply",
    },
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
            const slug = product.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <div key={index} className={`product-card product-${slug}`}>
                <div className="product-image-container">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-specs">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="spec-row">
                          <span className="spec-key">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
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
