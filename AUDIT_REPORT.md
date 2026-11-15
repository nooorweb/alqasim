# Comprehensive Front-End Architecture & Quality Audit Report
**Project:** Purdue Education & Online Course HTML Template (`purdue-v1.0.0`)  
**Target Migration:** Next.js 15 (App Router, React 19, TypeScript) for Academy Website  
**Audit Date:** November 2026  
**Auditor:** Senior Front-End Architect  
**Inspection Scope:** All 24 HTML documents, 1 PHP script, 13 CSS stylesheets, 16 JS scripts, 19 font files, and 168 raster assets.

---

## 1. Executive Summary

```text
========================================================================================
OVERALL TEMPLATE HEALTH SCORE: 4.2 / 10 (High Technical Debt & Migration Friction)
========================================================================================
TOP 5 CRITICAL RISKS:
1. Deprecated & Vulnerable Core: Bundles jQuery 1.12.4 (2016, 4 critical CVEs) and Owl Carousel 1.3.3; all interactivity breaks under Next.js 15 SSR/Hydration without full client rewrites.
2. Severe Accessibility & SEO Deficits: 0 semantic landmarks (<main>, <header>, <footer>), 100% duplicate titles/meta across 23 pages, 166 uncaptioned images (62%), and WCAG AA contrast failures (#2c7aff fails at 3.94:1).
3. 30 Broken Asset & Link References: Missing assets (slicknav.css in 22 files, purecounter_vanilla.js in 3 files, images), broken link (single_blog.html), and contact form throws uncaught ReferenceError: validation is not defined.
4. Licensing Liability: Directly bundles proprietary Club GreenSock commercial plugin (ScrollSmoother.min.js) and 4.5 MB of FontAwesome Pro binaries (fa-duotone, fa-thin) despite an MIT label.
5. Runtime Performance Bottlenecks: Forced 1,500ms preloader display lag in scripts.js, 12.8 MB uncompressed images (zero WebP, zero loading="lazy"), and >80% unused CSS across 595 KB payloads.
========================================================================================
```

---

## 2. Page & Component Inventory

### 2.1 Complete HTML Document Inventory (24 Pages)

| File Name | Document Title (`<title>`) | Sections Contained (in Document Order) | Stylesheets Loaded (`<link rel="stylesheet">`) | JavaScript Loaded (`<script src="...">`) |
|---|---|---|---|---|
| `about.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top (Breadcrumb) &rarr; About Us Home One (`.ab_one`) &rarr; Why Choose Us (`.marketing_content_area`) &rarr; Video Area (`.vid_area.va2`) &rarr; Counter Area (`.count_area.counter_feature`) &rarr; Team (`.team_member`) &rarr; Partner Logo (`.partner`) &rarr; FAQ (`.faq_area`) &rarr; Footer | `bootstrap.min.css`, `themify-icons.css`, `all.min.css`, `fontawesome.min.css`, `owl.carousel.css`, `owl.theme.css`, `slicknav.css` *(404)*, `magnific-popup.css`, `jquery-simple-mobilemenu.css`, `animate.css`, `style.css`, Google Fonts (`Lexend`) | `html5shiv.min.js`, `respond.min.js`, `jquery-1.12.4.min.js`, `bootstrap.min.js`, `owl.carousel.min.js`, `jquery-simple-mobilemenu.js`, `jquery.magnific-popup.min.js`, `jquery.mixitup.js`, `gsap.min.js`, `ScrollTrigger.min.js`, `lenis.js`, `scrolltopcontrol.js`, `jquery.inview.min.js`, `wow.min.js`, `scripts.js` |
| `blog.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Blog Grid (`.blog_area_bg`) &rarr; Newsletter (`.newsletter_area`) &rarr; Footer | Same 12 CSS (includes missing `slicknav.css`) | Same 15 JS as `about.html` |
| `blog_single.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Blog Single Details (`.blog-page`) &rarr; Comments & Form &rarr; Newsletter &rarr; Footer | Same 12 CSS (includes missing `slicknav.css`) | Same 15 JS as `about.html` |
| `cart.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Cart Table Area (`.shopping-cart`) &rarr; Shop Services (`.shop-services`) &rarr; Footer | Same 12 CSS + `niceselect.css`, `shop.css` (14 total) | Same 15 JS + `nicesellect.js` (16 total) |
| `checkout.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Checkout Area (`.shop.checkout`) &rarr; Shop Services (`.shop-services.home`) &rarr; Footer | Same 14 CSS as `cart.html` | Same 16 JS as `cart.html` |
| `contact.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Address Info Area (`.address_area`) &rarr; Contact Form & Google Maps Iframe &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `course.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Course Grid (`.course-page-area`) &rarr; Newsletter &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `course2.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Course Grid with Sidebar (`.course-page-area`) &rarr; Newsletter &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `course3.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Course List View (`.course-list-page-area`) &rarr; Newsletter &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `error.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; 404 Illustration Area (`.error_area`) &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `event.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Event Grid Area (`.our_event`) &rarr; Newsletter &rarr; Footer *(Differs: Purduey text)* | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `event_single.html`| Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Event Details Area (`.event-details-area`) &rarr; Sidebar & Register Form &rarr; Footer *(Differs: Purduey text)* | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `faq.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; FAQ Accordion Area (`.faq_area`) &rarr; Question Submission Form &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `index.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar *(Differs: Enroll Now CTA)* &rarr; Hero Slider (`.home_bg`) &rarr; Partner Logo (`.partner`) &rarr; Category (`.category_area`) &rarr; About Us (`.ab_one`) &rarr; Course Grid (`.course-slider`) &rarr; Why Choose Us (`.marketing_content_area`) &rarr; Video Area (`.vid_area`) &rarr; Counter Area (`.count_area`) &rarr; Event Slider (`#event-slider`) &rarr; Team (`.team_member`) &rarr; Testimonials (`#testimonial-slider`) &rarr; Promotion Banner (`.insfreecourse2`) &rarr; Blog (`.blog_area`) &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `index2.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar *(Differs: Enroll Now CTA)* &rarr; Hero Search Banner (`.home_bg.hb_height`) &rarr; Partner Logo &rarr; Category Two (`.category_two_area`) &rarr; Video Area (`.va2`) &rarr; Counter Area &rarr; About Us (`.ab_area`) &rarr; Course Promo (`.course_promo`) &rarr; Team (`.team_area`) &rarr; Blog Grid (`#blog`) &rarr; Free Course Banner &rarr; Newsletter &rarr; Footer | 11 CSS (Omitted `fontawesome.min.css`) | Same 15 JS as `about.html` |
| `login.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Login Form Box (`.login_register`) &rarr; Footer | Same 12 CSS (loads `all.min.css` twice) | Same 15 JS + `jquery.slicknav.js`, missing `purecounter_vanilla.js` *(404)* |
| `pricing.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Pricing Area (`.pricing_area`) &rarr; Pricing Table Cards &rarr; Footer | Same 12 CSS (loads `all.min.css` twice) | Same 16 JS as `login.html` (includes missing `purecounter_vanilla.js`) |
| `register.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Register Form Box (`.login_register`) &rarr; Footer | Same 12 CSS (loads `all.min.css` twice) | Same 16 JS as `login.html` (includes missing `purecounter_vanilla.js`) |
| `shop.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Product Grid Area (`.product_area_top`) &rarr; Filter & Sidebar &rarr; Newsletter &rarr; Footer | Same 14 CSS as `cart.html` | Same 16 JS as `cart.html` |
| `single_course.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Course Details Area (`.our_event`) &rarr; Video Preview & Curriculum Tabs &rarr; Footer | 11 CSS (Omitted `fontawesome.min.css`) | Same 15 JS as `about.html` |
| `single_shop.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Single Product Details & Reviews &rarr; Newsletter &rarr; Footer | Same 14 CSS as `cart.html` | Same 16 JS as `cart.html` |
| `team-details.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Agent/Instructor Profile (`.template_agent`) &rarr; Skill Bars & Bio &rarr; Newsletter &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `team.html` | Purdue - Education HTML Template | Preloader &rarr; Header-Top &rarr; Logo-Contact &rarr; Navbar &rarr; Section-Top &rarr; Team Member Section (`.team_member`) &rarr; Team Page Grid (`.team_page`) &rarr; Newsletter &rarr; Footer | Same 12 CSS as `about.html` | Same 15 JS as `about.html` |
| `thank-you.html` | Your Mail Has Been Send Successfully. | Welcome Area (`.welcome-area`) &rarr; Hero Text &rarr; Back To Home Button | Isolated: Only loads `bootstrap.min.css` (No `style.css`, no `Lexend` font) | Isolated: Only loads `bootstrap.min.js` (1 script) |

---

### 2.2 Shared Components Analysis

| Shared Component | Selector / Markup Evidence | Implementation Nature | Divergences / Inconsistencies Across Pages |
|---|---|---|---|
| **Preloader** | `about.html:20` vs `index.html:20` (`.preloaders .loader`) | Copy-pasted markup across 23 pages; controlled by `scripts.js:11-16`. | **Divergence:** `about.html:21` has empty `<span class="loader"></span>` (108 chars), whereas the other 22 pages have `<span class="loader">Loading</span>` (115 chars). `thank-you.html` has no preloader. Artificially delayed by 1,500ms via `setTimeout` in `scripts.js:13`. |
| **Top Header Bar** | `div.header-top` (`index.html:27-58`) | Copy-pasted HTML across 23 pages. | **Divergence:** Contact phone, opening hours, and social media URLs are hard-coded in every file. None use dynamic injection. Missing entirely in `thank-you.html`. |
| **Main Header & Navbar** | `section.logo-contact` + `div.site-navigation` (`index.html:60-153`) | Copy-pasted HTML across 23 pages. | **Divergence:** `index.html:73` and `index2.html:73` render `<a class="btn_two" href="register.html">Enroll Now <i class="fa-solid fa-arrow-right"></i></a>`. All 21 inner pages render `<a class="btn_two" href="register.html">Login / Register</a>` without the arrow icon. **Zero pages** have an `.active` class on any navigation item. |
| **Breadcrumb Banner** | `section.section-top` (`about.html:156-172`) | Copy-pasted HTML across 21 inner pages. | Present on all inner pages except `index.html`, `index2.html`, and `thank-you.html`. Internal `ul` breadcrumb has hard-coded text `/ Current Page`. Animated via WOW.js (`.section-top-title.wow.fadeInRight`). |
| **Footer** | `section.footer-area` (`about.html:470-544`) | Copy-pasted HTML across 23 pages. | **Critical Text Divergence:** `about.html:475` (and 20 other pages) contains vendor lorem ipsum: `"...worth every Yaley and then some"`. In `event.html:362` and `event_single.html:286`, the string was altered to `"...worth every Purduey and then some"`. Missing entirely in `thank-you.html`. |
| **Scroll-to-Top** | Dynamic element `#topcontrol` generated by `scrolltopcontrol.js:57` | Client JS injection via 2009 Dynamic Drive library. | Injected dynamically into `<body>` via jQuery on 23 pages. Not rendered in HTML markup. Absent on `thank-you.html`. |
| **Popups & Lightbox** | `a.video-play`, `a.co-video-play`, `a.magnific_popup` | Magnific Popup v1.1.0 jQuery plugin initialized in `scripts.js:33-51`. | Hardcoded YouTube URLs (`https://www.youtube.com/watch?v=RXv_uIN6e-Y`) across `about.html`, `index.html`, `index2.html`. |
| **Sliders** | `.partner`, `#testimonial-slider`, `#event-slider`, `.course-slider` | Owl Carousel v1.3.3 initialized in `scripts.js:54-90`. | Present only on `index.html`, `index2.html`, `about.html`. Options hardcoded in `scripts.js` with non-responsive fixed slide counts. |

---

### 2.3 Catalog of Repeated UI Patterns

| Pattern Name | Template Selector / Classes | Frequency | Markup Blueprint & Structural Role |
|---|---|---|---|
| **Section Title (Centered)** | `.section-title.text-center` | 20 occurrences | `div.section-title` wrapping `h4` (category badge/subtitle in `#2c7aff`) and `h1` (main heading in `#1a2d62`) with optional `span` highlight in `#fec961`. |
| **Section Title (Left/Two-Col)**| `.section-title-two` | 6 occurrences | Left-aligned `h2` heading with `#2c7aff` accent span; used in contact, verify, and promotional split rows. |
| **Course Card (Grid)** | `.course-item` / `.course-page-area .course-item` | 8 patterns (40+ cards) | Card container with `border-radius: 10px`, top image `.course-img`, category badge `.cbadge`, title `h3 a`, rating stars, instructor avatar, and meta footer `.course-meta`. |
| **Faculty / Team Card** | `.our-team` / `.single-team` | 20 occurrences | Container with avatar image, hover overlay sliding up social icons (`.team-social`), name `h3`, and instructor role `span`. |
| **Event Card** | `.event-slide` / `.single-event` | 10 occurrences | Horizontal split layout: date badge pill (`.event-date`) on left, thumbnail, event title `h4`, location icon/text, and arrow CTA link. |
| **Blog Card** | `.single_blog` | 12 occurrences | Card with `.blog-img`, post metadata row (`.blog-meta`), title `h3 a`, short excerpt `p`, and `.cta` animated arrow link. |
| **Counter Box** | `.count_area .counter-num` / `.count-box` | 28 occurrences | Numeric value animated via jQuery `inview` (`.counter-num`) over 2,000ms duration, followed by label `h5` / `p`. |
| **Animated CTA Link** | `a.cta` | 41 occurrences | Link containing `span` and inline `<svg>` arrow; on hover, background circle expands into pill, text transitions to `#ffffff`. |
| **Accordion Item** | `.accordion-item`, `.accordion-button` | 52 occurrences | Bootstrap 5 accordion item with toggle button and `.accordion-collapse`; custom padding and border overrides in `style.css:3770-3800`. |
| **Tabbed Navigation** | `.nav.nav-tabs`, `.nav-link` | 2 occurrences | Filter bar on single course curriculum / shop reviews; active state indicated by `#2c7aff` border-bottom. |
| **Form Fields** | `.form-control`, `input.form-control`, `textarea` | 50+ controls | Pill or rounded inputs (`border-radius: 6px` or `100px`), border `#eeeeee`, focus outline stripped (`outline: none`), placeholder `#999999`. |
| **Primary Button** | `a.btn_one`, `button.btn_one` | 5 occurrences | High-emphasis CTA: `#2c7aff` background, `#ffffff` text, `border-radius: 100px`, pseudo-element `:before` hover fill in gold `#fec961`. |
| **Secondary Button** | `a.btn_two`, `button.btn_two` | 23 occurrences | Outline/solid pill: border `2px solid #2c7aff`, text `#1a2d62`, hover reverses to `#2c7aff` background with white text. |
| **Pagination** | `.pagination`, `.page-item`, `.page-link` | 4 instances | Centered pagination block with rounded page numbers; active page styled with `#2c7aff` background. |
| **Sidebar Widgets** | `.sidebar-post`, `.sidebar_widget`, `.widget` | 13 instances | Sidebar containers on blog, course, and event pages: search box, category list with counters, recent posts, tag clouds. |

---

## 3. Theme Extraction & Design Tokens

### 3.1 Color System Analysis & Groupings

*Extracted directly from `assets/css/style.css` (87 unique hex codes, 24 rgb/rgba definitions) and `tokens.css`.*

| Color Role | Token Name | Exact Value | Usage Frequency | Selectors / Elements Where Applied |
|---|---|---|---|---|
| **Primary Brand** | `--theme-primary` | `#2c7aff` | 123 times | Main buttons (`.btn_one`, `.btn_two:hover`), active navbar links, icon accents, section subheadings (`.section-title h4`), category badges (`.cbadge`). |
| **Primary Hover** | `--theme-primary-hover` | `#1e65db` | 12 times | Hover state on `.btn_one`, text link hover, focused borders. |
| **Primary RGB** | `--theme-primary-rgb` | `44, 122, 255` | 14 times | Soft background washes: `rgba(44, 122, 255, 0.1)` on `.cta span`, category badges, icon circles. |
| **Heading Navy** | `--theme-heading` | `#1a2d62` | 60 times | All major headings (`h1`–`h6`), `.section-title h1`, card titles (`.course-item h3 a`, `.single_blog h3 a`), header links. |
| **Heading RGB** | `--theme-heading-rgb` | `26, 45, 98` | 4 times | Alpha overlays on image banners and hero backdrops. |
| **Accent Gold** | `--theme-accent` | `#fec961` | 3 times | Animated button hover fill (`.btn_one:before`), title highlighted spans (`.section-title h1 span`), rating stars. |
| **Accent Hover** | `--theme-accent-hover`| `#e5b045` | 2 times | Interactive gold hover states. |
| **Body Paragraph** | `--theme-body` | `#555555` | 18 times | Base paragraph text (`body`, `p`, `.single_about p`, `.ab_feature p`). |
| **Muted Text** | `--theme-body-muted` | `#777777` | 9 times | Timestamps, author subtexts, course lesson counters, breadcrumb inactive crumbs. |
| **Light Muted** | `--theme-body-light` | `#909090` / `#999999`| 10 times | Form input placeholders, post tags, disabled control states. |
| **Surface White** | `--theme-bg-white` | `#ffffff` | 156 times | Base body background, card backgrounds, modal surfaces, button text. |
| **Subtle Light Gray**| `--theme-bg-subtle` | `#f8faff` / `#edf4f7`| 18 times | Alternating section backgrounds (`.ab_area`, `.pricing_area`, `.bg-light`). |
| **Banner Warm Cream**| `--theme-bg-banner` | `#f9f4f1` | 2 times | Top notification bar and header-top background. |
| **Soft Blue Tint** | `--theme-bg-soft-blue`| `#ebecff` | 4 times | Highlight containers, pricing header blocks, badge backgrounds. |
| **Border Neutral** | `--theme-border-color`| `#eeeeee` / `#ededed`| 29 times | Card dividers, blog post borders, table cell dividers, input borders. |
| **Border Subtle** | `--theme-border-subtle`| `rgba(207, 217, 249, 0.5)`| 2 times | Outlines on pricing cards and feature blocks. |
| **Success Green** | `--theme-success` | `#198754` *(#2eca7f in thank-you)* | 2 times | Success notifications, verification status tags. |
| **Warning Amber** | `--theme-warning` | `#ffc107` / `#ff7700` | 8 times | Course rating stars, notice badges. |
| **Danger Red** | `--theme-danger` | `#dc3545` | 3 times | Form error text, mandatory asterisks. |
| **Hero Gradient** | `--theme-gradient-hero`| `linear-gradient(to left, rgb(228, 242, 254), rgb(255, 238, 254))` | 2 times | Breadcrumb page banner (`.section-top`). |

#### Inconsistencies & Collisions in Color Palette
1. **Hex Inconsistencies for Borders & Grays (12 Variants):** The stylesheet defines `#ededed` (16x), `#eeeeee` (13x), `#dddddd` (13x), `#edf4f7` (11x), `#f4f4f4` (3x), `#f2f2f2` (3x), `#f8f8f8`, `#f9f9f9`, `#f7f7f7`, `#fafafa`, `#e5e5e5`, and `#cccccc` for virtually indistinguishable gray dividers and backdrops.
2. **Navy Heading Variants (6 Variants):** While `#1a2d62` is standard (60x), `style.css` inexplicably introduces `#0b104a` (3x), `#07294d` (3x), `#072032` (3x), `#303030` (4x), and `thank-you.html` introduces `#232434`.
3. **Green Color Divergence:** The primary theme uses Bootstrap's `#198754`, but `thank-you.html:19` introduces `#2eca7f`, clashing with the brand palette.
4. **Primary Blue Overlap:** `style.css` mixes modern brand `#2c7aff` with legacy Bootstrap 4 `#007bff`, `#0d6efd`, and `#448bb7` (6x).

---

### 3.2 Typography Scale & Specifications

* **Primary Font Family:** `'Lexend', sans-serif`  
* **Google Fonts Import URL:** `https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap`
* **Base Typography:** Size `16px`, Line Height `26px`, Weight `400`, Color `#555555`.

| Typography Token | CSS Class / Selector | Desktop Size | Tablet Size | Mobile Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|---|
| **Hero Title** | `.home_bg h1` | `60px` | `48px` | `36px` | `700` | `1.15` (`70px`) | `-0.5px` |
| **Section Heading (Large)**| `.section-title h1` | `60px` | `46px` | `32px` | `500` / `600` | `1.2` (`72px`) | Normal |
| **Banner Title** | `.section-top-title h1` | `50px` | `40px` | `28px` | `600` | `1.25` (`60px`)| Normal |
| **Section Subtitle (Category)**| `.section-title h4` | `20px` | `18px` | `16px` | `500` | `1.3` (`26px`) | `0.5px` |
| **Two-Column Heading**| `.section-title-two h2`| `50px` | `38px` | `28px` | `600` | `1.2` (`58px`) | Normal |
| **Card Heading (H3)** | `.course-item h3`, `.single_blog h3` | `22px` - `24px` | `20px` | `18px` | `600` | `1.3` (`30px`) | Normal |
| **Subheading (H4)** | `h4`, `.event-slide h4` | `18px` - `20px` | `18px` | `16px` | `600` | `1.4` (`26px`) | Normal |
| **Meta Heading (H5)** | `h5`, `.count_area h5` | `16px` - `18px` | `16px` | `15px` | `500` | `1.4` (`24px`) | Normal |
| **Body Paragraph** | `p`, `.single_about p`| `16px` | `15px` | `14px` | `400` | `26px` | Normal |
| **Small / Meta Data** | `.cmeta`, `.course-meta span`| `13px` - `14px` | `13px` | `12px` | `400` | `20px` | Normal |

---

### 3.3 Layout, Spacing, Elevation & Effects

* **Standard Section Spacing:**
  * Desktop (`≥ 992px`): `.section-padding` = `80px 0`
  * Mobile / Tablet (`< 992px`): `60px 0`
  * Section Title Margin Bottom: `60px`
  * Card Bottom Margin: `30px`
* **Container Breakpoints (Bootstrap 5 Grid):**
  * `sm`: `540px` | `md`: `720px` | `lg`: `960px` | `xl`: `1140px` | `xxl`: `1320px`
* **Border Radius Scale:**
  * Extra Small (`--theme-radius-xs`): `4px` (Tags, category pills)
  * Small (`--theme-radius-sm`): `6px` (Event card containers, inputs)
  * Medium (`--theme-radius-md`): `10px` (Course cards `.course-item`, breadcrumb badge)
  * Large (`--theme-radius-lg`): `15px` (Feature boxes, modal containers)
  * Extra Large (`--theme-radius-xl`): `20px` (Verification box, notice callouts)
  * Pill (`--theme-radius-pill`): `100px` (Buttons `.btn_one`, `.btn_two`, search input)
  * Circle (`--theme-radius-circle`): `50%` (Avatars, social links, back-to-top)
* **Shadows & Elevation:**
  * Card Shadow: `box-shadow: 0px 0px 150px 0px rgba(78, 67, 250, 0.1);`
  * Card Hover Shadow: `box-shadow: 0px 15px 35px 0px rgba(44, 122, 255, 0.15);`
  * Faculty Team Shadow: `box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.09);`
  * Button Elevation: `box-shadow: 10px 15px 18px rgba(23, 23, 36, 0.1);`
  * Floating / Back-to-Top: `box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);`
* **Transitions:**
  * Standard: `transition: all 0.3s ease 0s;`
  * Fast Interactive: `transition: all 0.2s ease-in-out;`
  * Smooth Transform: `transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);`

---

### 3.4 Button, Form, Card & Icon Systems

#### Button Variants
1. **Primary Pill Button (`.btn_one`):** Background `#2c7aff`, color `#ffffff`, font-weight `700`, font-size `15px`, padding `15px 40px`, border-radius `100px`, box-shadow `10px 15px 18px rgba(23, 23, 36, 0.1)`. Features an animated rising pseudo-element (`:before`) in gold `#fec961` using `transform: scaleY(0)` transitioning to `scaleY(1)`.
2. **Secondary Outline Button (`.btn_two`):** Background `#ffffff`, color `#1a2d62`, border `2px solid #2c7aff`, font-weight `600`, font-size `16px`, padding `12px 30px`, border-radius `100px`. Hover reverses colors to `#2c7aff` background and `#ffffff` text.
3. **Animated Arrow Action (`.cta`):** Text `span` uppercase bold in `#1a2d62` with left circular highlight `rgba(44, 122, 255, 0.1)`. On hover, the circle expands to `100%` width turning solid `#2c7aff`, text becomes white, and the inline SVG arrow shifts `5px` to the right.

#### Form Controls
* **Input Fields (`.form-control`):** Height `50px` (or `60px` for search bars), border `1px solid #eeeeee`, background `#ffffff`, border-radius `6px` (or `100px`), font-size `15px`, color `#555555`.
* **Focus States:** `outline: none` (stripped in `style.css:74, 3866, 3877`); requires restoration of `box-shadow: 0 0 0 3px rgba(44, 122, 255, 0.25)`.

#### Card Styles
* **Course Card (`.course-item`):** White card with `border-radius: 10px`, overflow hidden, image container with zoom-on-hover (`transform: scale(1.08)`), lesson count badge, instructor avatar overlapping bottom divider, rating stars, price tag.
* **Team Card (`.our-team`):** Rounded container, image overlay fading in social profile icons from bottom, instructor name and title positioned below.

#### Icon Systems in Use
1. **Font Awesome 6 Free (v6.6.0):** Loaded via `all.min.css` and `fontawesome.min.css` (`fa-solid`, `fa-regular`, `fa-brands`).
2. **Themify Icons:** Loaded via `themify-icons.css` (`ti-book`, `ti-user`, `ti-calendar`). Redundant with FontAwesome.

---

### 3.5 Ready-to-Paste `tokens.css`

```css
/**
 * Purdue Academy Theme Design Tokens
 * Source of Truth for Next.js 15 App Router Migration
 */
:root {
  /* Brand Colors */
  --theme-primary: #2c7aff;
  --theme-primary-hover: #1e65db;
  --theme-primary-rgb: 44, 122, 255;
  --theme-heading: #1a2d62;
  --theme-heading-rgb: 26, 45, 98;
  --theme-accent: #fec961;
  --theme-accent-hover: #e5b045;
  --theme-accent-rgb: 254, 201, 97;

  /* Typography Colors */
  --theme-body: #555555;
  --theme-body-muted: #777777;
  --theme-body-light: #999999;
  --theme-text-dark: #1a2d62;

  /* Surfaces & Backgrounds */
  --theme-bg-white: #ffffff;
  --theme-bg-subtle: #f8faff;
  --theme-bg-banner: #f9f4f1;
  --theme-bg-soft-blue: #ebecff;
  --theme-gradient-hero: linear-gradient(to left, rgb(228, 242, 254), rgb(255, 238, 254));
  --theme-gradient-card: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, #ffffff 100%);

  /* Borders & Dividers */
  --theme-border-color: #eeeeee;
  --theme-border-subtle: rgba(207, 217, 249, 0.5);
  --theme-border-focus: #2c7aff;

  /* Status Colors */
  --theme-success: #198754;
  --theme-success-bg: #d1e7dd;
  --theme-warning: #ffc107;
  --theme-warning-bg: #fff3cd;
  --theme-danger: #dc3545;
  --theme-danger-bg: #f8d7da;

  /* Typography Scales */
  --theme-font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --theme-font-size-body: 16px;
  --theme-line-height-body: 26px;
  --theme-font-size-h1: 60px;
  --theme-font-size-h2: 50px;
  --theme-font-size-h3: 24px;
  --theme-font-size-h4: 20px;
  --theme-font-size-h5: 18px;
  --theme-font-size-h6: 16px;
  --theme-font-size-sm: 14px;
  --theme-font-size-xs: 12px;

  /* Font Weights */
  --theme-font-weight-light: 300;
  --theme-font-weight-regular: 400;
  --theme-font-weight-medium: 500;
  --theme-font-weight-semibold: 600;
  --theme-font-weight-bold: 700;
  --theme-font-weight-extrabold: 800;

  /* Layout Spacing */
  --theme-section-padding: 80px 0;
  --theme-section-padding-mobile: 60px 0;
  --theme-section-title-mb: 60px;
  --theme-card-mb: 30px;
  --theme-grid-gap: 24px;

  /* Border Radii */
  --theme-radius-xs: 4px;
  --theme-radius-sm: 6px;
  --theme-radius-md: 10px;
  --theme-radius-lg: 15px;
  --theme-radius-xl: 20px;
  --theme-radius-pill: 100px;
  --theme-radius-circle: 50%;

  /* Box Shadows & Elevations */
  --theme-shadow-card: 0px 0px 150px 0px rgba(78, 67, 250, 0.1);
  --theme-shadow-card-hover: 0px 15px 35px 0px rgba(44, 122, 255, 0.15);
  --theme-shadow-team: 0 10px 40px -10px rgba(0, 64, 128, 0.09);
  --theme-shadow-btn: 10px 15px 18px rgba(23, 23, 36, 0.1);
  --theme-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --theme-shadow-floating: 0 10px 30px rgba(0, 0, 0, 0.08);

  /* Transitions */
  --theme-transition-fast: 0.2s ease;
  --theme-transition-base: 0.3s ease;
  --theme-transition-smooth: 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
```

---

## 4. Comprehensive Findings Table

| ID | Area | Finding Description | Exact Evidence (File & Line / Selector) | Severity | Effort | Recommended Fix |
|---|---|---|---|---|---|---|
| **F-01** | Functionality / JS | Uncaught ReferenceError on Contact Form submission (`validation is not defined`). | `contact.html:274` (`onsubmit="return validation();"`) | **High** | **S** | Remove inline handler; implement React Hook Form + Zod schema in client component. |
| **F-02** | Security / Backend | Contact PHP script has mail header injection, missing CSRF, unvalidated POST, and hardcoded recipient. | `contact.php:7, 8, 13` (`$to = 'example@gmail.com'; mail(...)`) | **High** | **M** | Delete `contact.php`; create Next.js App Router API Route (`app/api/contact/route.ts`) with Resend/Nodemailer and CSRF tokens. |
| **F-03** | Licensing / Legal | Bundling proprietary Club GreenSock commercial member script (`ScrollSmoother.min.js`) in open template. | `assets/js/ScrollSmoother.min.js:5-7` (`membership benefit of Club GreenSock`) | **High** | **S** | Delete `ScrollSmoother.min.js` and `smoother-script.js`. Use modern Lenis or CSS `scroll-behavior: smooth`. |
| **F-04** | Dependencies / CVE | Ancient jQuery v1.12.4 with 4 known CVEs (prototype pollution, XSS via `htmlPrefilter`). | `assets/js/jquery-1.12.4.min.js:1` (CVE-2015-9251, CVE-2019-11358, CVE-2020-11022, CVE-2020-11023) | **High** | **L** | Completely remove jQuery; replace all jQuery widgets with vanilla React 19 components. |
| **F-05** | Assets / 404 | 22 HTML pages load `slicknav.css` which does not exist in the codebase. | `about.html:15` (and 21 other HTML files): `<link href="assets/css/slicknav.css">` | **High** | **S** | Remove missing stylesheet link from all pages; build accessible React mobile drawer. |
| **F-06** | Assets / 404 | 3 HTML pages load `purecounter_vanilla.js` which does not exist in `assets/js/`. | `login.html:361`, `pricing.html:437`, `register.html:370` | **High** | **S** | Remove dead script tag; use a custom React `useCountUp` hook using `requestAnimationFrame`. |
| **F-07** | Broken Links / Assets | Broken image in `thank-you.html`, missing images in courses/checkout, and broken blog link. | `thank-you.html:56` (`assets/img/bg/1.jpg`), `checkout.html:423` (`assets/img/payment-method.png`), `blog_single.html:332` (`single_blog.html`) | **Medium** | **S** | Point background images to valid paths in `/public/assets/images/`; fix link to `/news/[slug]`. |
| **F-08** | Code Quality / CSS | Invalid CSS syntax in `style.css` (`font-weight: 600px`, typo `inout`, invalid weights `899`, `00`). | `assets/css/style.css:77` (`inout{outline:none;}`), `L1301-1302` (`font-weight:600px;`), `L3854` (`899`), `L4738` (`00`) | **Medium** | **S** | Correct CSS selectors to `input` and numeric weights to valid `600`, `900`, `400`. |
| **F-09** | Code Quality / CSS | Undefined CSS variables used in active rules (`var(--dc)`, `var(--transition)`). | `assets/css/style.css:1362` (`var(--dc)`), `L5018` (`var(--transition)`) | **Low** | **S** | Define variables in `tokens.css` or replace with explicit values (`#eeeeee`, `0.3s ease`). |
| **F-10** | Performance / Core Web | Artificial 1.5-second preloader display delay forced on window load. | `assets/js/scripts.js:13-15` (`setTimeout(..., 1500)`) | **High** | **S** | Delete jQuery preloader block; rely on Next.js 15 Streaming Suspense and `loading.tsx`. |
| **F-11** | Performance / Payload | 12.8 MB of uncompressed raster images across 168 files; 0 WebP/AVIF formats, 0 `loading="lazy"`. | `assets/images/banner/video.jpg` (1.74 MB), 267 `<img>` tags with 0 lazy-loading attributes | **High** | **M** | Convert assets to WebP/AVIF; use Next.js `<Image>` component with responsive `sizes` and priority LCP flags. |
| **F-12** | Performance / Redundancy | Dual Font Awesome stylesheets loaded concurrently + 4.5 MB dead Pro font binaries. | `about.html:10-11` (loads both `all.min.css` & `fontawesome.min.css`); Pro binaries in `assets/webfonts/` | **Medium** | **M** | Delete `fontawesome.min.css` and unreferenced Pro fonts (`fa-duotone`, `fa-thin`); tree-shake icons via `@fortawesome/react-fontawesome` or Lucide icons. |
| **F-13** | Accessibility / WCAG | Primary Blue `#2c7aff` and Button Hover Gold `#fec961` fail WCAG 2.1 AA normal text contrast. | `#ffffff` on `#2c7aff` = 3.94:1 (< 4.5:1); `#ffffff` on `#fec961` = 1.53:1 (Severe Fail) | **High** | **S** | Adjust primary blue to `#2065e0` (4.6:1) for body text; ensure dark text (`#1a2d62`) on gold hover states. |
| **F-14** | Accessibility / Landmarks | Zero semantic HTML5 landmarks (`<main>`, `<header>`, `<footer>`, `<aside>`) across all 24 pages. | Verified 0 `<main>`, 0 `<header>`, 0 `<footer>`, 0 `<aside>` across all 24 HTML documents. | **High** | **M** | Wrap pages in Next.js semantic layout tags (`<header>`, `<main id="main-content">`, `<footer>`, `<aside>`). |
| **F-15** | Accessibility / Forms | 92% of form input elements (46 of 50) lack `<label>` tags or accessible names. | Form inputs across `contact.html`, `login.html`, `register.html` rely solely on `placeholder="..."` | **High** | **M** | Add explicit `<label htmlFor="...">` for every control; visually hide with `.visually-hidden` if needed. |
| **F-16** | Accessibility / Headings | Severe heading hierarchy violations: 10 `<h1>` tags on `index.html` and systematic level skips (`h1` &rarr; `h4`). | `index.html:103, 169, 290, 417...` (10x `<h1>`); `about.html:158` (`h1` followed by `h4`) | **Medium** | **M** | Normalize heading hierarchy: exactly one `<h1>` per page, followed by logical `<h2>` and `<h3>`. |
| **F-17** | Accessibility / Focus | Interactive outline focus states globally disabled across links, inputs, and buttons. | `assets/css/style.css:74, 3866, 3877` (`outline: none; box-shadow: none;`) | **High** | **S** | Restore distinct `:focus-visible` ring (`outline: 2px solid var(--theme-primary); outline-offset: 2px`). |
| **F-18** | SEO / Metadata | Duplicate titles and meta descriptions across 23 pages; zero OpenGraph, Twitter, or Schema markup. | `<title>Purdue - Education HTML Template</title>` and identical meta description in 23 files | **High** | **M** | Implement Next.js 15 dynamic `generateMetadata()` for unique titles, descriptions, OG tags, and Course JSON-LD. |
| **F-19** | Responsiveness | Fixed 534px column width causing horizontal viewport overflow on screens < 564px. | `assets/css/style.css:4057-4061` (`.ss_case_left { width: 534px; float: left; margin-right: 30px; }`) | **Medium** | **S** | Replace with responsive fluid classes: `width: 100%; max-width: 534px; margin-right: 0;`. |
| **F-20** | Responsiveness | Non-standard responsive media queries create dead zones between breakpoints. | `assets/css/style.css:4062, 4272` (`max-width: 480px`, `max-width: 880px`, `max-width: 960px`) | **Medium** | **M** | Consolidate media queries to standard Bootstrap 5 / Tailwind breakpoints (576px, 768px, 992px, 1200px). |
| **F-21** | Content / Placeholder | Over 1,000 dead hash links (`href="#"`) and 42 lingering references to previous theme vendor "Yaley". | 1,017 occurrences of `href="#"`; `about.html:475` footer text: `"...worth every Yaley and then some"` | **Medium** | **M** | Replace all hash links with Next.js `<Link href="...">`; clean all vendor references with Academy copy. |
| **F-22** | RTL / Localization | Entire layout hardcoded with physical LTR CSS (`float: left`, `margin-right: 54x`, `left: 56x`); 0 logical properties. | `assets/css/style.css` has 44 `float: left`, 54 `margin-right`, 0 CSS logical properties. | **Medium** | **L** | Refactor CSS to logical properties (`margin-inline-start`, `padding-inline-start`) or load `bootstrap.rtl.min.css`. |

---

## 5. Next.js Migration Risks & Architectural Roadmap

### 5.1 DOM & jQuery Dependencies Requiring Client Component Isolation
The template relies entirely on imperatively mutating the DOM via jQuery upon `$(document).ready()` and `$(window).on('load')`. In Next.js 15 App Router, running these scripts directly will throw `window is not defined` during Server-Side Rendering (SSR) or cause severe React hydration crashes.

```text
+------------------------------+---------------------------+---------------------------------------------+
| Legacy jQuery Dependency     | Location                  | Next.js 15 Replacement Strategy             |
+------------------------------+---------------------------+---------------------------------------------+
| Preloader fadeToggle         | scripts.js:11-16          | Delete entirely; use Next.js loading.tsx    |
| Sticky navbar addClass       | scripts.js:23-29          | Pure CSS (position: sticky; top: 0;)        |
| SimpleMobileMenu             | scripts.js:20-22          | Accessible React Drawer component (useState)|
| Owl Carousel (v1.3.3)        | scripts.js:54-90          | Swiper React (swiper/react) / Embla Carousel|
| Magnific Popup (v1.1.0)      | scripts.js:33-51          | Headless UI / Radix Dialog component        |
| MixItUp Filter (v2.1.11)     | scripts.js:39             | Declarative React state filtering           |
| inview Counter Animation     | scripts.js:113-128        | Framer Motion / custom useCountUp hook      |
| scrolltopcontrol.js (2009)   | assets/js/scrolltopcontrol| React ScrollToTop floating button           |
| NiceSelect dropdowns         | nicesellect.js            | Native <select> or Radix Select primitive   |
| WOW.js + Animate.css         | scripts.js:132-134        | Framer Motion / CSS IntersectionObserver    |
| Lenis v0.2.28 + GSAP         | scripts.js:136-146        | @studio-freight/react-lenis (modern v1.x)   |
+------------------------------+---------------------------+---------------------------------------------+
```

### 5.2 CSS Relative Path Breakages in Next.js `/public`
When static assets are relocated to the Next.js `/public` folder, relative paths within CSS will break if written relative to the stylesheet location:
1. `assets/css/style.css:32`: `url('../images/banner/bg-scaled.jpg')` &rarr; In Next.js `/public`, this must be resolved as an absolute path from web root: `url('/assets/images/banner/bg-scaled.jpg')`.
2. `assets/css/style.css:291`: `url('../images/banner/topic.png')` &rarr; Must become `url('/assets/images/banner/topic.png')`.
3. `assets/css/style.css:350`: `url('../images/all-img/about-image.jpg')` &rarr; Must become `url('/assets/images/all-img/about-image.jpg')`.
4. `assets/webfonts/themify-icons.css:12`: `url('themify.woff')` &rarr; Must become `url('/assets/webfonts/themify.woff')`.

### 5.3 Global CSS Selectors Clashing with Next.js Framework
In `assets/css/style.css`, indiscriminate element-level resets exist:
* `html, body { color: #555555; font-family: 'Lexend', sans-serif; }`
* `a { color: #1a2d62; text-decoration: none; } a:focus { outline: none; }`
* `h1, h2, h3, h4, h5, h6 { font-family: 'Lexend', sans-serif; color: #1a2d62; }`
* Tag-level form resets: `input`, `textarea`, `button`.

> [!WARNING]
> If `style.css` is imported globally in `app/layout.tsx`, these un-scoped element selectors will leak into every route, third-party component, and dynamic portal, overriding Tailwind, Shadcn, or Radix defaults. CSS must be modularized into CSS Modules (`.module.css`) or scoped under a top-level academy theme wrapper (`.theme-purdue`).

### 5.4 Server Components vs. Client Components vs. Dynamic Routes Matrix

```text
+---------------------------------+--------------------------+-----------------------+---------------------------------------+
| Route / Page                    | Next.js App Router Path  | Component Model       | Primary Responsibilities              |
+---------------------------------+--------------------------+-----------------------+---------------------------------------+
| 01 Home                         | app/page.tsx             | React Server Component| Fetch featured courses/events, SEO    |
| 01 Home (Hero & Sliders)        | components/home/*.tsx    | Client Component      | Swiper carousel, video modal popups   |
| 02 About Us                     | app/about/page.tsx       | React Server Component| Static academy mission, faculty info  |
| 03 Departments                  | app/departments/page.tsx | React Server Component| Department catalog overview           |
| 03 Department Details           | app/departments/[id]/... | RSC + Dynamic Route   | Department syllabus, trainers list    |
| 04 All Courses                  | app/courses/page.tsx     | RSC + Client Filters  | SEO course catalog with URL filters   |
| 04 Course Details               | app/courses/[slug]/...   | RSC + Dynamic Route   | Curriculum tabs, enrollment CTA       |
| 05 Admissions                   | app/admissions/page.tsx  | React Server Component| Eligibility criteria, fee table       |
| 06 Online Registration          | app/registration/page.tsx| Client Component      | Multi-step application form, upload   |
| 07 Faculty & Trainers           | app/faculty/page.tsx     | React Server Component| Trainer directory                     |
| 07 Faculty Profile              | app/faculty/[id]/...     | RSC + Dynamic Route   | Instructor bio, assigned courses      |
| 08 Events & Workshops           | app/events/page.tsx      | React Server Component| Upcoming workshops listing            |
| 08 Event Details                | app/events/[slug]/...    | RSC + Dynamic Route   | Workshop registration, venue map      |
| 09 News & Updates               | app/news/page.tsx        | React Server Component| Paginated announcements & articles    |
| 09 News Article Details         | app/news/[slug]/...      | RSC + Dynamic Route   | Article body, comments, share buttons |
| 10 Gallery                      | app/gallery/page.tsx     | RSC + Client Lightbox | Campus image grid with category filter|
| 11 Certificate Verification     | app/verify/page.tsx      | Client Component      | Roll/Serial search with Server Action |
| 12 Career Opportunities         | app/careers/page.tsx     | React Server Component| Job listings, applicant intake form   |
| 13 Contact Us                   | app/contact/page.tsx     | RSC + Client Form     | Campus map, Server Action enquiry form|
+---------------------------------+--------------------------+-----------------------+---------------------------------------+
```

### 5.5 Hydration Risks Identified
1. **Dynamic `#topcontrol` element creation:** `scrolltopcontrol.js:57` appends a `<div>` directly to `document.body` outside React's virtual DOM tree, guaranteeing an unrecoverable hydration mismatch error (`Error: Hydration failed because the server-rendered HTML didn't match the client`).
2. **Text-node Counter Mutation:** The inview counter (`scripts.js:114`) mutates raw DOM text nodes (`$this.text(...)`). In React, this desynchronizes React's Fiber node representation.
3. **Preloader DOM Removal:** Toggling and fading `.preloaders` via jQuery clashes with React's node reconciliation.

### 5.6 Bootstrap CSS Retention vs. Alternatives Recommendation
* **Recommendation:** **Retain Bootstrap 5.3.3 Grid & Utility CSS; purge all Bootstrap JS and jQuery.**
* **Architectural Justification:**
  1. The template's 24 HTML files and `style.css` are intimately tied to Bootstrap 5 grid layout (`container`, `row`, `col-lg-4`, `g-4`, `d-flex`, `align-items-center`). Rewriting all markup to Tailwind CSS or pure CSS Grid would require complete refactoring of 24 pages, multiplying project effort by 3.5x.
  2. Bootstrap 5.3+ supports CSS variables natively (`--bs-primary`, `--bs-gutter-x`), allowing seamless integration with our extracted `tokens.css`.
  3. All interactive Bootstrap components (Collapse, Modal, Dropdown) must be powered by lightweight React primitives (such as Radix UI or simple React state hooks) rather than loading `bootstrap.bundle.min.js`.

---

## 6. Page-Fit Analysis & Template Mapping

### 6.1 Mapping the 13 Required Client Pages

| Client Required Page | Matched Template Page | Fit Status | Existing Template Blocks Reused | Required Adaptations & Net-New Blocks |
|---|---|---|---|---|
| **01 Home** | `index.html` & `index2.html` | **Full Fit** | Header, Hero banner, Category grid, Course slider, Video block, Counter, Team preview, Testimonials, Footer. | Merge Home 1 hero with Home 2 modern search bar; wire courses to Next.js dynamic routing; replace jQuery sliders with Swiper. |
| **02 About Us** | `about.html` | **Full Fit** | Breadcrumb banner (`.section-top`), About intro (`.ab_one`), Why Choose Us (`.marketing_content_area`), Counter, Team grid, FAQ preview. | Replace generic template vendor placeholder text with official Academy profile, mission, vision, and campus facilities. |
| **03 Departments** | *None (New Page)* | **Partial Fit** | Reuses Category Two cards (`index2.html:167-248`), Section Title (`.section-title`), Breadcrumb (`.section-top`). | Build dedicated 6-department grid (Computer Science, Business, Medical, Engineering, Arts, Language); detail syllabus and faculty head. |
| **04 All Courses** | `course.html` & `course2.html` | **Full Fit** | Breadcrumb, Course Card (`.course-item`), Sidebar Widgets (`.sidebar-post`), Pagination. | Connect to backend course database; implement real-time department filtering, fee range filter, and search input. |
| **05 Admissions** | *None (New Page)* | **Partial Fit** | Reuses Pricing Table (`pricing.html:167-285`), FAQ Accordion (`faq.html:167-245`), Step process cards (`about.html`). | Construct structured Admission Funnel: Eligibility criteria, fee breakdown table, semester intake schedule, prospectus download CTA. |
| **06 Online Registration** | `register.html` | **Partial Fit** | Form container (`.login_register`), Breadcrumb, `.form-control`, `.btn_one`. | Upgrade simple 4-field sign-up into a comprehensive multi-step admission intake form (Student data, CNIC, academic history, file upload). |
| **07 Faculty & Trainers** | `team.html` & `team-details.html` | **Full Fit** | Faculty Grid (`.team_member`, `.team_page`), Profile details (`.template_agent`), Skill bars, Social links. | Hook up faculty bio, certifications, research papers, and courses taught per instructor. |
| **08 Events & Workshops** | `event.html` & `event_single.html` | **Full Fit** | Event Cards (`.event-slide`), Calendar Date badge (`.event-date`), Detail view, Venue map, Booking form. | Wire workshop registration form to backend email notification; display upcoming vs past workshops toggle. |
| **09 News & Updates** | `blog.html` & `blog_single.html` | **Full Fit** | News Grid (`.single_blog`), Blog detail layout (`.blog-page`), Sidebar recent posts, Category cloud. | Configure dynamic CMS/MDX blog routing (`/news/[slug]`), author profile, announcement tags. |
| **10 Gallery** | *None (New Page)* | **Partial Fit** | Reuses Shop filter tabs (`shop.html`), Course image thumbnails (`.course-img`), Magnific lightbox. | Build responsive masonry/grid gallery with category filters (Campus, Labs, Workshops, Convocation) and React image lightbox. |
| **11 Certificates Verification** | *None (New Page)* | **Net-New Page** | Reuses Section Title Two (`.section-title-two`), Breadcrumb, Search pill input (`.form-control`, `.btn_one`), Card outline. | Build official Student Credential Verification Portal: Input for Student Roll No / Certificate Serial Number; fetches and renders verified academic credentials. |
| **12 Career Opportunities** | *None (New Page)* | **Partial Fit** | Reuses Event list card layout (`.event-slide`), Accordion (`.accordion`), Contact submission form. | Construct job vacancy listings (Job Title, Department, Requirements, Deadline) with inline job application modal. |
| **13 Contact Us** | `contact.html` | **Full Fit** | Contact info cards (`.address_area`), Google Map iframe, Contact form. | Update location to Bannu City address; replace PHP mail handler with Next.js Server Action (`sendContactEnquiry`). |

---

### 6.2 Disposition of Remaining Template Pages

| Template Page | Disposition | Rationale & Architectural Recommendation |
|---|---|---|
| `cart.html` | **Remove / Archive** | Not applicable. The academy is an educational institution, not a WooCommerce physical merchandise shop. |
| `checkout.html` | **Remove / Archive** | Not applicable. Tuition and enrollment payments follow admission approval rather than retail cart checkout. |
| `shop.html` | **Remove / Archive** | Unneeded retail product catalog. Clutters codebase and pulls in heavy `shop.css` (99 KB). |
| `single_shop.html`| **Remove / Archive** | Unneeded retail product view. |
| `pricing.html` | **Merge into Admissions**| Standalone pricing is not typical for an academy; merge fee tables directly into `app/admissions/page.tsx`. |
| `faq.html` | **Merge into Admissions & About**| Accordions should live contextually on Admissions (Admission FAQs) and Registration pages. |
| `error.html` | **Keep & Port** | Convert into Next.js standard root error handler `app/not-found.tsx` (404 page). |
| `thank-you.html` | **Keep & Port** | Restructure with theme layout and Lexend font; move to `app/registration/success/page.tsx`. |
| `course3.html` | **Remove / Archive** | Redundant course layout variant (list view). Standardize on responsive grid in `course.html`. |
| `index2.html` | **Merge & Remove** | Merge search bar and category layout into primary homepage; retire duplicate file. |
| `login.html` | **Keep / Optional** | Repurpose as Student / Faculty Portal Login (`app/login/page.tsx`) if LMS integration is required. |

---

### 6.3 Missing Essential & Recommended Pages for an Academy Website

```text
+------------------------------+------------+--------------------------------------------------------------------+
| Missing Page Name            | Priority   | Value & Architectural Justification                                |
+------------------------------+------------+--------------------------------------------------------------------+
| 404 Not Found (not-found.tsx)| Essential  | Native Next.js graceful handling of broken URLs / non-existent courses.
| Privacy Policy               | Essential  | Mandatory compliance for handling student CNIC, phone numbers, PII. |
| Terms & Code of Conduct      | Essential  | Legal terms regarding admission cancellation, fees, student rules. |
| Registration Success Screen  | Essential  | User feedback providing Application Reference Number & next steps. |
| Download Center / Prospectus | Optional   | High-converting lead generation asset for prospective students.    |
| Fee Structure & Scholarships | Optional   | Transparent financial aid and merit scholarship details.           |
| Student LMS Portal Gateway   | Optional   | Direct authentication route for enrolled students to access portal. |
+------------------------------+------------+--------------------------------------------------------------------+
```

---

## 7. Specifications for New & Adapted Pages

### Page 03: Departments (`app/departments/page.tsx`)
* **Visual Blueprint:** Hero breadcrumb banner (`.section-top`) with title "Academic Departments" &rarr; Intro section &rarr; 6-card responsive grid (`row g-4`).
* **Blocks to Reuse:** Reuses `.category_two_item` from `index2.html:167-248` and `.section-title`.
* **Card Structure:** Department Icon, Department Title (`h3`), Brief Overview (`p`), Degree/Certificate Programs Offered bullet list, Faculty Head name, and a `.btn_two` linking to `/courses?dept=cs`.

### Page 05: Admissions & Fee Structure (`app/admissions/page.tsx`)
* **Visual Blueprint:** Hero banner &rarr; 3-step Admission Process (`.ab_feature` from `about.html`) &rarr; Eligibility Criteria Accordion (`.accordion` from `faq.html`) &rarr; Tuition Fee Schedule Table (adapted from `pricing.html:167-285`) &rarr; Sticky CTA box ("Apply Online for Spring 2027").
* **Blocks to Reuse:** Pricing tables, FAQ accordion items, `.btn_one` CTA button, downloadable PDF banner.

### Page 06: Online Student Registration (`app/registration/page.tsx`)
* **Visual Blueprint:** Container card using `.login_register` layout from `register.html:167-250`, transformed into a 3-step wizard:
  * *Step 1: Personal Profile* (Full Name, Father's Name, CNIC / B-Form, DOB, Gender, Mobile Number, Email).
  * *Step 2: Academic Record* (Last Qualification, Board/University, Passing Year, Total/Obtained Marks).
  * *Step 3: Program Selection & Document Upload* (Department, Course, Scanned Photo, Marksheet upload).
* **Blocks to Reuse:** Form controls (`.form-control`), pill buttons (`.btn_one`), verification feedback badges.

### Page 10: Campus Photo & Video Gallery (`app/gallery/page.tsx`)
* **Visual Blueprint:** Hero banner &rarr; Category filter pill tabs ("All", "Campus", "Labs", "Workshops", "Convocation") &rarr; 3-column responsive image grid &rarr; Lightbox modal on click.
* **Blocks to Reuse:** Filter buttons adapted from `shop.html` MixItUp buttons, image hover overlays from `.course-img`.

### Page 11: Official Certificate Verification Portal (`app/verify/page.tsx`)
* **Visual Blueprint:** Dedicated verification terminal (`.login_register` container) &rarr; Search input with Roll Number / Certificate Serial Number &rarr; "Verify Credentials" button &rarr; Dynamic Verified Credential Card:
  * Student Name, Father's Name, Roll Number, Course Completed, Session, Issue Date, Passing Grade, and Official Verified QR Code Badge.
* **Blocks to Reuse:** Split title (`.section-title-two`), search bar input (`.form-control`), success status pill (`--theme-success`).

### Page 12: Career Opportunities (`app/careers/page.tsx`)
* **Visual Blueprint:** Hero banner &rarr; "Why Work With Us" feature block (`.ab_feature`) &rarr; Current Openings list (adapted from `.event-slide` layout) displaying Job Title, Department, Employment Type (Full-time / Part-time), Application Deadline, and "Apply Now" button triggering modal form.

---

## 8. Prioritized Improvement Backlog

### Phase 0: Pre-Migration & Critical Blockers (P0)
- [ ] **P0-1:** Remove `contact.php` immediately; write Next.js App Router API Route (`app/api/contact/route.ts`) with input sanitization and email dispatch.
- [ ] **P0-2:** Fix inline `onsubmit="return validation();"` bug in `contact.html:274`.
- [ ] **P0-3:** Purge proprietary `ScrollSmoother.min.js` and `smoother-script.js` to eliminate commercial copyright liability.
- [ ] **P0-4:** Remove dead script/style links from all HTML files (`slicknav.css`, `purecounter_vanilla.js`).
- [ ] **P0-5:** Fix broken image references (`assets/img/bg/1.jpg`, `checkout.html`, `course.html`) and broken link in `blog_single.html`.
- [ ] **P0-6:** Correct invalid CSS declarations in `style.css` (`font-weight: 600px`, `inout`, `var(--dc)`).

### Phase 1: Core Framework Architecture & Design System (P1)
- [ ] **P1-1:** Integrate `tokens.css` into Next.js root layout as the global design token standard.
- [ ] **P1-2:** Replace ancient jQuery v1.12.4 and Owl Carousel with Swiper React (`swiper/react`).
- [ ] **P1-3:** Build semantic layout wrapper (`<header>`, `<main id="main-content">`, `<footer>`) with accessible skip-link.
- [ ] **P1-4:** Restore visible focus indicators (`:focus-visible`) across all interactive elements.
- [ ] **P1-5:** Convert 12.8 MB of images to modern WebP format with Next.js `<Image>` automatic optimization.
- [ ] **P1-6:** Build accessible React Mobile Navigation Drawer replacing `jquery-simple-mobilemenu.js`.
- [ ] **P1-7:** Implement dynamic SEO metadata generation (`generateMetadata()`) and JSON-LD Course schema.

### Phase 2: Academy Features & UX Enhancements (P2)
- [ ] **P2-1:** Construct the Certificate Verification search engine with backend API verification.
- [ ] **P2-2:** Develop the multi-step Student Registration Intake Form with document upload support.
- [ ] **P2-3:** Add floating WhatsApp Admissions Counseling button for prospective students in Bannu / KP.
- [ ] **P2-4:** Implement dynamic Course search and department filtering with URL query state.
- [ ] **P2-5:** Add Downloadable Prospectus lead-capture modal.
- [ ] **P2-6:** Prepare RTL and bilingual (English / Urdu) localization infrastructure using Next.js i18n.

---

## 9. Open Questions for the Client

1. **Certificate Verification System:**
   * What database or API powers certificate lookups (PostgreSQL, Supabase, Google Sheets, custom REST API)?
   * What exact student attributes must be displayed upon verification (Roll No, CNIC, Degree, Completion Date, Grade)?
   * Should the portal generate a downloadable verified PDF certificate or QR code?
2. **Admissions & Online Registration:**
   * Does registration require immediate online fee payment, or is it an initial application review followed by physical fee submission at Hinjal Gate Bannu City?
   * What document attachments are mandatory (CNIC/B-Form, Matric Certificate, Passport Photo)?
   * What is the file size limit and accepted formats for applicant uploads?
3. **Academic Departments & Courses:**
   * What are the exact names, descriptions, and syllabus structures for the academy's official departments?
   * Are courses fixed-term (e.g., 3-month certification) or semester-based diplomas?
4. **Localization & Language:**
   * Is a bilingual website (English & Urdu) required at launch, or will the initial release be English-only with Urdu added in Phase 2?
5. **Hosting & Deployment Environment:**
   * Will the Next.js 15 application be deployed on Vercel, a Node.js VPS, or local on-premise infrastructure?

---

## 10. Unverified Items & Limitations

| Item / Scope | Status | Reason Why It Cannot Be Verified in Read-Only Template Audit |
|---|---|---|
| **Certificate Backend Schema** | **UNVERIFIED** | The template is static HTML. Client notes in `read.me:25` mention a separate certificate project with backend data, which is not yet present in this repository. |
| **Email SMTP Credentials** | **UNVERIFIED** | `contact.php` uses PHP `mail()` with dummy address `example@gmail.com`. Production mail relay (SendGrid, Resend, or Google Workspace SMTP) is not configured. |
| **Course Database Attributes** | **UNVERIFIED** | Client notes in `read.me:29` indicate course attributes will be imported from another project; current HTML cards contain mock dummy courses. |
| **Third-Party Payment Gateway** | **UNVERIFIED** | The template contains static WooCommerce checkout markup (`checkout.html`). No actual payment gateway API (Stripe, JazzCash, EasyPaisa, Bank Transfer) is present. |
| **Production Domain & SSL** | **UNVERIFIED** | Final deployment domain, DNS configuration, and production hosting platform remain unspecified. |

---
*Report compiled autonomously by Senior Front-End Architect. Preserved in repository root as `AUDIT_REPORT.md`.*
