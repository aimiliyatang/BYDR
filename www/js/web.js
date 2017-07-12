var WEB_SIZE=[
			null,
			{x:318, y: 360, w: 102, h: 96 },
			{x: 164, y: 360, w: 146, h: 136 },
			{x: 0, y: 402, w:142, h: 132 },
			{x: 244, y: 188, w: 160, h:160 },
			{x: 0, y: 230, w:170, h: 170},
			{x: 235, y:0, w: 186, h: 186 },
			{x: 0, y: 0, w: 234, h: 234 }
		];

		function Web(type){
			this.type=type||1;
			this.x=0;
			this.y=0;
			this.scaleNum=0.5;
			this.timer=null;
			this.scale();
		}

		Web.prototype={
			constructor:Web,
			scale:function(){
				var _this=this;
				clearInterval(this.timer);
				this.timer=setInterval(function(){
					_this.scaleNum+=0.01;
					if(_this.scaleNum>=1){
						clearInterval(_this.timer);
					}
				},10);
			},
			draw:function(brush){
				brush.save();
				var x=WEB_SIZE[this.type].x;
				var y=WEB_SIZE[this.type].y;
				var w=WEB_SIZE[this.type].w;
				var h=WEB_SIZE[this.type].h;
				brush.translate(this.x,this.y);
				brush.scale(this.scaleNum,this.scaleNum);
				brush.drawImage(Json["web"],
					x,y,w,h,
					-w/2,-h/2,w,h
				);
				brush.restore();
			}
		};