import"./reset-9GtOEJoH.js";/* empty css              */import{p as L}from"./pocketbase-v9INCz3k.js";import{b as l,g as A,s as t,c as s}from"./common-zV-of-AF.js";document.addEventListener("DOMContentLoaded",async()=>{const S=l(".form-input"),h=l(".form-check"),_=l(".span-condition"),$=l(".button-show"),p=l(".button-erase"),M=A(".signup-form"),k=A(".button-signup-submit"),[V,m,u,z]=S,[Z,F,B,D,q,H,O,w,g]=h,[r,c,d,o]=_,[f,E,P,I]=p,v={regexId:/^[a-zA-Z0-9]{6,12}$/,regexPassword:/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,regexEmail:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/},i={id:!1,password:!1,passwordCheck:!1,email:!1},T=async e=>{try{return await L.collection("users").getFirstListItem(`username="${e}"`),!0}catch{return!1}},j=e=>{switch(t(f,"add","has-input"),e){case"emptyId":s(r,"입력한 내용이 없어요."),t(r,"add","warning"),t(f,"remove","has-input");break;case"invalidId":s(r,"영문 또는 영문, 숫자 조합 6~12자리로 입력해주세요."),t(r,"add","warning");break;case"duplicationId":s(r,"이미 사용 중인 아이디입니다."),t(r,"add","warning");break;default:s(r,"");break}},G=e=>{switch(t(E,"add","has-input"),e){case"emptyPassword":s(c,"입력한 내용이 없어요."),t(c,"add","warning"),t(E,"remove","has-input");break;case"invalidPassword":s(c,"특수문자(~!@#$%^&*) 포함 6~16자리로 입력해주세요."),t(c,"add","warning");break;default:s(c,"");break}},C=e=>{switch(t(P,"add","has-input"),e){case"emptyPasswordCheck":s(d,"입력한 내용이 없어요."),t(d,"add","warning"),t(P,"remove","has-input");break;case"notMatchedPassword":s(d,"일치하지 않습니다. 다시 입력해주세요."),t(d,"add","warning");break;default:s(d,"");break}},J=e=>{switch(t(I,"add","has-input"),e){case"emptyEmail":s(o,"입력한 내용이 없어요."),t(o,"add","warning"),t(I,"remove","has-input");break;case"invalidEmail":s(o,"이메일 형식이 맞지 않습니다. 다시 입력해 주세요."),t(o,"add","warning");break;default:s(o,"");break}},K=e=>{const a=e.target.parentNode.children[1],n=e.target;a.type==="text"?(a.type="password",t(n,"remove","is-checked")):(a.type="text",t(n,"add","is-checked"))},Q=e=>{const a=e.target.parentNode.children,n=a[1],Y=a[2],ee=a[a.length-1];n.value="",t(Y,"remove","has-input"),s(ee,"입력한 내용이 없어요.")},R=e=>{e.target.checked===!0?h.forEach(a=>{const n=a;n.checked=!0}):h.forEach(a=>{const n=a;n.checked=!1})},U=e=>{e.target.checked===!0?(w.checked=!0,g.checked=!0):(w.checked=!1,g.checked=!1)},W=async e=>{const a=e;return a.trim()===""?"emptyId":v.regexId.test(a)?await T(a)?"duplicationId":"validId":"invalidId"},x=e=>{const a=e;return a.trim()===""?"emptyPassword":v.regexPassword.test(a)?"validPassword":"invalidPassword"},b=()=>{const e=u.value;return e.trim()===""?"emptyPasswordCheck":e!==m.value?"notMatchedPassword":"validPasswordCheck"},y=e=>{const a=e;return a.trim()===""?"emptyEmail":v.regexEmail.test(a)?"validEmail":"invalidEmail"},N=async e=>{const a=e.target;switch(a.id){case"input-id":await W(a.value).then(n=>{j(n),i.id=n==="validId"});break;case"input-password":G(x(a.value)),C(b(u.value)),i.password=x(a.value)==="validPassword";break;case"input-password-check":C(b(a.value)),i.passwordCheck=b(a.value)==="validPasswordCheck";break;case"input-email":J(y(a.value)),i.email=y(a.value)==="validEmail";break}i.id===!0&&i.password===!0&&m.value===u.value&&i.email===!0&&F.checked===!0&&B.checked===!0&&D.checked===!0&&q.checked===!0?k.disabled=!1:k.disabled=!0},X=()=>{const e={username:V.value,email:z.value,emailVisibility:!0,password:m.value,passwordConfirm:u.value,required_agree:!0,provision_of_personal_information:H.checked,receive_marketing_SNS:w.checked,receive_marketing_email:g.checked};try{L.collection("users").create(e).then(()=>{alert("축하합니다! 회원가입 완료되었습니다."),window.location.href="/src/pages/login/"}).catch(()=>{alert("입력 상태을 확인해주세요.")})}catch(a){alert(a)}};$.forEach(e=>{e.addEventListener("click",K)}),p.forEach(e=>{e.addEventListener("click",Q)}),Z.addEventListener("click",R),O.addEventListener("click",U),M.addEventListener("input",N),p.forEach(e=>{e.addEventListener("click",N)}),k.addEventListener("click",X)});
