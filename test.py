import requests
BASE_URL = "http://127.0.0.1:5000/"

data = [
    { "title":"Parvesh", "likes": 15, "views": 10000},
    { "title":"Tim", "likes": 15, "views": 10000},
    { "title":"John", "likes": 15, "views": 10000}
]

for idx, video_obj in enumerate(data):

    get_response = requests.put(BASE_URL + "video/"+str(idx), video_obj)
    print(get_response.json())


input()

get_response = requests.get(BASE_URL + "video/2")
print(get_response.json())

input()

get_response = requests.get(BASE_URL + "video/21")
print(get_response.json())

input()

get_response = requests.delete(BASE_URL + "video/1")
print(get_response.json())