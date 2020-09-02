# pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
"""Install all the requirements and importations"""
import os
import pickle
import google.oauth2.credentials
from googleapiclient.errors import HttpError
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
import csv
from dateutil.parser import parse
from textblob import TextBlob



CLIENT_SECRETS_FILE = "desktop.json" #make sure the folder is in the same directory
SCOPES = "https://www.googleapis.com/auth/youtube.force-ssl"
API_SERVICE_NAME = "youtube"
API_VERSION = "v3"


def get_authenticated_service():
    credentials = None
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            credentials = pickle.load(token)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refesh_token:
            credentials.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
            credentials = flow.run_console()
        with open('token.pickle', 'wb') as token:
            pickle.dump(credentials, token)
    return build(API_SERVICE_NAME, API_VERSION, credentials=credentials)


def write_to_csv(comments):
    with open('comments.csv', 'w') as comments_file:
        comments_writer = csv.writer(comments_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        comments_writer.writerow(['Video ID', 'Title', 'Comment'])
        for row in comments:
            comments_writer.writerow(list(row))


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
    service = get_authenticated_service()
    details = get_video_details(service, part=['snippet', 'statistics'], id=videoId)
    return details


def run_script(videoId):
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_authenticated_service()
    comments = get_video_comments(service, part='snippet', videoId=videoId, textFormat='plainText')
    return comments


def GetPolarity(videoId):
    comms = run_script(videoId)
    pols = []
    for comm in comms:
        pols.append(TextBlob(comm).sentiment.polarity)
    return pols






if __name__ == "__main__":
    final_comment = run_script()
    print(final_comment)
    print()
