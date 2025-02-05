# Provet Auth - Nuxt Migration

## Overview

This project is a Nuxt 3 migration of the original [Provet Sign-Up Form](https://github.com/walidsaleh/provet-sign-up/tree/<hash_del_commit_antes_de_la_migracion>) project. The migration enhances the original Vue 3 application with Nuxt features while maintaining the core functionality and design system compliance.

## Current State and Limitations

⚠️ **Please Note**: This should be considered as a draft/work in progress. The current implementation is incomplete and serves mainly as a proof of concept for the Nuxt migration.

While the sign-up functionality is implemented, the login system is currently UI-only, meaning the user interface is present, but the actual authentication logic is not yet implemented. Submitting the login form will not perform any authentication at this time. A more complete version with proper (simulated) authentication flows is planned but pending development in the near future.

Being a relatively small project, it still requires significant development time for proper implementation of all features and best practices, especially given the complexity of integrating with the Provet Cloud Design System. Due to time constraints, several areas need further work:

- More comprehensive test coverage for form validation and submission logic.
- Enhanced error handling, including displaying specific error messages to the user.
- Additional accessibility features, such as ARIA attributes and keyboard navigation.
- Performance optimizations, particularly regarding bundle size and loading times.
- Documentation completeness, including documenting all components and their props.

These limitations are recognized and would be addressed in a production environment with appropriate time allocation.  Prioritized areas for future development include enhanced error handling and more comprehensive test coverage for form validation. Please treat this as a draft version rather than a production-ready implementation. Feedback and contributions are welcome! Please see the contributing guidelines for more information.

## Key Changes from Original

- Migration from Vue 3 to Nuxt 3: Leveraging Nuxt's server-side rendering and improved developer experience.
- Enhanced routing with Nuxt pages: Implementing file-based routing for cleaner URL structure.
- Structured i18n implementation with @nuxtjs/i18n: Integrating internationalization support with language files and dynamic switching.
- Improved project structure following Nuxt conventions: Organizing components, pages, layouts, and other assets according to Nuxt best practices.

## Core Technologies

- @nuxtjs/i18n
- Nuxt 3
- Provet Cloud Design System (@provetcloud/web-components)
- TypeScript
- Vue 3 Composition API

## Project Structure

```
nuxt-2025/
├── app.vue                    # Root application component
├── components/               # Vue components
│   ├── Login/                # Login related components
│   │   ├── LoginForm.vue     # Login form component
│   │   ├── LoginStack.vue    # Login page layout
│   │   └── SignUpFormLink.vue # Sign-up link component
│   └── SignUp/               # Sign-up related components
│       ├── SignUpForm.vue    # Sign-up form component
│       ├── SignUpStack.vue   # Sign-up page layout
│       └── LoginFormLink.vue # Login link component
├── composables/             # Shared composable functions
├── constants.ts             # Application constants
├── layouts/                 # Nuxt layouts
├── locales/                # i18n translation files
│   └── en/                 # English translations
├── pages/                  # Application routes
│   ├── login.vue           # Login page
│   ├── signup.vue          # Sign-up page
│   └── registration/       # Registration flow pages
├── plugins/                # Nuxt plugins
├── public/                 # Static assets
└── types/                  # TypeScript type definitions
```

## Setup and Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact

Walid Saleh - [LinkedIn](https://www.linkedin.com/in/walplanet)
