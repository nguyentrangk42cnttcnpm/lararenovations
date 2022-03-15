@extends('web.master')
@section('title', 'Lara Renovations')
@section('content')

<script language="javascript">
    alert("Welcome to Lara Renovations!");
</script>

<div class="div-second">
    <div class="ant-row" style="row-gap: 0px;">
        <div class="ant-col col-second-first ant-col-xs-24 ant-col-lg-12">
            <img src="images/frontend/sparks.png" alt="Lara">
        </div>
        <div class="ant-col col-second-second ant-col-xs-24 ant-col-lg-12">
            <p class="mb-0 p-welcome">WELCOME TO</p>
            <p class="mb-0 p-lara">LARA COMPANY</p>
            <div class="div-hr">
                <hr class="hr-lara">
            </div>
            <div class="div-p-first">
                <p class="mb-0 p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="mb-0 p-text p-text-second">Nulla vehicula malesuada nisi eu rutrum.</p>
                <p class="mb-0 p-text p-text-second">Maecenas purus diam, lobortis at velit eget, ultricies posuere augue.</p>
                <p class="mb-0 p-text p-text-second">Nullam nec lectus a augue dictum euismod ut sed ex.</p>
                <p class="mb-0 p-text p-text-second">Integer pretium arcu neq ue, vitae mollis massa consequat eu</p>
                <p class="mb-0 p-text p-text-second">In eget dolor luctus, varius dui fringilla, lobortis odio.</p>
                <p class="mb-0 p-text p-text-second">Cras molestie nunc pretium, dictum lorem vel, vulputate mi.</p>
                <p class="mb-0 p-text p-text-second">Etiam ac ligula bibendum, luctus diam sit amet, rutrum ipsum.</p>
            </div>
            <div class="div-p-second">
                <p class="mb-0 p-text">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales.</p>
                <p class="mb-0 p-text">Fusce feugiat dapibus facilisis</p>
                <p class="mb-0 p-text">Sed interdum mauris sed vulputate fringilla.</p>
                <p class="mb-0 p-text">Sed purus dui, tempus tempor velit vel,</p>
                <p class="mb-0 p-text">feugiat eleifend nulla.</p>
            </div>
            <div class="div-p-second">
                <p class="mb-0 p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="mb-0 p-text">Donec nec purus luctus, fermentum libero vitae, accumsan leo.</p>
                <p class="mb-0 p-text">Etiam eu lacus et tortor molestie aliquam.</p>
                <p class="mb-0 p-text">Integer feugiat metus a tellus accumsan aliquet.</p>
            </div>
        </div>
    </div>
</div>
<div class="div-third">
    <div>
        <p class="mb-0 p-our-title">OUR RENOVATION SERVICES</p>
        <p class="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
    </div>
    <div class="div-third-second">
        <div class="ant-row" style="row-gap: 0px;">
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-5.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BATHROOM</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a href="{{ route('about') }}">View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-1.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">KITCHEN</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-3.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BEDROOM</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-4.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">LIVING/FAMILY ROOM</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-5.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">GARAGE</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-7.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">HOME REMODELLING &amp; COMPLETE RENOVATION </p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-8.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">ENGINEERING</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a>View Detail</a>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="div-fourth">
    <div class="ant-row" style="row-gap: 0px;">
        <div class="ant-col col-fourth-first ant-col-xs-24 ant-col-xl-14">
            <p class="mb-0 p-amazing">AMAZING FEATURES</p>
            <p class="mb-0 p-lorem-fourth">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula malesuada nisi eu rutrum. Maecenas purus diam, lobortis at velit eget, ultricies posuere augue. Nullam nec lectus a augue dictum euismod ut sed ex. Integer pretium arcu neque, vitae mollis massa consequat eu. In eget dolor luctus, varius dui fringilla, lobortis odio.</p>
            <div class="ant-row row-second" style="row-gap: 0px;">
                <div class="ant-row" style="row-gap: 0px;">
                    <div class="div-hr-first"></div>
                    <div class="div-hr-second"></div>
                    <div class="div-hr-third"></div>
                    <div class="div-hr-fourth"></div>
                </div>
                <div class="div-building">
                    <img src="images/frontend/building.svg" alt="Lara">
                    <p class="mb-0 p-bui">BUILDING</p>
                </div>
                <div class="div-building">
                    <img src="images/frontend/renovation.svg" alt="Lara">
                    <p class="mb-0 p-bui">RENOVATION</p>
                </div>
                <div class="div-building">
                    <img src="images/frontend/interior.svg" alt="Lara">
                    <p class="mb-0 p-bui">INTERIOR</p>
                </div>
            </div>
        </div>
        <div class="ant-col col-fourth-second ant-col-xs-24 ant-col-xl-10">
            <img src="images/frontend/div4.png" alt="Lara">
        </div>
    </div>
</div>
<div class="ant-row div-fifth" style="row-gap: 0px;">
    <div class="ant-col ant-col-xs-24 ant-col-lg-8">
        <div class="ant-row row-1000" style="row-gap: 0px;">
            <div class="ant-col">
                <img src="images/frontend/pr.svg" alt="Lara">
            </div>
            <div class="ant-col">
                <p class="mb-0 p-100">1000</p>
                <p class="mb-0 p-100">PROJECTS COMPLETE</p>
            </div>
        </div>
    </div>
    <div class="ant-col ant-col-xs-24 ant-col-lg-8">
        <div class="ant-row row-1000" style="row-gap: 0px;">
            <div class="ant-col">
                <img src="images/frontend/ha.svg" alt="Lara">
            </div>
            <div class="ant-col">
                <p class="mb-0 p-100">1000</p>
                <p class="mb-0 p-100">HAPPY CUSTORMERS</p>
            </div>
        </div>
    </div>
    <div class="ant-col ant-col-xs-24 ant-col-lg-8">
        <div class="ant-row row-1000" style="row-gap: 0px;">
            <div class="ant-col">
                <img src="images/frontend/ye.svg" alt="Lara">
            </div>
            <div class="ant-col">
                <p class="mb-0 p-100">30</p>
                <p class="mb-0 p-100">YEARS OF EXPERIENCED</p>
            </div>
        </div>
    </div>
</div>
<div class="div-sixth">
    <div>
        <p class="mb-0 p-our-title">WHY CHOOSE US</p>
        <p class="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
    </div>
    <div class="div-sixth-second">
        <div class="ant-row" style="row-gap: 0px;">
            <div class="ant-col col-first-sixth ant-col-xs-24 ant-col-xl-9 ant-col-xxl-8">
                <img src="images/frontend/person.png" alt="Lara">
            </div>
            <div class="ant-col col-second-sixth ant-col-xs-24 ant-col-xl-15 ant-col-xxl-16">
                <div class="ant-row col-second-sixth-row" style="row-gap: 0px;">
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Quality Work</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Engineering</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Automate System</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Best Quality</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Experienced Team</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-sm-8">
                        <div class="col-qu">
                            <div class="div-qua">
                                <div class="div-qu">
                                    <p class="mb-0">Safety</p>
                                </div>
                                <div class="div-pr">
                                    <p class="mb-0">Praesent tempus at neque non hendrerit. In euismod vestibulum sodales. Fusce feugiat dapibus facilisis. Sed interdum mauris sed vulputate.</p>
                                </div>
                            </div>
                            <p class="mb-0 p-more">
                                <a>More info</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>                          
<div class="div-seventh">
    <div>
        <p class="mb-0 p-our-title">OUR CREATIVE TEAM</p>
        <p class="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
    </div>
    <div class="div-third-second">
        <div class="ant-row" style="row-gap: 0px;">
            <div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-xl-6">
                <div class="div-col">
                    <img src="images/frontend/bee.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">Mr Bee</p>
                        <p class="mb-0 p-content">Engineering</p>
                        <div class="ant-row row-icon" style="row-gap: 0px;">
                            <span role="img" aria-label="facebook" class="anticon anticon-facebook icon-footer icon-fb">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="twitter" class="anticon anticon-twitter icon-footer icon-tw">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="instagram" class="anticon anticon-instagram icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="google-plus-square" class="anticon anticon-google-plus-square icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="google-plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-xl-6">
                <div class="div-col">
                    <img src="images/frontend/bee.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">Mr Bee</p>
                        <p class="mb-0 p-content">Engineering</p>
                        <div class="ant-row row-icon" style="row-gap: 0px;">
                            <span role="img" aria-label="facebook" class="anticon anticon-facebook icon-footer icon-fb">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="twitter" class="anticon anticon-twitter icon-footer icon-tw">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="instagram" class="anticon anticon-instagram icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="google-plus-square" class="anticon anticon-google-plus-square icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="google-plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-xl-6">
                <div class="div-col">
                    <img src="images/frontend/bee.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">Mr Bee</p>
                        <p class="mb-0 p-content">Engineering</p>
                        <div class="ant-row row-icon" style="row-gap: 0px;">
                            <span role="img" aria-label="facebook" class="anticon anticon-facebook icon-footer icon-fb">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="twitter" class="anticon anticon-twitter icon-footer icon-tw">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="instagram" class="anticon anticon-instagram icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="google-plus-square" class="anticon anticon-google-plus-square icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="google-plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-xl-6">
                <div class="div-col">
                    <img src="images/frontend/bee.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">Mr Bee</p>
                        <p class="mb-0 p-content">Engineering</p>
                        <div class="ant-row row-icon" style="row-gap: 0px;">
                            <span role="img" aria-label="facebook" class="anticon anticon-facebook icon-footer icon-fb">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="facebook" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="twitter" class="anticon anticon-twitter icon-footer icon-tw">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="twitter" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="instagram" class="anticon anticon-instagram icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="instagram" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </span>
                            <span role="img" aria-label="google-plus-square" class="anticon anticon-google-plus-square icon-footer icon-in">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="google-plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM548.5 622.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-.5-67.4 0-101-1.1-.1-20.1-.2-40.1-.1-60.2 56.2-.2 112.5-.3 168.8.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8.2-33.6.3-50.4.4-.2 16.8-.3 33.6-.3 50.4H690c-.2-16.8-.2-33.5-.3-50.3-16.8-.2-33.6-.3-50.4-.5v-50.1c16.8-.2 33.6-.3 50.4-.3.1-16.8.3-33.6.4-50.4h50.2l.3 50.4c16.8.2 33.6.2 50.4.3v50.1z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ant-row row-search" style="row-gap: 0px;">
        <span role="img" aria-label="search" class="anticon anticon-search icon-search">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
        </span>
        <p class="mb-0 p-view">
            <a>View all Member</a>
        </p>
    </div>
</div>
<div class="div-eighth">
    <div>
        <p class="mb-0 p-our-title">RECENT PROJECTS</p>
        <p class="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</p>
    </div>
    <div class="div-third-second">
        <div class="ant-row" style="row-gap: 0px;">
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT Lorem ipsum dolor sit amet,</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div-col">
                    <img src="images/frontend/our-6.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BASEMENT</p>
                        <p class="mb-0 p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisl nulla, nec gravida erat fermentum a.</p>
                    </div>
                </div>
                <p class="mb-0 p-view">View Detail</p>
            </div>
        </div>
    </div>
</div>
<div class="div-nineth">
    <div>
        <p class="mb-0 p-our-title">TESTIMONIAL</p>
        <p class="mb-0 p-lorem-title">Clients send feedback for us</p>
    </div>
    <div class="div-third-second">
        <div class="react-multi-carousel-list  div-carousel">
            <ul class="react-multi-carousel-track " style="transition: none 0s ease 0s; overflow: unset; transform: translate3d(-1700px, 0px, 0px);">
                <li data-index="0" aria-hidden="true" class="react-multi-carousel-item  " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="1" aria-hidden="true" class="react-multi-carousel-item" style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="2" aria-hidden="true" class="react-multi-carousel-item" style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="3" aria-hidden="true" class="react-multi-carousel-item  " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="4" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="5" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div><p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                            <p class="mb-0 p-ma">Manage Dota2 Club</p>
                        </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="6" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="7" aria-hidden="false" class="react-multi-carousel-item react-multi-carousel-item--active " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="8" aria-hidden="true" class="react-multi-carousel-item" style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="9" aria-hidden="true" class="react-multi-carousel-item  " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                                <div>
                                    <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                    <p class="mb-0 p-ma">Manage Dota2 Club</p>
                                </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="10" aria-hidden="true" class="react-multi-carousel-item  " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
                <li data-index="11" aria-hidden="true" class="react-multi-carousel-item  " style="flex: 1 1 auto; position: relative; width: 425px;">
                    <div class="div-carousel-item">
                        <div class="ant-row" style="row-gap: 0px;">
                            <img src="images/frontend/user.png" alt="Lara">
                            <div>
                                <p class="mb-0 p-al">ALIBABA XEKUTARA</p>
                                <p class="mb-0 p-ma">Manage Dota2 Club</p>
                            </div>
                        </div>
                        <p class="mb-0 p-lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod.</p>
                    </div>
                </li>
            </ul>
            <button aria-label="Go to previous slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left" type="button"></button>
            <button aria-label="Go to next slide" class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right" type="button"></button>
            <ul class="react-multi-carousel-dot-list custom-dot-list-style">
                <li data-index="0" class="react-multi-carousel-dot react-multi-carousel-dot--active">
                    <button aria-label="Go to slide 1"></button>
                </li>
                <li data-index="1" class="react-multi-carousel-dot ">
                    <button aria-label="Go to slide 2"></button>
                </li>
                <li data-index="2" class="react-multi-carousel-dot ">
                    <button aria-label="Go to slide 3"></button>
                </li>
                <li data-index="3" class="react-multi-carousel-dot ">
                    <button aria-label="Go to slide 4"></button>
                </li>
            </ul>
        </div>
    </div>
</div>
@endsection
