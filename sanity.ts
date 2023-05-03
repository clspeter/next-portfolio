import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = "2021-03-25"
const useCdn = process.env.NODE_ENV === 'production'


const sanityConfig = { projectId, dataset, apiVersion, useCdn }

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(sanityConfig).image(source)

