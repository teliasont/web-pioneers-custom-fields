// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

// Storage strategy:
// - `astro dev`     → `local`: the admin at /keystatic writes straight to src/content/.
// - deployed build → `cloud`: the admin commits to GitHub through Keystatic Cloud,
//                    so editors sign in with Keystatic Cloud instead of GitHub.
//
// Keystatic Cloud project slug ("team/project"), from keystatic.cloud. Not a secret.
const KEYSTATIC_CLOUD_PROJECT = 'desn/astrokeystaticmstart';

const useCloud = !import.meta.env.DEV;

export default config({
  storage: useCloud ? { kind: 'cloud' } : { kind: 'local' },
  cloud: { project: KEYSTATIC_CLOUD_PROJECT },

  ui: {
    brand: {name: 'Web Pioneers'}
  },

   collections: {
    pioneers: collection({
      label: 'Pioneers',
      slugField: 'title',
      path: 'src/content/pioneers/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
                // Saved to public/images/pioneers/<slug>/image.<ext>, served from /images/pioneers/<slug>/.
        image: fields.image({
          label: 'Image',
          directory: 'public/images/pioneers',
          publicPath: '/images/pioneers/',
        }),
        intro: fields.text({ label: 'Intro', multiline: true }),
        homepage: fields.url({ label: 'Homepage' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },

  


});
