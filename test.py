import requests
BASE_URL = "http://127.0.0.1:5000/"

get_response = requests.put(BASE_URL + "video/32", {"likes": 15})
print(get_response.json())