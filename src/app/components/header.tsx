import React from 'react';
import '../styles/components.css';
import Camera from './camera';
import Image from 'next/image';
import Operate from './operate';

const Header: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="title-logo">
          <Image src="/images/MOOBOOK.png" alt="MOOBOOK" width={100000} height={100000} className="headerImage" priority />
        </div>

        <div className="camera">
          <Camera />
        </div>
        <Operate />
      </header>
    </div>
  );
};

export default Header;
