"use strict";$(function(){$("#create-categories > li").on("click",function(e){window.location.assign(e.currentTarget.dataset.link)});var e=(new Editor("#medescription","input[name=create_description]",$("#medescription").data("placeholder")),new FileBox("#create_upload"),new Pikaday({field:$("input[name=create_deadline]").get(0),format:"YYYY/MM/DD",minDate:moment().toDate()}),new Vue({el:"#create-form",data:{title:"",description:"",subcategory:""}}));$("#create-submit").on("click",function(a){$("#notifload").addClass("active");var t=new Modal("createrequest");t.open().then(function(){$.ajax({cache:!1,data:e.$data,dataType:"json",method:"POST",url:window.location.pathname}).done(function(e){}).fail(function(e,a,n){t.close(),$("#notifload").removeClass("active"),alerts.push({"class":"error",title:"Connection Error",message:n,iconClass:"fa-plug"})})})})});