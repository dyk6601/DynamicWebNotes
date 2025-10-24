# Week 3 Homework - Reusable Card Component

A flexible and customizable Card component library built with React and Tailwind CSS, inspired by Bootstrap's card system.

## Features

### Card Component
- **Multiple Variants**: Default, Primary, Success, Warning, Danger, Dark
- **Shadow Levels**: None, Small, Medium, Large, Extra Large
- **Hover Effects**: Optional hover animations and shadow transitions
- **Full Customization**: Support for custom CSS classes and styling

### Sub-components
- **CardHeader**: Configurable header with variant support
- **CardBody**: Flexible body content with padding options
- **CardFooter**: Footer section with variant theming
- **CardTitle**: Typography component with size options
- **CardText**: Text content with muted option
- **CardImage**: Image component with positioning (top/bottom)

## Usage Examples

### Basic Card
```jsx
import Card, { CardHeader, CardBody, CardFooter, CardTitle, CardText } from './components/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardBody>
    <CardText>This is the card content.</CardText>
  </CardBody>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

### Card with Variants
```jsx
<Card variant="primary" shadow="lg" hover>
  <CardBody>
    <CardTitle>Primary Card</CardTitle>
    <CardText>This card uses the primary variant with large shadow and hover effects.</CardText>
  </CardBody>
</Card>
```

### Card with Image
```jsx
<Card>
  <CardImage src="/image.jpg" alt="Description" />
  <CardBody>
    <CardTitle>Card with Image</CardTitle>
    <CardText>Content below the image.</CardText>
  </CardBody>
</Card>
```

## Component Props

### Card
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'dark'
- `shadow`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `hover`: boolean - Adds hover animations
- `className`: string - Custom CSS classes

### CardBody
- `padding`: 'none' | 'sm' | 'default' | 'lg'
- `className`: string - Custom CSS classes

### CardTitle
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `className`: string - Custom CSS classes

### CardText
- `muted`: boolean - Applies muted styling
- `className`: string - Custom CSS classes

### CardImage
- `src`: string - Image source URL
- `alt`: string - Alt text for accessibility
- `position`: 'top' | 'bottom' - Image positioning
- `className`: string - Custom CSS classes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. View the demo at `http://localhost:3000`

## Technical Details

- **React**: ^19.1.1
- **Tailwind CSS**: ^3.4.17
- **PropTypes**: For type validation
- **classnames**: For conditional class application
- **tailwind-merge**: For Tailwind class merging

## Demo Page

The included demo page (`CardDemoPage.js`) showcases:
- All card variants and styling options
- Image integration examples
- Profile card layouts
- Alert/notification cards
- Custom styling demonstrations
- Interactive hover effects
- Responsive grid layouts

## Customization

All components accept custom `className` props and can be styled with:
- Tailwind CSS utilities
- Custom CSS classes
- Inline styles (via props)
- CSS-in-JS solutions

The component uses `tailwind-merge` to intelligently merge classes and avoid conflicts.
