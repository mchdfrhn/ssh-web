# SSH Web Project

Project website untuk Surupan Software House (SSH).

## Project Info

Built with:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

### 1. Prerequisites

Ensure you have Node.js installed on your machine.
Recommended: [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone <YOUR_GIT_URL>
cd ssh-web
npm install
```

### 3. Configuration

Duplicate the example environment file and rename it to `.env`:

```bash
cp .env.example .env
```

Open `.env` and update the values as needed.

**Available Environment Variables:**

| Variable                        | Description                      | Default               |
| ------------------------------- | -------------------------------- | --------------------- |
| `VITE_APP_NAME`                 | Project Name / Brand             | SSH                   |
| `VITE_CONTACT_WHATSAPP_NUMBER`  | WhatsApp Number (format: 628...) | 6281234567890         |
| `VITE_CONTACT_WHATSAPP_DISPLAY` | Display formatted number         | +62 812 3456 7890     |
| `VITE_CONTACT_EMAIL`            | Contact Email                    | hello@surupan.dev     |
| `VITE_SOCIAL_GITHUB_URL`        | GitHub URL                       | https://github.com    |
| `VITE_SOCIAL_LINKEDIN_URL`      | LinkedIn URL                     | https://linkedin.com  |
| `VITE_SOCIAL_INSTAGRAM_URL`     | Instagram URL                    | https://instagram.com |

### 4. Running Development Server

Start the development server with auto-reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 5. Deployment

To build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
