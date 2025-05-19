// Language translations
const translations = {
  en: {
    welcomeText: "Welcome to Kalaakar",
    taglineText: "Elevate your fashion with art",
  },
  hi: {
    welcomeText: "Kalaakar में आपका स्वागत है",
    taglineText: "कला के साथ फैशन को ऊँचाई दें",
  },
  fr: {
    welcomeText: "Bienvenue chez Kalaakar",
    taglineText: "Élevez votre style avec de l'art",
  }
};

function changeLanguage(lang) {
  document.getElementById("welcomeText").innerText = translations[lang].welcomeText;
  document.getElementById("taglineText").innerText = translations[lang].taglineText;
}

// Currency conversion mock
const pricesInINR = 1999;
const currencyRates = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011
};

function changeCurrency(currency) {
  const convertedPrice = Math.round(pricesInINR * currencyRates[currency]);
  const symbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : '€';
  document.getElementById("priceTag").innerText = symbol + convertedPrice;
}
