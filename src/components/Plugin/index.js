
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
export default function Plugin() {

  return <PluginDocumentSettingPanel
    icon="code-standards"
    title={__( 'Example WP Data Store', 'example-wp-data-store' )}
  >
    <p>salcode test content</p>
  </PluginDocumentSettingPanel>;
}
