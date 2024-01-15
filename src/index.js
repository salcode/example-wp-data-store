import { registerPlugin } from '@wordpress/plugins';
import Plugin from './components/Plugin';

registerPlugin(
  'example-wp-data-store',
  {
    render: () => <Plugin />
  },
);
