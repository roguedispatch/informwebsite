import { CollectionConfig } from 'payload/types';
import { Type as MediaType } from './Media';
import slug from '../fields/slug';
import meta, { Type as MetaType } from '../fields/meta';
import { Content, Type as ContentType } from '../blocks/Content';
import { Image, Type as ImageType } from '../blocks/Image';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import StickyContent, { Type as StickyContentType } from '../blocks/StickyContent';
import Slider, { Type as SliderType } from '../blocks/Slider';
import ImageGrid, { Type as ImageGridType } from '../blocks/ImageGrid';
import ImageCollage, { Type as ImageCollageType } from '../blocks/ImageCollage';

export type Layout =
  ContentType
  | ImageType
  | ImageCollageType
  | ImageGridType
  | SliderType
  | SpacerType
  | StickyContentType

export type Type = {
  title: string
  heroType: 'minimal' | 'contentAboveImage' | 'contentLeftOfImage'
  heroContent: unknown
  heroImage?: MediaType
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: MetaType
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Content Above Image',
          value: 'contentAboveImage',
        },
        {
          label: 'Content Left of Image',
          value: 'contentLeftOfImage',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.heroType === 'contentAboveImage' || siblingData?.heroType === 'contentLeftOfImage',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        Content,
        Image,
        ImageCollage,
        ImageGrid,
        Slider,
        Spacer,
        StickyContent,
      ],
    },
    meta,
    slug,
  ],
};

export default Page;