import { useEffect, useState } from 'react';
import './CopiedPopup.css';

export default function CopiedPopup({isCopied}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  if (!isCopied && !show) return null;

  return (
    <div className={`copiedPopup ${show ? 'show' : ''}`}>
      Copied! 🎉
    </div>
  );
}
