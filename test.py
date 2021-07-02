import json
with open('json_files/english_test.json') as json_file:
    data = json.load(json_file)

print(data.items())