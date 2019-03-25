from lxml import etree

'''
题目内容：
采集2018年3、4、5三个月份的济南市市区天气情况，
爬取内容包括日期、最高气温、最低气温、天气、风向、风力。
将结果保存到：weather.txt文件中。
'''
def save_data(file_path,data):
    '''
    保存数据到指定文件
    :param file_path: 文件路径
    :param data: 数据（列表）
    :return: None
    '''
    with open(file_path,'w',encoding='gbk') as f:
        for d in data:
            f.write(','.join(d)+'\n')

def read_html(file_path):
    '''
    读取文件内容
    :param file_path: 文件路径
    :return: html   文件内容
    '''
    with open(file_path) as f:
        html = f.read()
    return html

def xpath_search(html):
    '''
    通过xpath获取天气信息
    :param html: 网页内容
    :return: weather_info   天气信息
    '''
    weather_info = []
    html = etree.HTML(html)
    # 天气数据列表
    contents = html.xpath('//div[@class="tqtongji2"]//ul')
    for cont in contents:
        # 解析数据
        data = cont.xpath('.//li/a/text()')
        data.extend(cont.xpath('.//li/text()'))
        weather_info.append(data)
    return weather_info

def main():
    '''
    步骤：
        1. 获取网页内容
        2. 获取页面天气数据
        3. 保存到文件
    :return:
    '''
    # 文件路径列表 3、4、5月份天气页面
    file_path_list = ['data/天气网网页/济南3月份天气_济南3月份气温_济南2018年3月份历史天气—全球天气网.html','data/天气网网页/济南4月份天气_济南4月份气温_济南2018年4月份历史天气—全球天气网.html','data/天气网网页/济南5月份天气_济南5月份气温_济南2018年5月份历史天气—全球天气网.html']
    # 暂时保存数据
    data = []
    for i,file_path in enumerate(file_path_list):
        # 读取页面数据
        html = read_html(file_path)
        # 获取天气数据
        weather_info = xpath_search(html)
        # 去除4、5月分页面的第一行列名
        if i in [1,2]:
            data.extend(weather_info[1:])
        else:
            data.extend(weather_info)
    # 保存数据到文件
    #print(data)
    save_data('data/weather.txt',data)


main()