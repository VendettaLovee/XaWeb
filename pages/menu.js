import React, { useState } from 'react';
import Link from 'next/link';

const KebabMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 9999
    }}>
      <div style={{ fontSize: '24px', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        &#8942;
      </div>
      {open && (
        <div style={{
          marginTop: '10px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '6px',
          overflow: 'hidden',
        }}>
          <Link href="/store"><div style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>Store</div></Link>
          <Link href="/news"><div style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>Berita</div></Link>
          <Link href="/api"><div style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>API</div></Link>
          <Link href="/info"><div style={{ padding: '10px', cursor: 'pointer' }}>Pengertian</div></Link>
        </div>
      )}
    </div>
  );
};

export default KebabMenu;