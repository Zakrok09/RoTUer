<script>

</script>

<main>
    <div class="landingSite">
        <h1>Not sure what to do next?</h1>
        <a href="/" class="navItem" id="logo">RoTUer</a><i>...is here</i>
        <i>Website is still under development and it currently not meant for use! Enter at your own responsibility</i>
    </div>
    <div class="landingSection secondLandingSection">
        <div class="leftSecond">
            <h2>🚀 What is RoTUer?</h2>
            <p>🔗 RoTUer is a project made by (soon-to-be) students of TU Delft. The main goal is to help other students find websites that contain information that they are searching and to generalize all possible things you can make use of in the Uni.</p>
            <p>⚠️ DISCLAIMER: This project is not affiliated by anyway to TU Delft itself. Information here is gathered and presented by us (the team behind the project). <b>TU DELFT IS NOT RESPONSIBLE FOR INACCURACY ON THIS WEBSITE</b>.</p>
            <p>‼️ Although we make sure that every link is secure, <b>make sure to check where the link is leading to before clicking!</b></p>
        </div>
        <div class="rightSecond">
            <div class="SecondBox">
                <span>🌹</span>
                <h3>About us</h3>
                <p>We are students from all over Europe who just started working on a project together. We all want to help people. This is why we developed RoTUer.</p>
                <a href="/" class="AnchorBox">Read more</a>
            </div>
            <div class="SecondBox">
                <span>🔥</span>
                <h3>About RoTUer</h3>
                <p>RoTUer was made to help people like me who just suddenly find themselves in a place with endless possibilities - you can book books, rooms for teams, printing machines etc. Even now I start forgetting all the other stuff. This is why we wanted to present all this information in a summarized form with links.</p>
                <a href="/" class="AnchorBox">Read more</a>
            </div>
        </div>
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
    }

    h1 {
        font-size: 1.7em;
    }

    #logo {
        font-size: 5em;
        text-decoration: none;
        color: black;
    }

    .secondLandingSection {
        /* Created with https://www.css-gradient.com */
        background-image: url("/svg.svg");
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;
        color: whitesmoke;
    }

    .leftSecond {
        width: 30%;
        padding: 100px 80px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: end;

        h2 {
            font-size: 3rem;
        }

        p {
            color: whitesmoke;
            font-size: 1.1em;
        }
    }

    .rightSecond {
        width: 60%;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .SecondBox {
        width: 300px;
        height: 350px;
        border-radius: 10px;
        background-color: whitesmoke;
        color: black;
        display: flex;
        flex-flow: column nowrap;
        justify-content: baseline;
        align-items: center;

        span {
            margin-top: 30px;
            font-size: 2em;
        }

        h3 {
            margin-top: 5px;
            text-align: center;
            font-size: 1.3rem;
        }

        p {
            text-align: center;
            padding: 10px 30px;
            font-size: 0.9em;
        }
    }

    .AnchorBox {
        background-color: $contrast_header;
        padding: 15px 30px;

        color: whitesmoke;
        font-family: 'Oxygen' , sans-serif;
        font-weight: 500;
        text-decoration: none;

        justify-self: flex-end;

    }
</style>