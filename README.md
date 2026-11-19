# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## ✍️ Content storage (Keystatic)

Content lives in `src/content/` and is edited at `/keystatic`. The storage mode is picked in `keystatic.config.ts`:

| Where you run it | Storage | What saving does |
| :--------------- | :------ | :--------------- |
| `npm run dev`    | `local` | Writes files to `src/content/` — commit and push them yourself |
| Deployed site    | `cloud` | Commits to GitHub via [Keystatic Cloud](https://keystatic.cloud); Cloudflare rebuilds on push |

### One-time Keystatic Cloud setup

1. Sign in at [keystatic.cloud](https://keystatic.cloud), create a team and a project, and connect it to this GitHub repo.
2. Put the project slug (`team/project`) in `KEYSTATIC_CLOUD_PROJECT` in `keystatic.config.ts` (already set to `desn/astrokeystaticmstart` for this repo).
3. Connect the repo to Cloudflare Workers Builds so each Keystatic commit triggers a deploy.
4. In Keystatic Cloud, add the site's URL (e.g. `https://your-site.workers.dev`) to the project's allowed origins, then invite editors.
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
