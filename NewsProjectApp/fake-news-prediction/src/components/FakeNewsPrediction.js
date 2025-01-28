import React, { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

const FakeNewsPrediction = () => {
  const [article, setArticle] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ article }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
      } else {
        setResult("No Article Available for prediction");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to connect to the server.");
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="text-center p-4 bg-indigo-600 text-white w-full shadow-md">
        <h1 className="text-2xl font-bold">News Prediction</h1>
        <p className="text-sm">
          Analyze the authenticity of your articles with AI
        </p>
      </header>
      <Card className="w-11/12 max-w-2xl mt-8 shadow-lg">
        <CardContent>
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Paste your article here..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
          <Button
            className="mt-4 w-full"
            onClick={handlePrediction}
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </Button>
          {result && (
            <div className="mt-4 text-center text-lg font-semibold">
              Prediction Result:{" "}
              <span
                className={
                  result === "Fake News" ? "text-red-500" : "text-green-500"
                }
              >
                {result}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FakeNewsPrediction;
