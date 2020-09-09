from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import re
import parser
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
api = Api(app)

timestamps = {}
items = {}

@app.route('/')
def index():
    return app.send_static_file('index.html')

# class YoutubeComments(Resource):
#   def get(self):
#     return items['video_id']

#   def put(self):
#     items['video_id'] = request.form['id']
#     items['comments'] = parser.run_script(items['video_id'])
#     return items['comments']

# class CommentTimestamp(Resource):
#   def get(self):
#     items['comments'] = parser.run_script(items['video_id'])
#     if (timestamps == {}):
#       timestamp = re.compile('[0-9]+:[0-9]+')
#       for comment in items['comments']:
#         m = timestamp.search(comment)
#         if(m):
#           comment = comment.replace(m.group(), "")
#           if (m.group() in timestamps):
#             timestamps[m.group()].append(comment)
#           else:
#             timestamps[m.group()] = [comment]
#       times = list(timestamps.keys())
#       times.sort()
#       timestamps['list'] = times
#       count = []
#       for key in times:
#         count.append(len(timestamps[key]))
#       count.sort()
#       timestamps['count'] = count
#     return jsonify(timestamps)

# class VideoDetails(Resource):
#   def get(self):
#     return items['video_id']
#   def put(self):
#     items['video_id'] = request.form['id']
#     items['details'] = parser.run_details_script(items['video_id'])
#     return jsonify(items['details'])

# class PolarityScore(Resource):
#   def get(self):
#     return items['video_id']
#   def put(self):
#     items['video_id'] = request.form['id']
#     items['polarity_score'] = parser.GetPolarity(items['video_id'])
#     return jsonify(items['polarity_score'])

# Convert Youtube timestamps to datetime format
def convert_timestamps(timestamps):
  ret = []
  for time in timestamps:
    try:
      parsed_time = datetime.strptime(time, "%M:%S").strftime("%M:%S")
      ret.append(parsed_time)
    except:
      pass
  ret.sort()
  return ret

class Initialize(Resource):
  def put(self):
    items = {}
    timestamps = {}
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
      timestamps['list'] = sorted(times)
      # timestamps['list'] = convert_timestamps(times)
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



api.add_resource(Initialize, '/api/init/')

# api.add_resource(YoutubeComments,'/comments/')

# api.add_resource(CommentTimestamp, '/comments/timestamp/')

# api.add_resource(VideoDetails, '/details/')

# api.add_resource(PolarityScore, '/score/')

if __name__ == "__main__":
    api.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))