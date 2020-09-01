#!/usr/bin/env python
# coding: utf-8

# In[15]:


import pandas as pd
import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report


# In[16]:


file = open('comments.txt', 'r')
comments_list = file.readlines()
comments = pd.DataFrame(comments_list, columns=["Comment"])


# In[17]:


nltk.download('nps_chat')
posts = nltk.corpus.nps_chat.xml_posts()
posts_text = [post.text for post in posts]
#divide train and test in 80 20
train_text = posts_text[:int(len(posts_text)*0.8)]
test_text = posts_text[int(len(posts_text)*0.2):]
#Get TFIDF features
vectorizer = TfidfVectorizer(ngram_range=(1,3), 
                             min_df=0.001, 
                             max_df=0.7, 
                             analyzer='word')
X_train = vectorizer.fit_transform(train_text)
X_test = vectorizer.transform(test_text)
y = [post.get('class') for post in posts]
y_train = y[:int(len(posts_text)*0.8)]
y_test = y[int(len(posts_text)*0.2):]
gb = GradientBoostingClassifier(n_estimators = 400, random_state=0)
gb.fit(X_train, y_train)


# In[23]:


question_comments = []
for index, row in comments.iterrows():
    type_of_comment = gb.predict(vectorizer.transform([row['Comment']]))
    if (type_of_comment == 'ynQuestion' or type_of_comment == 'whQuestion' or '?' in row['Comment']):
        question_comments.append(row['Comment'])
question_comments


# In[ ]:




