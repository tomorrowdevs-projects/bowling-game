# Bowling Game

This kata demonstrates the power of doing tests first, and how up-front design decisions can change
and give way to a simpler implementation by coding iteratively.

Write a `BowlingGame` object with methods `roll(pins)` and `getScore()`.

This will be the game engine which follows the rules of bowling:

* The game consists of 10 frames, in each frame the player has the ability to knock down 10 pins.
* The score for the frame is the total number of pins knocked down + bonuses for `strikes` and `spares`.
* A `spare` is when the player knocks down all 10 pins in 2 tries. The bonus for a spare is the next roll.
* A `strike` is when the player knocks down all 10 pins in 1 try. The bonus is the next 2 rolls.
* In the tenth frame a player who rolls a spare / strike gets an extra roll(s) to complete the frame.
* No more than 3 rolls can be rolled in the 10th frame.


## Rules and Usage
1. Initialize this project with `npm` running `npm init`
2. Install and configure `Jest` as a testing library
3. To run the tests, run `npm run test`
4. Write the code following the **TDD** (Test Driven Development) approach

## The Three Rules of TDD
1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.




Before starting any of the tasks in this Learning Path, please READ the following rules
===============================

What do you need to start this Learning Path:
----------------
1. A GitHub account
3. A Local IDE or Editor
5. Git Environment
6. A http://toggl.com/ account and Chrome Extension
7. A Netlify account

Rules that you MUST follow:
----------------
- **Fork this repo into your own Github Account** as a **public** Repository
- **Create a Github Project** connected to the repository
- Read **carefully** the task description
- Analyze the task, and **create relative subtasks** to track any requirement and knowledge needed
- **Assign an estimate to each created subtask**
- Define a **deadline for the main task**
- **Provide a Flowchart within the project**
- Where required, involve other members of the community to support you on the development
- When working on a task, move it to the **In progress** column and start tracking it
- After each task completion, **move it to the "Done" column** and stop tracking it
- After the main task completion, share the solution (e.g. your GitHub repo) over the community

Following some useful materials for your work:
----------------

[Git and GitHub configuration and usage](https://www.loom.com/share/6b86aa3bc0aa4f2d88a315bc9d3209c4)

[Pseudo Code Methodology](https://wtmatter.com/pseudocode/)


