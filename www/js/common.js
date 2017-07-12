		//加载数据	
	function loadData(arr,succes,loading){
		var count=0; //已加载的资源数量  arr.length全部资源数
		for(var i=0;i<arr.length;i++){
			(function(index){
				var img=new Image();
				img.src="./img/"+arr[index]+".png";
				img.onload=function(){
					Json[arr[index]]=this;
					count++;
					loading&&loading(count,arr.length);
					if(count==arr.length){
						succes&&succes();
					}
				}
			})(i);
		}
	}

	//得到n-m的随机数
	function getRandom(n,m){
		return Math.floor(Math.random()*(m-n+1))+n;
	}

	//创建一条鱼
	function createFish(canvas){
		var fish=null;
		if(Math.random()<=0.33){ //左边的鱼
			fish=new Fish(getRandom(1,5));
			fish.x=-50;
			fish.y=getRandom(100,canvas.height-100);
			fish.rotate=getRandom(-45,45);
		}else if(Math.random()<=0.66){
			fish=new Fish(getRandom(1,5));
			fish.x=getRandom(100,canvas.width-100); //上边的鱼
			fish.y=-50;
			fish.rotate=getRandom(45,135);
		}else if(Math.random()<=0.98){
			fish=new Fish(getRandom(1,5));
			fish.x=canvas.width+50;   //右边的鱼
			fish.y=getRandom(100,canvas.height-100);
			fish.rotate=getRandom(135,225);
		}else{
			if(Math.random()<0.5){
				fish=new Shark(6);
				fish.x=-50;
				fish.y=getRandom(100,canvas.height-100);
				fish.rotate=getRandom(-45,45);
			}else{
				fish=new Shark(6);
				fish.x=canvas.width+50;   //右边的鱼
				fish.y=getRandom(100,canvas.height-100);
				fish.rotate=getRandom(135,225);
			}
			// }else{
			// 	fish=new Shark(7);
			// 	fish.x=canvas.width+50;   //右边的鱼
			// 	fish.y=getRandom(100,canvas.height-100);
			// 	fish.rotate=getRandom(135,225);
			// }
		}
		return fish;
	}