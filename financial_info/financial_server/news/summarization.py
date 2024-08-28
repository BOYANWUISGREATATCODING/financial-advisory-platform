from random import sample
import traceback
import asyncio
import re
import constants
import pandas as pd
from io import StringIO
import os
os.environ['http_proxy'] = '127.0.0.1:9999'
os.environ['https_proxy'] = '127.0.0.1:9999'
api_key = 'sk-oKq3aGK_aLIU0IFDx22yy0mswlrgvg76D-p7TtGIM7T3BlbkFJv92IV4eLjDf4DoDlXeK4Q3mUlUCBuZ_sEorgXO6s4A'
api_key = 'sk-e4838792df484cb8852e45b0502113bb'
from openai import OpenAI
import ast
client = OpenAI(api_key = "sk-proj-vvrJPgTpKj3uUeyesMgMT3BlbkFJuHOdgdbjZkwDzR9eGaDf")

prompt_2 = '''
请对以上财经新闻进行摘要并提取关键词。要求提取的关键词能够准确、全面、并且简洁地描述该新闻内容，让用户理解该新闻的主要含义。要求：在12个词以内完成对该新闻的全面摘要，并且只输出词语形式的摘要。请以如下格式给出答案：【关键词】：...。
'''

def get_summarization(new):
    prompt_1 = new+prompt_2
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                'role': 'user',
                'content': prompt_1
            }
        ],
        stream=False
    )
    result = completion.choices[0].message.content
    return result


# text = '据了解，Waymo在今年3月扩大了在旧金山半岛的无人驾驶出行服务，6月再次宣布在旧金山全域用户开放其无人驾驶出行服务， 778辆无人车在美国旧金山繁华市区开展全时段（7x24小时）、全无人、可收费的规模化运营。对此，Waymo 首席产品官表示，无人驾驶汽车不再是遥远的未来，已经成为现实。随着近期旧金山全域的无人驾驶的开放运营、无人车数量的激增和用户规模的增加，Waymo每周单量也反超中国最大的自动驾驶出行平台萝卜快跑。公开数据显示，自2022年5月落地武汉以来，萝卜快跑目前在武汉仅有400余辆无人车，每季度订单量约为82.6万单，平均每周约为6.8万单。'
# print(get_summarization(text))


