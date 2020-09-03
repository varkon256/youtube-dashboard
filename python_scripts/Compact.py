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
import json


CLIENT_SECRETS_FILE = "desktop.json" #file

SCOPES = "https://www.googleapis.com/auth/youtube.force-ssl"
API_SERVICE_NAME = "youtube"
API_VERSION = "v3"

def get_authenticated_service():
    credentials = None
    if os.path.exists('token.pcikle'):
        with open('token.pcikle','rb') as token:
            credentials = pickle.load(token)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refesh_token:
            credentials.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS_FILE, SCOPES)
            credentials = flow.run_console()
        with open('token.pickle', 'wb') as token:
            pickle.dump(credentials, token)
    return build(API_SERVICE_NAME, API_VERSION, credentials= credentials)

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
        # Check if another page exists
        if 'nextPageToken' in results:
            kwargs['pageToken'] = results['nextPageToken']
            results = service.commentThreads().list(**kwargs).execute()
        else:
            break
    #write_to_csv(comments)

    return comments

def run_script():
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    service = get_authenticated_service()
    videoId = input('Enter video ID')
    comments = get_video_comments(service, part='snippet', videoId=videoId, textFormat='plainText')
    return comments


if __name__ == "__main__":
    comments_final = run_script()  # list type
    with open('comments.csv', 'w', encoding='utf8', newline='') as file:
        output_writer = csv.writer(file)
        for line in comments_final:
            output_writer.writerow([line])

    # print(comments_final)
