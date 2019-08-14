<html>
    <head>
        <script type="text/javascript" src="App.js"></script>

        <style type="text/css">
            .NavLinkContainer {
                padding: 5px;
                background-color: lightyellow;
            }

            .NavLink {
                background-color:black;
                color: white;
                font-weight:800;
                text-decoration:none;
                padding:5px;
                border-radius:4px;
            }
                .NavLink:hover {
                    background-color:gray;
                }
        </style>
    </head>
    <body>
        <h3>Navigation Links</h3>
        <div class="NavLinkContainer">
            <a class="NavLink" href="index.php#/sp-play">Single Player</a>&nbsp;

            <a class="NavLink" href="index.php#/mp-play">Multiplayer</a>&nbsp;

            <a class="NavLink" href="index.php#/admin">Admin</a>&nbsp;

        </div>
        <br />
        <br />
        <h3>View</h3>
        <div view></div>
        <script>
            window.jsMvc.AddRoute(SPController, 'sp-play', '../views/SPView.php');
            window.jsMvc.AddRoute(MPController, 'mp-play', '../views/MPView.php');
            window.jsMvc.AddRoute(AdminController, 'admin', '../views/AdminView.php');
            window.jsMvc.Initialize();

            function SPController(model)
            {
                model.mode = "SINGLEPLAYER";
            }

            function MPController(model)
            {
                model.mode = "MULTIPLAYER";
            }

            function AdminController(model)
            {
                
            }
        </script>
    </body>
</html>
