!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=598)}({598:function(t,e,a){t.exports=a(599)},599:function(t,e,a){"use strict";var i={init:function(){var t;t=$("#kt_datatable").KTDatatable({data:{type:"remote",source:{read:{url:HOST_URL+"/api/datatables/demos/default.php"}},pageSize:10,serverPaging:!0,serverFiltering:!0,serverSorting:!0},layout:{scroll:!1,footer:!1},sortable:!0,pagination:!0,columns:[{field:"CompanyName",title:"Teacher",width:250,template:function(t){var e="300_"+KTUtil.getRandomInt(1,20)+".jpg",a=KTUtil.getRandomInt(1,5);return'<div class="d-flex align-items-center">\t\t\t\t\t\t\t<div class="symbol symbol-40 symbol-sm flex-shrink-0">\t\t\t\t\t\t\t\t<img class="" src="assets/media/users/'+e+'" alt="photo">\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="ml-4">\t\t\t\t\t\t\t\t<a href="#" class="text-dark-75 text-hover-primary font-weight-bolder font-size-lg mb-0">'+t.CompanyAgent+'</a>\t\t\t\t\t\t\t\t<div class="text-muted font-weight-bold">'+{1:{title:"Mathematics, BA"},2:{title:"Geography, BSc"},3:{title:"History, PhD"},4:{title:"Physics, MS"},5:{title:"astronomy, MA"}}[a].title+"</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>"}},{field:"CompanyAgent",title:"Department",template:function(t){var e="";return e+='<a href="#" class="text-dark-50 text-hover-primary font-weight-bold">'+t.CompanyName+"</a>"}},{field:"JoinedDate",title:"Joined",type:"date",width:100,format:"MM/DD/YYYY",template:function(t){var e="";return e+='<div class="font-weight-bolder text-primary mb-0">'+t.ShipDate+"</div>"}},{field:"Status",title:"Status",autoHide:!1,width:100,template:function(t){var e=KTUtil.getRandomInt(1,3),a={1:{title:"New",class:" label-light-primary"},2:{title:"Active",class:" label-light-danger"},3:{title:"In-active",class:" label-light-info"}};return'<span class="label label-lg font-weight-bold '+a[e].class+' label-inline">'+a[e].title+"</span>"}},{field:"Actions",title:"Actions",sortable:!1,width:130,overflow:"visible",autoHide:!1,template:function(){return'\t                        <div class="dropdown dropdown-inline">\t                            <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" data-toggle="dropdown">\t\t\t\t\t\t\t\t\t<span class="svg-icon svg-icon-md">\t\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-icon">\t\t\t\t\t\t\t\t\t\t\t<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t\t\t\t\t\t\t\t\t\t\t\t<rect x="0" y="0" width="24" height="24"/>\t\t\t\t\t\t\t\t\t\t\t\t<path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"/>\t\t\t\t\t\t\t\t\t\t\t\t<path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"/>\t\t\t\t\t\t\t\t\t\t\t</g>\t\t\t\t\t\t\t\t\t\t</svg>\t\t\t\t\t\t\t\t\t</span>\t                            </a>\t                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t                                <ul class="navi flex-column navi-hover py-2">\t                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\t                                        Choose an action:\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-print"></i></span>\t                                            <span class="navi-text">Print</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-copy"></i></span>\t                                            <span class="navi-text">Copy</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\t                                            <span class="navi-text">Excel</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\t                                            <span class="navi-text">CSV</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\t                                            <span class="navi-text">PDF</span>\t                                        </a>\t                                    </li>\t                                </ul>\t                            </div>\t                        </div>\t                        <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">\t                            <span class="svg-icon svg-icon-md">\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t\t\t\t\t\t\t\t\t\t<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t\t\t\t\t\t\t\t\t\t\t<rect x="0" y="0" width="24" height="24"/>\t\t\t\t\t\t\t\t\t\t\t<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "/>\t\t\t\t\t\t\t\t\t\t\t<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>\t\t\t\t\t\t\t\t\t\t</g>\t\t\t\t\t\t\t\t\t</svg>\t                            </span>\t                        </a>\t                        <a href="javascript:;" class="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon" title="Delete">\t\t\t\t\t\t\t\t<span class="svg-icon svg-icon-md">\t\t\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t\t\t\t\t\t\t\t\t\t<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t\t\t\t\t\t\t\t\t\t\t<rect x="0" y="0" width="24" height="24"/>\t\t\t\t\t\t\t\t\t\t\t<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\t\t\t\t\t\t\t\t\t\t\t<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\t\t\t\t\t\t\t\t\t\t</g>\t\t\t\t\t\t\t\t\t</svg>\t\t\t\t\t\t\t\t</span>\t                        </a>\t                    '}}]}),$("#kt_datatable_search_status").on("change",(function(){t.search($(this).val().toLowerCase(),"Status")})),$("#kt_datatable_search_type").on("change",(function(){t.search($(this).val().toLowerCase(),"Type")}))}};jQuery(document).ready((function(){i.init()}))}});