	//使用scroll函数的时候click函数不起作用
	/*
	iScrollClick:function(){
		if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
		if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
		if (/Silk/i.test(navigator.userAgent)) return false;
		if (/Android/i.test(navigator.userAgent)) {
	   var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
	   return parseFloat(s[0]+s[3]) < 44 ? false : true
    }
	},
	iscrollFn:function(){
		var that = this;
		myScroll = new IScroll("#wrapperlo",{
			click:that.iScrollClick(), //调用判断函数
	*/