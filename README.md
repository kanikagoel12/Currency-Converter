# 💱 Currency Converter

A modern, responsive currency converter web application built with React, Vite, and TailwindCSS. Features real-time exchange rates, dark mode support, and a polished user interface.

**[Live Demo](#deployment)** | **[Features](#features)** | **[Tech Stack](#tech-stack)** | **[Setup Guide](#setup)**

---

## ✨ Features

- **Real-time Exchange Rates**: Fetch live currency conversion rates from a reliable API
- **Extensive Currency Support**: 30+ currencies with country flags
- **Smart Caching**: Smart caching mechanism to reduce API calls and improve performance
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Responsive Design**: Beautiful glassmorphism UI that works on all devices
- **Advanced Search**: Quickly find currencies with instant search functionality
- **Conversion History**: View your recent conversions
- **Error Handling**: Graceful error messages and recovery strategies
- **Keyboard Navigation**: Full keyboard accessibility support
- **Copy to Clipboard**: One-click copy of conversion results
- **Trend Indicators**: Visual indicators showing currency rate trends

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, JSX |
| **Build Tool** | Vite 6 |
| **Styling** | TailwindCSS 3, PostCSS |
| **UI Components** | Lucide React Icons |
| **Notifications** | Sonner (Toast library) |
| **State Management** | React Hooks (useState, useEffect, useContext) |
| **HTTP** | Fetch API with error handling |
| **Storage** | LocalStorage for caching & preferences |

---

## 📋 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ConverterCard.jsx        # Main conversion form container
│   ├── CurrencyInput.jsx         # Searchable currency dropdown
│   ├── ResultCard.jsx            # Conversion result display
│   ├── SwapButton.jsx            # Currency swap toggle
│   ├── Navbar.jsx                # Header with theme toggle
│   ├── Loader.jsx                # Loading spinner
│   └── Toast.jsx                 # Toast notification manager
├── hooks/               # Custom React hooks
│   ├── useConverter.js           # Currency conversion logic & API calls
│   └── useTheme.js               # Theme management (light/dark)
├── data/                # Static data & constants
│   └── currencies.js             # Currency list & flag mapping
├── utils/               # Utility functions
│   └── format.js                 # Number & timestamp formatting
├── App.jsx              # Root component
├── main.jsx             # React DOM entry point
└── index.css            # Global styles
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables** (optional)
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local if needed (API URL defaults are provided)
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production (creates /dist folder)
npm run preview  # Preview production build locally
```

---

## 🔌 API Reference

### Currency API Source
- **Provider**: [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- **Endpoint**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`
- **Response Format**: 
  ```json
  {
    "usd": {
      "inr": 83.12,
      "eur": 0.92,
      ...
    }
  }
  ```
- **Rate Limit**: None specified (public API)
- **Caching**: Implemented with 30-minute TTL to reduce API calls

---

## 🎨 Component API

### ConverterCard
Main conversion interface component.
```jsx
<ConverterCard />
```

### CurrencyInput
Searchable dropdown for currency selection.
```jsx
<CurrencyInput 
  label="From"
  currency="USD"
  onCurrencyChange={setCurrency}
  showAmount={true}
  amount="100"
  onAmountChange={setAmount}
/>
```

### ResultCard
Displays conversion result with trend and timestamp.
```jsx
<ResultCard 
  result={{ amount: 100, fromCurrency: "USD", toCurrency: "INR", rate: 83.12, converted: 8312 }}
  trend={-1.5}
  lastUpdated={new Date().toISOString()}
/>
```

---

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies

# Feature Flags
VITE_ENABLE_CACHE=true
VITE_CACHE_TTL=1800000  # 30 minutes in milliseconds

# UI Configuration
VITE_DEFAULT_FROM=USD
VITE_DEFAULT_TO=INR
```

See `.env.example` for complete reference.

---

## 💾 Caching Strategy

The application implements a intelligent caching layer:

- **Type**: Client-side localStorage caching
- **TTL**: 30 minutes (configurable via env vars)
- **Key Format**: `CACHE_${FROM}_${TO}_${TIMESTAMP}`
- **Benefits**: 
  - Reduced API calls & faster conversions
  - Works offline with cached data
  - Automatic cache invalidation

Example cached entry:
```json
{
  "CACHE_USD_INR_1715001234": {
    "rate": 83.12,
    "timestamp": 1715001234000,
    "trend": 0.5
  }
}
```

---

## ♿ Accessibility

This project follows WCAG 2.1 Level AA standards:

- ✅ Keyboard navigation (Tab, Enter, Arrow keys)
- ✅ ARIA labels on interactive elements
- ✅ Semantic HTML structure
- ✅ Color contrast ratios (4.5:1+)
- ✅ Screen reader friendly
- ✅ Focus indicators visible
- ✅ Alt text for all images

---

## 🧪 Testing

To add unit tests for the `useConverter` hook:

```bash
npm install --save-dev vitest @testing-library/react
```

Test file: `src/hooks/__tests__/useConverter.test.js`

---

## 📱 Responsive Design

Tested and optimized for:
- ✅ Desktop (1920px and above)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

## 🐛 Known Limitations

- **Mock Trend Data**: Trend indicators are currently mocked (+/- 2% random). To display real trends, integrate a historical data API.
- **Rate Delays**: First load may take 2-3 seconds as API response varies
- **Offline Support**: Only cached rates are available offline

---

## 🚀 Deployment

### Vercel (Recommended - 0 Configuration)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repository
4. Click "Deploy" (Vite auto-detected)

### Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Create new site → Connect to Git
4. Build command: `npm run build`
5. Publish directory: `dist`

### Traditional Hosting (Shared Hosting, AWS, etc.)
```bash
# Build for production
npm run build

# Upload the entire dist/ folder to your web server
# Point your domain to the web server
```

---

## 🛣️ Roadmap

- [ ] Historical exchange rate charts
- [ ] Multiple conversion pairs at once
- [ ] Cryptocurrency support
- [ ] Rate alerts & notifications
- [ ] Unit tests with Vitest
- [ ] TypeScript migration
- [ ] PWA (Progressive Web App) support
- [ ] API rate limit handling

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Kanika** - [GitHub](https://github.com/yourprofile) | [LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Currency data from [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)
- Country flags from [flagsapi.com](https://flagsapi.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI inspiration from modern fintech applications

---

## 📞 Support

Found a bug? Have a suggestion? 
- Open an [Issue](https://github.com/yourusername/currency-converter/issues)
- Email: your.email@example.com

---

**Last Updated**: May 2026 | **Version**: 1.0.0

