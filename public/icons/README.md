# Finance-Themed SVG Icons for Impact Advocacy Website

This collection contains 12 professional, finance-themed SVG icons designed to replace emojis throughout the Impact Advocacy bilingual website. All icons are optimized for web use and maintain consistent styling suitable for a financial education company serving Latino communities in DFW.

## Icon Inventory

### Services & Features
- **money.svg** - Replaces 💰 (Financial Literacy/Money)
  - Dollar sign within a circle, perfect for financial planning sections
- **target.svg** - Replaces 🎯 (Target/Strategic focus)
  - Concentric circles representing goals and strategic targeting
- **handshake.svg** - Replaces 🤝 (Partnership/Community)
  - Stylized handshake icon for community partnerships
- **house.svg** - Replaces 🏠 (Real Estate/Housing)
  - Clean house silhouette for real estate services

### Stats & Credentials
- **book.svg** - Replaces 📚 (Workshops/Education)
  - Open book icon for educational workshops and literacy programs
- **family.svg** - Replaces 👨‍👩‍👧‍👦 (Families)
  - People/family group icon representing families served
- **star.svg** - Replaces ⭐ (Experience/Years)
  - Five-pointed star for achievements and experience
- **city.svg** - Replaces 🏙️ (Cities)
  - Urban skyline representing cities served

### Media & Partnerships
- **television.svg** - Replaces 📺 (TV/Media)
  - TV screen icon for media appearances
- **radio.svg** - Replaces 📻 (Radio)
  - Radio wave broadcast icon for radio partnerships
- **office.svg** - Replaces 🏢 (Business/Chamber)
  - Office building for business and chamber partnerships
- **speech.svg** - Replaces 🗣️ (Speaking/Bilingual)
  - Speech bubble for communication and bilingual services

## Technical Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Viewbox**: 24x24 units (scalable)
- **Default Size**: 64x64 pixels
- **Stroke**: 2px width, currentColor (inherits text color)
- **Style**: Outline/line art style with rounded caps and joins
- **Compatibility**: Works with all modern browsers and Astro framework

## Integration with Astro

### Method 1: Direct Import
```astro
---
// In your .astro component
import MoneyIcon from '../assets/icons/money.svg?raw';
---

<div set:html={MoneyIcon} />
```

### Method 2: As Component
```astro
---
// Create an Icon component
export interface Props {
  name: string;
  size?: number;
}

const { name, size = 64 } = Astro.props;
---

<img src={`/assets/icons/${name}.svg`} width={size} height={size} alt={`${name} icon`} />
```

### Method 3: Inline SVG (Recommended for styling)
```astro
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Copy path content from individual SVG files -->
</svg>
```

## Styling Options

### CSS Customization
```css
.icon {
  width: 2rem;
  height: 2rem;
  stroke: #your-brand-color;
  stroke-width: 1.5;
}

.icon:hover {
  stroke: #hover-color;
  transform: scale(1.1);
}
```

### Responsive Sizing
```css
.icon-sm { width: 1rem; height: 1rem; }
.icon-md { width: 1.5rem; height: 1.5rem; }
.icon-lg { width: 2rem; height: 2rem; }
.icon-xl { width: 3rem; height: 3rem; }
```

## File Structure
```
assets/
└── icons/
    ├── money.svg
    ├── target.svg
    ├── handshake.svg
    ├── house.svg
    ├── book.svg
    ├── family.svg
    ├── star.svg
    ├── city.svg
    ├── television.svg
    ├── radio.svg
    ├── office.svg
    ├── speech.svg
    └── README.md
```

## Usage Examples

### Financial Services Section
```astro
<div class="service">
  <div set:html={MoneyIcon} />
  <h3>Financial Literacy</h3>
  <p>Comprehensive financial education programs...</p>
</div>
```

### Statistics Display
```astro
<div class="stat">
  <div set:html={FamilyIcon} />
  <span class="number">500+</span>
  <span class="label">Families Served</span>
</div>
```

## Notes
- All icons use `currentColor` for stroke, making them easily themeable
- Icons are optimized for both light and dark themes
- Professional appearance suitable for financial education context
- Consistent 2px stroke width across all icons
- Ready for immediate use in production

## License
These icons are created specifically for the Impact Advocacy website and are ready for commercial use without attribution requirements.
