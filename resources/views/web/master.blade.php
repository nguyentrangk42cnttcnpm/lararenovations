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
                            <div class="div-first">
                                <div>
                                    <div class="menu-affix">
                                        <div aria-hidden="true" style="width: 1417.78px; height: 129.965px;"> 
                                        </div>
                                        <div class="ant-affix" style="position: fixed; top: 0px; width: 1417.78px; height: 129.965px;">
                                            <div class="ant-row row-menu" style="row-gap: 0px;">
                                                
                                                <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-5 ant-col-lg-8 ant-col-xxl-11">
                                                    <div class="div-logo">
                                                        <a href="{{ route('home') }}"><img src="{{ asset('../../images/frontend/logo.png') }}" alt="k hiển thị"></a>
                                                    </div>
                                                </div>
                                                <div class="ant-col ant-col-xs-24 ant-col-md-24 ant-col-lg-13 ant-col-lg-11 ant-col-lg-8">
                                                    <div class="div-menu-mobile">
                                                        <div class="div-menu-bar">
                                                            <div class="div-menu-btn">
                                                                <button type="button" class="ant-btn ant-btn-primary btn-primary">
                                                                    <span role="img" aria-label="menu" class="anticon anticon-menu"></span>
                                                                </button>
                                                            </div>
                                                            <div class="div-logo-mobile">
                                                                <img src="{{ asset('../../images/frontend/logo.png') }}" alt="k hiển thị">
                                                            </div>
                                                        </div>
                                                        <ul class="ant-menu ant-menu-root ant-menu-inline ant-menu-light menu-inline" role="menu" tabindex="0" data-menu-list="true">
                                                            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-1-home" style="padding-left: 24px;">
                                                                <span class="ant-menu-title-content">
                                                                    <a href="{{ route('home') }}">Home</a>
                                                                </span>
                                                            </li>
                                                            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-1-home" style="padding-left: 24px;">
                                                                <span class="ant-menu-title-content">
                                                                    <a href="{{ route('about') }}">About</a>
                                                                </span>
                                                            </li>
                                                            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-1-home" style="padding-left: 24px;">
                                                                <span class="ant-menu-title-content">
                                                                    <a href="">Service</a>
                                                                </span>
                                                            </li>
                                                            <li class="ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-1-home" style="padding-left: 24px;">
                                                                <span class="ant-menu-title-content">
                                                                    <a href="">Review</a>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <div aria-hidden="true" style="display: none;"></div>
                                                        <div class="div-menu">
                                                            <ul class="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light" role="menu" tabindex="0" data-menu-list="true">
                                                                
                                                            <li class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-2-home" style="opacity: 1; order: 0;">
                                                                    <span class="ant-menu-title-content">
                                                                        <a href="{{ route('home') }}">Home</a>
                                                                    </span>
                                                                   
                                                                </li>
                                                                <li class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-2-home" style="opacity: 1; order: 0;">
                                                                    <span class="ant-menu-title-content">
                                                                        <a href="{{ route('about') }}">
                                                                            
                                                                            About
                                                                        </a>
                                                                    </span>
                                                                    
                                                                </li>
                                                                <li class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-2-home" style="opacity: 1; order: 0;">
                                                                    <span class="ant-menu-title-content">
                                                                        <a href="">
                                                                          
                                                                            Service
                                                                        </a>
                                                                    </span>
                                                                   
                                                                </li>
                                                                <li class="ant-menu-overflow-item ant-menu-item ant-menu-item-only-child" role="menuitem" tabindex="-1" data-menu-id="rc-menu-uuid-41771-2-home" style="opacity: 1; order: 0;">
                                                                    <span class="ant-menu-title-content">
                                                                        <a href="">
                                                                           aa
                                                                        </a>
                                                                    </span>
                                                                    
                                                                </li>
                                                                <li class="ant-menu-overflow-item ant-menu-overflow-item-rest">
                                                                    <div role="menuitem">
                                                                        <i class="ant-menu-submenu-arow"></i>
                                                                    </div>
                                                                    
                                                                </li>
                                                                
                                                            </ul>
                                                            <div aria-hidden="true" style="display: none;"></div>
                                                        </div>
                                                    </div>
                                                    <div class="aant-col ant-col-md-24 ant-col-lg-6 ant-col-xl-5">
                                                        <div class="div-phone">
                                                            <div class=" ant-row" style="row-gap: 0px;">
                                                                <img src="images/frontend/calling.svg" alt="lara">
                                                                <a href="tel:+8490 999 888">
                                                                    <p>090 999 888</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="div-first-content">
                                            <div class="ant-row" style="row-gap: 0px;">
                                                <div class="ant-col div-firrst-content-col-firrst ant-col -xs-24 ant-col-xl-14">
                                                    <p class="mb-0 p-what">WHAT WE CAN DO ?</p>
                                                    <p class="mb-0 p-welcome">WELCOME TO</p>
                                                    <p class="mb-0 p-lara">LARA RENOVATION HOME</p>
                                                    <p class="mb-0 p-we">We always make the best resolution...</p>
                                                </div>
                                                <div class="ant-col div-firrst-content-col-firrst ant-col -xs-24 ant-col-xl-14">
                                                    <div class="div-form-get">
                                                        <p class="mb-0 p-get-your">GET YOUR FREE ESTIMATE</p>
                                                        <form action="" id="basic" class="ant-form-item" style="row-gap: 0px;">
                                                            <div class="ant-row ant-form-item-control">
                                                                <div class="ant-form-item-control-input">
                                                                    <div class="ant-form-item-control-input-content">
                                                                        <input placeholde="YournName *" class="ant-input input-your-name input-get input-your" type="text" id="basic_name" value>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="ant-row ant-form-item-control">
                                                                <div class="ant-form-item-control-input">
                                                                    <div class="ant-form-item-control-input-content">
                                                                        <input placeholde="EMAIL *" class="ant-input input-your-name input-get input-your" type="text" id="basic_name" value>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="ant-row ant-form-item-control">
                                                                <div class="ant-form-item-control-input">
                                                                    <div class="ant-form-item-control-input-content">
                                                                        <input placeholde="ADD *" class="ant-input input-your-name input-get input-your" type="text" id="basic_name" value>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="ant-row ant-form-item-control">
                                                                <div class="ant-form-item-control-input">
                                                                    <div class="ant-form-item-control-input-content">
                                                                        <input placeholde="PHONE *" class="ant-input input-your-name input-get input-your" type="text" id="basic_name" value>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div><button>submit now</button></div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </main>
            </sesion>
        </section>
    </div>
    
    @yield('content')
    @yield('scripts')
    


    <!-- ##### Newsletter Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    @include('web.inc.footer')
    
    <!-- ##### Footer Area End ##### -->
    <script src="./static/js/2.b703d528.chunk.js"></script>
    <script src="./static/js/3.d81a92f3.chunk.js"></script>
    <script src="./static/js/4.e705cc63.chunk.js"></script>
    <script src="./static/js/main.4b64ab19.chunk.js"></script>
</body>