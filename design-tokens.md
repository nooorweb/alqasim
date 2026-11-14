# Purdue Theme Design Tokens & Mini Style Guide

> **Source of Truth** for the Academy Website: Design tokens extracted from the Purdue theme stylesheets ([style.css](file:///c:/Users/Noor/Desktop/purdue-v1.0.0/public/assets/css/style.css), [bootstrap.min.css](file:///c:/Users/Noor/Desktop/purdue-v1.0.0/public/assets/bootstrap/css/bootstrap.min.css), and [tokens.css](file:///c:/Users/Noor/Desktop/purdue-v1.0.0/public/assets/css/tokens.css)).
> These specifications ensure that newly developed pages (**Admissions**, **Registration**, **Departments**, **Careers**, **Gallery**, **Certificate Verification**) remain visually indistinguishable from ported template pages.

---

## 1. Color System

| Token Name | CSS Variable | Hex / Value | Usage & Context |
|---|---|---|---|
| **Primary Blue** | `--theme-primary` | `#2c7aff` | Main brand color, buttons, active icons, links, category badges |
| **Primary Hover** | `--theme-primary-hover` | `#1e65db` | Interactive hover states for buttons and active items |
| **Primary RGB** | `--theme-primary-rgb` | `44, 122, 255` | Alpha backdrops (e.g., `rgba(44, 122, 255, 0.1)`) |
| **Dark Navy Heading**| `--theme-heading` | `#1a2d62` | Primary font color for `h1`–`h6`, card titles, and emphasized labels |
| **Accent Gold / Amber**| `--theme-accent` | `#fec961` | Button hover fill, highlighted title spans, rating stars |
| **Accent Hover** | `--theme-accent-hover` | `#e5b045` | Hover on gold elements |
| **Body Text** | `--theme-body` | `#555555` | Default paragraph, list items, description text |
| **Muted Text** | `--theme-body-muted` | `#777777` | Timestamps, author subtexts, course lesson counters |
| **Light Muted** | `--theme-body-light` | `#999999` | Placeholders, inactive breadcrumb text |
| **Pure White** | `--theme-bg-white` | `#ffffff` | Card surfaces, modals, dropdown menus |
| **Subtle Light Gray** | `--theme-bg-subtle` | `#f8faff` | Alternating section backgrounds |
| **Top Banner Warm** | `--theme-bg-banner` | `#f9f4f1` | Top notification bar and header banner |
| **Soft Blue Tint** | `--theme-bg-soft-blue` | `#ebecff` | Pricing cards and highlight containers |
| **Hero Gradient** | `--theme-gradient-hero`| `linear-gradient(to left, rgb(228, 242, 254), rgb(255, 238, 254))` | Breadcrumb page banner (`.section-top`) |
| **Border Neutral** | `--theme-border-color` | `#eeeeee` | Card dividers, blog post borders, table borders |
| **Border Accent** | `--theme-border-subtle`| `rgba(207, 217, 249, 0.5)` | Outlines on pricing and course cards |
| **Success Green** | `--theme-success` | `#198754` | Verification badges, success alerts, status tags |
| **Warning Yellow** | `--theme-warning` | `#ffc107` | Rating stars, notice banners |
| **Danger Red** | `--theme-danger` | `#dc3545` | Error messages, mandatory asterisks |

---

## 2. Typography

* **Primary Font Family**: `'Lexend', sans-serif`
* **Google Font URL**: `https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap`
* **Base Typography**:
  * Base Font Size: `16px`
  * Base Line Height: `26px`
  * Default Weight: `400`
  * Text Color: `#555555`

### Heading Hierarchy

| Element / Class | Desktop Size | Tablet Size | Mobile Size | Weight | Color | Line Height |
|---|---|---|---|---|---|---|
| **Hero H1** | `60px` | `50px` | `40px` | `700` | `#1a2d62` | `1.15` |
| **Section H1** | `60px` | `50px` | `40px` | `500` | `#1a2d62` | `1.2` |
| **Page Banner H1** | `50px` | `42px` | `32px` | `600` | `#1a2d62` | `1.25` |
| **Section-Title H4 (Category)** | `20px` | `18px` | `16px` | `500` | `#2c7aff` | `1.3` |
| **Section-Title-Two H2** | `50px` | `38px` | `30px` | `600` | `#1a2d62` | `1.2` |
| **H3 (Card Title)** | `22px` - `24px` | `20px` | `18px` | `500` / `600` | `#1a2d62` | `1.3` |
| **H4 (Subheadings)** | `18px` - `20px` | `18px` | `16px` | `600` | `#1a2d62` | `1.4` |
| **H5 (Meta Headings)** | `16px` - `18px` | `16px` | `15px` | `500` | `#1a2d62` | `1.4` |
| **Small / Meta (`.cmeta`)** | `13px` - `14px` | `13px` | `12px` | `400` | `#777777` | `1.5` |

---

## 3. Spacing & Layout

* **Standard Section Padding**:
  * Desktop (`≥ 992px`): `.section-padding` = `80px 0`
  * Mobile / Tablet (`< 992px`): `60px 0`
* **Section Title Margin Bottom**: `margin-bottom: 60px`
* **Card Margins**: `margin-bottom: 30px` (or `25px`)
* **Grid Gutter System**: Bootstrap 5 responsive gutter grid (`g-4` = `24px`, `gx-5` = `48px`)
* **Container Breakpoints**:
  * `sm`: `540px`
  * `md`: `720px`
  * `lg`: `960px`
  * `xl`: `1140px`
  * `xxl`: `1320px`

---

## 4. Border Radius

* **Extra Small (`--theme-radius-xs`)**: `4px` – Badges, tooltips, tiny tag backgrounds
* **Small (`--theme-radius-sm`)**: `6px` – Event cards (`.event-slide`), form controls
* **Medium (`--theme-radius-md`)**: `10px` – Course cards (`.course-item`), topic cards, breadcrumb nav pill
* **Large (`--theme-radius-lg`)**: `15px` – Feature blocks, modal containers
* **Extra Large (`--theme-radius-xl`)**: `20px` – Notification containers, verification box
* **Pill (`--theme-radius-pill`)**: `100px` – Buttons (`.btn_one`, `.btn_two`), search bar pills
* **Full Circle (`--theme-radius-circle`)**: `50%` – Avatars, social circle icons, back-to-top button

---

## 5. Shadows & Elevation

* **Primary Card Shadow**:
  `box-shadow: 0px 0px 150px 0px rgba(78, 67, 250, 0.1);`
  *(Used on `.course-item`, course lists, and pricing cards)*
* **Team Card Shadow**:
  `box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.09);`
  *(Used on faculty `.our-team` cards)*
* **Button Elevation**:
  `box-shadow: 10px 15px 18px rgba(23, 23, 36, 0.1);`
  *(Provides soft depth under `.btn_one`)*
* **Hover Card Elevation**:
  `box-shadow: 0px 15px 35px 0px rgba(44, 122, 255, 0.15);`
* **Scroll-to-Top Floating Shadow**:
  `box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);`

---

## 6. Catalog of Reusable Component Patterns

### A. Button Variants

#### 1. Primary Pill Button (`.btn_one`)
* **Base Style**: Background `#2c7aff`, color `#ffffff`, font-weight `700`, font-size `15px`, padding `15px 40px`, border-radius `100px`, box-shadow `10px 15px 18px rgba(23, 23, 36, 0.1)`.
* **Hover Animation**: Rising pseudo-element (`:before`) in accent gold `#fec961` transitioning smoothly with `scaleY(1)`.
* **Usage**: Key CTAs (e.g., "Enroll Now", "Apply Online", "Submit Registration").

```html
<a href="/registration" class="btn_one">Apply Today</a>
```

#### 2. Secondary Outline Button (`.btn_two`)
* **Base Style**: Background `#ffffff`, color `#1a2d62`, border `2px solid #2c7aff`, font-weight `600`, font-size `16px`, padding `12px 30px`, border-radius `100px`.
* **Hover State**: Background `#2c7aff`, color `#ffffff`.
* **Usage**: Secondary actions (e.g., "View Syllabus", "Explore Department", "Back to Courses").

```html
<a href="/courses" class="btn_two">Browse Courses</a>
```

#### 3. Animated Arrow Link (`.cta`)
* **Base Style**: Left circular highlight `rgba(44, 122, 255, 0.1)`, dark navy text `span` (`#1a2d62`, uppercase, `15px`, bold), inline SVG arrow.
* **Hover State**: Circular highlight expands across full width turning `#2c7aff`, text becomes white `#fff`, SVG shifts right.
* **Usage**: Blog cards, event details, service links ("Read More", "Learn More").

```html
<a href="/news/slug" class="cta">
  <span>Read More</span>
  <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</a>
```

---

### B. Section Title Styles

#### 1. Standard Centered Section Title (`.section-title`)
* **Subtitle (`h4`)**: Color `#2c7aff`, font-size `20px`, font-weight `500`.
* **Main Heading (`h1`)**: Color `#1a2d62`, font-size `60px` (desktop), font-weight `500`, width `60%`, centered with `margin: auto`.
* **Highlighted Title Span (`p span`)**: Background `#fec961`, padding `0 15px`, border-radius `30px`.

```html
<div class="section-title text-center">
  <h4>Academic Programs</h4>
  <h1>Explore Our Specialized <span>Departments</span></h1>
</div>
```

#### 2. Left-Aligned / Two-Column Section Title (`.section-title-two`)
* **Heading (`h2`)**: Color `#1a2d62`, font-size `50px`, font-weight `600`.
* **Span (`h2 span`)**: Color `#2c7aff`.
* **Usage**: Contact section, registration header, certificate verification portal.

```html
<div class="section-title-two">
  <h2>Verify Your Official <span>Certificate</span></h2>
</div>
```

---

### C. Breadcrumb Page Banner (`.section-top`)

* **Container**: Class `.section-top`, background `linear-gradient(to left, rgb(228, 242, 254), rgb(255, 238, 254))`, padding `150px 0 120px`.
* **Title (`h1`)**: Text-center, font-size `50px`, font-weight `600`, color `#1a2d62`.
* **Breadcrumb Pill (`ul`)**: White rounded box (`background: #fff; border: 2px solid #fff; border-radius: 10px; padding: 10px 20px; width: 220px; margin: 20px auto 0;`).
* **Breadcrumb Links**: Current path in `#1a2d62`, parent links in `#2c7aff`.

```html
<section class="section-top">
  <div class="container">
    <div class="col-lg-10 offset-lg-1 text-center">
      <div class="section-top-title">
        <h1>Admissions & Fee Structure</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li> / Admissions</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### D. Card Styles

#### 1. Course Card (Grid View: `.course-item`)
* Background `#fff`, border-radius `10px`, overflow `hidden`, box-shadow `0px 0px 150px 0px rgba(78, 67, 250, 0.1)`, margin `20px 0 25px`.
* Price badge overlaid on top right of thumbnail: `.course-price` (`background: #2c7aff; color: #fff; border-radius: 100px; padding: 5px 15px`).
* Hover slide overlay: `.course-hover` with slide transform `translateY(0%)`, background `#fff`, full syllabus snippet and "Enroll Now" CTA.

#### 2. Course Card (Horizontal / List View: `.course-slide2`)
* Background `#fff`, border-radius `8px`, margin-bottom `30px`, image on left with date/price badge, details and meta icons on right (`.co_list` with lessons, duration, seats).
* **Adaptation for Careers**: The list card perfectly matches job postings (Role title, Department badge, Full-time/Part-time pill, Location, Apply button).

#### 3. Faculty / Trainer Card (`.our-team`)
* Box-shadow `0 10px 40px -10px rgba(0, 64, 128, 0.09)`, margin-bottom `30px`.
* Alternating layout: `.team_img` above or below `.team-content` with social icon tray (`.social`).
* Meta badges: `.sth_det2` showing course count (`ti-file`) and student count (`ti-user`).

#### 4. Event / Workshop Card (`.event-slide`)
* Background `#fff`, border-radius `6px`, margin-bottom `30px`.
* Date badge: `.event-date` (`span.date` = day number, `span.month` = 3-letter month in blue).
* Details: Event title, timing (`fa-clock`), venue badge (`fa-table`), excerpt.

#### 5. Pricing / Fee Tier Card (`.single-pricing-card`)
* Background `#fff`, padding `35px`, border `1px solid rgba(207, 217, 249, 0.5)`, transition `all 0.3s`.
* Price Display: `h1` with monthly/program fee and `sub` period.
* Feature Checklist: `.list` items with `.ti-check` icon in primary blue.
* Action: Bottom `.cta` link.

---

### E. Form Field & Input Styles

* **Card Container (`.register` / `.contact`)**: Background `#ffffff`, padding `30px` - `40px`, border-radius `15px`, box-shadow `0px 10px 40px rgba(0, 64, 128, 0.06)`.
* **Inputs & Selects (`.form-control`, `.register input`)**:
  * Height: `55px` (text inputs, selects), textarea auto (`min-height: 140px`)
  * Background: `#ffffff`
  * Border: `1px solid #eeeeee`
  * Border Radius: `6px` / `8px`
  * Padding: `12px 18px`
  * Font Size: `15px`
  * Focus State: Border color `#2c7aff`, outline `none`, clean shadow `none`
* **Form Labels**: Font-weight `600`, font-size `15px`, color `#1a2d62`, margin-bottom `8px`.

---

## 7. Mini Style Guide for the 6 New Pages

| Route | Page Name | Core Theme Blocks to Reuse | Specific Adaptations |
|---|---|---|---|
| `/admissions` | **Admissions** | `.section-top`, `.single-pricing-card`, `.accordion`, `.section-title` | Tier fee comparison (PKR), admission eligibility steps, FAQ accordion |
| `/registration` | **Online Registration** | `.section-top`, `.register`, `.form-control`, `.btn_one` | Stepped admission form (Personal info, Academic background, Course choice) |
| `/departments` | **Departments** | `.section-top`, `.topics_item`, `.course-item`, `.our-team` | Department overview, faculty heads, associated diploma programs |
| `/careers` | **Careers** | `.section-top`, `.course-slide2`, `.event-slide`, `.contact` | Job vacancy cards with department badge, location, and application modal/form |
| `/gallery` | **Gallery** | `.section-top`, `.product_item`, `.section-title` | Filter tabs (Campus, Classes, Lab, Events) with zoom lightbox modal |
| `/verify-certificate` | **Verification** | `.section-top`, `.section-title-two`, `.register`, `.btn_one` | Live enrollment lookup connecting to `https://portal.globalacademy.com.pk` with authenticated student badge |
