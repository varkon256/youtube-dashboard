import os
import google.oauth2.credentials
from googleapiclient.errors import HttpError
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
import csv
from dateutil.parser import parse
from textblob import TextBlob

SCOPES = "https://www.googleapis.com/auth/youtube.force-ssl"
API_SERVICE_NAME = "youtube"
API_VERSION = "v3"
DEVELOPER_KEY = os.environ['API_KEY']

def get_service():
    return build(API_SERVICE_NAME, API_VERSION, developerKey=DEVELOPER_KEY)

def get_video_comments(service, **kwargs):
    comments = []
    results = service.commentThreads().list(**kwargs).execute()
    while results:
        for item in results['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
            comments.append(comment)
        if 'nextPageToken' in results:
            kwargs['pageToken'] = results['nextPageToken']
            results = service.commentThreads().list(**kwargs).execute()
        else:
            break
    return comments


def get_video_details(service, **kwargs):
    results = service.videos().list(**kwargs).execute()
    details = {}
    while results:
        for item in results['items']:
            details['title'] = item['snippet']['title']
            details['thumbnail'] = item['snippet']['thumbnails']['medium']['url']
            details['viewCount'] = item['statistics']['viewCount']
            details['likeCount'] = item['statistics']['likeCount']
            details['commentCount'] = item['statistics']['commentCount']
            dt = parse(item['snippet']['publishedAt'])
            details['date'] = dt.strftime('%d %b %Y')
        break
    return details


def run_details_script(videoId):
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_service()
    details = get_video_details(service, part=['snippet', 'statistics'], id=videoId)
    return details


def run_script(videoId):
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_service()
    comments = get_video_comments(service, part='snippet', videoId=videoId, textFormat='plainText', maxResults=10000)
    return comments

def GetPolarity(comments):
    comms = comments
    pols = []
    for comm in comms:
        pols.append(TextBlob(comm).sentiment.polarity)
    return pols