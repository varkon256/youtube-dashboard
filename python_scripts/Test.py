import requests

BASE_URL = "http://127.0.0.1:5000/"

response = requests.get(BASE_URL + "comment")
print(response.json())



import parser
# com = ['Well said', 'Love the vid']
# print(type(com))
# loc = {}
if __name__ =="__main__":
    exec(open("parser.py").read())

    # exec("parser", globals(), loc)
    # ret = loc['final_comment']
    # print(ret)
    # print(type(ret))

    # com = comment
    # print(type(com))
    # int_list = map(int, comment)
    # print(int_list)
    # print(type(int_list))

    # lMNOTNhOcSs
com = ['Who else notice that at the starting gate the man release the horse late which made the jacket snap back.', 'The horse was like I can handle this ❤️❤️❤️❤️']
# print(type(com))