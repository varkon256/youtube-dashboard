from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import parser
import re

app = Flask(__name__)
api = Api(app)

timestamps = {}
items = {}

class YoutubeComments(Resource):
  def get(self):
    return items['video_id']

  def put(self):
    items['video_id'] = request.form['id']
    items['comments'] = parser.run_script(items['video_id'])
    return items['comments']

class CommentTimestamp(Resource):
  def get(self):
    if (timestamps == {}):
      timestamp = re.compile('[0-9]+:[0-9]+')
      for comment in items['comments']:
        m = timestamp.search(comment)
        if(m):
          print(m.group())
          if (m.group() in timestamps):
            timestamps[m.group()].append(comment)
          else:
            timestamps[m.group()] = [comment]
    return jsonify(timestamps)

class VideoDetails(Resource):
  def get(self):
    return items['video_id']
  def put(self):
    items['video_id'] = request.form['id']
    items['details'] = parser.run_details_script(items['video_id'])
    return jsonify(items['details'])

api.add_resource(YoutubeComments, 
                  '/comments/')

api.add_resource(CommentTimestamp, '/comments/timestamp/')

api.add_resource(VideoDetails, '/details/')

if __name__ == '__main__':
  app.run(debug=True)