import numpy as np


def initialize_cells():
    
    grid = np.random.choice([0, 1], size=(100, 102))

    return grid


def simulate_cells(rules):

    grid = initialize_cells()
    mask = np.array([4, 2, 1])
    for y in range(1, 100):
        for x in range(1, 101):
            idx = 7-np.sum(mask*grid[y-1, x-1:x+2])
            grid[y, x] = rules[idx]
    return grid

def get_cells(rules):
    grid = simulate_cells(rules)
    grid = grid[:, 1:101]
    return grid.tolist()
