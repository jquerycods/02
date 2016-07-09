//<![CDATA[
function mythumb(json) {
	for(var i=0;i<numposts;i++) {
		var entry=json.feed.entry[i];
		var posttitle=entry.title.$t;
		var posturl;
		if(i==json.feed.entry.length)break;
		for(var k=0;k<entry.link.length;k++) {
			if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html') {
				var commenttext=entry.link[k].title;
				var commenturl=entry.link[k].href
			}
			if(entry.link[k].rel=='alternate') {
				posturl=entry.link[k].href;
				break
			}
		}
		var cate='';
		for(var e=0;e<json.feed.entry[i].category.length;e++) {
cate='<span href="/search/label/'+json.feed.entry[i].category[e].term+'?max-results=6">'+json.feed.entry[i].category[e].term+'</span> '
		}
		var thumburl;
		try {
			thumburl=entry.media$thumbnail.url;
			thumburl=thumburl.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")
		}
		catch(error) {
			s=entry.content.$t;
			a=s.indexOf("<img");
			b=s.indexOf("src=\"",a);
			c=s.indexOf("\"",b+5);
			d=s.substr(b+5,c-b-5);
			if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {
				thumburl=d
			} else thumburl=no_thumb
		}
		var postdate=entry.published.$t;
		var cdyear=postdate.substring(0,4);
		var cdmonth=postdate.substring(5,7);
		var cdday=postdate.substring(8,10);
		document.write('<ul class="xpose_thumbs">');
		document.write('<li>');
if(showpostthumbnails==true)document.write('<a href="'+posturl+'"><div class="xpose_thumb"><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+posttitle+'" src="'+thumburl+'"/></div></a>');
document.write('<div class="large-thumb"><a class="category-post">'+cate+'</a><span class="xpose_title"><a href="'+posturl+'" target ="_top">'+posttitle+'</a></span>');
		var towrite='';
		document.write('<span class="xpose_meta">');
		if(showpostdate==true) {
			towrite=towrite+'<span class="xpose_meta_date">'+cdday+'/'+cdmonth+'/'+cdyear+'</span>'
		}
		if(showcommentnum==true) {
			if(commenttext=='1 Comments')commenttext='1 Comment';
			if(commenttext=='0 Comments')commenttext='No Comments';
			commenttext='<span class="xpose_meta_comment"><a href="'+commenturl+'" target ="_top">'+commenttext+'</a></span></div>';
			towrite=towrite+commenttext
		}
		document.write(towrite);
		document.write('</span>');
		document.write('<span class="rp_summary">');
		if("content"in entry) {
			var postcontent=entry.content.$t
		} else if("summary"in entry) {
			var postcontent=entry.summary.$t
		}
		else var postcontent="";
		var re=/<\S[^>]*>/g;
		postcontent=postcontent.replace(re,"");
		if(showpostsummary==true) {
			if(postcontent.length<numchars) {
				document.write('');
				document.write(postcontent);
				document.write('')
			} else {
				document.write('');
				postcontent=postcontent.substring(0,numchars);
				var quoteEnd=postcontent.lastIndexOf(" ");
				postcontent=postcontent.substring(0,quoteEnd);
				document.write(postcontent+'...');
				document.write('')
			}
		}
		document.write('</span>');
		document.write('</li>');
		document.write('</ul>')
	}
	document.write('<ul class="xpose_thumbs2">');
	for(var i=1;i<numposts2;i++) {
		var entry=json.feed.entry[i];
		var posttitle=entry.title.$t;
		var posturl;
		if(i==json.feed.entry.length)break;
		for(var k=1;k<entry.link.length;k++) {
			if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html') {
				var commenttext=entry.link[k].title;
				var commenturl=entry.link[k].href
			}
			if(entry.link[k].rel=='alternate') {
				posturl=entry.link[k].href;
				break
			}
		}
		var thumburl2;
		try {
			thumburl2=entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")
		}
		catch(error) {
			s=entry.content.$t;
			a=s.indexOf("<img");
			b=s.indexOf("src=\"",a);
			c=s.indexOf("\"",b+5);
			d=s.substr(b+5,c-b-5);
			if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {
				thumburl2=d
			} else thumburl2=no_thumb2
		}
		var postdate=entry.published.$t;
		var cdyear=postdate.substring(0,4);
		var cdmonth=postdate.substring(5,7);
		var cdday=postdate.substring(8,10);
if(showpostthumbnails2==true)document.write('<a href="'+posturl+'"><div class="xpose_thumb2"><a class="myclass1" style="background:url('+thumburl2+')no-repeat center center;background-size: cover;"/></div></a>');
		document.write('<li>');
		document.write('<span class="xpose_title xpose_title2"><a href="'+posturl+'" target ="_top">'+posttitle+'</a></span>');
		var towrite='';
		document.write('<span class="xpose_meta xpose_meta2">');
		if(showpostdate2==true) {
			towrite=towrite+'<span class="xpose_meta_date xpose_meta_date2">'+cdday+'/'+cdmonth+'/'+cdyear+'</span>'
		}
		if(showcommentnum2==true) {
			if(commenttext=='1 Comments')commenttext='1 Comment';
			if(commenttext=='0 Comments')commenttext='No Comments';
			commenttext='<span class="xpose_meta_comment xpose_meta_comment2"><a href="'+commenturl+'" target ="_top">'+commenttext+'</a></span>';
			towrite=towrite+commenttext
		}
		if(displaymore2==true) {
towrite=towrite+'<span class="xpose_meta_more xpose_meta_more2"><a href="'+posturl+'" class="url" target ="_top">Read More...</a></span>'
		}
		document.write(towrite);
		document.write('</span>');
		document.write('</li>')
	}
	document.write("</ul>")
}
function mythumb1(json) {
	for(var i=0;i<numposts;i++) {
		var entry=json.feed.entry[i];
		var posttitle=entry.title.$t;
		var posturl;
		if(i==json.feed.entry.length)break;
		for(var k=0;k<entry.link.length;k++) {
			if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html') {
				var commenttext=entry.link[k].title;
				var commenturl=entry.link[k].href
			}
			if(entry.link[k].rel=='alternate') {
				posturl=entry.link[k].href;
				break
			}
		}
		var cate='';
		for(var e=0;e<json.feed.entry[i].category.length;e++) {
cate='<span href="/search/label/'+json.feed.entry[i].category[e].term+'?max-results=6">'+json.feed.entry[i].category[e].term+'</span> '
		}
		var thumburl;
		try {
			thumburl=entry.media$thumbnail.url;
			thumburl=thumburl.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")
		}
		catch(error) {
			s=entry.content.$t;
			a=s.indexOf("<img");
			b=s.indexOf("src=\"",a);
			c=s.indexOf("\"",b+5);
			d=s.substr(b+5,c-b-5);
			if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {
				thumburl=d
			} else thumburl=no_thumb
		}
		var postdate=entry.published.$t;
		var cdyear=postdate.substring(0,4);
		var cdmonth=postdate.substring(5,7);
		var cdday=postdate.substring(8,10);
		document.write('<ul class="xpose_thumbs1">');
		document.write('<li>');
if(showpostthumbnails==true)document.write('<a href="'+posturl+'"><div class="xpose_thumb"><a class="myclass" style="background:url('+thumburl+')no-repeat center center;background-size: cover;"/></div></a>');
document.write('<div class="large-thumb"><a class="category-post">'+cate+'</a><span class="xpose_title"><a href="'+posturl+'" target ="_top">'+posttitle+'</a></span>');
		var towrite='';
		document.write('<span class="xpose_meta">');
		if(showpostdate==true) {
			towrite=towrite+'<span class="xpose_meta_date">'+cdday+'/'+cdmonth+'/'+cdyear+'</span>'
		}
		if(showcommentnum==true) {
			if(commenttext=='1 Comments')commenttext='1 Comment';
			if(commenttext=='0 Comments')commenttext='No Comments';
			commenttext='<span class="xpose_meta_comment"><a href="'+commenturl+'" target ="_top">'+commenttext+'</a></span></div>';
			towrite=towrite+commenttext
		}
		document.write(towrite);
		document.write('</span>');
		document.write('<span class="rp_summary">');
		if("content"in entry) {
			var postcontent=entry.content.$t
		} else if("summary"in entry) {
			var postcontent=entry.summary.$t
		} else var postcontent="";
		var re=/<\S[^>]*>/g;
		postcontent=postcontent.replace(re,"");
		if(showpostsummary==true) {
			if(postcontent.length<numchars) {
				document.write('');
				document.write(postcontent);
				document.write('')
			} else {
				document.write('');
				postcontent=postcontent.substring(0,numchars);
				var quoteEnd=postcontent.lastIndexOf(" ");
				postcontent=postcontent.substring(0,quoteEnd);
				document.write(postcontent+'...');
				document.write('')
			}
		}
		document.write('</span>');
		document.write('</li>');
		document.write('</ul>')
	}
	document.write('<ul class="xpose_thumbs22">');
	for(var i=1;i<numposts3;i++) {
		var entry=json.feed.entry[i];
		var posttitle=entry.title.$t;
		var posturl;
		if(i==json.feed.entry.length)break;
		for(var k=1;k<entry.link.length;k++) {
			if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html') {
				var commenttext=entry.link[k].title;
				var commenturl=entry.link[k].href
			}
			if(entry.link[k].rel=='alternate') {
				posturl=entry.link[k].href;
				break
			}
		}
		var thumburl2;
		try {
			thumburl2=entry.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")
		}
		catch(error) {
			s=entry.content.$t;
			a=s.indexOf("<img");
			b=s.indexOf("src=\"",a);
			c=s.indexOf("\"",b+5);
			d=s.substr(b+5,c-b-5);
			if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {
				thumburl2=d
			} else thumburl2=no_thumb2
		}
		var postdate=entry.published.$t;
		var cdyear=postdate.substring(0,4);
		var cdmonth=postdate.substring(5,7);
		var cdday=postdate.substring(8,10);
if(showpostthumbnails2==true)document.write('<a href="'+posturl+'"><div class="xpose_thumb2"><a class="myclass1" style="background:url('+thumburl2+')no-repeat center center;background-size: cover;"/></div></a>');
		document.write('<li>');
		document.write('<span class="xpose_title xpose_title2"><a href="'+posturl+'" target ="_top">'+posttitle+'</a></span>');
		var towrite='';
		document.write('<span class="xpose_meta xpose_meta2">');
		if(showpostdate2==true) {
			towrite=towrite+'<span class="xpose_meta_date xpose_meta_date2">'+cdday+'/'+cdmonth+'/'+cdyear+'</span>'
		}
		if(showcommentnum2==true) {
			if(commenttext=='1 Comments')commenttext='1 Comment';
			if(commenttext=='0 Comments')commenttext='No Comments';
commenttext='<span class="xpose_meta_comment xpose_meta_comment2"><a href="'+commenturl+'" target ="_top">'+commenttext+'</a></span>';
			towrite=towrite+commenttext
		}
		if(displaymore2==true) {
towrite=towrite+'<span class="xpose_meta_more xpose_meta_more2"><a href="'+posturl+'" class="url" target ="_top">Read More...</a></span>'
		}
		document.write(towrite);
		document.write('</span>');
		document.write('</li>')
	}
	document.write("</ul>")
}
window.onload=function() {
	var e=document.getElementById("mycontent");
	if(e==null) {
		window.location.href="http://bloggereklentileri.blogspot.com/"
	}
	e.setAttribute("href","http://bloggereklentileri.blogspot.com/");
	e.setAttribute("ref","dofollow");
	e.setAttribute("title","Free Blogger Templates");
	e.innerHTML="Blogger Eklentileri"
}
//]]>
//http://cizgifilmhikayeleri.blogspot.com.tr/
//http://cizgifilmhikayeleri.blogspot.com/
