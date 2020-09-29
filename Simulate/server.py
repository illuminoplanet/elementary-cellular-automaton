from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

from simulate import get_grid

app = Flask("__main__")


@app.route("/api/return-grid", methods=["POST"])
def return_grid():
    """
    Return the simulated grid 

    Returns
    -------
    grid : dict 
        Simulated grid, will be automatically converted from dict to JSON format on return

    """

    rules = request.json["rules"]  # Get the rules
    grid = get_grid(rules)  # Simulate the grid according to the rule

    return {"grid": grid}


if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)
