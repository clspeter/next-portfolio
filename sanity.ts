import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = "2021-03-25"

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export const urlFor = (source: string) => createImageUrlBuilder(sanityClient).image(source)

