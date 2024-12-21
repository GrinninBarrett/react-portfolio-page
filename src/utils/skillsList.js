const skills = [
    {
        name: "JavaScript",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637361118/Portfolio%20Images/Skills%20Icons/javascript_o8zgz0.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "React",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637103246/Portfolio%20Images/Skills%20Icons/react_pmwwzt.svg",
        url: "https://reactjs.org/"
    },
    {
        name: "C#",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1734805515/Portfolio%20Images/Skills%20Icons/c-sharp-c_ls7tfo.svg",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        name: ".NET",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1734805585/Portfolio%20Images/Skills%20Icons/dotnet_swmwbi.svg",
        url: "https://dotnet.microsoft.com/en-us/"
    },
    {
        name: "Salesforce",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1734805640/Portfolio%20Images/Skills%20Icons/salesforce_tkchwx.svg",
        url: "https://developer.salesforce.com/docs"
    },
    {
        name: "Svelte",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/q_auto/v1682864645/svelte-svgrepo-com_libip6.svg",
        url: "https://svelte.dev/"
    },
    {
        name: "MongoDB",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637103399/Portfolio%20Images/Skills%20Icons/mongodb_sekoab.svg",
        url: "https://www.mongodb.com/"
    },
    {
        name: "Express.js",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637103497/Portfolio%20Images/Skills%20Icons/express_lsrbj0.svg",
        url: "http://expressjs.com/"
    },
    {
        name: "GraphQL",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637105254/Portfolio%20Images/Skills%20Icons/graphql_pkxlbx.svg",
        url: "https://graphql.org/"
    },
    {
        name: "Node.js",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637105316/Portfolio%20Images/Skills%20Icons/nodejs_q2dhd5.svg",
        url: "https://nodejs.org/en/"
    },
    {
        name: "React Router",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_200,w_200/v1637612739/Portfolio%20Images/Skills%20Icons/react-router_v0bc7g.svg",
        url: "https://github.com/remix-run/react-router"
    },
    {
        name: "Git",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_180,q_auto/v1637612268/Portfolio%20Images/Skills%20Icons/git-icon_ggiutp.svg",
        url: "https://git-scm.com/"
    },
    {
        name: "GitHub",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_260,w_260/v1637612266/Portfolio%20Images/Skills%20Icons/github-octocat_o4fkv1.svg",
        url: "https://github.com/"
    },
    {
        name: "JSON",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_177/v1637612396/Portfolio%20Images/Skills%20Icons/json_wowulg.svg",
        url: "https://www.json.org/json-en.html"
    },
    {
        name: "MySQL",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_176,q_auto/v1637611593/Portfolio%20Images/Skills%20Icons/mysql_oidery.svg",
        url: "https://dev.mysql.com/"
    },
    {
        name: "Sequelize",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_296,w_296/v1637611694/Portfolio%20Images/Skills%20Icons/sequelize_wgiyax.svg",
        url: "https://sequelize.org/"
    },
    {
        name: "Insomnia",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_149,q_auto/v1637611978/Portfolio%20Images/Skills%20Icons/insomnia_qyhqo5.svg",
        url: "https://insomnia.rest/"
    },
    {
        name: "HTML",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637360637/Portfolio%20Images/Skills%20Icons/html-5_shbqqb.svg",
        url: "https://html.spec.whatwg.org/multipage/"
    },
    {
        name: "CSS",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637360618/Portfolio%20Images/Skills%20Icons/css-3_bl1bth.svg",
        url: "https://www.w3.org/TR/CSS/"
    },
    {
        name: "Bootstrap",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_154,q_auto/v1637610959/Portfolio%20Images/Skills%20Icons/bootstrap_wpojga.svg",
        url: "https://getbootstrap.com/"
    },
    {
        name: "Bulma",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_200,w_200/v1637612861/Portfolio%20Images/Skills%20Icons/bulma_hmiwhs.svg",
        url: "https://bulma.io/"
    },
    {
        name: "Materialize",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_131,w_131/v1637612945/Portfolio%20Images/Skills%20Icons/materializecss_s1fkae.svg",
        url: "https://materializecss.com/",
    },
    {
        name: "jQuery",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637360689/Portfolio%20Images/Skills%20Icons/jquery_ojbebr.svg",
        url: "https://jquery.com/"
    },
    {
        name: "Heroku",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/v1637360282/Portfolio%20Images/Skills%20Icons/heroku-icon_ojdcc6.svg",
        url: "https://heroku.com"
    },
    {
        name: "Netlify",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_scale,h_146,q_auto/v1637612103/Portfolio%20Images/Skills%20Icons/netlify_abdvhs.svg",
        url: "https://www.netlify.com/"
    },
    {
        name: "Handlebars",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_512,w_512/v1637611227/Portfolio%20Images/Skills%20Icons/handlebars_d3xi5i.svg",
        url: "https://handlebarsjs.com/"
    },
    {
        name: "VS Code",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_162,w_162/v1637612492/Portfolio%20Images/Skills%20Icons/visual-studio-code_ffliig.svg",
        url: "https://code.visualstudio.com/"
    },
    {
        name: "Figma",
        image: "https://res.cloudinary.com/dydjenltr/image/upload/c_fit,h_256,w_256/v1637612616/Portfolio%20Images/Skills%20Icons/figma_qd8b1c.svg",
        url: "https://www.figma.com/"
    }


]

export { skills };