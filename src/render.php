<?php if (!empty($attributes['showBlock'])) : ?>
    <div <?php echo get_block_wrapper_attributes(); ?>>
        <?php echo esc_html( $attributes['title'] ); ?>
        <?php echo esc_html( $attributes['category'] ? ' - ' . $attributes['category'] : '' ); ?>
    </div>
<?php endif; ?>
