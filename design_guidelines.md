# Design Guidelines: Modern Unit Converter Application

## Design Approach

**Selected Approach**: Custom Utility-Focused Design System
**Rationale**: This is a utility-first application where efficiency, clarity, and usability are paramount. The design should feel modern and polished while staying out of the way of the core functionality - instant, accurate unit conversions.

## Core Design Principles

1. **Clarity Over Decoration**: Every visual element serves the conversion workflow
2. **Instant Feedback**: Visual confirmation of all user actions
3. **Scan-ability**: Users should quickly identify input fields, results, and actions
4. **Breathing Room**: Generous spacing prevents cognitive overload with numbers

---

## Color Palette

### Light Mode
- **Background**: 0 0% 100% (pure white)
- **Surface**: 0 0% 98% (subtle off-white for cards)
- **Surface Elevated**: 0 0% 100% with subtle shadow
- **Primary**: 217 91% 60% (modern blue - trustworthy, professional)
- **Primary Hover**: 217 91% 55%
- **Text Primary**: 220 9% 15% (near-black for readability)
- **Text Secondary**: 220 9% 46%
- **Border**: 220 13% 91%
- **Success**: 142 71% 45% (conversion confirmed)
- **Error**: 0 84% 60% (invalid inputs)

### Dark Mode
- **Background**: 222 47% 11%
- **Surface**: 217 33% 17%
- **Surface Elevated**: 215 28% 22%
- **Primary**: 217 91% 60% (same as light for consistency)
- **Text Primary**: 210 20% 98%
- **Text Secondary**: 217 19% 72%
- **Border**: 217 19% 27%

**Accent Colors**: Use sparingly for quick action buttons and highlights
- **Accent**: 142 71% 45% (green for positive actions like "swap" or "copy")

---

## Typography

**Font Stack**: System font stack for instant loading and native feel
- `font-sans`: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Hierarchy
- **Hero Numbers** (conversion results): text-4xl md:text-5xl, font-semibold
- **H1** (page title): text-3xl md:text-4xl, font-bold
- **H2** (section headers): text-2xl, font-semibold
- **H3** (category names): text-xl, font-semibold
- **Body**: text-base, font-normal
- **Small** (labels, hints): text-sm
- **Unit Labels**: text-sm, font-medium, uppercase tracking-wide

---

## Layout System

**Spacing Scale**: Use Tailwind units consistently - 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 md:p-8
- Section gaps: gap-6 md:gap-8
- Container max-width: max-w-6xl
- Converter widget max-width: max-w-4xl

**Responsive Breakpoints**:
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)

---

## Component Specifications

### Main Converter Widget
**Layout**: Card-based, elevated with subtle shadow
- Background: Surface color
- Padding: p-8 md:p-10
- Border radius: rounded-2xl
- Shadow: shadow-lg with blur
- Two-column layout on desktop (md:grid-cols-2)
- Single column on mobile with swap button centered between fields

**Input Fields**:
- Large touch targets: h-14
- Text size: text-2xl for numbers (high readability)
- Border: 2px solid on focus
- Placeholder: lowercase, light gray
- Clear focus states with primary color ring

**Unit Selectors**:
- Custom styled dropdown with search
- Height: h-12
- Icons: Small flag or symbol icons next to unit names
- Hover state: subtle background change
- Selected state: primary color accent

**Swap Button**:
- Circular, icon-only button
- Size: w-12 h-12
- Position: Center between input fields (absolute positioning on mobile)
- Icon: Bidirectional arrows (↔)
- Background: Primary color
- Hover: scale-105 transform with smooth transition
- Active: scale-95

### Search/Autocomplete
- Dropdown appears below input with smooth slide-down animation
- Max height: max-h-64 with overflow scroll
- Each result shows: Unit name (bold), Category (small, gray), Symbol
- Keyboard navigable with arrow keys
- Highlight matched characters in search results

### Quick Links Grid
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Each link: Card style, hover lifts slightly (hover:-translate-y-1)
- Arrow icon indicating direction (→)
- Subtle border with hover color change

### Copy Button
- Small, inline button next to result
- Icon-only with tooltip on hover
- Transitions to checkmark on successful copy
- Micro-animation: gentle pulse on click

### Recent Conversions
- Horizontal scrolling cards on mobile
- List view on desktop
- Each item clickable to reload that conversion
- Clear/delete option per item
- Timestamp shown in relative format ("2 minutes ago")

---

## Animations & Interactions

**Philosophy**: Smooth and purposeful, never distracting
- All transitions: duration-200 to duration-300
- Easing: ease-in-out
- Hover states: Subtle scale or color change
- Loading states: Simple spinner, not skeleton screens
- Number changes: Brief fade transition when result updates

**Specific Animations**:
- Input focus: Ring grows from center (ring-2 ring-primary)
- Swap button click: 180° rotation
- Result update: Fade-in with slight slide-up (translate-y-2 to translate-y-0)
- Error messages: Shake animation (slight horizontal movement)
- Copy confirmation: Checkmark fade-in with scale

---

## Mobile Considerations

- All touch targets minimum 44x44px
- Converter fields stack vertically with swap button between them
- Bottom navigation for category switching (sticky)
- Generous padding to prevent accidental taps
- Native-feeling scroll behavior
- No hover states on mobile (focus states only)

---

## Accessibility

- ARIA labels on all inputs and buttons
- Keyboard navigation fully supported
- Focus visible at all times (custom focus rings)
- Screen reader announcements for conversion results
- High contrast ratios (WCAG AA minimum)
- Error messages programmatically associated with inputs
- Dark mode support throughout

---

## Visual Enhancements

**No Images Required**: This is a utility application - no hero images needed
**Icons**: Use Heroicons (outline style) via CDN for:
- Swap arrows, clipboard, search, calculator, close, chevrons, check
- Keep icon usage minimal and functional

**Micro-interactions**:
- Button press feedback (scale-95 on active)
- Input field glow on focus
- Smooth color transitions on hover
- Result field brief highlight when value updates

---

## Page Structure

1. **Header**: Minimal - Logo/title, dark mode toggle, calculator icon (optional modal)
2. **Main Converter**: Hero section with the primary two-way converter
3. **Quick Links**: Grid of popular conversions below main widget
4. **All Categories**: Expandable accordion or tabbed interface
5. **Footer**: Minimal - About, Privacy, Copyright

**No marketing content needed** - this is a pure utility tool focused on conversions.