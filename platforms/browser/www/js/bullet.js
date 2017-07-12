var BULLET_SIZE=[
			null,
			{x: 86, y: 0, w: 24, h: 26 ,speed:3,atk:10},
			{x: 62, y: 0, w: 25, h: 29 ,speed:3.5,atk:15},
			{x: 30, y: 0, w: 31, h: 35 ,speed:4,atk:20},
			{x: 32, y: 35, w: 27, h: 31 ,speed:4.5,atk:25},
			{x: 30, y: 82, w: 29, h: 33 ,speed:5,atk:30},
			{x: 0, y: 82, w: 30, h: 34 ,speed:5.5,atk:35},
			{x: 0, y: 0, w: 30, h: 44 ,speed:6,atk:40}
		];

		class Bullet{
			constructor(type){
				this.type=type||1;
				this.x=0;
				this.y=0;
				this.rotate=0;
				this.speed=BULLET_SIZE[this.type].speed;
				this.timer=null;
				this.atk=BULLET_SIZE[this.type].atk;
				this.move();
			};

			draw(brush){
				brush.save();
				var x=BULLET_SIZE[this.type].x;
				var y=BULLET_SIZE[this.type].y;
				var w=BULLET_SIZE[this.type].w;
				var h=BULLET_SIZE[this.type].h;
				brush.translate(this.x,this.y);
				brush.rotate(this.rotate*Math.PI/180);
				brush.drawImage(Json["bullet"],
					x,y,w,h,
					-w/2,-h/2,w,h
				);
				brush.restore();
			};

			move(){
				var _this=this;
				clearInterval(this.timer);
				this.timer=setInterval(function(){
					_this.x+=_this.speed*Math.sin(_this.rotate*Math.PI/180);
					_this.y-=_this.speed*Math.cos(_this.rotate*Math.PI/180);
				},10);
			}

			shoot(x,y,r){//传入鱼的坐标和半径,如果在半径范围内，表示击中了
				var a=this.x-x;
				var b=this.y-y;
				var c=Math.sqrt(a*a+b*b);
				if(c<r){
					return true;
				}else{
					return false;
				}
			}
		}
		