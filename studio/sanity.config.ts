import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name:    'qualicer',
  title:   'Qualicer CMS',
  projectId: 'ok6yzqoe',
  dataset:   'production',
  plugins: [structureTool()],
  schema:  { types: schemaTypes },
});
