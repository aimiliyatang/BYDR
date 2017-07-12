var SHARK=[
				null,
				null,
				null,
				null,
				null,
				null,
				{w: 508, h: 270, collR: 100,speed:2,life:1600},
				{w: 508, h: 270, collR: 100,speed:3,life:3200}
			];
		function Shark(type){
			this.type=type||6;
			this.x=0;
			this.y=0;
			this.rotate=0;
			this.timer=null;
			this.speed=SHARK[this.type].speed;
			this.life=SHARK[this.type].life;
			this.collR=SHARK[this.type].collR;
			this.cur=0;
			this.move();
		}

		Shark.prototype.draw=function(brush){
			brush.save();
			var w=SHARK[this.type].w;
			var h=SHARK[this.type].h;
			brush.translate(this.x,this.y);
			brush.scale(0.5,0.5);
			brush.rotate(this.rotate*Math.PI/180);
			brush.drawImage(Json["shark"+this.type],
				0,this.cur*h,w,h,
				-w/2,-h/2,w,h
			);
			brush.restore();
		}

		Shark.prototype.move=function(){
			var _this=this;
			clearInterval(this.timer);
			this.timer=setInterval(function(){
				_this.cur++;
				if(_this.cur>=8){
					_this.cur=0;
				}
				_this.x+=_this.speed*Math.cos(_this.rotate*Math.PI/180);
				_this.y+=_this.speed*Math.sin(_this.rotate*Math.PI/180);
			},100);

		}

		function DeShark(type){
			Shark.apply(this,arguments);
			this.isNeedDel=false;
		}
		DeShark.prototype=new Shark();
		DeShark.prototype.constructor=DeShark;
		DeShark.prototype.draw=function(brush){
			brush.save();
			var w=SHARK[this.type].w;
			var h=SHARK[this.type].h;
			brush.translate(this.x,this.y);
			brush.scale(0.5,0.5);
			brush.rotate(this.rotate*Math.PI/180);
			brush.drawImage(Json["shark"+this.type],
				0,(8+this.cur)*h,w,h,
				-w/2,-h/2,w,h
			);
			brush.restore();
		}
		DeShark.prototype.move=function(){
			var _this=this;
			clearInterval(this.timer);
			this.timer=setInterval(function(){
				_this.cur++;
				if(_this.cur>=4){
					_this.cur=0;
				}
			},100);
			setTimeout(function(){
				_this.isNeedDel=true;
			},2000);
		}