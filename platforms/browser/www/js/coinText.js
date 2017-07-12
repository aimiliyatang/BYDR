
		class CoinText{
			constructor(){
				this.x=0;
				this.y=0;
				this.cur=0;
				this.isNeedDel=false;
				this.hide();
			}

			draw(brush){
				brush.save();
				brush.drawImage(Json["coinText"],
					360,0,36,49,
					this.x+24,this.y-25,36,49
				);
				brush.drawImage(Json["coinText"],
					this.cur*36,0,36,49,
					this.x+50,this.y-25,36,49
				);
				brush.restore();
			}

			hide(){
				var _this=this;
				setTimeout(function(){
					_this.isNeedDel=true;
				},500);
			}
		}

		//绘制总分方法
		function drawScore(score,canvas,brush){
			switch(true){
				case score<10 :
							score="00000"+score;break;
				case score<100:
							score="0000"+score;break;
				case score<1000 :
							score="000"+score;break;
				case score<10000:
							score="00"+score;break;
				case score<100000 :
							score="0"+score;break;
				case score<1000000:
							score=""+score;break;
				default:score="999999";break;
			}
			//console.log(score);  w=17,h=20
			//金色的总分
			// for(var i=0;i<score.length;i++){
			// 	var num= +score[i];
			// 	brush.drawImage(Json["coinText"],
			// 		num*36,0,36,48,
			// 		23*(i+1)-2,canvas.height-26,16,20
			// 	);
			// }

			//黑色的总分
			for(var i=0;i<score.length;i++){
				var num= +score[i];
				brush.drawImage(Json["number_black"],
					0,24*(9-num),20,25,
					23*(i+1)-2,canvas.height-26,16,20
				);
			}
		}