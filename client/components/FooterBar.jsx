<<<<<<< HEAD
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
=======

>>>>>>> f9a5d7688e4c65a6485fe1bfe77f629aa5d5aff0
