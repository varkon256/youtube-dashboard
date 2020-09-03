from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import parser
import re
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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
    items['comments'] = parser.run_script(items['video_id'])
    if (timestamps == {}):
      timestamp = re.compile('[0-9]+:[0-9]+')
      for comment in items['comments']:
        m = timestamp.search(comment)
        if(m):
          comment = comment.replace(m.group(), "")
          if (m.group() in timestamps):
            timestamps[m.group()].append(comment)
          else:
            timestamps[m.group()] = [comment]
      times = list(timestamps.keys())
      times.sort()
      timestamps['list'] = times
      count = []
      for key in times:
        count.append(len(timestamps[key]))
      count.sort()
      timestamps['count'] = count
    return jsonify(timestamps)

class VideoDetails(Resource):
  def get(self):
    return items['video_id']
  def put(self):
    items['video_id'] = request.form['id']
    items['details'] = parser.run_details_script(items['video_id'])
    return jsonify(items['details'])

class PolarityScore(Resource):
  def get(self):
    return items['video_id']
  def put(self):
    items['video_id'] = request.form['id']
    items['polarity_score'] = parser.GetPolarity(items['video_id'])
    return jsonify(items['polarity_score'])

class Initialize(Resource):
  def put(self):
    items['video_id'] = request.form['id']
    items['details'] = parser.run_details_script(items['video_id'])
    items['comments'] = parser.run_script(items['video_id'])
    items['polarity_score'] = parser.GetPolarity(items['comments'])
    if (timestamps == {}):
      timestamp = re.compile('[0-9]+:[0-9]+')
      for comment in items['comments']:
        m = timestamp.search(comment)
        if(m):
          comment = comment.replace(m.group(), "")
          if (m.group() in timestamps):
            timestamps[m.group()].append(comment)
          else:
            timestamps[m.group()] = [comment]
      times = list(timestamps.keys())
      times.sort()
      timestamps['list'] = times
      count = []
      for key in times:
        count.append(len(timestamps[key]))
      count.sort()
      timestamps['count'] = count
    items['sentiment'] = {'positive' : 0, 'neutral' : 0, 'negative' : 0}
    for score in items['polarity_score']:
      if (score < -0.7):
        items['sentiment']['negative'] = items['sentiment']['negative'] + 1
      elif (score > 0.3):
        items['sentiment']['positive'] = items['sentiment']['positive'] + 1
      else:
        items['sentiment']['neutral'] = items['sentiment']['neutral'] + 1
    for key in items['sentiment'].keys():
      items['sentiment'][key] = int(items['sentiment'][key]/len(items['polarity_score']) * 100)
    items['timestamps'] = timestamps
    return items



api.add_resource(Initialize, '/init/')

api.add_resource(YoutubeComments,'/comments/')

api.add_resource(CommentTimestamp, '/comments/timestamp/')

api.add_resource(VideoDetails, '/details/')

api.add_resource(PolarityScore, '/score/')

if __name__ == '__main__':
  app.run(debug=True)
