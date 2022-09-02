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
    <meta property="og:image" content="https://rotuer.praxidike.org/ogmeta.png">
    <meta name="theme-color" content="#3EB489">
    <link rel="canonical" href="https://rotuer.praxidike.org/">
    <meta property="og:image:alt" content="Logo of RoTUer">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:description" content={metadescription} >
    <meta property="og:site_name" content="RoTUer">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="627">
    <html lang={locale} />
  </svelte:head>