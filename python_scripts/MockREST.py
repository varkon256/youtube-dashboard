from flask import Flask, request
from flask_restful import Api, Resource, reqparse
import parser
import json

app = Flask(__name__)
api = Api(app)

class VideoComment(Resource):
    def get(self):

        comment = exec(open("parser.py").read())

        return json.dumps(comment)
    def put(self, video_id):

        pass
    def post(self):
        pass

api.add_resource(VideoComment, "/comment")






if __name__ == '__main__':
    app.run(debug=True)