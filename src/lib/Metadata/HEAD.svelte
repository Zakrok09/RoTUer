<script>
    import {locale} from "$lib/translations/i18n"
   
    export let metadescription;
    export let title;
  </script>
    
  <svelte:head>
    <title>{title + " | RoTUer"}</title>
    <meta name="description" content={metadescription} />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta property="og:title" content="RoTUer">
    <meta property="og:image" content="ogmeta.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:description" content={metadescription} >
    <meta property="og:site_name" content="RoTUer">
    <html lang={locale} />
  </svelte:head>