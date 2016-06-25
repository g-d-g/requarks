"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),Alerts=function(){function e(){_classCallCheck(this,e);var t=this;t.mdl=new Vue({el:"#alerts",data:{children:[]},methods:{acknowledge:function(e){t.close(e)}}}),t.uidNext=1}return _createClass(e,[{key:"push",value:function(e){var t=this,i=_.defaults(e,{_uid:t.uidNext,"class":"info",iconClass:"fa-info",message:"---",sticky:!1,title:"---"});t.mdl.children.push(i),i.sticky||_.delay(function(){t.close(i._uid)},5e3),t.uidNext++}},{key:"close",value:function(e){var t=this,i=_.findIndex(t.mdl.children,["_uid",e]),n=_.nth(t.mdl.children,i);i>=0&&n&&(n["class"]+=" exit",t.mdl.children.$set(i,n),_.delay(function(){t.mdl.children.$remove(n)},500))}}]),e}(),Dropdown=function(){function e(t){_classCallCheck(this,e);var i=this;i.obj=$(t),i.state=!1,i.obj.children("div").on("click",function(e){i.toggle(e)}),$("ul > li",i.obj).on("click",function(e){i.pick(e)})}return _createClass(e,[{key:"toggle",value:function(e){this.state?this.close():this.open()}},{key:"open",value:function(){var e=this;this.obj.addClass("shown"),this.obj.children("ul").finish().slideDown(200),this.state=!0,this.obj.one("mouseleave",function(t){e.close()})}},{key:"close",value:function(){this.obj.removeClass("shown"),this.obj.children("ul").finish().slideUp(200),this.state=!1}},{key:"pick",value:function(e){var t=this;t.obj.children("input").val($(e.currentTarget).data("value")),$("div > span",t.obj).html($(e.currentTarget).data("label")),t.obj.children("input").change(),t.close()}}]),e}(),Editor=function e(t,i,n){if(_classCallCheck(this,e),0===$(t).length)return null;var l=this;l.obj=new MediumEditor($(t),{autoLink:!1,buttonLabels:"fontawesome",imageDragging:!1,toolbar:{buttons:["bold","italic","anchor","unorderedlist","orderedlist","h2","h3","quote"]},extensions:{autolist:new AutoList,markdown:new MeMarkdown(function(e){$(i).val(e),$(i).change()})},placeholder:{text:n}})},FileBox=function(){function e(t){var i=this;if(_classCallCheck(this,e),0===$(t).length)return null;var n=this,l=$("ul > li",t).detach();n.el=$(t),n.dz=new Dropzone(t,{url:"/",method:"post",maxFilesize:500,autoProcessQueue:!1,previewTemplate:"<li>"+l.html()+"</li>",previewsContainer:t+" > ul",clickable:t+" .filebox-placeholder"}),n.dz.on("addedfile",function(e){n.addedfile(e)}),n.dz.on("removedfile",function(e){n.removedfile(e)}),n.dz.on("maxfilesexceeded",function(e){i.removeFile(e)})}return _createClass(e,[{key:"addedfile",value:function(e){$(".filebox-placeholder",this.el).addClass("hasfiles")}},{key:"removedfile",value:function(e){this.dz.files.length<1&&$(".filebox-placeholder",this.el).removeClass("hasfiles")}},{key:"hasFiles",value:function(){return this.dz.files.length>0}},{key:"startUpload",value:function(e,t){var i=this;i.dz.on("queuecomplete",function(){e(i.dz.files)}),i.dz.on("totaluploadprogress",function(e,i,n){t(e,i,n)}),i.dz.processQueue()}},{key:"setUrl",value:function(e){this.dz.options.url=e}}]),e}(),Modal=function(){function e(t){_classCallCheck(this,e),this.id=t}return _createClass(e,[{key:"open",value:function(){return $("#id-modal-"+this.id).addClass("shown"),new Promise(function(e,t){_.delay(e,500)})}},{key:"bind",value:function(e){var t=this,i=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];$("#id-modal-"+this.id+" .modal-actions > button.act-"+e).one("click",function(e){i?i():t.close()})}},{key:"close",value:function(){var e=this,t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];$("#id-modal-"+this.id+" .modal-actions > button").off("click"),$("#id-modal-"+this.id).addClass("exit"),_.delay(function(){$(document.body).removeClass("dimmed"),$("#id-modal-"+e.id).removeClass("shown exit")},t?0:500)}},{key:"setContent",value:function(e,t){$(e,"#id-modal-"+this.id).html(t)}},{key:"getElement",value:function(e){return $(e,"#id-modal-"+this.id)}}]),e}();