
		class Coin{
			constructor(type){
				this.type=type||1,
				this.x=0;
				this.y=0;
				this.cur=0;
				this.timer=null;
				this.move();
				this.play();
			}

			move(){				
				var _this=this;
				clearInterval(this.timer);
				this.timer=setInterval(function(){
					_this.cur++; //旋转
					if(_this.cur>=10){
						_this.cur=0;
					}

					//移动
					_this.x+= (0-_this.x)/20;
					_this.y+= (600-80-_this.y)/20;
					// console.log(_this.x,_this.y);
				},20);
			}

			draw(brush){
				brush.save();
				brush.drawImage(Json["coinAni"+this.type],
					0,this.cur*60,60,60,
					this.x,this.y,60,60
				);
				brush.restore();
			}

			play(){
				var audio=new Audio();
				audio.src="./snd/coin.wav";
				audio.play();
			}

		}