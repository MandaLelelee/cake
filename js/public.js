// JavaScript Document
  function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
  }
}
function show()  //显示隐藏层和弹出层 
{ 
   var hideobj=document.getElementById("hidebg"); 
   hidebg.style.display="block";  //显示隐藏层 
   hidebg.style.height=document.body.clientHeight+"px";  //设置隐藏层的高度为当前页面高度 
   document.getElementById("hidebox").style.display="block";  //显示弹出层 
} 
function hide()  //去除隐藏层和弹出层 
{ 
   document.getElementById("hidebg").style.display="none"; 
   document.getElementById("hidebox").style.display="none"; 
  
} 
//以下代码实现单击密码框变为密码
var i;
function tran(i){     //焦点事件
     if(i=="username"){
    if(form1.username_input.value=="请输入用户名"){
	form1.username_input.value='',this.style.color='#000000';
}

	 }else if(i=="check"){
	if(form1.check_input.value=="验证码"){
	form1.check_input.value='',this.style.color='#000000';
}
		 
		 }else{

	if(form1.passwd_input.value=="请输入密码"){
	this.form1.passwd_input.type="password";
	form1.passwd_input.value='',this.style.color='#000000';
	}
	}
}
	function bour(i){   //离开焦点事件
	if(i=="username"){
	if(form1.username_input.value==""){
		form1.username_input.value='请输入用户名',this.style.color='#999';
		}}else if(i=="check"){
			if(form1.check_input.value==""){
		form1.check_input.value='验证码',this.style.color='#999';
		}
			
			}else{
	
	if(form1.passwd_input.value==""){
	this.form1.passwd_input.type="text";
	form1.passwd_input.value='请输入密码',this.style.color='#999';
	}
		
	}
	}
