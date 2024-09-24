Here’s a sample `README.md` file for your Next.js TypeScript project with tests, checks, and guidelines enforcement:

---

# Next.js TypeScript App

This is a Next.js application built with TypeScript, featuring strict code guidelines, production checks, and automated testing. The setup includes ESLint, Prettier, Husky, lint-staged, Jest, and CI/CD with GitHub Actions to ensure code quality and consistency.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Continuous Integration](#continuous-integration)
- [TypeScript Configuration](#typescript-configuration)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your local machine:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abydin/next-template.git
   cd next-template
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and lint errors will appear in the console.

## Project Structure

```
├── public/               # Public assets
├── src/                  # Application source code
│   ├── components/       # React components organized by design system
│   │   ├── atoms/        # Small, reusable elements (Atomic Design)
│   │   ├── molecules/    # Components built from atoms (Atomic Design)
│   │   ├── organisms/    # Complex components combining molecules (Atomic Design)
│   │   ├── blocks/       # Blocks (BEM)
│   │   ├── layouts/      # Layouts for the page structure (SMACSS/ITCSS)
│   │   ├── modules/      # Modular components for UI parts (SMACSS)
│   │   ├── tokens/       # Design tokens (colors, typography, spacing)
│   ├── pages/            # Next.js pages
│   ├── styles/           # Global and component-specific CSS
│   │   ├── base/         # Base styles (SMACSS/ITCSS)
│   │   ├── objects/      # Layout objects (OOCSS)
│   │   ├── utilities/    # Utility classes for specific properties (Utility-first CSS)
│   │   ├── components/   # Component-specific styles
│   │   └── themes/       # Theme-related styles (light, dark, etc.)
│   ├── tests/            # Jest and Testing Library tests
│   └── utils/            # Utility functions for the application
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
├── jest.setup.ts         # Jest setup file
└── package.json          # Project configuration and scripts

```

## Scripts

To add the above project structure, run:

```bash
node create-structure.js
```

delete any path that is unncessary in your project

The following scripts are available for use:

- `node create-structure.js` – To add the above project structure.
- `npm run dev` – Start the development server.
- `npm run build` – Build the app for production.
- `npm start` – Start the production server.
- `npm run lint` – Run ESLint to check for code issues.
- `npm run format` – Format code using Prettier.
- `npm run test` – Run unit tests with Jest.
- `npm run check-types` – Check for TypeScript errors.
- `npm run prepare` – Prepare Husky hooks.

## Code Quality

This project enforces code quality through the following tools:

- **ESLint**: Lints and enforces best practices in the codebase.
- **Prettier**: Ensures consistent code formatting.
- **Husky**: Adds Git hooks to run checks before commits.
- **Lint-staged**: Ensures only staged files are linted and formatted.
- **Commitlint**: Enforces conventional commit messages.

### Linting

Run the following command to check for linting issues:

```bash
npm run lint
```

### Formatting

To format the codebase, run:

```bash
npm run format
```

## Testing

This project uses **Jest** and **React Testing Library** for unit testing.

Run tests in watch mode with:

```bash
npm run test
```

To check test coverage:

```bash
npm run test -- --coverage
```

## Continuous Integration

The project uses **GitHub Actions** for continuous integration (CI). Every push or pull request triggers the following checks:

- ESLint
- TypeScript compilation
- Unit tests with Jest
- Production build

Check the CI configuration in `.github/workflows/ci.yml`.

## TypeScript Configuration

The `tsconfig.json` file is configured with strict settings to ensure type safety across the project:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]

      //  "@provider/*": ["./src/providers/*"],
      // "@store/*": ["./src/stores/*"],
      // "@ui/*": ["./src/components/common/*"],
      // "@ui": ["./src/components/common/"],
      // "@type/*": ["./src/type/*"],
      // "@type": ["./src/type/"],
      // "@hook/*": ["./src/hooks/*"],
      // "@hook": ["./src/hooks/"],
      // "@util/*": ["./src/utils/*"],
      // "@util": ["./src/utils/"],
      // "@icon/*": ["./src/components/icons/*"],
      // "@icon": ["./src/components/icons/"],
      // "@module/*": ["./src/components/modules/*"],
      // "@data/*": ["./src/data/*"],
      // "@data": ["./src/data/"],
      // "@modal/*": ["./src/components/modal/*"]
    }
  }
}
```

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Ensure all tests pass and linting checks are clean.
5. Submit a pull request.

### Commit Message Guidelines

This project uses **Conventional Commits**.
We use **commitlint** to ensure that all commit messages adhere to a specific format based on **Conventional Commits**. This helps us track changes efficiently, generate changelogs, and understand the purpose of each commit.

### Commit Message Format

Each commit message must follow this format:

```
<type>(<scope>): <subject>
```

- **type**: The type of change being made. Common types include `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- **scope**: A short, optional context or area of the application that this change affects (e.g., `auth`, `header`, `footer`). It is enclosed in parentheses.
- **subject**: A brief summary of the change (not capitalized and no period at the end).

### Examples of Commit Messages

Here are some examples of properly formatted commit messages:

- `feat(auth): add login functionality`
- `fix(header): resolve UI issue in mobile view`
- `docs(readme): update project description`
- `refactor(button): optimize button rendering performance`
- `test(auth): add unit tests for login functionality`
- `chore(deps): update project dependencies`

### Commit Types

- **feat**: A new feature or enhancement.
  - Example: `feat(auth): add forgot password feature`
- **fix**: A bug fix.
  - Example: `fix(header): resolve broken logo link in mobile view`
- **docs**: Documentation changes (e.g., README updates).
  - Example: `docs(readme): add contribution guidelines`
- **style**: Code style or formatting changes (not related to functionality).
  - Example: `style(button): apply consistent padding and margin`
- **refactor**: Code refactoring that does not change functionality.
  - Example: `refactor(navbar): restructure component rendering`
- **test**: Adding or updating tests.
  - Example: `test(auth): add integration tests for login page`
- **chore**: Routine tasks like updating build scripts, configurations, or dependencies.
  - Example: `chore(deps): update Jest to version 28`

### How We Enforce the Rules

We use **Husky** and **commitlint** to enforce the commit message format. Every time you make a commit, the message will be automatically checked for the correct format.

#### Steps to Commit

1. Write your changes.
2. Stage your changes using `git add <files>`.
3. Make a commit following the [commit message format](#commit-message-format):

   ```bash
   git commit -m "type(scope): description of the change"
   ```

   If the message doesn’t follow the correct format, your commit will be rejected with an error message.

### Bypassing the Check (Not Recommended)

If for some reason you need to bypass the commit message check, you can use the `--no-verify` flag:

```bash
git commit --no-verify
```

However, it is highly recommended to follow the commit message rules to ensure consistency and clarity in the Git history.

---

### Install and Setup Instructions

To set up the commit rules for this project:

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Make sure **Husky** is installed:
   ```bash
   npx husky install
   ```

Husky will now automatically run `commitlint` on every commit to validate your commit messages.

---

By following this commit message convention, we ensure that our Git history remains clean, organized, and easy to understand.
