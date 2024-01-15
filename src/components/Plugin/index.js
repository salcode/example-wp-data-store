
import {
  PluginSidebar,
  PluginSidebarMoreMenuItem,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
export default function Plugin() {
  const pluginName = 'example-wp-data-store';

  return <>
    <PluginSidebarMoreMenuItem
      target={pluginName}
    >
      {__('Example WP Data Store', 'example-wp-data-store')}
    </PluginSidebarMoreMenuItem>
    <PluginSidebar
      title={__('Example WP Data Store', 'example-wp-data-store')}
      name={pluginName}
    >
      <h2>salcode test content</h2>
    </PluginSidebar>
  </>;
}
