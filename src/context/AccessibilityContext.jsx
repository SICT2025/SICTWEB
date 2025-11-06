import React, { createContext, useContext, useState, useEffect } from 'react';
 
const AccessibilityContext = createContext();
 
export function useAccessibility() {
  return useContext(AccessibilityContext);
}
 
export function AccessibilityProvider({ children }) {
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(false);
  const [readingMask, setReadingMask] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
 
  const [fontSize, setFontSize] = useState(1); 
 
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
  }, [fontSize]);
 
  useEffect(() => {
    const classList = document.body.classList;
    grayscale ? classList.add('grayscale') : classList.remove('grayscale');
    highContrast ? classList.add('high-contrast') : classList.remove('high-contrast');
    bigCursor ? classList.add('big-cursor') : classList.remove('big-cursor');
    dyslexiaFont ? classList.add('dyslexia-font') : classList.remove('dyslexia-font');
    lineSpacing ? classList.add('line-spacing') : classList.remove('line-spacing');
    readingMask ? classList.add('reading-mask') : classList.remove('reading-mask');
    readingGuide ? classList.add('reading-guide') : classList.remove('reading-guide');
  }, [grayscale, highContrast, bigCursor, dyslexiaFont, lineSpacing, readingMask, readingGuide]);
 
  const increaseFontSize = () => setFontSize(f => Math.min(f + 0.1, 2)); // hasta 200%
  const decreaseFontSize = () => setFontSize(f => Math.max(f - 0.1, 0.7)); // hasta 70%
 
  const resetAll = () => {
    setGrayscale(false);
    setHighContrast(false);
    setBigCursor(false);
    setDyslexiaFont(false);
    setLineSpacing(false);
    setReadingMask(false);
    setReadingGuide(false);
    setFontSize(1);
  };
 
  return (
    <AccessibilityContext.Provider value={{
      grayscale, setGrayscale,
      highContrast, setHighContrast,
      bigCursor, setBigCursor,
      dyslexiaFont, setDyslexiaFont,
      lineSpacing, setLineSpacing,
      readingMask, setReadingMask,
      readingGuide, setReadingGuide,
      fontSize,
      increaseFontSize,
      decreaseFontSize,
      resetAll
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}
