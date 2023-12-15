import { CollectionConfig } from 'payload/types';

const FormSubmission: CollectionConfig = {
  slug: 'form-submission',
  fields: [
    {
      name: 'email',
      label: 'Email Address',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'source',
      label: 'Source',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    }
  ],
};

export default FormSubmission;