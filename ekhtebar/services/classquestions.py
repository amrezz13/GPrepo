import json
datafile= open("json_files/english_test.json")
data =json.load(datafile)

question_access=data['questions']

for question_data in question_access:
    split_question=question_data.split('_')
    if split_question[1]=='text':
        print("it's text")
    elif split_question[1]=='MCQ':
        print ("it's mcq")
    elif split_question[1]=='MAQ':    
        print ("it's maq")