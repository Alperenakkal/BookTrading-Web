import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SayfaBulunamadı.css'

const SayfaBulunamadi = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="sayfa-bulunamadi-container">
      <h1>404</h1>
      <h2>Sayfa Bulunamadı</h2>
      <p>Üzgünüz, aradığınız sayfa mevcut değil veya başka bir URL'ye taşınmış olabilir.</p>
      <button className="go-back-button" onClick={handleGoBack}>
        Ana Sayfaya Dön
      </button>
    </div>
  );
};

export default SayfaBulunamadi;
