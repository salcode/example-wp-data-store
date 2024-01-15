
import {
  useSelect,
} from '@wordpress/data';
import {
  PluginSidebar,
  PluginSidebarMoreMenuItem,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import StoreContents from '../StoreContents';

export default function Plugin() {
  const pluginName = 'example-wp-data-store';

  const items = useSelect(
    (select) => {
      return select('example/items').getItems();
    }
  );

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
      <StoreContents>
        {items}
      </StoreContents>
    </PluginSidebar>
  </>;
}
