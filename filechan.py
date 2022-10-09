import requests
import sys

files = {
    'file': (sys.argv[1], open(sys.argv[1], 'rb')),
}

url = 'https://api.filechan.org/upload'
response = requests.post(url, files=files)

data = response.json()
print('*File Name :* '+data['data']['file']['metadata']['name'])
print('*File Size   :* '+data['data']['file']['metadata']['size']['readable'])
print('*File Link   :* '+data['data']['file']['url']['full'])