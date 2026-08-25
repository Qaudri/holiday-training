<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@font-face {
  font-family: 'Faster Break';
  src: url('/Faster-Break.woff2') format('woff2');
  font-display: swap;
}

html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  overflow-y: visible;
  position: relative;
  font-family: 'Inter', sans-serif;
  color: #0A0A0A;
}

body, p, span, a, button, input, textarea, select {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6, .heading {
  font-family: 'Faster Break', sans-serif;
}

* {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 0px;
  cursor: pointer;
}
</style>