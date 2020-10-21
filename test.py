import requests
BASE_URL = "http://127.0.0.1:5000/"

get_response = requests.put(BASE_URL + "video/1", { "name":"Parvesh", "likes": 15, "views": 10000})
print(get_response.json())

input()

get_response = requests.get(BASE_URL + "video/1")
print(get_response.json())