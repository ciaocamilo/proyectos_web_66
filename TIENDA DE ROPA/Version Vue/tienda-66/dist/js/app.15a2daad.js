(function(e){function t(t){for(var c,r,a=t[0],l=t[1],u=t[2],s=0,f=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},i=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1036:function(e,t,n){e.exports=n.p+"img/vestido.78d558a4.jpg"},1539:function(e,t,n){"use strict";n("21a4")},"17c1":function(e,t,n){var c={"./camisa.jpg":"9fad","./camiseta.jpg":"66d8","./falda.png":"827f","./pantalon.jpg":"54fc","./vestido.jpg":"1036"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=i,e.exports=o,o.id="17c1"},"21a4":function(e,t,n){},"2efc":function(e,t,n){"use strict";n("d7d3")},"4c4a":function(e,t,n){e.exports=n.p+"img/banner.eb0aef02.jpg"},"513c":function(e,t,n){e.exports=n.p+"img/pizza.8e2213b6.jpg"},"54fc":function(e,t,n){e.exports=n.p+"img/pantalon.ed2c84d5.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=Object(c["g"])(" Página prueba ");function i(e,t,n,i,r,a){var l=Object(c["x"])("barra-menu"),u=Object(c["x"])("router-view"),d=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(l),Object(c["h"])(u),Object(c["h"])(d,{to:{name:"PaginaPrueba"}},{default:Object(c["F"])((function(){return[o]})),_:1})],64)}var r=n("4c4a"),a=n.n(r),l=function(e){return Object(c["t"])("data-v-6e4ef35c"),e=e(),Object(c["r"])(),e},u={id:"banner"},d=l((function(){return Object(c["f"])("div",{class:"container"},[Object(c["f"])("h1",{class:"titulos"},"Tienda 66"),Object(c["f"])("h3",null,"Mi tienda de Ropa")],-1)})),s=l((function(){return Object(c["f"])("img",{src:a.a,style:{width:"100%",height:"auto","padding-top":"0px","padding-bottom":"2px"}},null,-1)})),f={id:"navBar"},b=Object(c["g"])("Inicio"),p=Object(c["g"])("Productos"),m=Object(c["g"])("Clientes"),j=Object(c["g"])("Carrito"),O=l((function(){return Object(c["f"])("br",null,null,-1)}));function g(e,t,n,o,i,r){var a=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",u,[d,s,Object(c["f"])("table",f,[Object(c["f"])("tr",null,[Object(c["f"])("th",null,[Object(c["f"])("a",null,[Object(c["h"])(a,{to:"/"},{default:Object(c["F"])((function(){return[b]})),_:1})])]),Object(c["f"])("th",null,[Object(c["f"])("a",null,[Object(c["h"])(a,{to:"/productos"},{default:Object(c["F"])((function(){return[p]})),_:1})])]),Object(c["f"])("th",null,[Object(c["f"])("a",null,[Object(c["h"])(a,{to:"/clientes"},{default:Object(c["F"])((function(){return[m]})),_:1})])]),Object(c["f"])("th",null,[Object(c["f"])("a",null,[Object(c["h"])(a,{to:"/carrito"},{default:Object(c["F"])((function(){return[j]})),_:1})])])])])]),O],64)}var h={name:"menu"},v=(n("8b8a"),n("6b0d")),C=n.n(v),y=C()(h,[["render",g],["__scopeId","data-v-6e4ef35c"]]),w={name:"App",components:{BarraMenu:y}},_=(n("8fb1"),C()(w,[["render",i]])),x=n("6c02"),k=function(e){return Object(c["t"])("data-v-6d7810ab"),e=e(),Object(c["r"])(),e},P={id:"principal"},q=k((function(){return Object(c["f"])("div",{class:"container",id:"parrafo"},[Object(c["f"])("p",null,[Object(c["g"])(" Bienvenidos a la "),Object(c["f"])("b",null,"tienda 66"),Object(c["g"])(", su mejor tienda en linea ")])],-1)})),z=k((function(){return Object(c["f"])("div",{id:"video",class:"container"},[Object(c["f"])("iframe",{class:"tamano-video",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/ahO47mXCzuc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)})),A=[q,z];function I(e,t,n,o,i,r){return Object(c["q"])(),Object(c["e"])("div",P,A)}var U={},E=(n("2efc"),C()(U,[["render",I],["__scopeId","data-v-6d7810ab"]])),G={class:"container"},V=Object(c["f"])("h1",null,"Mi prueba de rutas",-1),N=Object(c["f"])("br",null,null,-1);function T(e,t,n,o,i,r){var a=Object(c["x"])("MiComponente");return Object(c["q"])(),Object(c["e"])("div",G,[V,N,Object(c["h"])(a)])}var M=function(e){return Object(c["t"])("data-v-0ba9c50f"),e=e(),Object(c["r"])(),e},S={class:"container"},$={class:"container"},B={class:"row"},F={class:"row"},D={key:0},L={key:1},H={key:2},R=M((function(){return Object(c["f"])("br",null,null,-1)})),J={class:"row"},X=M((function(){return Object(c["f"])("br",null,null,-1)})),Y=M((function(){return Object(c["f"])("br",null,null,-1)})),K={class:"container",id:"ropa"},Q=["onClick"],W=M((function(){return Object(c["f"])("br",null,null,-1)})),Z=M((function(){return Object(c["f"])("br",null,null,-1)})),ee={class:"container",id:"comida"},te={class:"row"},ne=["src"],ce=["onClick"],oe={class:"container"},ie=M((function(){return Object(c["f"])("b",null,"PRECIO TOTAL = ",-1)}));function re(e,t,n,o,i,r){return Object(c["q"])(),Object(c["e"])("div",S,[Object(c["f"])("h1",null,"Bienvenido "+Object(c["z"])(i.cliente.nombre),1),Object(c["f"])("div",$,[Object(c["f"])("div",B,[Object(c["f"])("div",null,[Object(c["G"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.cliente.nombre=e})},null,512),[[c["C"],i.cliente.nombre]]),Object(c["f"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return r.enviarCliente()})},"Enviar cliente")]),Object(c["f"])("div",null,[Object(c["G"])(Object(c["f"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.cantidad=e})},null,512),[[c["C"],i.cantidad]])])]),Object(c["f"])("div",F,[i.cantidad>0?(Object(c["q"])(),Object(c["e"])("h3",D,"Número mayor a cero")):0===i.cantidad?(Object(c["q"])(),Object(c["e"])("p",L,"Número igual a cero")):(Object(c["q"])(),Object(c["e"])("h2",H,"Número negativo")),R]),Object(c["f"])("div",J,[Object(c["G"])(Object(c["f"])("h2",null,"Número positivo (V-show)",512),[[c["D"],i.cantidad>0]])])]),X,Y,Object(c["f"])("div",K,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(i.productos,(function(e){return Object(c["q"])(),Object(c["e"])("div",{key:e.id},[Object(c["f"])("h1",null,"Producto: "+Object(c["z"])(e.nombre),1),Object(c["f"])("h2",null,"Precio: "+Object(c["z"])(e.precio),1),Object(c["f"])("button",{type:"button",onClick:function(t){return r.mostrarPrecioAcumulado(e.precio)}},"Agregar",8,Q)])})),128))]),W,Z,Object(c["f"])("div",ee,[Object(c["f"])("div",te,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(i.alimentos,(function(e){return Object(c["q"])(),Object(c["e"])("div",{key:e.id,class:"col-lg-3 col-md-6 col-sm-6 col-xs-12 estilo-tarjeta"},[Object(c["f"])("img",{class:"img-thumbnail",src:r.getPictureComida(e.imagen)},null,8,ne),Object(c["f"])("h2",null,Object(c["z"])(e.nombre),1),Object(c["f"])("h3",null,Object(c["z"])(e.precio),1),Object(c["f"])("button",{type:"button",onClick:function(t){return r.mostrarPrecioAcumulado(e.precio)}},"Agregar",8,ce)])})),128))])]),Object(c["f"])("div",oe,[Object(c["f"])("h3",null,[ie,Object(c["g"])(Object(c["z"])(i.precioAcumulado),1)])])])}var ae=n("bc3a"),le=n.n(ae),ue={data:function(){return{cliente:{nombre:"Juan",apellido:"Castañeda"},cantidad:0,productos:[],alimentos:[{id:1,nombre:"Hamburguesa",precio:13e3,imagen:"hamburguesa.jpg"},{id:2,nombre:"Pizza",precio:8e3,imagen:"pizza.jpg"},{id:3,nombre:"Tamal",precio:5e3,imagen:"tamal.png"}],precioAcumulado:0}},methods:{mostrarPrecioAcumulado:function(e){var t="mi_variable",n=5;console.log(t),console.log(n),this.precioAcumulado=this.precioAcumulado+e},getPictureComida:function(e){var t=n("83ae");return t("./"+e)},enviarCliente:function(){le.a.post("https://reqbin.com/echo/post/json",{headers:{"Content-Type":"application/json"}},{data:this.cliente}).then((function(e){var t=e.status;console.log(t);var n=e.data;alert(n)}))}},created:function(){this.productos=[{id:1,nombre:"Camiseta",precio:25e3},{id:2,nombre:"Vestido",precio:15e4},{id:3,nombre:"Pantalón",precio:12e4}],console.log("Ejecuta created")},mounted:function(){console.log("Ejecuta mounted")},watch:{cantidad:function(e,t){console.log(t),console.log(e),5===e&&alert("Es cinco!")}}},de=(n("591f"),C()(ue,[["render",re],["__scopeId","data-v-0ba9c50f"]])),se={components:{MiComponente:de},created:function(){console.log("Holaaa")}},fe=C()(se,[["render",T]]),be=function(e){return Object(c["t"])("data-v-65b6e72e"),e=e(),Object(c["r"])(),e},pe={id:"contenido"},me={class:"container"},je=be((function(){return Object(c["f"])("h1",null,"Registro de clientes",-1)})),Oe=Object(c["g"])("Editar Cliente"),ge={class:"row"},he={class:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},ve={class:"campos-formulario form-group"},Ce=be((function(){return Object(c["f"])("label",null,"Identificación",-1)})),ye={class:"campos-formulario form-group"},we=be((function(){return Object(c["f"])("label",null,"Nombres",-1)})),_e={class:"campos-formulario form-group"},xe=be((function(){return Object(c["f"])("label",null,"Apellidos",-1)})),ke={class:"campos-formulario form-group"},Pe=be((function(){return Object(c["f"])("label",null,"Fecha de nacimiento",-1)})),qe={class:"campos-formulario form-group"},ze=be((function(){return Object(c["f"])("label",null,"Correo electrónico",-1)})),Ae={class:"campos-formulario form-group"},Ie=be((function(){return Object(c["f"])("label",null,"Edad",-1)})),Ue={class:"campos-formulario form-group"},Ee=be((function(){return Object(c["f"])("label",null,"Dirección",-1)})),Ge={class:"campos-formulario form-group"},Ve={class:"form-check"},Ne=be((function(){return Object(c["f"])("label",null,"He leído y acepto el tratamiento de mis datos",-1)})),Te=be((function(){return Object(c["f"])("div",{class:"invalid-feedback"}," Debes aceptar los términos y condiciones antes de enviar ",-1)})),Me={class:"campos-formulario form-group"};function Se(e,t,n,o,i,r){var a=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",pe,[Object(c["f"])("div",me,[Object(c["f"])("div",null,[je,Object(c["h"])(a,{to:{name:"EditarCliente"}},{default:Object(c["F"])((function(){return[Oe]})),_:1})]),Object(c["f"])("div",ge,[Object(c["f"])("div",he,[Object(c["f"])("form",null,[Object(c["f"])("div",ve,[Ce,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.cliente.identificacion=e}),type:"text",class:"form-control",id:"identificacion",name:"identificacion",placeholder:"Ingrese su identificación",required:""},null,512),[[c["C"],i.cliente.identificacion]])]),Object(c["f"])("div",ye,[we,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.cliente.nombres=e}),type:"text",class:"form-control",id:"nombres",name:"nombres",placeholder:"Ingrese su nombre",required:""},null,512),[[c["C"],i.cliente.nombres]])]),Object(c["f"])("div",_e,[xe,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.cliente.apellidos=e}),type:"text",class:"form-control",id:"apellidos",name:"apellidos",placeholder:"Ingrese su apellido",required:""},null,512),[[c["C"],i.cliente.apellidos]])]),Object(c["f"])("div",ke,[Pe,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.cliente.fecha_nacimiento=e}),type:"date",class:"form-control",id:"fecha_nacimiento",name:"fecha_nacimiento"},null,512),[[c["C"],i.cliente.fecha_nacimiento]])]),Object(c["f"])("div",qe,[ze,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.cliente.correo=e}),type:"email",class:"form-control",id:"mail",name:"mail",placeholder:"Correo electrónico"},null,512),[[c["C"],i.cliente.correo]])]),Object(c["f"])("div",Ae,[Ie,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.cliente.edad=e}),type:"number",class:"form-control",id:"edad",name:"edad",placeholder:"Ingrese su edad"},null,512),[[c["C"],i.cliente.edad]])]),Object(c["f"])("div",Ue,[Ee,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.cliente.direccion=e}),type:"text",class:"form-control",id:"direccion",name:"direccion",placeholder:"Ingrese su dirección"},null,512),[[c["C"],i.cliente.direccion]])]),Object(c["f"])("div",Ge,[Object(c["f"])("div",Ve,[Ne,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return i.cliente.terminos=e}),type:"checkbox",class:"form-check-input is-invalid",id:"tratamiento_datos",name:"tratamiento_datos",required:""},null,512),[[c["B"],i.cliente.terminos]]),Te])]),Object(c["f"])("div",Me,[Object(c["f"])("input",{onClick:t[8]||(t[8]=function(e){return r.registrarCliente()}),class:"btn btn-primary",value:"Registrar"})])])])])])])}var $e={data:function(){return{cliente:{identificacion:"",nombres:"",apellidos:"",fecha_nacimiento:"",correo:"",edad:"",direccion:"",terminos:""}}},methods:{registrarCliente:function(){var e=this;le.a.post("https://tienda-66-api.herokuapp.com/api/nuevo-cliente",{data:this.cliente}).then((function(t){console.log(t);var n=t.status;console.log(n),200===n?(e.$swal.fire("Cliente registrado","Se ha resgistrado el cliente con identificación "+e.cliente.identificacion,"success"),e.cliente={}):e.$swal.fire("Cliente NO registrado","Ocurrió un error al registrar el cliente con identificación "+e.cliente.identificacion,"error");var c=t.data;console.log(c)}))}}},Be=(n("1539"),C()($e,[["render",Se],["__scopeId","data-v-65b6e72e"]])),Fe={id:"contenido"},De={class:"container div-galeria",id:"galeria"},Le={class:"row fila-productos"},He=["src"],Re={class:"nombre-producto"},Je={class:"precio-producto"},Xe={class:"descripcion-producto"},Ye={id:"icono",class:"div-icono"},Ke=["onClick"],Qe=Object(c["f"])("p",null,[Object(c["f"])("b",null,"Agregar al carrito")],-1),We={class:"tarjeta-total"},Ze=Object(c["f"])("h1",null,"TOTAL",-1),et={id:"total_carrito"};function tt(e,t,n,o,i,r){return Object(c["q"])(),Object(c["e"])("div",Fe,[Object(c["f"])("div",De,[Object(c["f"])("div",Le,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(i.productos,(function(e){return Object(c["q"])(),Object(c["e"])("div",{key:e.id,class:"col-lg-4 col-md-6 col-sm-6 col-xs-12 tarjeta-producto"},[Object(c["f"])("img",{class:"imagen-producto",src:r.getPictureProducto(e.imagen)},null,8,He),Object(c["f"])("h1",Re,Object(c["z"])(e.nombre),1),Object(c["f"])("h3",Je,"$"+Object(c["z"])(e.precio),1),Object(c["f"])("div",Xe,[Object(c["f"])("p",null,Object(c["z"])(e.descripcion),1)]),Object(c["f"])("div",Ye,[Object(c["f"])("i",{class:"las la-cart-arrow-down estilo-icono",onClick:function(t){return r.agregarAlCarrito(e)}},null,8,Ke),Qe])])})),128))])]),Object(c["f"])("div",We,[Ze,Object(c["f"])("h2",et,"$"+Object(c["z"])(i.total_carrito),1)])])}var nt={data:function(){return{productos:[],carrito:[],total_carrito:0}},created:function(){this.cargarProductos()},methods:{getPictureProducto:function(e){var t=n("17c1");return t("./"+e)},agregarAlCarrito:function(e){this.carrito.push(e),console.log(this.carrito),this.total_carrito=this.total_carrito+e.precio,this.$swal.fire("Producto agregado","Se ha agregado "+e.nombre+" al carrito de compras","success")},cargarProductos:function(){var e=this;le.a.get("https://tienda-66-api.herokuapp.com/api/productos").then((function(t){var n=t.status;console.log(n),e.productos=t.data}))}}},ct=C()(nt,[["render",tt]]),ot={id:"contenido"};function it(e,t){return Object(c["q"])(),Object(c["e"])("div",ot," Carrito ")}const rt={};var at=C()(rt,[["render",it]]);function lt(e,t){return Object(c["q"])(),Object(c["e"])("h1",null,"LA PÁGINA NO EXISTE :( ")}const ut={};var dt=C()(ut,[["render",lt]]),st=function(e){return Object(c["t"])("data-v-30633cee"),e=e(),Object(c["r"])(),e},ft={id:"contenido"},bt=st((function(){return Object(c["f"])("div",{class:"container"},[Object(c["f"])("h1",null,"Actualización de clientes")],-1)})),pt={class:"container"},mt={class:"row"},jt={id:"busqueda",class:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},Ot=st((function(){return Object(c["f"])("br",null,null,-1)})),gt={class:"campos-formulario form-group"},ht=Object(c["g"])("Identificación"),vt={class:"campos-formulario form-group"},Ct={key:0,class:"row"},yt={id:"formulario",class:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},wt=st((function(){return Object(c["f"])("br",null,null,-1)})),_t={class:"campos-formulario form-group"},xt=st((function(){return Object(c["f"])("label",null,"Nombres",-1)})),kt={class:"campos-formulario form-group"},Pt=st((function(){return Object(c["f"])("label",null,"Apellidos",-1)})),qt={class:"campos-formulario form-group"},zt=st((function(){return Object(c["f"])("label",null,"Fecha de nacimiento",-1)})),At={class:"campos-formulario form-group"},It=st((function(){return Object(c["f"])("label",null,"Correo electrónico",-1)})),Ut={class:"campos-formulario form-group"},Et=st((function(){return Object(c["f"])("label",null,"Edad",-1)})),Gt={class:"campos-formulario form-group"},Vt=st((function(){return Object(c["f"])("label",null,"Dirección",-1)})),Nt={class:"campos-formulario form-group"};function Tt(e,t,n,o,i,r){var a=Object(c["x"])("noframes");return Object(c["q"])(),Object(c["e"])("div",ft,[bt,Object(c["f"])("div",pt,[Object(c["f"])("div",mt,[Object(c["f"])("div",jt,[Object(c["f"])("form",null,[Ot,Object(c["f"])("div",gt,[Object(c["f"])("label",null,[ht,Object(c["h"])(a)]),Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.cliente.identificacion=e}),type:"text",class:"form-control",id:"identificacion",name:"identificacion",placeholder:"Ingrese su identificacion",required:""},null,512),[[c["C"],i.cliente.identificacion]])]),Object(c["f"])("div",vt,[Object(c["f"])("input",{onClick:t[1]||(t[1]=function(e){return r.buscarCliente()}),class:"btn btn-secondary",value:"Buscar"})])])])]),""!==i.cliente._id?(Object(c["q"])(),Object(c["e"])("div",Ct,[Object(c["f"])("div",yt,[Object(c["f"])("form",null,[wt,Object(c["f"])("div",_t,[xt,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.cliente.nombres=e}),type:"text",class:"form-control",id:"nombre",name:"nombre",placeholder:"Ingrese su nombre",required:""},null,512),[[c["C"],i.cliente.nombres]])]),Object(c["f"])("div",kt,[Pt,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.cliente.apellidos=e}),type:"text",class:"form-control",id:"apellidos",name:"apellidos",placeholder:"Ingrese su apellido",required:""},null,512),[[c["C"],i.cliente.apellidos]])]),Object(c["f"])("div",qt,[zt,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.cliente.fecha_nacimiento=e}),type:"date",class:"form-control",id:"fecha_nacimiento",name:"fecha_nacimiento"},null,512),[[c["C"],i.cliente.fecha_nacimiento]])]),Object(c["f"])("div",At,[It,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.cliente.correo=e}),type:"email",class:"form-control",id:"mail",name:"mail",placeholder:"Correo electrónico"},null,512),[[c["C"],i.cliente.correo]])]),Object(c["f"])("div",Ut,[Et,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.cliente.edad=e}),type:"number",class:"form-control",id:"edad",name:"edad",placeholder:"Ingrese su edad"},null,512),[[c["C"],i.cliente.edad]])]),Object(c["f"])("div",Gt,[Vt,Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return i.cliente.direccion=e}),type:"text",class:"form-control",id:"direccion",name:"direccion",placeholder:"Ingrese su dirección"},null,512),[[c["C"],i.cliente.direccion]])]),Object(c["f"])("div",Nt,[Object(c["f"])("input",{onClick:t[8]||(t[8]=function(e){return r.actualizarCliente()}),class:"btn btn-primary",value:"Modificar"}),Object(c["f"])("input",{onClick:t[9]||(t[9]=function(e){return r.eliminarCliente()}),class:"btn btn-danger",value:"Eliminar"})])])])])):Object(c["d"])("",!0)])])}var Mt={data:function(){return{cliente:{_id:"",identificacion:"",nombres:"",apellidos:"",fecha_nacimiento:"",correo:"",edad:"",direccion:"",tratamiento:""}}},methods:{buscarCliente:function(){var e=this;le.a.get("https://tienda-66-api.herokuapp.com/api/cliente/".concat(this.cliente.identificacion)).then((function(t){null!==t.data?e.cliente=t.data:e.$swal.fire("Cliente no encontrado","No existe el cliente con identificación "+e.cliente.identificacion,"warning")}))},actualizarCliente:function(){var e=this;le.a.put("https://tienda-66-api.herokuapp.com/api/actualizar-cliente/".concat(this.cliente._id),this.cliente).then((function(t){var n=t.status;200===n?(e.$swal.fire("Cliente modificado","Se ha modificado el cliente con identificación "+e.cliente.identificacion,"success"),e.cliente={}):e.$swal.fire("Cliente NO modificado","Ocurrió un error al modificado el cliente con identificación "+e.cliente.identificacion,"error")}))},eliminarCliente:function(){var e=this;this.$swal.fire({title:"¿Está seguro?",text:"¡Esta operación no se puede deshacer!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Sí, eliminar"}).then((function(t){t.isConfirmed&&le.a.delete("https://tienda-66-api.herokuapp.com/api/eliminar-cliente/".concat(e.cliente._id)).then((function(t){var n=t.status;200===n?(e.$swal.fire("Cliente eliminado","Se ha eliminado el cliente con identificación "+e.cliente.identificacion,"success"),e.cliente={}):e.$swal.fire("Cliente NO eliminado","Ocurrió un error al eliminar el cliente con identificación "+e.cliente.identificacion,"error")}))}))}}},St=(n("8132"),C()(Mt,[["render",Tt],["__scopeId","data-v-30633cee"]])),$t=[{path:"/",name:"Home",component:E},{path:"/pagina-prueba",name:"PaginaPrueba",component:fe},{path:"/clientes",name:"Clientes",component:Be},{path:"/clientes/editar",name:"EditarCliente",component:St},{path:"/productos",name:"Productos",component:ct},{path:"/carrito",name:"Carrito",component:at},{path:"/:catchAll(.*)",component:dt}],Bt=Object(x["a"])({history:Object(x["b"])(),routes:$t}),Ft=Bt,Dt=n("f9d5"),Lt=n.n(Dt),Ht=(n("4413"),Object(c["c"])(_));Ht.use(Ft),Ht.use(Lt.a),Ht.mount("#app")},"591f":function(e,t,n){"use strict";n("7f4e")},"5bb6":function(e,t,n){},"66d8":function(e,t,n){e.exports=n.p+"img/camiseta.08ad781b.jpg"},"7f4e":function(e,t,n){},8132:function(e,t,n){"use strict";n("c7cc")},"827f":function(e,t,n){e.exports=n.p+"img/falda.fd21fa9c.png"},"83ae":function(e,t,n){var c={"./hamburguesa.jpg":"dd6f","./pizza.jpg":"513c","./tamal.png":"c02b"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=i,e.exports=o,o.id="83ae"},"8b8a":function(e,t,n){"use strict";n("9abe")},"8fb1":function(e,t,n){"use strict";n("5bb6")},"9abe":function(e,t,n){},"9fad":function(e,t,n){e.exports=n.p+"img/camisa.196ce389.jpg"},c02b:function(e,t,n){e.exports=n.p+"img/tamal.5ff7b90e.png"},c7cc:function(e,t,n){},d7d3:function(e,t,n){},dd6f:function(e,t,n){e.exports=n.p+"img/hamburguesa.c0421ec4.jpg"}});
//# sourceMappingURL=app.15a2daad.js.map