<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .anticon{
            display: inline-block;
            color: inherit;
            font-style: normal;
            line-height: 0;
            text-align: center;
            text-transform: none;
            vertical-align: -0.125em;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .anticon > * {
            line-height: 1;
        }

        .anticon svg {
            display: inline-block;
        }

        .anticon::before {
            display: none;
        }

        .anticon .anticon-icon {
            display: block;
        }

        .anticon[tabindex] {
            cursor: pointer;
        }

        .anticon-spin::before,
        .anticon-spin {
            display: inline-block;
            -webkit-animation: loadingCircle 1s infinite linear;
            animation: loadingCircle 1s infinite linear
        }

        @-webkit-keyframes loadingCircle {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    </style>
    <meta charset="utf-8" />
    <link rel="icon" href="./favicon.ico">
    <meta name="title" content="Lara Renovations | Interior">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Lara Renovations | Interior " />
    <meta property="og:description" content="Lara Renovations - Interior design and construction company is your best choice. We provide innovative, 
      intelligent solutions with fast and safe construction." />
    <meta name="description" content="Lara Renovations - Interior design and construction company is your best choice. We provide innovative, intelligent solutions with fast and safe construction." />
    <meta name="keywords" content="lara renovations, lara renovations company, lararenovations, lararenovation, rara Renovation, interior, interior company, interior company, interior design, construction company, innovative, innovative solutions, intelligent solutions, fast and safe construction">
    <link rel="manifest" href="./manifest.json">
    <!-- Title  -->
    <title>@yield('title')</title>
    <link href="./static/css/3.517a7576.chunk.css" rel="stylesheet">
    <link href="./static/css/4.0b23d37e.chunk.css" rel="stylesheet">
    <link href="./static/css/main.369bc95a.chunk.css" rel="stylesheet">
</head>
<body>
    <div id="root">
        <section class="ant-layout">
            <sesion class="ant-ayout full-layout">
                <main class="ant-layout-content">
                    <section class="ant-layout full-layout page home-page">
                        <main class="ant-layout-content">                  
                            @include('web.inc.header')
                            @yield('content')                                     
                        </main>
                    </section>
                </main>

                <!-- ##### Footer Area Start ##### -->
                @include('web.inc.footer')  
                <!-- ##### Footer Area End ##### -->
                
            </section>
        </section>
    </div>

    <script src="./static/js/2.b703d528.chunk.js"></script>
    <script src="./static/js/3.d81a92f3.chunk.js"></script>
    <script src="./static/js/4.e705cc63.chunk.js"></script>
    <script src="./static/js/main.4b64ab19.chunk.js"></script>
</body>