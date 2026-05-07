# Medenterprises Job Board Exercise

A job listing platform built with Next.js App Router, TypeScript, and Tailwind CSS.

The application renders SEO-friendly medical job listings with dynamic routing, structured data, analytics tracking, filtering, and sitemap generation.

---

# Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vitest
- React Testing Library

---

# Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

---

# Features

- Job listings index page
- Dynamic job detail pages
- URL-based filtering
- SEO metadata with canonical tags
- Open Graph metadata
- JobPosting JSON-LD structured data
- Dynamic sitemap.xml generation
- GTM-style analytics tracking
- 404 handling for invalid job slugs
- Unit and integration test coverage

---

# Rendering Strategy

The application uses Static Site Generation (SSG) with Next.js App Router and static route generation for job detail pages.

This approach was chosen because job boards are highly SEO-driven and mostly read-heavy applications. Static rendering improves:

- page load performance
- crawlability
- SEO consistency
- infrastructure efficiency

The architecture also supports Incremental Static Regeneration (ISR) if the external feed updates periodically.

---

# Data Layer Architecture

The data fetching layer is intentionally separated from the rendering layer.

Architecture flow:

```txt
UI → service layer → repository layer → data source
```

This allows the JSON fixture to later be replaced with:

- external REST APIs
- GraphQL feeds
- ATS integrations
- CMS platforms

without affecting the UI layer.

---

# Analytics Tracking

The Apply button uses a reusable analytics abstraction that mirrors a real Google Tag Manager implementation via `window.dataLayer.push()`.

This structure can later integrate with:

- Google Analytics 4
- Segment
- Mixpanel
- other analytics providers

without modifying UI components.

---

# Sitemap

The application generates a dynamic sitemap using Next.js Metadata Routes.

Included URLs:

- `/jobs`
- all dynamic job detail pages

---

# Testing

The project includes:

- unit tests for filtering logic
- integration tests for UI rendering

using Vitest and React Testing Library.

---

# Trade-offs

Due to time constraints, the implementation intentionally prioritised:

- architecture
- SEO
- maintainability
- clean separation of concerns

over advanced UI polish or additional product features.

The filtering system was intentionally kept simple instead of implementing a more advanced faceted search experience.

Pagination and full-text search were also omitted to focus on the core assessment requirements.

---

# Next Steps

If given more time, the next improvements would include:

- pagination
- full-text search
- accessibility audit
- loading skeletons
- feed validation
- error monitoring
- CMS or ATS integration
- analytics dashboarding
- CI/CD pipeline improvements

---

# Production Readiness Considerations

Before production deployment, additional work would include:

- observability and monitoring
- rate limiting
- security headers
- caching strategy
- analytics dashboards
- automated accessibility testing
- structured logging
- uptime monitoring

---

# AI Usage

AI tools were used to assist with implementation planning, architecture discussions, and code generation support.

All submitted code was reviewed, modified, and fully understood before submission.