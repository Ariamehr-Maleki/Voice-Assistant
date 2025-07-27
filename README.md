# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/34a6c6ab-1f34-4c19-a29f-6768f78a2984

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/34a6c6ab-1f34-4c19-a29f-6768f78a2984) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables.
cp .env.example .env
# Edit .env file and add your Vapi API key and Assistant ID

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Environment Variables

This project requires the following environment variables to be set in a `.env` file:

```env
VITE_VAPI_API_KEY=your_vapi_api_key_here
VITE_VAPI_ASSISTANT_ID=your_vapi_assistant_id_here
```

### How to get your Vapi credentials:

1. Sign up at [Vapi.ai](https://vapi.ai)
2. Create a new assistant
3. Get your API key from the dashboard
4. Copy your assistant ID

**Important**: Never commit your `.env` file to version control. It's already added to `.gitignore`.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/34a6c6ab-1f34-4c19-a29f-6768f78a2984) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
