from konlpy.tag import Okt
import json
import numpy
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Activation, Dropout
from tensorflow.keras.optimizers import SGD
import pandas as pd


class TinkerBell:
    def __init__(self):
        self.data = open('./intents.json', encoding="utf8")
        self.words = []
        self.labels = []
        self.docs_x = []
        self.docs_y = []
        self.stemmer = Okt()
        self.training = []
        self.output = []
        self.out_empty = [0 for _ in range(len(labels))]

    def preprocess(self):
        # 패턴들을 읽습니다
        for intent in self.data['intents']:
            for pattern in intent['patterns']:
                #패턴들을 형태소로 부수어 줍니다
                wrds = []
                wrds_temp = self.stemmer.pos(pattern, norm=True, stem=True)
                #조사, 어미, punctuation은 제외해줍니다
                for word in wrds_temp:
                    if not word[1] in ["Josa","Eomi","Punctuation"]:
                        wrds.append(word[0])
                self.words.extend(wrds)
                self.docs_x.append(wrds)
                self.docs_y.append(intent["tag"])

            if intent['tag'] not in self.labels:
                self.labels.append(intent['tag'])
        # words리스트에서 중복되는 단어를 제거하고 정렬합니다
        words = sorted(list(set(words)))

    def process(self):
        # docs_x를 bag of words로 바꾸어준다
        for x, doc in enumerate(self.docs_x):
            bag = []

            for w in self.words:
                if w in doc:
                    bag.append(1)
                else:
                    bag.append(0)

            output_row = self.out_empty[:]
            output_row[self.labels.index(self.docs_y[x])] = 1

            self.training.append(bag)
            self.output.append(output_row)
        training = numpy.array(training)
        output = numpy.array(output)

        
    def train(self):
        self.data = open('./intents.json', encoding="utf8")

    def predict(self, messasge):
        pass
