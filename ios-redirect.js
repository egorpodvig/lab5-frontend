// ios-redirect.js
if (navigator.userAgent.includes('iPhone') || 
    navigator.userAgent.includes('iPad') ||
    navigator.userAgent.includes('iPod')) {
  
  // Если мы не на главной странице, редиректим
  if (window.location.pathname !== '/' && 
      window.location.pathname !== '/lab5-frontend/' &&
      !window.location.hash) {
    window.location.replace('/lab5-frontend/#/');
  }
}