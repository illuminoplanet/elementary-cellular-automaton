from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from simulate import get_cells

app = Flask("__main__")


@app.route("/api", methods=["POST"])
def my_index():
    current_rules = request.json["rules"]
    grid = get_cells(current_rules)
    return {"grid": grid}


CORS(app)
app.run(debug=True)
