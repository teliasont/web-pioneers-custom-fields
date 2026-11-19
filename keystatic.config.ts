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
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },


});
