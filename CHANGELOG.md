# CHANGELOG

## Release

## 1.3.0 [30-05-2022]

- Removed redundant call to Netlify function
- Containerized the application for use within Docker
- Added `nvm` support
- Added `svg` separator to the Footer component
- Standardized the CSS units across the application
- Added `svg` separtor to the Header component
- Automated the release process

## 1.2.2 [06-04-2022]

- Reintroduced the `next/image` component
- Improved unit test efficiency
- Generated the `Content-Security-Policy` dynamically
- Run `@netlify/plugin-lighthouse` in all contexts

## 1.2.1 [21-03-2022]

- Enhanced the Content-Security-Policy
- Switched `LoadingSpinner` to the component-library implementation
- Added the Mozilla Observatory report to the README
- Added the Lighthouse report to the README
- Added the Permissions-Policy Security Header

## 1.2.0 [06-03-2022]

- Restructured Experience Cards when viewing on mobile/tablet
- Implemented 1.1.23 `TCL` IconButton changes
- Added dividers to Experience (m) and Education
- Removed Navigation and placed IconButton' within the Summary
- Implemented the `LoadingSpinner` component
- Introduced an `EducationCollection` / refactored Education
- Introduced an `ExperienceCollection` / refactored Experience
- Added Sass
- Refined the component's styling
- Added a `CSP` Policy and other Lighthouse improvements
- Only run Lighthouse against production
- Standardised code comments across the application
- Reduced the avatar' margin for mobile view-port'
- Increased the IconButton' padding
- Refactored Summary to map the content
- Introduced a `SkillCollection`

## 1.1.1 [22-02-2022]

- Improved the responsiveness of the application

## 1.1.0 [20-02-2022]

- Configured Jest
- Added tests to the Header component
- Added tests to the Navigation component
- Added tests to the Body component
- Added tests to the Summary component
- Added tests to the Skills component
- Added tests to the Experience component
- Added more linting packages
- Added tests to the Education component
- Added tests to the Footer component
- Implemented Netlify functions to retrieve the Title
- Removed console errors within Chrome `DevTools`
- Created the JSON structure
- Improved application content
- Refactored the use of the `TCL`
- Added Lighthouse report to the deployment
- Increased the Header component coverage
- Bumped `coverageThreshold`'s to 100
- Implement functions
- Improved Data types returned from the Handler
- Removed deprecated `config` causing a console error
- Added Husky Git hooks
- Added CHANGELOG
- Updated the README
- Updated the CHANGELOG

## 1.0.0 [13-01-2022]

- Updated the README
- Created the CODEOWNERS
- Created the PULL_REQUEST_TEMPLATE
- Created the Application
- Created the Workflows
- Created `dependabot` weekly check by
- Created the `netlify.toml`
- Updating the application title
- Added the Header component
- Added the Navigation component
- Added the Body component
- Refactored the Body component to contain isolated components per section
- Added the Skills component
- Added the Experience component
- Added Education component
- Added the Footer component
- Updated the content within the Experience component
- Added content to the Summary component
- Updated content within the Skills component
- Updated content within the Education component
- Fixed an issue where the Card component was not aligning correctly
- Added contact information to the Summary component
- Minor change to the Summary text content
- Removed unused properties from the Image component
