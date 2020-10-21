import requests
BASE_URL = "http://127.0.0.1:5000/"


get_response = requests.get(BASE_URL + '/hello/parvesh/32')
print(get_response.json())