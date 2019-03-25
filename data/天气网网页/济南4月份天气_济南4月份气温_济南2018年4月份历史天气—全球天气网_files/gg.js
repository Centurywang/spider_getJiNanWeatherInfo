//公共广告
function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }

    var return_array = new Array();
    for (var i = 0; i<num; i++) {

        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}


document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/common.js\"></script>");

//天气网首页广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/index.js\"></script>");

//天气网城市首页、今天、3天、7天、10天、15天、30天的广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/cityindex.js\"></script>");

//天气网历史页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/lishi.js\"></script>");

//天气网空气质量页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/air.js\"></script>");

//天气网穿衣指数页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/chuanyi.js\"></script>");

//天气网国际天气页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/world.js\"></script>");

//天气网景点页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/jingdian.js\"></script>");

//天气网新闻资讯和天气预警页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/news.js\"></script>");

//天气网单个页面广告 如:天气视频、卫星云图、高温分布等独立广告位
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/danye.js\"></script>");

//天气网万年历页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/wnl.js\"></script>");

//天气网养生页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/yangsheng.js\"></script>");

//天气网常识页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/changshi.js\"></script>");

//天气网百科页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/baike.js\"></script>");

//天气网时差页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/shicha.js\"></script>");

//天气网节日页面广告
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/jieri.js\"></script>");