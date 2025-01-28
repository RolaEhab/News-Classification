# News-Classification

This project combines data analysis, machine learning, and a React-based web application to predict the authenticity of news articles.

### Key Features:
- **Python** for data analysis and machine learning models
- **Jupyter Notebook** for exploration and analysis
- **scikit-learn** for machine learning
- **React** for building the front-end web application
- **Flask** for backend API

  <video controls>
    <source src="New Folder/NewsPredVideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

### To Run the Project on VS:

#### 1. **Setting Up the Backend**:
- **a.** Download all Python dependencies in the `requirements.txt`:
  
  `pip install -r requirements.txt`

- **b.** Run the Flask backend API:

  `python app.py`

#### 2. **Setting Up the Frontend (React)**:
- **a.** Install the Node.js dependencies:

  `npm install`

- **b.** If your `package.json` doesn't contain Tailwind, add it:
  
  ```json
  {
    "dependencies": {
      "react": "^17.0.0",
      "react-dom": "^17.0.0",
      "react-scripts": "^4.0.0",
      "tailwindcss": "^2.0.0"
    }
  }
Then, install Tailwind:

npm install tailwindcss

c. Run the React app by navigating to the directory where the React app is located:

npm start

d. If the app doesn't open automatically, open your browser and go to:

http://localhost:3000


