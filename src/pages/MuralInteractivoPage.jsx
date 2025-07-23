import React from 'react';
import '../assets/styles/pages/MuralInteractivoPage.css';

function MuralInteractivoPage() {
  return (
    <div className="mural-page">
      <div className="iframe-container">
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQyi38jmA4VrAAiAmQvlU9-5hVtR9eweyfGNIlFgunW44wCuJnzn45yoTwHHtIxcWOfqeVSYSH6odBH/embed?start=true&loop=true&delayms=3000&rm=minimal" 
      frameborder="0" width="960" height="569" 
      allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    </div>
  );
}

export default MuralInteractivoPage;
