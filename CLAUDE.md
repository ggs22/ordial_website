# CLAUDE.md

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Internationalization**: Custom conditional rendering approach (English/French)
- **Development**: Node.js with npm
- **Routing**: File-based routing with dynamic `[locale]` parameter

## Code Conventions

- **Components**: Use TypeScript with strict typing
- **Server Components**: Default for pages and layouts (async functions)
- **Styling**: Tailwind CSS classes, inline styles for simple cases
- **File Naming**: kebab-case for files, PascalCase for components
- **Internationalization**: Conditional rendering based on `locale` parameter
- **Colors**: 
  - Primary: `#0f1e32` (dark blue)
  - Secondary: `#3b82f6` (blue)
  - Gradients: `from-blue-400 to-purple-600`

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Dynamic locale routing (en/fr)
│   │   │   ├── layout.tsx      # Locale-specific layout with navigation
│   │   │   └── page.tsx        # Home page with bilingual content
│   │   ├── layout.tsx          # Root layout with html/body tags
│   │   ├── page.tsx            # Root redirect to /en
│   │   └── globals.css         # Global Tailwind styles
│   └── components/             # Reusable components (if any)
├── public/
│   └── globe.svg               # Logo/icon assets
├── middleware.ts               # Locale routing middleware
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

### Key Files

- **`middleware.ts`**: Handles locale routing for `/en` and `/fr` paths
- **`src/app/[locale]/layout.tsx`**: Bilingual navigation and footer
- **`src/app/[locale]/page.tsx`**: Home page with conditional French/English content
- **`src/app/page.tsx`**: Redirects root path to `/en`

### Bilingual Implementation

Content is rendered conditionally using:
```typescript
{locale === 'fr' ? 'French text' : 'English text'}
```

Navigation shows appropriate language indicators with underlined current language.