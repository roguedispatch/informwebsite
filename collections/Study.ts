import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import meta from '../fields/meta';

const Study: CollectionConfig = {
  slug: 'study',
  fields: [
    {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
    },
    {
        name: 'description',
        label: 'Description',
        type: 'richText',
        required: true,
    },
    {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'categories',
        label: 'Categories',
        type: 'relationship',
        relationTo: 'category',
        hasMany: true,
    },
    {
        name: 'url',
        label: 'URL',
        type: 'text',
    },
    slug,
    meta,
  ],
};

export default Study;