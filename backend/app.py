import os
import random

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/api/v1/check": {"origins": ["http://localhost:5500"]}},
)

RICK_ROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

HINTS = ["Its encoded", "Its encrypted"]


@app.route("/api/v1/check", methods=["POST"])
def check_content():
    data = request.get_json()
    secret = data.get("secret", "")

    if secret == os.environ.get("SECRET"):
        return jsonify({"status": "OK"}), 200
    else:
        rand_val = random.random()

        if rand_val < 0.30:
            return jsonify({"redirect": RICK_ROLL_URL}), 302
        elif 0.30 <= rand_val < 0.35:
            return jsonify({"hint": "Ceasers Cipher +3"}), 400
        else:
            hint = random.choice(HINTS)
            return jsonify({"hint": hint}), 400


if __name__ == "__main__":
    app.run()
