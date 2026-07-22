import React from 'react';
import SidebarADB from './SidebarADB';
import NavbarADB from './NavbarADB';
import ContentADB from './ContentADB';

export default function Admindashboard() {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '1440px',
        height: '1024px',
        boxSizing: 'border-box',
        margin: '2px auto',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <SidebarADB />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavbarADB />
        <div style={{ padding: '25px' }}>
          <ContentADB/>
        </div>
      </div>
    </div>
  );
}
