from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask("__main__")


@app.route("/api", methods=["POST"])
def my_index():
    current_rules = request.json
    return {"hello": "hello"}


CORS(app)
app.run(debug=True)
