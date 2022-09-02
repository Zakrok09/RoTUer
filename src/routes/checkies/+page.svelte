<script>
    import HEAD from "$lib/Metadata/HEAD.svelte";
</script>

<HEAD title="Checkies" metadescription="RoTUer - a free, open-source dashboard that students need! RoTUer is a project aimed at helping students by providing them valuable information." />

<main>
    <div class="landingSite">
        <img src="/isometric/logo.svg" alt="The logo of RoTUer">
        <h1 tabindex="0">RoTUer</h1>
        <!-- <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i> -->
        <i>We make it simple, people!</i>
    </div>
     <div class="landingSection secondLandingSection">
            <div class="test"></div>
     </div>

</main>

<style lang="scss">
    $contrast_header: #24313d;

    * {
        font-family: 'Oxygen', sans-serif;
    }

    .landingSite {
        padding-top: 70px;
        padding-bottom: 200px;
        font-family: 'Oxygen', sans-serif;
        text-align: center;

        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        i {
            font-size: 0.9rem;
        }

        img {
            width: 300px;
            display: inline;
        }
    }

    .secondLandingSection {
        background-image: url("/background/bubbleBackground.svg");
        background-size: cover;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        color: whitesmoke;
    }

    .test {
        background-color: rgb(85, 103, 120);
        background-size: cover;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        color: whitesmoke;
    }
    
</style>