function o(t){const n=t,{includePath:a}=n.dataset;if(a){const e=new XMLHttpRequest;e.onreadystatechange=function(){this.readyState===4&&this.status===200&&(n.outerHTML=this.responseText)},e.open("GET",a,!0),e.send()}}function s(){const t=document.getElementsByTagName("*");Array.prototype.forEach.call(t,o),console.log("include")}window.addEventListener("load",s);
