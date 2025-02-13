```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const handleClick = async () => {
    setIsNavigating(true);
    await router.push('/');
    setIsNavigating(false);
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick} disabled={isNavigating}>
        {isNavigating ? 'Navigating...' : 'Go back to Home'}
      </button>
    </div>
  );
}
```