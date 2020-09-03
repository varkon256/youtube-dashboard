from textblob import TextBlob
import matplotlib.pyplot as plt


# open and read comments csv file
with open('comments.csv') as file:
    comms = file.readlines()
    # print(comms)

pols = []  # Array with the comments' polarity scores
for comm in comms:
    pols.append(TextBlob(comm).sentiment.polarity)


# plot the polarity results in histogram
cm = plt.cm.get_cmap('RdYlGn')
n, bins, patches = plt.hist(pols, 
                            bins=5,
                            range=(-1,1), 
                            color='green')

# *** n is the array with the data that we'd like to plot
# it contains the ammount of comments in each of 5 evenly spaced bins
# needs to be sent to React ***



# If the latter approach doesn't work, we can create a png and render that instead
bin_centers = 0.5 * (bins[:-1] + bins[1:])

col = bin_centers - min(bin_centers)
col /= max(col)

for c, p in zip(col, patches):
    plt.setp(p, 'facecolor', cm(c))

x_locs = [-1,0,1]
x_labels = ['Negative', 'Neutral', 'Positive']
plt.xticks(x_locs, x_labels)
plt.yticks([])
plt.rcParams["figure.figsize"] = 10,4
plt.savefig('./images/sent_analysis.png', bbox_inches='tight')
#plt.show()