from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import parser

app = Flask(__name__)
api = Api(app)

items = {}
class YoutubeComments(Resource):
  def get(self):
    return items['video_url']

  def put(self):
    items['video_id'] = request.form['id']
    return jsonify(parser.run_script(items['video_id']))

api.add_resource(YoutubeComments, 
                  '/')

if __name__ == '__main__':
  app.run(debug=True)