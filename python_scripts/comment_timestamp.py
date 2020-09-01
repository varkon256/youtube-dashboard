#!/usr/bin/env python
# coding: utf-8

# In[25]:


import pandas as pd
import re


# In[29]:


file = open('comments.txt', 'r')
comments_list = file.readlines()
comments = pd.DataFrame(comments_list, columns=["Comment"])


# In[30]:


def timestamp_comment(comments):
    comments_with_timestamp = []
    timestamp = re.compile('[0-9]*:[0-9]*')
    for index, row in comments.iterrows():
        if(timestamp.match(row['Comment'])):
            comments_with_timestamp.append(row['Comment'])
    return pd.DataFrame(comments_with_timestamp, columns = ["Comment"])


# In[31]:


timestamp_comment(comments)

