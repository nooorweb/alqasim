# Top UI/UX Improvements (Fixing the Purdue Theme Style)
The Purdue template has good visual bones (rounded cards, soft blue-pink gradients, pill buttons), but suffers from oversized typography, poor contrast, and inconsistent headers. Apply these UI fixes globally:

- [x] **Fix Oversized Typography Scaling**: The template uses 60px (h1) and 50px (h2) for section titles, which looks disproportionately huge at 100% browser zoom on standard 1080p laptops. Scale Hero h1 down to 44px (2.75rem) and Section Headings to 36px (2.25rem).
- [x] **Tone Down the Card Box-Shadow**: `.course-item` uses `0px 0px 150px 0px rgba(78, 67, 250, 0.1)`, creating a muddy 150px blur radius across adjacent cards. Replace it with a crisp, modern elevation: `0 10px 30px -5px rgba(26, 45, 98, 0.07)` and a `1px solid #eef2f6` border.
- [x] **Fix Button Hover Contrast Bug**: `.btn_one` fills with gold (`#fec961`) on hover while keeping the text `#ffffff` (1.53:1 contrast—nearly invisible). Change `.btn_one:hover` text color to Heading Navy (`#1a2d62`) so the gold hover state looks sharp and readable.
- [x] **Unify the Header CTA & Active State**: Currently, index.html shows "Enroll Now" while 21 inner pages show "Login / Register", and no nav link highlights the current page. Standardize the header button across all pages to "Apply Online" (`.btn_one`) and add an active bottom bar or `#2c7aff` color on the active route.
- [x] **Consolidate the 12 Gray & 6 Navy Hex Codes**: Restrict all section backgrounds strictly to `#ffffff` and `#f8faff`, all borders to `#eeeeee`, and all headings strictly to `#1a2d62`.

---

# Phased Execution Plan (Crucial Fixes + Building Missing Pages)

## Phase 1: Purge Bloat & Fix Critical Template Bugs
Focus only on stabilizing the styles and assets you need to reuse.
- [x] Delete the bloat files listed in Section 1 (`shop.css`, e-commerce HTMLs, `ScrollSmoother.min.js`, `contact.php`, and 404 script tags).
- [x] Fix the 4 broken CSS syntax rules in `style.css`:
  - **Line 77**: Change `inout { outline: none; }` to `input:focus-visible { outline: 2px solid #2c7aff; }`.
  - **Lines 1301, 3854, 4738**: Fix invalid `font-weight: 600px`, `899`, and `00` to `600`, `800`, and `400`.
  - **Line 4057**: Change `.ss_case_left { width: 534px; }` to `width: 100%; max-width: 534px;` to stop horizontal scrolling on mobile phones.
- [x] Compress the 12.8 MB images: Convert `assets/images/` (especially the 1.74 MB `video.jpg`) to WebP so pages load instantly.

## Phase 2: Extract Shared Shell & Theme Components
Convert the repeated HTML blocks into reusable Next.js components using Purdue's exact class structure so your new pages match automatically:
- [x] **Layout Shell** (`Header.jsx`, `Footer.jsx`, `PageBanner.jsx`):
  - Wrap in semantic `<header>`, `<main>`, and `<footer>` tags.
  - Build `<PageBanner breadcrumb="..." title="..."/>` using `.section-top` (`linear-gradient(to left, rgb(228, 242, 254), rgb(255, 238, 254))`), dynamically injecting the page title instead of hardcoded "Current Page".
- [x] **Core Purdue UI Primitives**:
  - `<SectionTitle highlight="..." subtitle="..." title="..."/>` using `.section-title` (switching the inner tag from h1 to h2 so you don't have 10 h1s per page).
  - `<CourseCard/>` (`.course-item`), `<FeatureCard/>` (`.ab_feature`), and `<Accordion/>` (`.accordion-item`).

## Phase 3: Build the 5 Missing Pages in Purdue Theme Style
Assemble the 5 missing pages by remixing existing Purdue CSS classes so they look 100% native to the template:

| Missing Page | Purdue Template Blocks to Remix | Exact Visual & UI Structure | Status |
| :--- | :--- | :--- | :--- |
| **1. Certificate Verification** (`/verify`) | `.section-top` + `.login_register` card (`login.html`) + `.home_sb` search bar (`index2.html`) | **Centered Verification Card**: Place the pill search bar inside a `.login_register` white container (`max-width: 680px`). Below the search bar, render a Verified Credential Card using `#f8faff` background, a green `#198754` verified pill badge, 2-column student metadata grid (Name, Father Name, Roll No, Course, Grade), and a QR code box. | **Completed** |
| **2. Departments** (`/departments`) | `.category_two_area` (`index2.html:167`) + `.ab_one` | **6-Card Department Grid**: Reuse `.category_two_item` cards in a 3-column grid (`col-lg-4 col-md-6`). Inside each card: colored icon circle (`rgba(44, 122, 255, 0.1)`), Department Title (`h3`), program count badge (`.cbadge`), 3 bullet points of key diplomas, Head of Department mini-avatar, and `.cta` animated arrow link to `/registration?dept=...`. | **Completed** |
| **3. Admissions** (`/admissions`) | `.ab_feature` (`about.html`) + `.pricing_area` (`pricing.html`) + `.faq_area` (`faq.html`) | 4-Section Funnel (Process, Fees, Eligibility, Prospectus). | **Removed per user request** |
| **4. Online Registration** (`/registration`) | `.login_register` (`register.html`) + `.form-control` + `.btn_one` | **Upgraded Multi-Step Wizard**: Widen `.login_register` from a narrow 500px login box to 850px (`col-lg-9 mx-auto`). Add a 3-Step Pill Progress Bar at the top (`1. Personal Info → 2. Academic History → 3. Course & Documents`). Keep `.form-control` inputs (height: 50px, border-radius: 6px), add visible `<label>` tags above every input, and add a dashed drag-and-drop box (`border: 2px dashed #2c7aff; background: #f8faff`) for CNIC/Marksheet upload. | **Completed** |
| **5. Gallery & Careers** (`/gallery`, `/careers`) | Gallery: `.course-img` hover zoom + `shop.html` filter tabs.<br>Careers: `.event-slide` (`event.html`) | **Gallery**: Pill filter buttons (All, Campus, Labs, Convocation) in `#ebecff` active tint + 3-column grid using `.course-img` zoom-on-hover + React lightbox.<br>**Careers**: Reuse horizontal `.event-slide` cards—replace the Event Date pill on the left with a Department/Job Type badge (`Full-Time`), list requirements in the center, and place an "Apply Now" `.btn_two` button on the right. | **Completed** |
