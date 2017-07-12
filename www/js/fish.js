		var FISH_SIZE=[
				null,
				{w: 55, h: 37, collR: 22,speed:4,life:10},
				{w: 78, h: 64, collR: 29,speed:6,life:20},
				{w: 72, h: 56, collR: 25,speed:8,life:30},
				{w: 77, h: 59, collR: 27,speed:10,life:40},
				{w: 107, h: 122, collR: 35,speed:11,life:50},

			];

		function Fish(type){
			this.type=type||1;
			this.x=0;
			this.y=0;
			this.speed=FISH_SIZE[this.type].speed;
			this.collR=FISH_SIZE[this.type].collR;
			this.cur=0;
			this.rotate=0;
			this.timer=0;
			this.life=FISH_SIZE[this.type].life;
			this.move();
		}

		Fish.prototype.draw=function(brush){
			var w=FISH_SIZE[this.type].w;
			var h=FISH_SIZE[this.type].h;
			brush.save();
			brush.translate(this.x,this.y);
			brush.rotate(this.rotate*Math.PI/180);
			if(this.rotate<270&&this.rotate>90){
				brush.scale(1,-1);
			}
			// console.log(Json["fish"+this.type]);

			brush.drawImage(Json["fish"+this.type],
				0,this.cur*h,w,h,
				-w/2,-h/2,w,h
			);
			brush.restore();
		}

		Fish.prototype.move=function(){
			var _this=this;
			this.timer=setInterval(function(){
				_this.cur++; //摆动
				if(_this.cur>=4){
					_this.cur=0;
				}

				//游动
				_this.x+=Math.cos(_this.rotate*Math.PI/180)*_this.speed;
				_this.y+=Math.sin(_this.rotate*Math.PI/180)*_this.speed;
			},100);
		}


		//死鱼类
		function DeFish(type){
			Fish.apply(this,arguments);
			this.isNeedDel=false;
		}
		DeFish.prototype=new Fish();
		DeFish.prototype.constructor=DeFish;
		DeFish.prototype.draw=function(brush){
			var w=FISH_SIZE[this.type].w;
			var h=FISH_SIZE[this.type].h;
			brush.save();
			brush.translate(this.x,this.y);
			brush.rotate(this.rotate*Math.PI/180);
			if(this.rotate<270&&this.rotate>90){
				brush.scale(1,-1);
			}
			// console.log(Json["fish"+this.type]);

			brush.drawImage(Json["fish"+this.type],
				0,(4+this.cur)*h,w,h,
				-w/2,-h/2,w,h
			);
			brush.restore();
		}
		DeFish.prototype.move=function(){
			var _this=this;
			this.timer=setInterval(function(){
				_this.cur++; //摆动
				if(_this.cur>=4){
					_this.cur=0;
				}
			},100);

			setTimeout(function(){
				_this.isNeedDel=true;
			},500);
		}