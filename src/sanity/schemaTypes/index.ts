import { type SchemaTypeDefinition } from 'sanity'
import product from '../schemaTypes/productSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
