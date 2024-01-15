import { registerPlugin } from '@wordpress/plugins';
import Plugin from './components/Plugin';

import './store';

registerPlugin(
  'example-wp-data-store',
  {
    render: () => <Plugin />
  },
);
