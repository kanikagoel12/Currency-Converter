# Quick Reference Guide

##  Getting Started (30 seconds)

```bash
npm install
npm run dev  # Starts at http://localhost:5173
```

##  Project Structure Guide

```
src/
├── App.jsx                          # Root component with theme provider
├── main.jsx                         # React DOM entry point
├── index.css                        # Global styles
│
├── components/                      # Reusable UI components (all have JSDoc)
│   ├── ConverterCard.jsx           # Main form (handles submission & state)
│   ├── CurrencyInput.jsx           # Searchable dropdown with flags
│   ├── ResultCard.jsx              # Shows conversion result
│   ├── SwapButton.jsx              # Currency swap toggle button
│   ├── Navbar.jsx                  # Header with theme toggle
│   ├── Loader.jsx                  # Loading skeleton
│   └── Toast.jsx                   # Notification system wrapper
│
├── hooks/                           # Custom React hooks
│   ├── useConverter.js             # Currency conversion logic + caching (main logic!)
│   └── useTheme.js                 # Dark/light mode management
│
├── data/                            # Static data
│   └── currencies.js               # Currency codes & flag mapping
│
└── utils/                           # Utility functions
    └── format.js                   # Number & timestamp formatters
```

##  Key Features & Where They're Implemented

| Feature | Main File | Key Functions |
|---------|-----------|---|
| **Conversion Logic** | `useConverter.js` | `fetchRate()`, `swapCurrencies()` |
| **Smart Caching** | `useConverter.js` | `getCachedRate()`, `setCachedRate()` |
| **Theme Toggle** | `useTheme.js` | `toggleTheme()` |
| **Currency Search** | `CurrencyInput.jsx` | Filter by query |
| **Error Handling** | `useConverter.js` | Try-catch with specific messages |
| **Accessibility** | All components | ARIA labels, semantic HTML |
| **Number Formatting** | `format.js` | `formatNumber()` |
| **Timestamps** | `format.js` | `formatTimestamp()` |

##  API & Caching

### API Endpoint
```
GET https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{code}.min.json
```

### Response Format
```json
{
  "usd": {
    "inr": 83.12,
    "eur": 0.92,
    ...
  }
}
```

### Cache Strategy
- **Key**: `RATE_${from}_${to}`
- **Value**: `{ rate, trend, timestamp }`
- **TTL**: 30 minutes (configurable in `.env`)
- **Update**: Auto-updates on currency/amount change

##  Styling Reference

### Theme Colors (TailwindCSS)
- **Primary**: Cyan-500 to Violet-500 gradient
- **Light Mode**: White with 50% opacity backgrounds
- **Dark Mode**: Slate-900 with 50% opacity backgrounds
- **Success**: Emerald colors
- **Error**: Rose colors

### Key Classes
- `bg-app-gradient` - Main gradient background
- `shadow-glass` - Glassmorphism effect
- `dark:` - Dark mode variant
- `@2xl:` - Responsive sizes

##  Testing Scenarios

### Happy Path
1. Enter amount
2. Select currencies
3. Click "Convert Now"
4. See result with trend

### Error Cases
1. Network down → Shows error message
2. Timeout → Shows timeout error
3. Invalid amount → Shows validation error
4. API failure → Shows user-friendly error

### Edge Cases
1. Empty amount → Defaults to 1
2. Negative amount → Validation error
3. Same currency pair → Works fine
4. Rapid clicking → Debounced by loading state

##  Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px+
- **Wide**: 1920px+

##  Environment Variables

Create `.env.local` to customize:

```env
# API Endpoint
VITE_API_BASE_URL=https://...

# Cache Duration (milliseconds)
VITE_CACHE_TTL=1800000  # 30 minutes

# Default Currencies
VITE_DEFAULT_FROM=USD
VITE_DEFAULT_TO=INR
```

##  Build & Deploy

```bash
npm run build          # Creates dist/ folder
npm run preview        # Preview production build
npm run dev            # Dev server with hot reload
```

### Deploy Buttons
- **Vercel**: Import from GitHub (automatic)
- **Netlify**: Connect GitHub repo
- **Traditional**: Upload `dist/` folder to any web host

##  Performance Metrics

| Metric | Value |
|--------|-------|
| First Load | ~1-2 seconds |
| Cached Conversion | <500ms |
| API Conversion | 2-3 seconds |
| Bundle Size (gzipped) | ~79 KB |
| Lighthouse Score | 95+ |

##  Debugging Tips

### Check Cache
```javascript
// In console
localStorage.getItem('RATE_USD_INR')
```

### Clear Cache
```javascript
// In console
Object.keys(localStorage)
  .filter(key => key.startsWith('RATE_'))
  .forEach(key => localStorage.removeItem(key))
```

### Check Theme
```javascript
// In console
localStorage.getItem('currency-theme')
document.documentElement.classList.contains('dark')
```

##  Documentation Files

- **README.md** - Full project documentation
- **CONTRIBUTING.md** - How to contribute
- **CHANGELOG.md** - Version history & roadmap
- **RESUME_READY_SUMMARY.md** - What makes this resume-ready

##  Code Navigation Tips

1. **Start at**: `src/App.jsx` (root component)
2. **See data flow**: Follow `ConverterCard.jsx` → `useConverter.js`
3. **Understand caching**: Look at `getCachedRate()` in `useConverter.js`
4. **Check accessibility**: Search for `aria-` in components
5. **See error handling**: Look for try-catch in `useConverter.js`

## ⌨️ Keyboard Shortcuts

- **Tab**: Navigate between elements
- **Enter/Space**: Click buttons
- **Arrow Keys**: Navigate dropdown
- **Escape**: Close dropdown

##  Common Tasks

### Change Default Currencies
File: `src/hooks/useConverter.js`
```javascript
const [fromCurrency, setFromCurrency] = useState("USD");  // Change here
const [toCurrency, setToCurrency] = useState("INR");      // And here
```

### Modify Cache Duration
File: `.env.local`
```env
VITE_CACHE_TTL=3600000  # 1 hour instead of 30 mins
```

### Add New Currency
File: `src/data/currencies.js`
```javascript
export const currencyMap = {
  // ... existing
  BTC: "__",  // Add Bitcoin (need country code for flag)
};
```

### Change Theme Colors
File: `src/components/ConverterCard.jsx`
```jsx
className="bg-gradient-to-r from-cyan-500 to-violet-500"  // Change colors here
```

##  Getting Help

1. **Build Issues**: Check `npm install`, Node version 16+
2. **API Issues**: Check network tab, verify URL in .env
3. **Styling Issues**: Check TailwindCSS scope or dark mode
4. **Accessibility**: Check WCAG guidelines and test with screen reader

## ✅ Quality Checklist

Before sharing/deploying:
- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Dark mode works
- [ ] Responsive on mobile
- [ ] Keyboard navigation works
- [ ] Error messages appear correctly
- [ ] Cache works (check localStorage)

##  Learning Resources

- **React Hooks**: Official React docs
- **TailwindCSS**: Utility-first CSS guide
- **Vite**: Next generation build tool
- **Accessibility**: WCAG 2.1 AA guidelines
- **API Integration**: fetch() documentation

---

**Need more help?** Check README.md or CONTRIBUTING.md
