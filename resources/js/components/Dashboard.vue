<template>
        <div class="main_header" style="color:white;">
            <div class="container-fluid">
            <header class="pre_header py-3 px-2">
                    <div class="row align-items-center">
                        <div class="col-6" id="desktop">
                            <img src="images/1.png" class="header_logo"/><span class="header-name">LUV Nail & Spa</span>
                        </div>
                        <div class="col-6">
                            <div class="header-icon">
                               <a href="javascript:voild(0);"><i class="fa fa-user-o" aria-hidden="true"></i></a>
                               <a href="javascript:voild(0);"><i class="fa fa-bullhorn" aria-hidden="true"></i></a>
                               <a href="javascript:voild(0);"><i class="fa fa-credit-card" aria-hidden="true"></i></a>
                               <a href="javascript:voild(0);"><i class="fa fa-file-text-o" aria-hidden="true"></i></a>
                               <a href="javascript:voild(0);" id ="phone"><i class="fa fa-phone" aria-hidden="true"></i></a>
                               <a href="javascript:voild(0);"><i class="fa fa-bell-o" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
            </header>
        </div>
    </div>
    <div class="admin-panel">       
        <section class="sidebarSection " >
            <div class="container-fluid">
                <div  class="rounded right-box rounded">
                      <div class="container-fluid">
                        <div class=" text-center">
                            <div class="d-flex align-items-center justify-content-between">
                                    <div class="first_column">
                                        <h5 style="color: #000; font-weight: bold;">Today, Saturday Sep 22</h5>
                                    <p class="m-0">32 Appoinment</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5> Sun 23</h5>
                                    <p class="m-0">13</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5> Sun 23</h5>
                                    <p class="m-0">13</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5> Sun 23</h5>
                                    <p class="m-0">13</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5> Sun 23</h5>
                                    <p class="m-0">13</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5>Mon 24</h5>
                                    <p class="m-0">2</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5>Tus 25</h5>
                                    <p class="m-0">3</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5>Wed 26</h5>
                                    <p class="m-0">0</p>
                                    </div>
                                    <div class="last_column ml-2">
                                        <h5>Tus 28</h5>
                                    <p class="m-0">0</p>
                                    </div>
                                    <div class="last_column_1 ml-2">
                                        <h5 style="font-size: 10px;">Fri 28</h5>
                                    <p class="m-0">0</p>
                                    </div>
                                    <div class="last_column_1 ml-2">
                                        <h5 style="font-size: 10px;">Sat 29</h5>
                                    <p class="m-0">0</p>
                                    </div>
                                    <div class="last_column_1 ml-2">
                                        <h5 style="font-size: 10px;">Sun 30</h5>
                                    <p class="m-0">0</p>
                                    </div>
                            </div>
                        </div>
    
                        <div class="right-img-container m-auto pt-3">
                            <div class="image_icon">
                                <div class="d-flex" style="gap: 15px;">
                                    <div class="budge px-3">
                                        <img src="images/1.png" class="right-icon-logo"/>
                                        <div class ="budge_green text-center"><span class="badge ">115'</span></div>
                                    </div>
                                     <div class="budge px-3">
                                        <img src="images/2.png" class="right-icon-logo"/>
                                        <div class ="budge_green text-center"><span class="badge ">45'</span></div>
                                    </div>
                                     <div class="budge px-3">
                                        <img src="images/7.png" class="right-icon-logo"/>
                                          <div class ="budge_yellow text-center"><span class="badge ">-5'</span></div>
                                    </div>
                                     <div class="budge">
                                        <img src="images/8.png" class="right-icon-logo"/>
                                          <div class ="budge_yellow text-center"><span class="badge ">-5'</span></div>
                                    </div>
                                    <div class="budge px-3">
                                        <img src="images/5.png" class="right-icon-logo"/>
                                        <div class ="budge_green text-center"><span class="badge ">115'</span></div>
                                    </div>
                                     <div class="budge px-3">
                                        <img src="images/6.png" class="right-icon-logo"/>
                                        <div class ="budge_green text-center"><span class="badge ">45'</span></div>
                                    </div>
                                     <div class="budge px-3">
                                        <img src="images/7.png" class="right-icon-logo"/>
                                          <div class ="budge_yellow text-center"><span class="badge ">-5'</span></div>
                                    </div>
                                     <div class="budge">
                                        <img src="images/8.png" class="right-icon-logo"/>
                                          <div class ="budge_yellow text-center"><span class="badge ">-5'</span></div>
                                    </div>
                                     <div class="budge px-3">
                                        <img src="images/1.png" class="right-icon-logo"/>
                                          <div class ="budge_yellow text-center"><span class="badge ">-25'</span></div>
                                    </div>
                                </div>
                            </div>
                            
            <div id="chart_div"></div>
                        </div>
                      </div>
                </div>

                <div id="sideBarMenu" >
                    <aside class="sideBarMenu rounded" style="background: #97bfb2;">
                        <div class="row align-items-center ">
                            <div class="col-2 text-right"><h4 class="m-0 text-light"><i class="fa fa-user-o" aria-hidden="true"></i></h4></div>
                            <div class="col-7 text-light font-weight-bold">Customer</div>
                            <!-- <div class="col-3 text-right text-light"><i class="fa fa-times" aria-hidden="true"></i></div> -->
                        </div>

                        <div class="mainCustomerContainer my-4">
                            <div class="customerPera">
                                <div class="d-flex text-light  justify-content-between align-items-center">
                                    <p class="m-0">Total Customers </p>
                                    <h4 class="m-0 ">900</h4>
                                </div>
                            </div>
                            <div class="bg-light py-1" style="border-radius: 0px 0px 8px 8px;">
                                <div class="d-flex justify-content-around">
                                    <div class="">
                                        <div class="small">Return</div>
                                        <div class="font-weight-bold digit-pera">22%</div>
                                    </div>
                                    <div class="">
                                        <div class="small ">Appoinments</div>
                                        <div class="font-weight-bold digit-pera">327</div>
                                    </div>
                                    <div class="">
                                        <div class="small ">Wallets</div>
                                        <div class="font-weight-bold digit-pera">24</div>
                                    </div>
                                    <div class="">
                                        <div class="small">Miss</div>
                                        <div class="font-weight-bold digit-pera">16</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="searchingBar">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <form action="javascript:volid(0);" mathod="post">
                                        <div class="input-group inputSearch">
                                            <input type="text" class="form-control text-secondary small " placeholder="Search">
                                            <div class="input-group-append">
                                                <button class="btn " type="submit"><i class="fa fa-search " aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="plusIcon" >
                                    <i class="fa fa-plus " aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div class="my-4 addressPera">
                            <div class="row align-items-center small">
                                <div class="col-1 text-right"><h5 class="m-0 text-light"><i class="fa fa-user-o text-secondary small" aria-hidden="true"></i></h5>
                                </div>
                                <div class="col-10 text-dark font-weight-bold">Adum Dimh</div>
                            </div>
                        </div>

                        <div class="my-4 addressPera">
                            <div class="row align-items-center small">
                                <div class="col-1 text-right"><h5 class="m-0 text-light"><i class="fa fa-user-o text-secondary small" aria-hidden="true"></i></h5>
                                </div>
                                <div class="col-10 text-dark font-weight-bold">Finn La</div>
                            </div>
                        </div>

                        <div class="my-4 addressPera">
                            <div class="row align-items-center small">
                                <div class="col-1 text-right"><h5 class="m-0 text-light"><i class="fa fa-user-o text-secondary small" aria-hidden="true"></i></h5>
                                </div>
                                <div class="col-7 text-dark font-weight-bold">Finn La</div>
                                <div class="col-4 text-right"><i class="fa fa-map-marker " aria-hidden="true"></i> 10</div>
                            </div>

                            <div class="bgColor d-flex">
                                <div style="background: #f6d2b8;" class="mr-2 mt-2"></div>
                                <div style="background:#eb9cba;" class="mr-2 mt-2"></div>
                            </div>
                        </div>

                        <div class="my-4 addressPera">
                            <div class="row align-items-center small">
                                <div class="col-1 text-right"><h5 class="m-0 text-light"><i class="fa fa-user-o text-secondary small" aria-hidden="true"></i></h5>
                                </div>
                                <div class="col-7 text-dark font-weight-bold">Finn La</div>
                                <div class="col-4 text-right"><i class="fa fa-map-marker " aria-hidden="true"></i> 10</div>
                            </div>

                            <div class="bgColor d-flex">
                                <div style="background: #f6d2b8;" class="mr-2 mt-2"></div>
                                <div style="background:#eb9cba;" class="mr-2 mt-2"></div>
                                <div style="background:#c3d6b0;" class="mr-2 mt-2"></div>
                            </div>
                        </div>

                        <div class="my-4 addressPera">
                            <div class="row align-items-center small">
                                <div class="col-1 text-right"><h5 class="m-0 text-light"><i class="fa fa-user-o text-secondary small" aria-hidden="true"></i></h5>
                                </div>
                                <div class="col-7 text-dark font-weight-bold">Finn La</div>
                                <div class="col-4 text-right"><i class="fa fa-map-marker " aria-hidden="true"></i> 10</div>
                            </div>

                            <div class="bgColor d-flex">
                                <div style="background:#eb9cba;" class="mr-2 mt-2"></div>
                                <div style="background:#c3d6b0;" class="mr-2 mt-2"></div>
                            </div>
                        </div>
                    </aside>
            </div>

            </div>
        </section>
         <!---------------- DESKTOP ---------------->

         <div id="sideBarMenu_phone" >
            <aside class="sideBarMenu rounded p-0" style="background: #97bfb2;">
                <div class="side_header">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>Phone</span>
                </div>

                <div class="px-3 phoneSideBar position-relative">
                    <div class="phone-content py-2">
                        <div class="text-light pb-2 font-weight-bold"><span>Today's Operator</span></div>
                        <div class="btn-operator">
                            <p class="text-light  m-0">You Don't Have Operator</p>
                           <a href="javascript:voild(0);" class="btn">Set Operator</a>
                        </div>
                    </div>
                    <div class="history pb-2">
                        <h5 class="m-0 text-light mb-2">History</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="historyButton">
                                <div><a href="javascript:voild(0);" class="btn active">Recent</a></div>
                                <div><a href="javascript:voild(0);" class="btn ">Message</a></div>
                                <div><a href="javascript:voild(0);" class="btn ">Call</a></div>
                            </div>
                            <div class="searchingIcon"><i class="fa fa-search" aria-hidden="true"></i></div>
                        </div>
                    </div>

                        <div class="my-2 addressPera">
                            <div class="row small">
                                <div class="col-2"><i class="fa fa-user-o phone_user" aria-hidden="true"></i>
                                </div>
                                <div class="col-6 text-dark font-weight-bold">
                                    <p class="m-0">Thuy Trang</p>
                                    <p class="m-0 small  clr"><i class="fa fa-phone pr-1" aria-hidden="true"></i>Miss Call</p>
                                </div>
                                <div class="col-4 text-right font-weight-bold clr">8:24AM</div>
                            </div>
                        </div>
                         <div class="my-2 addressPera">
                            <div class="row small">
                                <div class="col-2"><i class="fa fa-user-o phone_user" aria-hidden="true"></i>
                                </div>
                                <div class="col-6 text-dark font-weight-bold">
                                    <p class="m-0">Jullia Tran</p>
                                    <p class="m-0 small  clr"><i class="fa fa-phone pr-1" aria-hidden="true"></i>Incoming Call</p>
                                </div>
                                <div class="col-4 text-right font-weight-bold clr">7:23AM</div>
                            </div>
                        </div>
                        <div class="my-2 addressPera">
                           <div class="row small">
                               <div class="col-2"><i class="fa fa-user-o phone_user" aria-hidden="true"></i>
                               </div>
                               <div class="col-6 text-dark font-weight-bold">
                                   <p class="m-0">Dark Van</p>
                                   <p class="m-0 small  text-secondary "><i class="fa fa-comment-o pr-1 clr" aria-hidden="true"></i>Duis Autem vel eum iriure</p>
                               </div>
                               <div class="col-4 text-right font-weight-bold clr">Sep 19</div>
                           </div>
                       </div>
                       <div class="my-2 addressPera">
                          <div class="row small">
                              <div class="col-2"><i class="fa fa-user-o phone_user" aria-hidden="true"></i>
                              </div>
                              <div class="col-6 text-dark font-weight-bold">
                                  <p class="m-0">Dark Van</p>
                                  <p class="m-0 small  clr"><i class="fa fa-comment-o pr-1" aria-hidden="true"></i>Outgoing Call</p>
                              </div>
                              <div class="col-4 text-right font-weight-bold text-secondary">Sep 16</div>
                          </div>
                      </div>
                      <div class="my-2 addressPera">
                         <div class="row small">
                             <div class="col-2"><i class="fa fa-user-o phone_user" aria-hidden="true"></i>
                             </div>
                             <div class="col-6 text-dark font-weight-bold">
                                 <p class="m-0">Dark Van</p>
                                 <p class="m-0 small text-secondary"><i class="fa fa-comment-o pr-1 clr" aria-hidden="true"></i>Lorem ipsum dolor sit....</p>
                             </div>
                             <div class="col-4 text-right font-weight-bold text-secondary">Sep 16</div>
                         </div>
                     </div>

                    <div class="dialPadContent">
                        <div class="dialPad">
                            <img src="image/download.png" class="dialPadLogo" style="width:23px;"/>
                        </div>  
                        <p class="m-0 small text-light">Dial pad</p>
                    </div> 

                </div>
            </aside>
         </div>
    </div>
    <GoogleChart />
</template>
 
 <script>
 
import GoogleChart from './GoogleChart.vue'
     export default {
        name: 'App',
        components: {
            GoogleChart
        }
     }

     $(document).ready(function(){
        $("#desktop").click(function(){
            $("#sideBarMenu").fadeToggle();
        });

        $("#phone").click(function(){
            $("#sideBarMenu_phone").fadeToggle();
        });

    });
 </script>
        