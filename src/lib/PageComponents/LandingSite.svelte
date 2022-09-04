<script>
    export let underheading = '';
    export let src = "/isometric/logo.svg";
</script>

<div class="landingSite">
    <div class="logo">
        <img {src} alt="The logo of RoTUer">
    </div>
    <div class="headingAndUnder">
        <h1 tabindex="0">RoTUer</h1>
        <i>{underheading}</i>
    </div>
</div>

<style lang="scss">
    .landingSite {
        padding-top: 70px;
        padding-bottom: 100px;
        font-family: 'Oxygen', sans-serif;

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 50px;

        i {
            font-size: 0.9rem;
            margin: 0px;
        }

        img {
            width: 100%;
            display: inline;
        }

        h1 {
            font-size: 1.6em;
            color: #4e5166;
        }
    }

    .logo {
        width: 220px;
    }

    .headingAndUnder {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        width: 300px;
    }
</style>