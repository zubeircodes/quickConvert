# Design Guidelines: Modern Unit Converter Application

## Design Approach

**Selected Approach**: Minimal, Refined Design System
**Rationale**: This is a utility-first application where efficiency, clarity, and usability are paramount. The design uses a minimal aesthetic with refined colors and clean typography, staying out of the way of the core functionality - instant, accurate unit conversions.

## Core Design Principles

1. **Minimal & Clean**: Simple, refined design with no unnecessary animations or effects
2. **Clarity Over Decoration**: Every visual element serves the conversion workflow
3. **Refined Color Palette**: Sophisticated indigo/purple primary color with subtle grays
4. **Scan-ability**: Users should quickly identify input fields, results, and actions
5. **Breathing Room**: Generous spacing prevents cognitive overload with numbers

---

## Color Palette

### Light Mode
- **Background**: 0 0% 99% (off-white, minimal)
- **Card**: 0 0% 100% (pure white for contrast)
- **Primary**: 240 80% 60% (refined indigo/purple - sophisticated)
- **Text Primary**: 215 20% 15% (dark for strong readability)
- **Text Secondary**: 215 15% 45% (muted for hierarchy)
- **Border**: 220 15% 90% (light and clean)
- **Muted**: 220 12% 92% (subtle backgrounds)
- **Success**: 142 71% 45% (conversion confirmed)
- **Error**: 0 70% 55% (invalid inputs)

### Dark Mode
- **Background**: 220 20% 10% (deep, refined dark)
- **Card**: 220 18% 14% (slightly elevated)
- **Primary**: 240 80% 65% (same indigo family)
- **Text Primary**: 0 0% 98% (crisp white)
- **Text Secondary**: 220 10% 65% (softer for hierarchy)
- **Border**: 220 15% 22% (subtle separation)
- **Muted**: 220 15% 22% (dark backgrounds)

**Design Note**: Colors are chosen for a minimal, professional aesthetic with no bright or overly saturated tones.

---

## Typography

**Primary Font**: Space Grotesk (Google Fonts) - Modern, geometric sans-serif
- Used for: All h1 headings and logo text
- Weight: 600 (semibold)
- Letter spacing: -0.02em (tighter, more refined)

**Body Font**: System font stack for instant loading and native feel
- `font-sans`: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Hierarchy
- **H1** (page title, logo): text-2xl md:text-3xl, font-semibold (Space Grotesk)
- **H2** (section headers): text-2xl, font-semibold
- **Hero Numbers** (conversion results): text-3xl md:text-4xl, font-semibold
- **Body**: text-base, font-normal
- **Small** (labels, hints): text-sm
- **Muted Text**: text-sm, text-muted-foreground

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

## Interactions

**Philosophy**: Minimal and functional, no unnecessary animations
- **No animations**: Cards do not lift, translate, or transform on hover
- **Hover states**: Subtle background elevation only (via hover-elevate utility)
- **Active states**: Subtle press feedback (via active-elevate-2 utility)
- **Focus states**: Clear ring outline (ring-2 ring-primary) for accessibility
- **No transitions**: Instant state changes for a snappier, more responsive feel

**Interaction Guidelines**:
- Input focus: Immediate ring appearance
- Button click: Subtle background change only
- No rotating, scaling, or translating elements
- No fade-in animations
- No slide animations
- Keep it simple and immediate

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