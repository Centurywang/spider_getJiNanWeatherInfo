//�������
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

//��������ҳ���
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/index.js\"></script>");

//������������ҳ�����졢3�졢7�졢10�졢15�졢30��Ĺ��
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/cityindex.js\"></script>");

//��������ʷҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/lishi.js\"></script>");

//��������������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/air.js\"></script>");

//����������ָ��ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/chuanyi.js\"></script>");

//��������������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/world.js\"></script>");

//����������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/jingdian.js\"></script>");

//������������Ѷ������Ԥ��ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/news.js\"></script>");

//����������ҳ���� ��:������Ƶ��������ͼ�����·ֲ��ȶ������λ
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/danye.js\"></script>");

//������������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/wnl.js\"></script>");

//����������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/yangsheng.js\"></script>");

//��������ʶҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/changshi.js\"></script>");

//�������ٿ�ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/baike.js\"></script>");

//������ʱ��ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/shicha.js\"></script>");

//����������ҳ����
document.writeln("<script type=\"text/javascript\" src=\"//www.tianqi.com/static/tqgg/jieri.js\"></script>");