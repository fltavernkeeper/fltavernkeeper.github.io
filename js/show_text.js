onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 1:
                $elem.innerText = "Start Your Engine";
                break;
            case 2:
                $elem.innerText = "即将开启一键启动模式o(￣▽￣)ノ";
                break;
            case 3:
                $elem.innerText = "3";
                break;
            case 4:
                $elem.innerText = "2";
                break;
            case 5:
                $elem.innerText = "1  (￣▽￣)/";
                break;
            case 6:
                $elem.innerText = "原神？";
                break;
            case 8:
                $elem.innerText = "王者？";
                break;
            case 10:
                $elem.innerText = "方舟？";
                break;
            case 12:
                $elem.innerText = "崩3？";
                break;
            case 14:
                $elem.innerText = "战双？";
                break;
            case 16:
                $elem.innerText = "深空？";
                break;
            case 18:
                $elem.innerText = "鸣潮？";
                break;
            case 20:
                $elem.innerText = "吃鸡？";
                break;
            case 22:
                $elem.innerText = "火影？";
                break;
            case 24:
                $elem.innerText = "迷你？";
                break;
            case 26:
                $elem.innerText = "MC？";
                    break;
            case 28:
                $elem.innerText = "蛋仔？";
                break;
            case 30:
                $elem.innerText = "三国？";
                break;
            case 32:
                $elem.innerText = "碧蓝？";
                break;
            case 34:
                $elem.innerText = "碧蓝？";
                break;
            case 36:
                $elem.innerText = "碧蓝？";
                break;
            case 38:
                $elem.innerText = "少前？";
                break;
            case 39:
                $elem.innerText = "药丸！";
                break;
            case 40:
                $elem.innerText = "妮姬？";
                break;
            case 42:
                $elem.innerText = "卡拉？";
                break;
            case 44:
                $elem.innerText = "尘白？";
                break;
            case 46:
                $elem.innerText = "灵魂？";
                break;
            case 48:
                $elem.innerText = "废狗？";
                break;
            case 50:
                $elem.innerText = "赛马？";
                break;
            case 52:
                $elem.innerText = "无期？";
                break;
            case 54:
                $elem.innerText = "未定？";
                break;
            case 56:
                $elem.innerText = "坎公？";
                break;
            case 58:
                $elem.innerText = "元气？";
                break;
            case 60:
                $elem.innerText = "塞尔？";
                break;
            case 62:
                $elem.innerText = "口袋？";
                break;
            case 64:
                $elem.innerText = "洛克？";
                break;
            case 66:
                $elem.innerText = "异度？";
                break;
            case 68:
                $elem.innerText = "女神？";
                break;
            case 70:
                $elem.innerText = "使命？";
                break;
            case 72:
                $elem.innerText = "战地？";
                break;
            case 74:
                $elem.innerText = "命运？";
                break;
            case 76:
                $elem.innerText = "逆战？";
                break;
            case 78:
                $elem.innerText = "暗区？";
                break;
            case 80:
                $elem.innerText = "塔科？";
                break;
            case 82:
                $elem.innerText = "联盟？";
                break;
            case 84:
                $elem.innerText = "反恐？";
                break;
            case 86:
                $elem.innerText = "辐射？";
                break;
            case 88:
                $elem.innerText = "泰坦？";
                break;
            case 90:
                $elem.innerText = "战锤？";
                break;
            case 92:
                $elem.innerText = "地铁？";
                break;
            case 94:
                $elem.innerText = "坦克？";
                break;
            case 96:
                $elem.innerText = "战舰？";
                break;
            case 98:
                $elem.innerText = "侠盗？";
                break;
            case 100:
                $elem.innerText = "赛博？";
                break;
            case 102:
                $elem.innerText = "黑魂？";
                break;
            case 104:
                $elem.innerText = "街霸？";
                break;
            case 106:
                $elem.innerText = "植物？";
                break;
            case 108:
                $elem.innerText = "保萝？";
                break;
            case 110:
                $elem.innerText = "贪吃？";
                break;
            case 112:
                $elem.innerText = "狼人？";
                break;
            case 114:
                $elem.innerText = "月圆？";
                break;
            case 116:
                $elem.innerText = "奥比？";
                break;
            case 118:
                $elem.innerText = "梦幻？";
                break;
            case 120:
                $elem.innerText = "逆水？";
                break;
            case 122:
                $elem.innerText = "部落？";
                break;
            case 124:
                $elem.innerText = "阴阳？";
                break;
            case 126:
                $elem.innerText = "游王？";
                break;
            case 128:
                $elem.innerText = "影诗？";
                break;
            case 130:
                $elem.innerText = "万智？";
                break;
            case 132:
                $elem.innerText = "昆特？";
                break;
            case 134:
                $elem.innerText = "柚子？";
                break;
            case 136:
                $elem.innerText = "八月？";
                break;
            case 138:
                $elem.innerText = "偶像？";
                break;
            case 140:
                $elem.innerText = "邦邦？";
                break;
            case 142:
                $elem.innerText = "拉拉？";
                break;
            case 144:
                $elem.innerText = "世界？";
                break;
            case 146:
                $elem.innerText = "暖暖？";
                break;
            case 148:
                $elem.innerText = "光遇？";
                break;
            case 150:
                $elem.innerText = "糖豆？";
                break;
            case 152:
                $elem.innerText = "动派？";
                break;
            case 154:
                $elem.innerText = "开罗？";
                break;
            case 156:
                $elem.innerText = "GT？";
                break;
            case 158:
                $elem.innerText = "神力？";
                break;
            case 160:
                $elem.innerText = "地平？";
                break;
            case 162:
                $elem.innerText = "尘埃？";
                break;
            case 164:
                $elem.innerText = "开拓？";
                break;
            case 166:
                $elem.innerText = "索拉？";
                break;
            case 168:
                $elem.innerText = "神原？";
                break;
            case 170:
            case 171:
            case 172:
            case 173:
            case 174:
            case 175:
            case 176:
                $elem.innerText = "(ꐦ°᷄д°᷅)启动启动，全部启动！";
                break;
            case 177:
                $elem.innerText = "启动完成，即将再次启动~ヘ(￣ω￣ヘ) ♪";
                break;
            case 178:
                $elem.innerText = "3";
                break;
            case 179:
                $elem.innerText = "2";
                break;
            case 180:
                $elem.innerText = "1";
                break;
	    case 181:
		click_cnt = 0;
		break;
            default:
		// 手动更换下面这行双引号里面的内容 如"😀"
                $elem.innerText = "启动！";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
        	anim = setInterval(function() {
	            if (++increase == 150) {
	                clearInterval(anim);
			$body.removeChild($elem);
	            }
	            $elem.style.top = y - 20 - increase + "px";
	            $elem.style.opacity = (150 - increase) / 120;
	        }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};