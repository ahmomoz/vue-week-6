import{_ as m,c,a as s,e as l,v as d,f as u,o as p}from"./index-xryyCvfO.js";const f={data(){return{user:{username:"",password:""}}},methods:{login(){this.user.username&&this.user.password?this.$axios.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then(e=>{const{token:i,expired:a}=e.data;document.cookie=`hexToken = ${i}; expires=${new Date(a)};`,alert("登入成功"),this.$router.push("/admin")}).catch(()=>{alert("請檢查帳號密碼是否有誤")}):alert("請填入正確資料")}},mounted(){document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1")&&this.$router.push("/admin")}},h={class:"container"},_={class:"row justify-content-center"},w={class:"col-4 mt-5"},g=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),x={id:"form",class:"form-signin"},k={class:"form-floating mb-3"},v=s("label",{for:"username"},"Email address",-1),b={class:"form-floating"},y=s("label",{for:"password"},"Password",-1);function V(r,e,i,a,n,t){return p(),c("div",h,[s("div",_,[s("div",w,[g,s("form",x,[s("div",k,[l(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.user.username=o),onKeyup:e[1]||(e[1]=u((...o)=>t.login&&t.login(...o),["enter"])),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,544),[[d,n.user.username]]),v]),s("div",b,[l(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>n.user.password=o),onKeyup:e[3]||(e[3]=u((...o)=>t.login&&t.login(...o),["enter"])),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,544),[[d,n.user.password]]),y]),s("button",{onClick:e[4]||(e[4]=(...o)=>t.login&&t.login(...o)),class:"btn btn-lg btn-primary w-100 mt-3",type:"button"}," 登入 ")])])])])}const K=m(f,[["render",V]]);export{K as default};
