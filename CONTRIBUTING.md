# Contributing to Currency Converter

First off, thank you for considering contributing to Currency Converter! It's people like you that make this project such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**
* **Include your environment details** (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the desired behavior**
* **Explain why this enhancement would be useful**

## Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Make your changes and test thoroughly**

6. **Commit your changes**
   ```bash
   git commit -m "Add: description of your feature"
   ```

   **Commit message conventions:**
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Refactor:` for code refactoring
   - `Docs:` for documentation updates
   - `Style:` for code style changes
   - `Test:` for test additions/updates

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**

## Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Update CHANGELOG.md** with the changes following the format
3. **Add tests** for any new functionality
4. **Ensure all tests pass**
   ```bash
   npm run test
   ```
5. **Run build to ensure no errors**
   ```bash
   npm run build
   ```
6. **Check code formatting**
   ```bash
   npm run lint
   ```

## Style Guide

### JavaScript/JSX
- Use functional components with Hooks
- Use descriptive variable and function names
- Add JSDoc comments to functions and components
- Use const/let instead of var
- Arrow functions are preferred
- Use template literals for strings

```javascript
/**
 * Descriptive function description
 * @param {Type} paramName - Description
 * @returns {Type} Return description
 */
export function myFunction(paramName) {
  // implementation
  return result;
}
```

### Component Props
- Define prop types in JSDoc
- Keep components small and focused
- Extract reusable logic into custom hooks

### CSS/Tailwind
- Use Tailwind utility classes
- Mobile-first responsive design
- Use consistent spacing and colors
- Follow dark mode conventions

### Accessibility
- Add proper ARIA labels to interactive elements
- Use semantic HTML elements
- Ensure color contrast meets WCAG AA standards
- Support keyboard navigation
- Test with screen readers

## Testing

When adding new features, please include tests:

```javascript
// src/hooks/__tests__/myHook.test.js
import { renderHook, act } from '@testing-library/react';
import useMyHook from '../myHook';

describe('useMyHook', () => {
  it('should update state when called', () => {
    const { result } = renderHook(() => useMyHook());
    
    act(() => {
      result.current.updateValue('new value');
    });

    expect(result.current.value).toBe('new value');
  });
});
```

## Performance Guidelines

- Minimize bundle size (check with `npm run build`)
- Use production builds for testing
- Implement caching where appropriate
- Use React.memo for components that don't need frequent re-renders
- Avoid unnecessary state updates
- Lazy load components when possible

## Documentation

- Keep README.md updated
- Add JSDoc comments to all exported functions
- Document any complex logic with inline comments
- Update CHANGELOG.md with new features/fixes
- Include examples in documentation

## Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers.

---

**Thank you for contributing! ❤️**

