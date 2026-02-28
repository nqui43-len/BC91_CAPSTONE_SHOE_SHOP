import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div style={{ width: '330px', background: '#F8F8F8', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
      {/* Phần hình ảnh */}
      <div style={{ padding: '20px' }}>
        <img 
          src="https://shop.cyberlearn.vn/images/adidas-prophere.png" 
          alt="Giày Adidas" 
          style={{ width: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* Phần thông tin */}
      <div style={{ padding: '0 20px 20px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '300', fontStyle: 'Light', marginBottom: '10px' }}>Adidas Prophere</h3>
        <p style={{ color: '#CBC9C9', fontSize: '20px', fontStyle: 'Light', marginBottom: '15px' }}>short description ...</p>
      </div>

      {/* Phần nút bấm mua và giá tiền */}
      <div style={{ display: 'flex', borderTop: '1px solid #E8E8E8' }}>
        <NavLink 
          to="/detail/1" 
          style={{ 
            flex: 1, 
            background: 'var(--bg-button-buy)', /* Lấy màu từ file css toàn cục */
            color: 'var(--color-button-buy)', 
            padding: '15px 0',
            textDecoration: 'none',
            fontStyle: 'Regular',
            fontSize: '24px', 
            fontWeight: '300' 
          }}>
          Buy now
        </NavLink>
        
        <div style={{ 
            flex: 1, 
            background: 'var(--bg-button-price)', /* Lấy màu vàng từ file css */
            color: 'var(--text-dark)', 
            padding: '15px 0',
            fontStyle: 'semiBold',
            fontSize: '24px', 
            fontWeight: '600' 
          }}>
          85$
        </div>
      </div>
    </div>
  );
};

export default ProductCard;