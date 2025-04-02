# Bizu Marketplace Frontend

The frontend application for Bizu, a marketplace for renting items. Built with Next.js, TypeScript, Tailwind CSS, and Radix UI.

## Features

- Modern, responsive design
- Product browsing and search
- User authentication
- Product details and specifications
- Wishlist functionality
- User profiles
- Admin dashboard (coming soon)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bizu-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── browse/            # Browse products page
│   ├── product/           # Product details page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix UI)
│   └── product-card.tsx  # Product card component
├── lib/                   # Utility functions and configurations
├── public/               # Static assets
└── styles/              # Global styles
```

## Key Components

### Product Card
- Displays product information in a grid layout
- Shows rental price and savings
- Includes quick actions (rent, wishlist)

### Product Details
- Comprehensive product information
- Image gallery
- Features and specifications
- Reviews and ratings
- Rental options

### Navigation
- Responsive navigation menu
- Category filtering
- Search functionality

## Styling

The application uses:
- Tailwind CSS for utility-first styling
- Radix UI for accessible components
- Custom color scheme and typography
- Responsive design for all screen sizes

## State Management

- React Context for global state
- Local state with React hooks
- Server state with Next.js data fetching

## API Integration

The frontend communicates with the backend API for:
- User authentication
- Product data
- User profiles
- Wishlist management

## Development

1. Start the development server:
```bash
npm run dev
```

2. The application will be available at `http://localhost:3000`

3. API requests will be proxied to `http://localhost:3001`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Image optimization with Next.js
- Code splitting
- Lazy loading
- Static generation where possible

## Accessibility

- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader support
- ARIA labels and roles

## License

This project is licensed under the ISC License. 