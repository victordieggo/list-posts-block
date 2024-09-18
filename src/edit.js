import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, CustomSelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
    const { showBlock, title, category } = attributes;

    const options = [
        {
            key: 'small',
            name: 'Small',
        },
        {
            key: 'normal',
            name: 'Normal',
        },
        {
            key: 'large',
            name: 'Large',
        },
        {
            key: 'huge',
            name: 'Huge',
        },
    ];

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'list-posts-block' ) }>
                    <ToggleControl
                        checked={ !! showBlock }
                        label={ __(
                            'Exibir título?',
                            'list-posts-block'
                        ) }
                        onChange={ () =>
                            setAttributes( {
                                showBlock: ! showBlock,
                            } )
                        }
                    />
                    { showBlock && (
                        <TextControl
                            label={ __(
                                'Título',
                                'list-posts-block'
                            ) }
                            value={title || ''}
                            onChange={ value =>
                                setAttributes({ title: value })
                            }
                        />
                    ) }
                    { showBlock && (
                        <CustomSelectControl
                        label={ __(
                            'Categoria',
                            'list-posts-block'
                        ) }
                        options={ options }
                        onChange={value =>
                            setAttributes({ category: value.selectedItem.key })
                        }
                        value={ category ? options.find(option => option.key === category) : options[0] }
                        />
                    ) }
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                { showBlock && title ? title : '' }
                { showBlock && category ? ` - ${category}` : '' }
            </div>
        </>
    );
}
