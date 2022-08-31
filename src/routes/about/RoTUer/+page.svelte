<script>
    import { t } from "$lib/translations/i18n";
</script>
<!-- ! yo thijs check this -->
<main>
    <h1>🔗 {$t("homepage.aboutRotuer")}</h1>
    <section>
        <div class="left">
            <h2>🔥 {$t("aboutpages.titles.aboutRotuer")}</h2>
            <p>{$t("aboutpages.paragraphs.aboutrotuer.shortIntro")}</p>
            <p>{$t("aboutpages.paragraphs.aboutrotuer.howWeBeganWork")}.</p>
            <p>{$t("aboutpages.paragraphs.aboutrotuer.finalWords")}.</p>
        </div>
        <aside class="right">
            <img src="/isometric/logo.svg" alt="Praxidike Logo">
        </aside>
    </section>


</main>

<svelte:head>
    <title>About RoTUer | RoTUer</title>
</svelte:head>


<style lang="scss">
    * {
        font-family: 'Oxygen', sans-serif;
    }

    h1 {
        margin-top: 100px;
        font-size: 3rem;
        text-align: center;
    }

    section {
        padding: 100px 150px;
        margin-top: 200px;
        color: whitesmoke;
        background-image: url("/background/curvedlines.svg");
        background-size: cover;
        display: flex;
        justify-content: space-between;

        .left {
            width: 60%;

            h2 {
                font-size: 1.8rem;
            }

            p {
                font-size: 1.2rem;
            }
        }

        .right {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                padding-top: 50px;
                width: 70%;
                border-radius: 15px;
            }
        }
    }

    @media only screen and (max-width: 1300px) {
        section {
            display: flex;
            flex-flow: column;
            align-items: center;

            .right img {
                width: 200px;
            }
        }
        section .left {
            width: 100%;
        }
    }

    @media only screen and (max-width: 900px) {
        section {
            padding: 100px 50px;
        }
    }

    @media only screen and (max-width: 500px) {
        h1 {
            font-size: 2rem;
        }

        section .left {
            p {
                font-size: 1rem;
            }
        }
    }

    @media only screen and (max-width: 400px) {
        section {
            padding: 100px 20px;
        }
    }
</style>