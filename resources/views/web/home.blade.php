@extends('web.master')
@section('title', 'Lara Renovations')
@section('content')

<div class="products-catagories-area clearfix">
    <div class="amado-pro-catagory clearfix">      
        <div class="single-products-catagory clearfix">
            
            <img src="{{ asset('../../images/frontend/BG.png') }}" alt="k hiển thị"
                width="1263px" height="1000px">
                <!-- Hover Content -->
                <div class="hover-content">
                    <div class="line"></div>
                </div>
           
        </div>
    </div>
</div>
<br><br><br><br>
<div class="div-first"></div>

<div class="div-second">                
    <div class="ant-row" style="row-gap: 0px;">							
        <div class="ant-col col-second-first ant-col-xs-24 ant-col-lg-12">									                               
            <img src="{{ asset('../../images/frontend/sparks.png') }}" alt="k hiển thị"/>			
        </div>  
        <div class="ant-col col-second-second ant-col-xs-24 ant-col-lg-12">						
            <p class="mb-0 p-welcome">WELCOME TO</p>		    				
            <h1 class="mb-0 p-lara">LARA COMPANY</h1>
            <div class="div-hr">
                <hr class="hr-lara">
            </div>
            <div class="div-p-first">
                <p class="mb-0 p-text">Lorem ipsum dolor sit amet, comsecterur adipiscing elit.</p>
                <p class="mb-0 p-text p-text-second">Nulla vehicula malesuada nisi eu retrum.</p>
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
                <p class="mb-0 p-text p-text-second">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="mb-0 p-text p-text-second">Donec nec purus luctus, fermentum libero vitae, accumsan leo.</p>
                <p class="mb-0 p-text p-text-second">Etiam eu lacus et tortor molestie aliquam.</p>
                <p class="mb-0 p-text p-text-second">Integer feugiat metus a tellus accumsan aliquet.</p>
            </div>			
        </div>                    							
    </div>
</div>

<div class="div-third">
    <div>
        <p class="mb-0 p-our-title">OUR RENOVATIONS SERVICES</p>
        <P class="mb-0 p-lorem-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis porttitor feugiat. Cras accumsan rutrum euismod. Maecenas vestibulum libero ac elit ultrices, sit amet interdum purus feugiat.</P>
    </div>
    <div class="div-third-second">
        <div class="ant-row" style="row-gap: 0px;">
            <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-8 ant-col-xxl-6">
                <div class="div col">
                    <img src="images/frontend/our-5.png" alt="Lara">
                    <div class="div-bath">
                        <p class="mb-0 p-bathroom">BATHROOM</p>
                        <p class="mb-0 p-content">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <p class="mb-0 p-view">
                    <a href="">View Detail</a>
                </p>
            </div>
        </div>
    </div>
</div>

<div class="div-third-second"></div>
@endsection
