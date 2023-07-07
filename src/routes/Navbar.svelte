<script>
    import {page} from "$app/stores";


    const navs = [
        {
            title: "Help",
            href: "/Help",
        },
        {
            title: "Play",
            href: "/Play",
        },
        {
            title: "User",
            href: "/User",
        },

    ];

    $: routeId = $page.route.id;
    
</script>


<body>
    <nav class = "navBar">
        <div class = "brand"><a href="/Home">QBB</a></div>
        <a href="#top" class = "menu">
            <span class = "bar"></span>
            <span class = "bar"></span>
            <span class = "bar"></span>
        </a>
        <div class = "navLinks">
            <ul>
                {#each navs as {title, href}}
                <li><a href={href} class:active={routeId == "/"}>{title}</a></li>
                {/each}
            </ul>
        </div>
    </nav>
</body>


<style>
   
    body {
        background-color: beige;
        margin: 0;
        padding: 0;
    }
    .brand {
        font-size: 4.5rem;
        font-weight: bold;
    }
    .navBar {
        background-color: blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        overflow: hidden;
    }
    ul {
        display: flex;
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        font-size: large;
        margin-inline: 2rem;
    }
    li:hover {
        text-decoration-color: white;
        text-decoration: underline .5rem;
        font-weight: bold;
    }
    a{
        text-decoration: none;
        padding: 1rem;
        display: block;
        color: white;
    }
    .menu {
        position: absolute;
        top: 1.4rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 41px;
        height: 31px;
    }

    .menu .bar{
        height: 6px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }

    
    @media (max-width: 630px) {
        .navBar{
            flex-direction: column;
            align-items: flex-start;
        }

        ul{
            flex-direction: column;
            text-align: center;
        }

        li{
            justify-content: center;
        }

        .menu{
            display: flex;
        }

        .navLinks{
            display: none;
            width: 100%;
        }

        a{
            padding: .5rem;
        }

        .navLinks:active{
            display: flex;
        }
    }

</style>

