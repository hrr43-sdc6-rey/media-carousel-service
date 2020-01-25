import React, { useState } from 'react';

function FooterBar() {
  const [isLaughing, setIsLaughing] = useState(true);
  // React Hooks - useState returns an array, first item is the state and second is a function to set the state
  // useState(true) initializes the state
  const toggle = () => {
    setIsLaughing(!isLaughing);
  }

  return (
    <div>
      <button onClick={toggle}>{isLaughing ? "😂" : "🥶"}</button>
    </div>
  )
}

export default FooterBar;

