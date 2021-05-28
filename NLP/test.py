import re
#from collections import Counter

text = "it's hard sometimes to express time in numeric. for Example \n" \
       "1 1- when you say : eleven and half you may expressing it in more than one way" \
       "11:30 is the correct way without ^ : 1130 not 11.5 or 11,5 \n \n end of file today"
with open('regular.txt','r+') as f:

    while(True):
        try:
            f.write(text + '\n')
            expression = input()
            pattern = re.findall(r'{}'.format(expression),text)
            f.write("expression : {} \n output : {} \n \n \n".format(expression, pattern))
            print(pattern)
        except Exception as error:
            print("UnValid Regular Expression. Try again")