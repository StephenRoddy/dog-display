(this["webpackJsonpdog-display"]=this["webpackJsonpdog-display"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.37a6c544.png"},function(e,t,a){e.exports=a.p+"static/media/frodo.08b25072.jpg"},function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(2),l=a.n(n),s=(a(12),a(3)),i=a(4),o=a(6),m=a(5),d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{class:"opacity-5 shadow-lg"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h4",{classs:"card-title"},"Dog Facts"),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"Overview"),r.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:e.dogImg}),r.a.createElement("div",null,r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Type/Breed: "),e.breed,"."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Dimensions: "),e.height," cm in height, and ",e.weight," kg in weight."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Temperament: "),e.temper,"."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Bred for: "),e.job,".")))))},u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{class:"opacity-5 shadow-lg"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},"Information & Implementation"),r.a.createElement("h6",{class:"card-subtitle mb-3 text-muted"},"Technical overview of site"),r.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:e.dogGif}),r.a.createElement("div",null,r.a.createElement("p",{class:"card-text mx-auto mt-3"},"Welcome to dog.display() a simple frontend for some of the API services from the ",r.a.createElement("a",{href:"https://thedogapi.com/",target:"_blank"},"thedogapi.com/"),"."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},"The site is built with ",r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank"},"React"),", ",r.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank"},"Bootstrap")," and ",r.a.createElement("a",{href:"https://nodejs.org/",target:"_blank"},"Node.js"),"."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},"The site is a work in progress and new features will be added in the coming weeks.")),r.a.createElement("div",null))))},h=function(e){return r.a.createElement("nav",{class:"opacity-5 navbar mb-4 navbar-light shadow"},r.a.createElement("a",{class:"navbar-brand",href:"#"},r.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:a(13),width:"500",alt:"Dog Facts"})))},g=function(e){e.media;return r.a.createElement("div",null,r.a.createElement("div",{class:"opacity-5 mt-3 shadow-lg"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},"A Brief History of Dogs"),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"National Geographic"),r.a.createElement("div",{class:"embed-responsive embed-responsive-16by9 mx-auto d-block"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WR16wyrADo8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",null))))},b=function(e){return r.a.createElement("div",null,r.a.createElement("div",{class:"opacity-5 shadow-lg"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},"Facts about Dogs"),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"for Isabelle"),r.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:e.dogImg}),r.a.createElement("div",null,r.a.createElement("p",{class:"card-text mx-auto mt-3"},"This dog is a mystery!"),r.a.createElement("p",{class:"card-text mx-auto mt-3"},"We have no facts about this magnificent beast...")))))},p=function(e){return r.a.createElement("div",{class:"opacity-5 mt-3 shadow-lg"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{classs:"card-title"},"The Best Dog of All: "),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"Frodo"),r.a.createElement("img",{class:"img-fluid rounded mx-auto d-block",src:a(14),width:"500",alt:"Lilly"}),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Type/Breed: "),"Westhighland terrier, Westie."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Size: "),"between 25 - 28 in height, and 7 - 10kg in weight."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Termprament: "),"Indpendent, Intelligent, Confident and Self-assured."),r.a.createElement("p",{class:"card-text mx-auto mt-3"},r.a.createElement("b",null,"Bred for: "),"Hunting small rodents.")))},E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).state={fact:[],imgData:[],dogGif:"",dogImg:"",breed:"",height:"",weight:"",temper:"",job:"",isLoaded:""},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thedogapi.com/v1/images/search?mime_types=gif&&api_key=1dd6d46e-d0e8-4b4c-a651-a8cc707742f2").then((function(e){return e.json()})).then((function(t){e.setState({imgData:t}),e.setState({dogGif:e.state.imgData[0].url})})).catch(console.log),fetch("https://api.thedogapi.com/v1/images/search?api_key=1dd6d46e-d0e8-4b4c-a651-a8cc707742f2").then((function(e){return e.json()})).then((function(t){e.setState({fact:t}),e.setState({dogImg:e.state.fact[0].url}),e.setState({breed:e.state.fact[0].breeds[0].name}),e.setState({height:e.state.fact[0].breeds[0].height.metric}),e.setState({weight:e.state.fact[0].breeds[0].weight.metric}),e.setState({temper:e.state.fact[0].breeds[0].temperament}),e.setState({job:e.state.fact[0].breeds[0].bred_for})})).catch(console.log)}},{key:"render",value:function(){var e;return e=this.state.breed.length<1?r.a.createElement(b,{dogImg:this.state.dogImg}):r.a.createElement(d,{fact:this.state.fact,breed:this.state.breed,height:this.state.height,weight:this.state.weight,temper:this.state.temper,job:this.state.job,dogImg:this.state.dogImg}),r.a.createElement("div",{class:"container-fluid"},r.a.createElement(h,null),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm mb-3"},e,r.a.createElement(g,null)),r.a.createElement("div",{class:"col-sm mb-3"},r.a.createElement(u,{imgData:this.state.imgData,dogGif:this.state.dogGif}),r.a.createElement(p,null))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.02db83c7.chunk.js.map