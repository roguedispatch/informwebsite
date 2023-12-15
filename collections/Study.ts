import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

const Study: CollectionConfig = {
  slug: 'study',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slug,
  ],
};

export default Study;