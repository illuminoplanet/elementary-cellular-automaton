from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from simulate import get_grid

app = Flask("__main__")


@app.route("/api/return-grid", methods=["POST"])
def return_grid():
    """
    Return the grid 

    Returns
    -------
    grid : dict
        Simulated grid, will be automatically converted from dict to JSON format

    """
    rule = request.json["rule"]  # Get the rules
    grid = get_grid(rule)  # Simulate the grid accordingly
    return {"grid": grid}


CORS(app)
app.run(debug=True)
