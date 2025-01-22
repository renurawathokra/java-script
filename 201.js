let s=0;
		let n=9;
		for(let i=1;i<=9;i++){
		    for(let j=1;j<=s;j++){
		        document.write("&nbsp ")
		    }
		    for(let j=1;j<=n;j++){
		        document.write("*");
		    }
		    if(i<5){
		        s++;
		        n-=2;
		    }else{
		        s--;
		        n+=2;
		    }
		    document.write("<br>");
		}