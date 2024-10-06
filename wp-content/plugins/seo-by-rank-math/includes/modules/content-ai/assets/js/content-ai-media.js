!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{isAutoCompleterOpen:function(){return L},updateAIAttributes:function(){return R},updateData:function(){return N}});var n={};e.r(n),e.d(n,{appUi:function(){return q}});var r={};e.r(r),e.d(r,{getContentAiAttributes:function(){return $},getData:function(){return z},getScore:function(){return J},isAutoCompleterOpen:function(){return Y}});var a=jQuery,o=e.n(a),i=lodash,l=wp.i18n,c=wp.apiFetch,u=e.n(c),m=function(e){return new Promise((function(t,n){var r=wp.data.select("rank-math-content-ai").getData();fetch(r.url+"generate_image_alt",{method:"POST",body:JSON.stringify({images:[e],username:r.connectData.username,api_key:r.connectData.api_key,site_url:r.connectData.site_url,plugin_version:rankMath.version}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(r){if(r.altTexts&&r.altTexts[e])return t(r.altTexts[e]),void function(e){if(!(0,i.isUndefined)(e.credits)){var t=e.credits;(0,i.isEmpty)(t)||(t=(t=t.available-t.taken)<0?0:t,u()({method:"POST",path:"/rankmath/v1/ca/updateCredits",data:{credits:t}}).then((function(){wp.data.dispatch("rank-math-content-ai").updateData("credits",t),o()(".credits-remaining").length&&o()(".credits-remaining strong").text(t)})))}}(r);n((0,l.__)("Failed to generate alt text.","rank-math"))})).catch((function(e){n(e)}))}))},s=function(){return!rankMath.contentAI.isUserRegistered||!rankMath.contentAI.plan||!rankMath.contentAI.credits||rankMath.contentAI.isMigrating},p=wp.element,d=wp.components,f=React;function h(e){return e.startsWith("{{/")?{type:"componentClose",value:e.replace(/\W/g,"")}:e.endsWith("/}}")?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.startsWith("{{")?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}function g(e,t){let n,r,a=[];for(let o=0;o<e.length;o++){const i=e[o];if("string"!==i.type){if(void 0===t[i.value])throw new Error(`Invalid interpolation, missing component node: \`${i.value}\``);if("object"!=typeof t[i.value])throw new Error(`Invalid interpolation, component node must be a ReactElement or null: \`${i.value}\``);if("componentClose"===i.type)throw new Error(`Missing opening component token: \`${i.value}\``);if("componentOpen"===i.type){n=t[i.value],r=o;break}a.push(t[i.value])}else a.push(i.value)}if(n){const o=function(e,t){const n=t[e];let r=0;for(let a=e+1;a<t.length;a++){const e=t[a];if(e.value===n.value){if("componentOpen"===e.type){r++;continue}if("componentClose"===e.type){if(0===r)return a;r--}}}throw new Error("Missing closing component token `"+n.value+"`")}(r,e),i=g(e.slice(r+1,o),t),l=(0,f.cloneElement)(n,{},i);if(a.push(l),o<e.length-1){const n=g(e.slice(o+1),t);a=a.concat(n)}}return a=a.filter(Boolean),0===a.length?null:1===a.length?a[0]:(0,f.createElement)(f.Fragment,null,...a)}function b(e){const{mixedString:t,components:n,throwErrors:r}=e;if(!n)return t;if("object"!=typeof n){if(r)throw new Error(`Interpolation Error: unable to process \`${t}\` because components is not an object`);return t}const a=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(h)}(t);try{return g(a,n)}catch(e){if(r)throw new Error(`Interpolation Error: unable to process \`${t}\` because of error \`${e.message}\``);return t}}var y=function(e){var t=e.tags,n=e.components,r=e.children;return n=n||{},!1===(0,i.isUndefined)(t)&&(t=t.split(",")).forEach((function(e){var t=e;n[e]=wp.element.createElement(t,null)})),b({mixedString:r,components:n})},v=function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&(t+="+Free+Plan");var n=new URLSearchParams({utm_source:"Plugin",utm_medium:t,utm_campaign:"WP"});return(0,i.includes)(e,"?")||(e+="?"),e+n.toString()},w=function(e){var t=e.width,n=void 0===t?40:t,r=e.showProNotice,a=void 0!==r&&r,o=e.isBulkEdit,c=void 0!==o&&o,u=e.isResearch,m=void 0!==u&&u,s=e.creditsRequired,p=void 0===s?0:s;if(a)return function(e){return wp.element.createElement("div",{id:"rank-math-pro-cta",className:"center rank-math-content-ai-warning-wrapper"},wp.element.createElement("div",{className:"rank-math-cta-box blue-ticks top-20 less-padding "+e},wp.element.createElement("h3",null,(0,l.__)("🔒 This is a PRO-Only Feature","rank-math")),wp.element.createElement("p",null,(0,l.__)("We are sorry but this feature is only available to Rank Math PRO/Business/Agency Users. Unlock this feature and many more by getting a Rank Math plan.","rank-math")),wp.element.createElement("ul",null,wp.element.createElement("li",null,(0,l.__)("Bulk Edit SEO Tags","rank-math")),wp.element.createElement("li",null,(0,l.__)("Advanced Google Analytics 4 Integration","rank-math")),wp.element.createElement("li",null,(0,l.__)("Keyword Rank Tracker","rank-math")),wp.element.createElement("li",null,(0,l.__)("Free Content AI Trial","rank-math")),wp.element.createElement("li",null,(0,l.__)("SEO Performance Email Reports","rank-math"))),wp.element.createElement(d.Button,{href:rankMath.links.pro,target:"_blank",className:"button button-primary is-green"},(0,l.__)("Learn More","rank-math"))))}(n);var f=(0,i.isUndefined)(wp.data.select("rank-math-content-ai"))?rankMath.contentAI:wp.data.select("rank-math-content-ai").getData(),h=f.isUserRegistered,g=f.plan,b="free"===g,w=f.credits>p,k=f.isMigrating;if(w&&m&&!b&&f.credits<500&&(w=!1),h&&g&&w&&!k&&!b)return null;var _,E="width-"+n;return!h||!g||w&&b?wp.element.createElement("div",{id:"rank-math-pro-cta",className:"center rank-math-content-ai-warning-wrapper"},wp.element.createElement("div",{className:"rank-math-cta-box blue-ticks top-20 less-padding "+E},wp.element.createElement("h3",null,(0,l.__)("🚀 Supercharge Your Content With AI","rank-math")),wp.element.createElement("p",null,!h&&!c&&(0,l.__)("Start using Content AI by connecting your RankMath.com Account","rank-math"),h&&!g&&!c&&!b&&(0,l.__)("To access this Content AI feature, you need to have an active subscription plan.","rank-math"),h&&!c&&b&&(0,l.__)("To access this Content AI feature, you have to purchase a Content AI Subscription.","rank-math"),c&&(0,l.__)("You are one step away from unlocking this premium feature along with many more.","rank-math")),function(e,t,n){return t?wp.element.createElement("ul",null,wp.element.createElement("li",null,(0,l.__)("1-Click Article Generation","rank-math")),wp.element.createElement("li",null,(0,l.__)("Bulk Update Your SEO Meta using AI","rank-math")),wp.element.createElement("li",null,(0,l.__)("Get Access to 40+ AI SEO Tools","rank-math")),wp.element.createElement("li",null,(0,l.__)("125+ Expert-Written Prompts","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click Competitor Content Research","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click WooCommerce Product Descriptions","rank-math"))):n?wp.element.createElement("ul",null,wp.element.createElement("li",null,(0,l.__)("1-Click Article Generation","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click Competitor Research","rank-math")),wp.element.createElement("li",null,(0,l.__)("On-Page SEO Suggestions","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click Bulk SEO Meta","rank-math")),wp.element.createElement("li",null,(0,l.__)("125+ Pre-Built Prompts","rank-math")),wp.element.createElement("li",null,(0,l.__)("Multiple RankBot Sessions","rank-math"))):40===e?wp.element.createElement("ul",null,wp.element.createElement("li",null,(0,l.__)("1-Click Article Generation","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click SEO Content","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click SEO Meta","rank-math")),wp.element.createElement("li",null,(0,l.__)("40+ Specialized AI Tools","rank-math")),wp.element.createElement("li",null,(0,l.__)("1-Click Competitor Research","rank-math")),wp.element.createElement("li",null,(0,l.__)("125+ Pre-Built Prompts","rank-math"))):wp.element.createElement("ul",null,wp.element.createElement("li",null,(0,l.__)("Gain access to 40+ advanced AI tools, empowering your content strategy.","rank-math")),wp.element.createElement("li",null,(0,l.__)("Experience the revolutionary AI-powered Content Editor for unparalleled efficiency.","rank-math")),wp.element.createElement("li",null,(0,l.__)("Engage with RankBot, your personal AI Chat Assistant, for real-time assistance.","rank-math")))}(n,c,b),!h&&wp.element.createElement(d.Button,{href:rankMath.contentAI.connectSiteUrl,className:"button button-primary is-green"},(0,l.__)("Connect Now","rank-math")),h&&(!g||b)&&wp.element.createElement(d.Button,{href:v(rankMath.links["content-ai"]+"?play-video=ioPeVIntJWw&","Buy+Plan+Button",b),className:"button button-primary is-green",target:"_blank"},(0,l.__)("Learn More","rank-math")))):k?wp.element.createElement("div",{id:"rank-math-pro-cta",className:"center rank-math-content-ai-warning-wrapper"},wp.element.createElement("div",{style:{textAlign:"center"},className:"rank-math-cta-box less-padding top-20 "+E},wp.element.createElement("h3",null,(0,l.__)("Server Maintenance Underway","rank-math")),wp.element.createElement("p",null,(0,l.__)("We are working on improving your Content AI experience. Please wait for 5 minutes and then refresh to start using the optimized Content AI. If you see this for more than 5 minutes, please ","rank-math"),wp.element.createElement("a",{href:rankMath.links.support,target:"_blank",rel:"noreferrer"},(0,l.__)("reach out to the support team.","rank-math")),(0,l.__)(" We are sorry for the inconvenience.","rank-math")))):wp.element.createElement("div",{id:"rank-math-pro-cta",className:"center rank-math-content-ai-warning-wrapper"},wp.element.createElement("div",{className:"rank-math-cta-box less-padding top-20 "+E},wp.element.createElement("h3",null,(0,l.__)("⛔️ Content AI Credit Alert!","rank-math")),wp.element.createElement("p",null,(_=f.resetDate)?wp.element.createElement(y,{components:{strong:wp.element.createElement("strong",null)}},(0,l.sprintf)((0,l.__)("Your monthly Content AI credits have been fully utilized. You can wait till %s for your credits to refresh or upgrade to continue enjoying seamless content creation","rank-math"),"{{strong}}"+_+"{{/strong}}")):(0,l.__)("Your monthly Content AI credits have been fully utilized. To continue enjoying seamless content creation, simply click the button below to upgrade your plan and access more credits.","rank-math")),wp.element.createElement(d.Button,{href:v(rankMath.links["content-ai"]+"?play-video=ioPeVIntJWw&","Buy+Credits+Button",b),className:"button button-primary is-green",target:"_blank"},(0,l.__)("Learn More","rank-math")),wp.element.createElement(d.Button,{variant:"link",href:v(rankMath.links["content-ai-restore-credits"],"Buy+Credits+Button",b),className:"button button-secondary",target:"_blank"},(0,l.__)("Missing Credits?","rank-math"))))},k=function(e){var t=e.showProNotice,n=void 0!==t&&t,r=e.isBulkEdit,a=void 0!==r&&r,l=e.creditsRequired,c=void 0===l?0:l;(0,i.isNull)(document.getElementById("rank-math-content-ai-modal-wrapper"))&&o()("#wpwrap").append('<div id="rank-math-content-ai-modal-wrapper"></div>'),setTimeout((function(){(0,p.render)(wp.element.createElement(d.Modal,{className:"rank-math-contentai-modal rank-math-modal rank-math-error-modal",shouldCloseOnClickOutside:!0,onRequestClose:function(e){(0,i.isUndefined)(e)||(o()(".components-modal__screen-overlay").remove(),document.getElementById("rank-math-content-ai-modal-wrapper").remove(),document.body.classList.remove("modal-open"))}},wp.element.createElement(w,{width:100,showProNotice:n,isBulkEdit:a,creditsRequired:c})),document.getElementById("rank-math-content-ai-modal-wrapper"))}),100)};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=S(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,S(r.key),r)}}function S(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}var P=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectGenerateAltTextButton(),o()(window).on("elementor:init",(function(){t.injectGenerateAltTextButton()}))}var t,n,r;return t=e,n=[{key:"injectGenerateAltTextButton",value:function(){var e=this;void 0!==wp.media.view.Attachment.Details.TwoColumn&&(wp.media.view.Attachment.Details.TwoColumn=wp.media.view.Attachment.Details.TwoColumn.extend({template:function(t){return e.getTemplate("attachment-details-two-column",t,!0)},events:A(A({},wp.media.view.Attachment.Details.TwoColumn.prototype.events),{},{"click .rank-math-generate-alt-button":this.generateAltTextForImage})})),"classic"===rankMath.currentEditor&&(wp.media.view.ImageDetails=wp.media.view.ImageDetails.extend({template:function(t){return e.getTemplate("image-details",t)},events:A(A({},wp.media.view.ImageDetails.prototype.events),{},{"click .rank-math-generate-alt-button":this.generateAltTextForImage})})),wp.media.view.Attachment.Details=wp.media.view.Attachment.Details.extend({template:function(t){return e.getTemplate("attachment-details",t)},events:A(A({},wp.media.view.Attachment.Details.prototype.events),{},{"click .rank-math-generate-alt-button":this.generateAltTextForImage})})}},{key:"getTemplate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=wp.media.template(e)(t),a=document.createElement("div");if(a.innerHTML=r,!a.querySelector("#alt-text-description"))return r;var o='<button class="rank-math-generate-alt-button" data-two-column="'+n+'"><i class="rm-icon rm-icon-content-ai"></i>'+(0,l.__)("Generate Alt","rank-math")+"</button><br />",i=a.querySelector("#alt-text-description");return i.innerHTML=o+i.innerHTML,a.innerHTML}},{key:"generateAltTextForImage",value:function(e){var t=this;if(e.preventDefault(),e.stopPropagation(),s()||wp.data.select("rank-math-content-ai").getData().credits<50)return o()(".media-modal-close").trigger("click"),void k({creditsRequired:50});var n=this.model.attributes.url;if(n){var r=e.currentTarget,a=r.innerHTML;r.disabled=!0,r.innerHTML=(0,l.__)("Generating…","rank-math");var i="true"===r.getAttribute("data-two-column");m(n).then((function(e){t.model.set("alt",e),"classic"!==rankMath.currentEditor&&t.model.save();var n=i?"#attachment-details-two-column-alt-text":"#attachment-details-alt-text",o=document.querySelector(n);o&&(o.value=e),r.innerHTML=a})).catch((function(e){console.error(e),r.classList.add("failed"),r.innerHTML=(0,l.__)("Failed","rank-math"),setTimeout((function(){r.classList.remove("failed"),r.innerHTML=a}),3e3)})).finally((function(){r.disabled=!1}))}}}],n&&T(t.prototype,n),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),j=P,C=wp.data,M=wp.blockEditor;function I(e,t){return{type:"RANK_MATH_APP_UI",key:e,value:t}}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){if(!e)return I("isAutoCompleterOpen",e);var t=(0,C.select)("core/block-editor").getSelectedBlock();(0,i.isNull)(t)||(0,(0,C.dispatch)(M.store).removeBlock)(t.clientId);return I("isAutoCompleterOpen",e)}function R(e,t){var n=(0,C.select)("rank-math-content-ai").getContentAiAttributes();return n[e]="language"!==e||t?t:rankMath.contentAI.language,I("contentAiAttributes",n)}function N(e,t){var n=(0,C.select)("rank-math-content-ai").getData();return n[e]=t,I("data",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==U(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===U(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W={isAutoCompleterOpen:!1,contentAiAttributes:{},data:rankMath.contentAI};function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return"RANK_MATH_APP_UI"===t.type?F(F({},e),{},H({},t.key,t.value)):e}function Y(e){return e.appUi.isAutoCompleterOpen}function $(e){return e.appUi.contentAiAttributes}function z(e){return e.appUi.data}function J(e){var t=e.appUi.data.score;return(0,i.isEmpty)(t)?0:(t=(0,i.map)(Object.values(t),i.toNumber),(0,i.round)((0,i.sum)(t)/t.length))}(0,C.register)((0,C.createReduxStore)("rank-math-content-ai",{reducer:(0,C.combineReducers)(n),selectors:r,actions:t}));function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,o=void 0,o=function(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===K(o)?o:String(o)),r)}var a,o}var Q=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=wp.data.select("rank-math-content-ai").getData(),new j,setTimeout((function(){t.addBulkGenerateButton(t.data)}),1e3),this.altTextField=document.querySelector("#attachment_alt"),this.imageUrl=document.querySelector("#attachment_url"),this.altTextField&&this.imageUrl&&this.injectGenerateAltTextButton()}var t,n,r;return t=e,(n=[{key:"addBulkGenerateButton",value:function(e){var t=o()(".media-toolbar-secondary");if(!(t.length<=0)){var n='<i class="rm-icon rm-icon-content-ai"></i> '+(0,l.__)("Generate Alt with AI","rank-math"),r=o()('<button class="button media-button button-primary button-large delete-selected-button rank-math-bulk-generate-button hidden" disabled="disabled">'+n+"</button>");t.prepend(r),r.on("click",(function(){if(s()||e.credits<50)k({creditsRequired:50});else{var t=o()(".attachment.selected").map((function(){return o()(this).data("id")})).get();t.length<=0||(r[0].innerHTML=(0,l.__)("Generating…","rank-math"),u()({method:"POST",path:"/rankmath/v1/ca/generateAlt",data:{attachmentIds:t}}).catch((function(e){console.log(e),r[0].innerHTML=n})).then((function(){r[0].innerHTML=n,window.location.reload()})))}}));var a=wp.media.frame.state("library").get("selection");(0,i.isUndefined)(a)||(a.on("selection:single",(function(){r[0].removeAttribute("disabled")})),a.on("selection:unsingle",(function(){o()(".attachment.selected").length||r[0].setAttribute("disabled","disabled")})))}}},{key:"injectGenerateAltTextButton",value:function(){var e=document.createElement("button");e.classList.add("rank-math-generate-alt-button"),e.innerHTML='<i class="rm-icon rm-icon-content-ai"></i>'+(0,l.__)("Generate Alt","rank-math"),this.altTextField.insertAdjacentElement("afterend",e),this.altTextField.insertAdjacentHTML("afterend","<br>"),this.generateAltTextButton=e,e.addEventListener("click",this.generateAltTextForImage.bind(this))}},{key:"generateAltTextForImage",value:function(e){var t=this;if(e.preventDefault(),e.stopPropagation(),s()||this.data.credits<50)k({creditsRequired:50});else{var n=this.imageUrl.value;this.generateAltTextButton.innerHTML=(0,l.__)("Generating…","rank-math"),m(n).then((function(e){t.altTextField.value=e,t.generateAltTextButton.innerHTML='<i class="rm-icon rm-icon-content-ai"></i>'+(0,l.__)("Generate Alt","rank-math")})).catch((function(e){console.error("Failed to generate alt text:",e),t.generateAltTextButton.classList.add("failed"),t.generateAltTextButton.innerHTML=(0,l.__)("Failed","rank-math"),setTimeout((function(){t.generateAltTextButton.classList.remove("failed"),t.generateAltTextButton.innerHTML='<i class="rm-icon rm-icon-content-ai"></i>'+(0,l.__)("Generate Alt","rank-math")}),2e3)}))}}}])&&V(t.prototype,n),r&&V(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.addEventListener("load",(function(){new Q}))}();