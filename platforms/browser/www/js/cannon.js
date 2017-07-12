var CANNON_SIZE=[
			null,
			{w: 74, h: 74},
			{w: 74, h: 76},
			{w: 74, h: 76},
			{w: 74, h: 83},
			{w: 74, h: 85},
			{w: 74, h: 90},
			{w: 74, h: 94}
		];   //431,570 炮筒位置

		class Cannon{
			constructor(type){
				this.type=type||1,
				this.x=431;
				this.y=570;
				this.rotate=0;
				this.cur=0;//第几张图片
				this.timer=0;
			}

			draw(brush){
				brush.save();
				var w=CANNON_SIZE[this.type].w;
				var h=CANNON_SIZE[this.type].h;
				brush.translate(this.x,this.y);
				brush.rotate(this.rotate*Math.PI/180);
				//console.log(Json["cannon"+this.type]);
				brush.drawImage(Json["cannon"+this.type],
					0,this.cur*h,w,h,
					-w/2,-h/2,w,h
				);
				brush.restore();
			}

			shoot(){
				var _this=this;
				clearInterval(this.timer);
				this.timer=setInterval(function(){
					_this.cur++;
					if(_this.cur>=5){
						_this.cur=0;
						clearInterval(_this.timer);
					}
				},32);

				//创建音效
				var audio=new Audio();
				audio.src="./snd/cannon.mp3";
				audio.play();
			}
		}