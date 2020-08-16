import numpy as np

GRID_SIZE = 100


def init_grid():
    """
    Initialize the grid 

    Returns
    -------
    grid : np.array(dtype=int32)
        Initialized grid

    """

    # Initialize grid as random noise of 0 and 1
    # Width is set as (size of grid + 2) to handle the side edges
    grid = np.random.choice([0, 1], size=(GRID_SIZE, GRID_SIZE + 2))

    return grid


def simulate_grid(rule):
    """
    Simulate the grid according to the rules

    Parameters
    ----------
    rule : list
        set of rules of the cellular automaton

    Returns
    -------
    grid : np.array(dtype=int32)
        simulated result of the grid

    """

    grid = init_grid()
    mask = np.array([4, 2, 1], dtype=np.int32)  # mask to get the state of cells above

    # Iterate through row 1 ~ 99, skip row 0 since it is an initial state
    for y in range(1, GRID_SIZE):
        # Iterate through column 1 ~ 100, skip column 0 and 101 since they are side edges
        for x in range(1, GRID_SIZE + 1):
            pattern = grid[y - 1, x - 1 : x + 2]  # States of 3 cells above
            previous_state = 7 - np.sum(mask * pattern)  # 111 is 0, ..., 000 is 7
            grid[y, x] = rule[previous_state]

    return grid


def get_grid(rule):
    """
    Get the simulated grid

    Returns
    -------
    grid : list
        simulated result of the grid

    """

    grid = simulate_grid(rule)
    # Exclude side edges
    grid = grid[:, 1 : GRID_SIZE + 1]
    # Need to convert numpy array to list because array can not be converted to JSON format
    grid = grid.tolist()

    return grid
