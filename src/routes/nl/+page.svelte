<script>
    
</script>

<main>
    <div class="landingSite">
        <h1>Weet je niet zeker wat de volgende stap is?</h1>
        <a href="/" class="navItem" id="logo">RoTUer</a><i>...is er om te helpen</i>
        <i>Website is nog in ontwikkeling en is momenteel niet bedoeld voor gebruik! Betreden op eigen risico</i>
    </div>
    <div class="landingSection secondLandingSection">
        <div class="leftSecond">
            <h2>🚀 Wat is RoTUer?</h2>
            <p>🔗 RoTUer is een project gemaakt door (aanstaande) studenten van de TU Delft. Het belangrijkste doel is om andere studenten te helpen websites te vinden die informatie bevatten die ze zoeken en om alle mogelijke dingen op een rijtje te zetten die je in de Uni kunt gebruiken.</p>
            <p>⚠️ DISCLAIMER: Dit project is hoe dan ook niet gebonden aan de TU Delft zelf. Informatie wordt hier verzameld en gepresenteerd door ons (het team achter het project).<b>TU DELFT IS NIET VERANTWOORDELIJK VOOR ONNAUWKEURIGHEID OP DEZE WEBSITE</b>.</p>
            <p>‼️ Hoewel we ervoor zorgen dat elke link veilig is, <b>zorg ervoor dat u controleert waar de link naartoe leidt voordat u klikt!</b></p>
        </div>
        <div class="rightSecond">
            <div class="SecondBox">
                <span>🌹</span>
                <h3>Over ons</h3>
                <p>Wij zijn studenten uit heel Europa die net samen aan een project zijn begonnen. We willen allemaal mensen helpen. Daarom hebben we RoTUer ontwikkeld.</p>
                <a href="/" class="AnchorBox">Lees verder</a>
            </div>
            <div class="SecondBox">
                <span>🔥</span>
                <h3>Over RoTUer</h3>
                <p>RoTUer is gemaakt om mensen zoals ik te helpen die zich plotseling op een plek bevinden met eindeloze mogelijkheden - zo kan je onderandere boeken, werkruimtes, drukmachines en nog veel meer boeken. Zelfs nu begin ik al andere dingen te vergeten. Daarom wilden we al deze informatie in een samengevatte vorm met links presenteren.</p>
                <a href="/" class="AnchorBox">Lees verder</a>
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
        background-image: url("/bubbleBackground.svg");
        background-size: cover;
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
