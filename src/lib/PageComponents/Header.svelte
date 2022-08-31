<script>
    import {locale} from "$lib/translations/i18n";

    //This right here imports links that will be loaded in the header. The defaults are as seen below.
    export let links = [["Home", "/"], ["To Links", "/links/"], ["About", "/about"]];


</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<header>
    <!-- <div aria-label="Change website language / Websitetaal wijzigen" id="langChange">
        <a aria-label="Change website language to English" href="/">🇬🇧</a>
        <a aria-label="Taal van website wijzigen in Nederlands" href="/nl/">🇳🇱</a>
    </div> -->
    
    <a href="https://github.com/Zakrok09/RoTUer" class="smallHeaderItem" target="_blank"><i class="fa fa-github" style="margin-top:15px ; font-size:40px;color:white;"></i></a>
    <nav>
        <!-- * This is a cool Svelte thing that will iterate over an array and do some html shit with it. -->
        {#each links as [text, link]}
            <!-- * Here we are loading 'links' as by destructing the inner arrays into 'text' and 'link'-->
            <div class="navItem">
                <!-- Then we just create anchor tags that have href to link and text as text -->
                <a class="navLink" href={link}>{text}</a>
            </div>
        {/each}
    </nav>
    <select bind:value={$locale} class="smallHeaderItem">
        <option value="en">🇬🇧</option>
        <option value="nl">🇳🇱</option>
        <option value="bg">🇧🇬</option>
    </select>
</header>
<div class="shapedivider shapedividers_com-3156"></div>

<style lang="scss">
    // This is a SCSS variable. Basically it works like a predefined colour.
    $contrast_header: #24313d;

    header {
        background-color: $contrast_header; //Here is a perfect example
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .shapedivider {
        height: 100px;
    }

    nav {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-end;
    }

    .navItem {
        padding: 4px;
        margin-right: 10px;
        text-decoration: none;
        color: whitesmoke;
    }

    .navLink {
        font-size: 1.3em;
        color: whitesmoke;
        font-family: 'Oxygen', sans-serif;
        text-decoration: none;
    }



    //! Shape dividers

    .shapedividers_com-3156{
        overflow:hidden;
        position:relative;
    }
    .shapedividers_com-3156::before{ 
        content:'';
        font-family:'shape divider from ShapeDividers.com';
        position: absolute;
        z-index: 3;
        pointer-events: none;
        background-repeat: no-repeat;
        bottom: -0.1vw;
        left: -0.1vw;
        right: -0.1vw;
        top: -0.1vw; 
        background-size: 100% 47px;
        background-position: 50% 0%;  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" fill="%2324313d"/></svg>'); 
    }

    @media (min-width:2100px){
        .shapedividers_com-3156::before{
          background-size: 100% calc(2vw + 47px);
        }
    }

    @media (max-width:800px){
        .navLink {
            font-size: 1rem;
        }

        .navItem {
            margin: 20px 0px;
        }
    }

    select {
        appearance: none;
        background-color: transparent;
        border: none;
        margin: 0;
        font-size: 2rem;

        option {
            font-size: 2rem;
            text-align: center;
        }
    }

    .smallHeaderItem {
        width: 100px;
        text-align: center;
    }
 
</style>