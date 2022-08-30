<script>

</script>
<!-- ! yo thijs check this -->
<main>
    <h1>🪐 About Us</h1>
    <section>
        <div class="left">
            <h2>🔭 Who are we</h2>
            <p>Praxidike is an IT team with great experience and knowledge in AI and Web Development. We take details into consideration and finalize a covet project.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt repudiandae numquam neque quae, quod corrupti mollitia voluptates? Consequatur ex quidem rerum quisquam? Molestias corporis deserunt est magnam sit cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit tempore quidem nihil culpa rerum. Excepturi quia repellendus perspiciatis quisquam ab delectus in ipsa, neque, sunt soluta porro reprehenderit asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit, voluptas a sequi assumenda dicta fuga eaque ipsum consequuntur. Amet nesciunt odit, reprehenderit facere ex incidunt eius vel veniam doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum possimus sint quam nam, vel nulla ullam at voluptates voluptatem earum reiciendis voluptatum doloribus dolores magni asperiores eaque fugiat minus facere.</p>
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