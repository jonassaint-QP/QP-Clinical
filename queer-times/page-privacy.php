<?php
/**
 * Template Name: Privacy
 * Queer Times - Privacy Page
 */

get_header();
?>

<main id="main-content" class="min-h-screen bg-[#f4f1ea] text-[#1a1a1a]">
    <div class="border-b-2 border-[#1a1a1a] py-1 px-4 flex justify-between items-center text-xs tracking-widest uppercase font-serif">
        <span><?php echo esc_html( date_i18n( 'l, F j, Y' ) ); ?></span>
        <span><?php bloginfo( 'name' ); ?></span>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:underline"><?php _e( '&larr; Front Page', 'queer-times' ); ?></a>
    </div>
    <header class="py-8 px-4 text-center border-b-4 border-double border-[#1a1a1a]">
        <p class="text-xs tracking-widest uppercase text-[#8b7355] mb-2 font-serif"><?php _e( 'Queer Pathways', 'queer-times' ); ?></p>
        <h1 class="text-5xl md:text-7xl leading-none" data-fraktur="true"><?php _e( 'Privacy and Data Governance', 'queer-times' ); ?></h1>
        <div class="flex items-center justify-center gap-3 my-3"><span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span><span class="text-[#8b7355] text-lg">✦</span><span class="block h-px flex-1 max-w-sm bg-[#8b7355]"></span></div>
        <p class="text-sm font-serif italic max-w-2xl mx-auto leading-relaxed"><?php _e( 'Privacy standards for readers and subscribers.', 'queer-times' ); ?></p>
    </header>
    <section class="max-w-4xl mx-auto px-4 py-10">
        <div class="border border-[#8b7355] bg-[#f7f3eb] p-6 md:p-8">
            <ol class="space-y-8 font-serif text-sm md:text-base leading-relaxed list-decimal pl-5 marker:text-[#8b7355]">
                <li><h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true"><?php _e( 'Information We Collect', 'queer-times' ); ?></h2><p><?php _e( 'We collect information you voluntarily provide, such as an email address submitted for subscriptions or correspondence, along with routine technical data needed to secure and deliver the site.', 'queer-times' ); ?></p></li>
                <li><h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true"><?php _e( 'How Information Is Used', 'queer-times' ); ?></h2><p><?php _e( 'Information is used only to provide requested content, respond to inquiries, maintain site security, and meet applicable legal obligations.', 'queer-times' ); ?></p></li>
                <li><h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true"><?php _e( 'Your Choices', 'queer-times' ); ?></h2><p><?php _e( 'You may unsubscribe from email communications at any time and may contact us to ask about access, correction, or deletion of information you provided.', 'queer-times' ); ?></p></li>
                <li><h2 class="text-lg md:text-xl leading-snug mb-2 font-semibold" data-fraktur="true"><?php _e( 'Contact', 'queer-times' ); ?></h2><p><a href="mailto:joshua@queerpathways.org" class="underline hover:no-underline">joshua@queerpathways.org</a></p></li>
            </ol>
        </div>
    </section>
</main>
<?php get_footer(); ?>