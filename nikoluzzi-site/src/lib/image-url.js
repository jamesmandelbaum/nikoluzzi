import clientConfig from '../../../nikoluzzi-studio/'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(clientConfig.sanity)

export function imageUrlFor(source) {
  return builder.image(source)
}