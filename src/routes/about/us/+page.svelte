<script>
    import { t } from "$lib/translations/i18n";
</script>
<!-- ! yo thijs check this -->
<main>
    <h1>🪐 {$t("homepage.aboutus")}</h1>
    <section>
        <div class="left">
            <h2>🔭 {$t("aboutpages.titles.whoarewe")}</h2>
            <p>{$t("aboutpages.paragraphs.aboutus.shortIntro")}</p>
            <p>{$t("aboutpages.paragraphs.aboutus.praxidikeTimeline")}</p>
            <p>{$t("aboutpages.paragraphs.aboutus.whatBringSUSTogether")}</p>
        </div>
        <aside class="right">
            <img src="/praxidike.png" alt="Praxidike Logo">
        </aside>
    </section>


</main>


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
                width: 50%;
                border-radius: 15px;
            }
        }
    }

    @media only screen and (max-width: 1300px) {
        img {
            display: none;
        }
    }

    @media only screen and (max-width: 1160px) {
        section .left {
            width: 100%;
        }

        section .right {
            width: 0%;
        }
    }

    @media only screen and (max-width: 900px) {
        section {
            padding: 100px 50px;
        }
    }

    @media only screen and (max-width: 500px) {
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