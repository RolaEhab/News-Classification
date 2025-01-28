from flask import Flask, request, jsonify
from sklearn.base import BaseEstimator, TransformerMixin
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import joblib
from flask_cors import CORS

# the cleaning method
def clean_text(text):
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(r'http\S+|www\S+', '', text)
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = text.lower()
    stop_words = set(stopwords.words('english'))
    words = text.split()
    lemmatizer = WordNetLemmatizer()
    lemmatized_words = [lemmatizer.lemmatize(word.lower()) for word in words if word.lower() not in stop_words]
    text = ' '.join(lemmatized_words)
    
    return text

class TextCleaner(BaseEstimator, TransformerMixin):
    def __init__(self):
        pass
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        return [clean_text(x) for x in X]
        
class ToDense(BaseEstimator, TransformerMixin):
    def __init__(self):
        pass
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        return X.toarray()
    

app = Flask(__name__)
CORS(app)

pipeline = joblib.load('news_classification_pipeline.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    article = data.get('article', "")
    if not article:
        return jsonify({"error": "No article provided"}), 400
    prediction = pipeline.predict([article])[0]
    output = "Real News" if prediction == 1 else "Fake News"
    return jsonify({"result": output})

if __name__ == '__main__':
    app.run(debug=True)


