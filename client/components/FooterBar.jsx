import React, { useState } from 'react';
import styled from 'styled-components';


function FooterBar() {
  const [isBlack, setIsBlack] = useState(false);

  const toggle = () => {

  }

  return (
    <div className="footer-bar">
      <p>Footer</p>
    </div>
  )
}

export default FooterBar;