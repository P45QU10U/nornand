// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Import custom schema types here
import params from './params'
import offers from './offers'
import socialnetwork from './socialnetwork'
import product from './product';
import category from './category';
import subcategory from './subcategory';
import productvariants from './productvariant'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    params,
    offers,
    socialnetwork,
    product,
    productvariants,
    category,
    subcategory,
  ]),
});
