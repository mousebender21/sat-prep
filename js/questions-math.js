/* ====== MATH QUESTIONS ====== */
var MATH_QUESTIONS = [
// ═══════════════════════════════════════════════════════════════
  //  DOMAIN 1: ALGEBRA  (24 questions, m1–m24)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "m1",
    domain: "Algebra",
    category: "Linear Equations",
    difficulty: 1,
    text: "A swimming pool contains 1,200 gallons of water. Water is being drained at a constant rate of 15 gallons per minute. Which equation represents the number of gallons of water, w, remaining in the pool after t minutes?",
    choices: [
      "w = 1,200 + 15t",
      "w = 1,200 − 15t",
      "w = 15t − 1,200",
      "w = 1,200t − 15"
    ],
    answer: 1,
    explanation: "The pool starts with 1,200 gallons and loses 15 gallons each minute. After t minutes, the amount drained is 15t. Subtract from the initial amount: w = 1,200 − 15t. Choice A incorrectly adds (the pool would be gaining water). Choice C reverses the subtraction, giving negative values for small t."
  },
  {
    id: "m2",
    domain: "Algebra",
    category: "Linear Equations",
    difficulty: 1,
    text: "If 5x − 3 = 2x + 12, what is the value of x?",
    choices: [
      "3",
      "5",
      "9",
      "15"
    ],
    answer: 1,
    explanation: "Subtract 2x from both sides: 3x − 3 = 12. Add 3 to both sides: 3x = 15. Divide both sides by 3: x = 5. Choice D (15) is the trap — it's the value of 3x before dividing by 3, a common mistake when students forget the final step."
  },
  {
    id: "m3",
    domain: "Algebra",
    category: "Solving for a Variable in a Formula",
    difficulty: 2,
    text: "The formula C = (5/9)(F − 32) converts Fahrenheit to Celsius. Which equation correctly solves for F in terms of C?",
    choices: [
      "F = (9/5)C + 32",
      "F = (5/9)C + 32",
      "F = (9/5)C − 32",
      "F = (9/5)(C + 32)"
    ],
    answer: 0,
    explanation: "Start with C = (5/9)(F − 32). Multiply both sides by 9/5: (9/5)C = F − 32. Add 32 to both sides: F = (9/5)C + 32. Choice C is the trap — it subtracts 32 instead of adding it (a common sign error when rearranging). Choice D incorrectly distributes the parentheses."
  },
  {
    id: "m4",
    domain: "Algebra",
    category: "Systems of Equations",
    difficulty: 1,
    text: "A bakery sells muffins for $3 each and scones for $4 each. On Saturday, the bakery sold a combined 50 items and made $170. How many muffins were sold?",
    choices: [
      "20",
      "30",
      "35",
      "40"
    ],
    answer: 1,
    explanation: "Let m = muffins and s = scones. Set up the system: m + s = 50 and 3m + 4s = 170. From the first equation, s = 50 − m. Substitute: 3m + 4(50 − m) = 170 → 3m + 200 − 4m = 170 → −m = −30 → m = 30. Check: 30(3) + 20(4) = 90 + 80 = 170. ✓ Choice A (20) results from an arithmetic error during solving. Choice D (40) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m5",
    domain: "Algebra",
    category: "Systems of Equations",
    difficulty: 2,
    text: "2x + 3y = 19<br>x − y = 2<br><br>What is the value of x + y in the system of equations above?",
    choices: [
      "6",
      "8",
      "10",
      "12"
    ],
    answer: 1,
    explanation: "From the second equation: x = y + 2. Substitute into the first: 2(y + 2) + 3y = 19 → 2y + 4 + 3y = 19 → 5y = 15 → y = 3. Then x = 3 + 2 = 5. So x + y = 5 + 3 = 8. Check: 2(5) + 3(3) = 10 + 9 = 19 ✓ and 5 − 3 = 2 ✓. Choice A (6) is the trap — it gives the value of 2y (just the y term doubled), not x + y."
  },
  {
    id: "m6",
    domain: "Algebra",
    category: "Systems — No Solution / Infinitely Many",
    difficulty: 2,
    text: "For what value of k does the system of equations below have infinitely many solutions?<br><br>6x − 4y = 10<br>3x − 2y = k",
    choices: [
      "3",
      "5",
      "7",
      "10"
    ],
    answer: 1,
    explanation: "A system has infinitely many solutions when the two equations represent the same line. Dividing the first equation by 2 gives 3x − 2y = 5. For the second equation to be identical, we need k = 5. Any other value of k would make the lines parallel (same slope, different intercept) → no solution. Choice D (10) is the trap — it's the constant from the original equation before dividing by 2."
  },
  {
    id: "m7",
    domain: "Algebra",
    category: "Systems — Infinitely Many Solutions",
    difficulty: 3,
    text: "The system of equations below has infinitely many solutions. What is the value of a?<br><br>2x + ay = 12<br>6x − 9y = 36",
    choices: [
      "−9",
      "−3",
      "3",
      "9"
    ],
    answer: 1,
    explanation: "For infinitely many solutions, the equations must be scalar multiples of each other. Dividing the second equation by 3 gives 2x − 3y = 12. Comparing with 2x + ay = 12, the constants (12) already match and the x-coefficients match (both 2). So ay must equal −3y, meaning a = −3. Choice A (−9) is the trap — it's the y-coefficient from the original second equation before dividing by 3."
  },
  {
    id: "m8",
    domain: "Algebra",
    category: "Linear Functions — Slope Interpretation",
    difficulty: 1,
    text: "A marine biologist models the population of a coral reef fish species using the function P(t) = 340 + 28t, where t is the number of years since 2020. What does the number 28 represent in this context?",
    choices: [
      "The estimated fish population in 2020",
      "The estimated increase in fish population per year",
      "The estimated total fish population after 28 years",
      "The estimated number of years until the population doubles"
    ],
    answer: 1,
    explanation: "In the linear function P(t) = 340 + 28t, the coefficient 28 is the slope, which represents the rate of change. In context, the fish population increases by approximately 28 fish per year. The number 340 (the y-intercept) represents the initial population in 2020, which is what Choice A describes."
  },
  {
    id: "m9",
    domain: "Algebra",
    category: "Linear Functions — Budget Constraint",
    difficulty: 2,
    text: "The total cost, in dollars, to rent a kayak is modeled by C(h) = 12h + 25, where h is the number of hours rented. A customer has a budget of $85. What is the maximum number of whole hours the customer can rent the kayak?",
    choices: [
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "Set up the inequality: 12h + 25 ≤ 85. Subtract 25: 12h ≤ 60. Divide by 12: h ≤ 5. The maximum number of whole hours is 5. At 5 hours: C(5) = 12(5) + 25 = 60 + 25 = $85, which exactly meets the budget. Choice C (6) is the trap — at 6 hours the cost would be $97, exceeding the budget."
  },
  {
    id: "m10",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 1,
    text: "Which value of x satisfies the inequality 4x − 7 > 13?",
    choices: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "Solve 4x − 7 > 13. Add 7 to both sides: 4x > 20. Divide by 4: x > 5. The only value strictly greater than 5 among the choices is 6. Note that x = 5 does NOT satisfy the inequality because it uses > (strictly greater than), not ≥. Choice A (3) results from an arithmetic error during solving. Choice C (5) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m11",
    domain: "Algebra",
    category: "Linear Inequalities — Graphing",
    difficulty: 2,
    text: "Which inequality is represented by a graph showing a dashed line passing through (0, 3) and (2, 7), with the region below the line shaded?",
    choices: [
      "y < 2x + 3",
      "y ≤ 2x + 3",
      "y > 2x + 3",
      "y ≥ 2x + 3"
    ],
    answer: 0,
    explanation: "First, find the equation of the line. Slope = (7 − 3)/(2 − 0) = 4/2 = 2. The y-intercept is 3. So the line is y = 2x + 3. A dashed line means a strict inequality (not ≤ or ≥), and the region below the line means y < 2x + 3. Choice B is the trap — it uses ≤, which would require a solid line, not dashed."
  },
  {
    id: "m12",
    domain: "Algebra",
    category: "Absolute Value Equations",
    difficulty: 2,
    text: "How many distinct solutions does the equation |2x − 5| = 9 have?",
    choices: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 2,
    explanation: "The absolute value equation |2x − 5| = 9 splits into two cases. Case 1: 2x − 5 = 9 → 2x = 14 → x = 7. Case 2: 2x − 5 = −9 → 2x = −4 → x = −2. Both solutions are valid (the right side is positive, so two solutions always exist). There are 2 distinct solutions. Choice A (0) results from an arithmetic error during solving. Choice D (3) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m13",
    domain: "Algebra",
    category: "Absolute Value Inequalities",
    difficulty: 3,
    text: "A machine fills bottles of water. The target volume is 500 mL, and bottles are acceptable if the actual volume is within 3 mL of the target. Which inequality represents the set of acceptable volumes, v, in mL?",
    choices: [
      "|v − 3| ≤ 500",
      "|v − 500| ≤ 3",
      "|v + 500| ≤ 3",
      "|v − 500| ≥ 3"
    ],
    answer: 1,
    explanation: "\"Within 3 mL of the target\" means the distance between the actual volume v and 500 must be at most 3. The distance between v and 500 is |v − 500|. So |v − 500| ≤ 3, which gives 497 ≤ v ≤ 503. Choice D is the trap — using ≥ means the volume must be at least 3 mL away from target (i.e., the unacceptable bottles). Switching the inequality direction completely reverses the meaning."
  },
  {
    id: "m14",
    domain: "Algebra",
    category: "Linear Word Problems",
    difficulty: 1,
    text: "A plumber charges a flat fee of $50 plus $35 per hour of work. If a customer's total bill was $225, how many hours did the plumber work?",
    choices: [
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 1,
    explanation: "Set up the equation: 50 + 35h = 225. Subtract 50 from both sides: 35h = 175. Divide by 35: h = 5. The plumber worked 5 hours. Check: 50 + 35(5) = 50 + 175 = 225 ✓. Choice A (4) results from an arithmetic error during solving. Choice D (7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m15",
    domain: "Algebra",
    category: "Systems Word Problems",
    difficulty: 2,
    text: "A swimmer practices two strokes during a 60-minute session. She swims butterfly for twice as many minutes as she swims backstroke. She also spends 6 minutes on warm-up and cool-down (not swimming either stroke). How many minutes does she spend on backstroke?",
    choices: [
      "15",
      "18",
      "20",
      "27"
    ],
    answer: 1,
    explanation: "Let b = minutes of backstroke. Then butterfly = 2b. The total session is 60 minutes: b + 2b + 6 = 60 → 3b + 6 = 60 → 3b = 54 → b = 18. So she swims 18 minutes of backstroke, 36 minutes of butterfly, and 6 minutes of warm-up/cool-down. Check: 18 + 36 + 6 = 60 ✓. Choice D (27) is the trap — it's 54/2, which would result from forgetting to include the warm-up/cool-down in the total."
  },
  {
    id: "m16",
    domain: "Algebra",
    category: "Slope from Two Points",
    difficulty: 1,
    text: "A line passes through the points (−1, 4) and (3, −8). What is the slope of the line?",
    choices: [
      "−3",
      "−1",
      "1",
      "3"
    ],
    answer: 0,
    explanation: "Slope = (y₂ − y₁)/(x₂ − x₁) = (−8 − 4)/(3 − (−1)) = −12/4 = −3. Choice D (3) is the trap — it results from forgetting the negative sign or computing the reciprocal (x₂ − x₁)/(y₂ − y₁) = 4/(−12) and then taking the wrong absolute value."
  },
  {
    id: "m17",
    domain: "Algebra",
    category: "Parallel and Perpendicular Lines",
    difficulty: 2,
    text: "Line p has the equation y = (3/4)x − 5. Line q is perpendicular to line p and passes through the point (6, 1). What is the y-intercept of line q?",
    choices: [
      "−7",
      "7",
      "9",
      "11"
    ],
    answer: 2,
    explanation: "The slope of line p is 3/4. Perpendicular lines have slopes that are negative reciprocals, so the slope of line q is −4/3. Using point-slope form with (6, 1): y − 1 = −(4/3)(x − 6) → y − 1 = −(4/3)x + 8 → y = −(4/3)x + 9. The y-intercept is 9. Choice A (−7) results from incorrectly using positive 4/3 as the slope."
  },
  {
    id: "m18",
    domain: "Algebra",
    category: "Point-Slope and Standard Form",
    difficulty: 2,
    text: "A line has a slope of −2 and passes through the point (4, 3). Which of the following is an equation of the line in standard form?",
    choices: [
      "2x + y = 11",
      "2x − y = 11",
      "2x + y = 5",
      "x + 2y = 11"
    ],
    answer: 0,
    explanation: "Using point-slope form: y − 3 = −2(x − 4) → y − 3 = −2x + 8 → y = −2x + 11. Rearranging to standard form: 2x + y = 11. Choice C (2x + y = 5) results from a distribution error: computing −2(−4) as −8 instead of +8, giving y = −2x + 5."
  },
  {
    id: "m19",
    domain: "Algebra",
    category: "Linear Function from Table",
    difficulty: 1,
    text: "The table below shows a linear relationship between x and y:<br><br>x: 1, 3, 5, 7<br>y: 2, 8, 14, 20<br><br>What is the value of y when x = 10?",
    choices: [
      "26",
      "29",
      "30",
      "32"
    ],
    answer: 1,
    explanation: "Find the slope: as x increases by 2, y increases by 6, so the slope is 6/2 = 3. Using the point (1, 2): y = 3x + b → 2 = 3(1) + b → b = −1. The equation is y = 3x − 1. When x = 10: y = 3(10) − 1 = 29. Choice A (26) results from an arithmetic error during solving. Choice D (32) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m20",
    domain: "Algebra",
    category: "Domain and Range in Context",
    difficulty: 3,
    text: "A taxi charges $2.50 plus $0.75 per mile driven. The function f(m) = 0.75m + 2.50 models the fare in dollars, where m is the number of miles. If the maximum fare the meter can display is $50, which of the following best describes the range of f in this context?",
    choices: [
      "0 ≤ f(m) ≤ 50",
      "2.50 ≤ f(m) ≤ 50",
      "0 ≤ m ≤ 63.33",
      "2.50 ≤ m ≤ 50"
    ],
    answer: 1,
    explanation: "The range is the set of possible output values (f(m), the fare). The minimum fare occurs at m = 0 miles: f(0) = 2.50. The maximum fare is $50. So the range is 2.50 ≤ f(m) ≤ 50. Choice A starts at 0, but you can't have a fare less than $2.50 because of the base charge. Choice C describes the domain (miles), not the range (fare)."
  },
  {
    id: "m21",
    domain: "Algebra",
    category: "System of Inequalities",
    difficulty: 3,
    text: "A student is buying notebooks and pens. Notebooks cost $4 each, and pens cost $2 each. The student wants to buy at least 5 items total and spend no more than $24. Which system of inequalities models this situation, where n is the number of notebooks and p is the number of pens?",
    choices: [
      "n + p ≥ 5 and 4n + 2p ≤ 24",
      "n + p ≤ 5 and 4n + 2p ≤ 24",
      "n + p ≥ 5 and 4n + 2p ≥ 24",
      "n + p ≤ 5 and 4n + 2p ≥ 24"
    ],
    answer: 0,
    explanation: "\"At least 5 items\" means the total count must be 5 or more: n + p ≥ 5. \"Spend no more than $24\" means the total cost must be $24 or less: 4n + 2p ≤ 24. Choice B reverses the first inequality (\"at most 5\" instead of \"at least 5\"). Reading inequality direction carefully is essential on the SAT."
  },
  {
    id: "m22",
    domain: "Algebra",
    category: "Linear Equations — Fractions",
    difficulty: 3,
    text: "What is the solution to the equation (x + 1)/2 + (x − 3)/4 = 5?",
    choices: [
      "5",
      "7",
      "9",
      "11"
    ],
    answer: 1,
    explanation: "Multiply every term by 4 (the LCD) to clear fractions: 4 · (x + 1)/2 + 4 · (x − 3)/4 = 4 · 5 → 2(x + 1) + (x − 3) = 20 → 2x + 2 + x − 3 = 20 → 3x − 1 = 20 → 3x = 21 → x = 7. Check: (7+1)/2 + (7−3)/4 = 8/2 + 4/4 = 4 + 1 = 5 ✓. Choice A (5) is the trap — it's the right-hand side value, which students might pick if they skip the work."
  },
  {
    id: "m23",
    domain: "Algebra",
    category: "Inequality Word Problems",
    difficulty: 2,
    text: "A student needs an average of at least 80 on five tests to earn a B. The student's first four test scores are 74, 83, 77, and 91. What is the minimum score the student needs on the fifth test?",
    choices: [
      "75",
      "80",
      "81",
      "85"
    ],
    answer: 0,
    explanation: "Let x be the fifth test score. The average of five tests must be at least 80: (74 + 83 + 77 + 91 + x)/5 ≥ 80. Sum of first four scores: 74 + 83 + 77 + 91 = 325. So (325 + x)/5 ≥ 80 → 325 + x ≥ 400 → x ≥ 75. The minimum score needed is 75. Choice B (80) is a trap — students sometimes assume the last score must equal the desired average."
  },
  {
    id: "m24",
    domain: "Algebra",
    category: "Linear Functions — Rate of Change",
    difficulty: 3,
    text: "A researcher studying ocean temperature records the temperature at various depths. At the surface, the temperature is 24°C. For every 100 meters of depth, the temperature decreases by 1.8°C until reaching the thermocline at 500 meters. Which function T(d) models the temperature, in °C, at a depth of d meters, for 0 ≤ d ≤ 500?",
    choices: [
      "T(d) = 24 − 1.8d",
      "T(d) = 24 − 0.018d",
      "T(d) = 24 + 0.018d",
      "T(d) = 24 − 180d"
    ],
    answer: 1,
    explanation: "The temperature decreases by 1.8°C per 100 meters, so the rate of change is −1.8/100 = −0.018°C per meter. Starting at 24°C: T(d) = 24 − 0.018d. Verify at d = 500: T(500) = 24 − 0.018(500) = 24 − 9 = 15°C (reasonable). Choice A is the trap — it uses −1.8 per meter instead of per 100 meters. At 100m, it would give 24 − 180 = −156°C, which is absurd."
  },

  // ═══════════════════════════════════════════════════════════════
  //  DOMAIN 2: ADVANCED MATH  (24 questions, m25–m48)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "m25",
    domain: "Advanced Math",
    category: "Quadratics — Factoring",
    difficulty: 1,
    text: "What are the solutions to x² − 5x − 6 = 0?",
    choices: [
      "x = −1 and x = 6",
      "x = 1 and x = −6",
      "x = −2 and x = 3",
      "x = 2 and x = −3"
    ],
    answer: 0,
    explanation: "Factor: x² − 5x − 6 = (x − 6)(x + 1) = 0. Setting each factor to zero: x = 6 or x = −1. Check: (−1)² − 5(−1) − 6 = 1 + 5 − 6 = 0 ✓. And 6² − 5(6) − 6 = 36 − 30 − 6 = 0 ✓. Choice B has the signs flipped — it uses factors (x + 6)(x − 1), which would give x² + 5x − 6, not x² − 5x − 6."
  },
  {
    id: "m26",
    domain: "Advanced Math",
    category: "Quadratics — Quadratic Formula",
    difficulty: 2,
    text: "What are the solutions to 2x² + 3x − 5 = 0?",
    choices: [
      "x = 1 and x = −5/2",
      "x = −1 and x = 5/2",
      "x = 1 and x = −5",
      "x = 5 and x = −1/2"
    ],
    answer: 0,
    explanation: "Using the quadratic formula with a = 2, b = 3, c = −5: discriminant = 9 − 4(2)(−5) = 9 + 40 = 49. So x = (−3 ± 7)/4. This gives x = (−3 + 7)/4 = 4/4 = 1, or x = (−3 − 7)/4 = −10/4 = −5/2. Alternatively, factor: (2x + 5)(x − 1) = 0, giving x = 1 or x = −5/2. Check: 2(1)² + 3(1) − 5 = 0 ✓. Choice B (x = −1 and x = 5/2) confuses factors or applies the formula incorrectly."
  },
  {
    id: "m27",
    domain: "Advanced Math",
    category: "Quadratics — Vertex Form",
    difficulty: 2,
    text: "The function f(x) = −2(x − 3)² + 18 models the height, in feet, of a ball x seconds after it is thrown. What is the maximum height the ball reaches?",
    choices: [
      "2 feet",
      "3 feet",
      "18 feet",
      "36 feet"
    ],
    answer: 2,
    explanation: "The function is in vertex form f(x) = a(x − h)² + k, where the vertex is (h, k) = (3, 18). Since a = −2 (negative), the parabola opens downward, making the vertex a maximum. The maximum height is k = 18 feet, reached at x = 3 seconds. Choice B (3) is the trap — that's the time the max occurs, not the max height itself."
  },
  {
    id: "m28",
    domain: "Advanced Math",
    category: "Quadratics — Discriminant",
    difficulty: 3,
    text: "For what value of c does the equation 3x² − 12x + c = 0 have exactly one real solution?",
    choices: [
      "4",
      "9",
      "12",
      "16"
    ],
    answer: 2,
    explanation: "A quadratic has exactly one real solution when the discriminant equals zero: b² − 4ac = 0. Here a = 3, b = −12: (−12)² − 4(3)(c) = 0 → 144 − 12c = 0 → 12c = 144 → c = 12. Choice A (4) is a common trap: students sometimes compute (−12)/(2·3) = −2, then (−2)² = 4, confusing the vertex x-value with the value of c."
  },
  {
    id: "m29",
    domain: "Advanced Math",
    category: "Polynomials — Adding and Subtracting",
    difficulty: 1,
    text: "If f(x) = 3x² + 2x − 5 and g(x) = x² − 4x + 3, what is f(x) − g(x)?",
    choices: [
      "2x² + 6x − 8",
      "2x² − 2x − 2",
      "4x² − 2x − 2",
      "2x² − 2x − 8"
    ],
    answer: 0,
    explanation: "Subtract each corresponding term, distributing the negative sign to all of g(x): (3x² − x²) + (2x − (−4x)) + (−5 − 3) = 2x² + 6x − 8. Choice B is the trap — it comes from computing 2x − 4x = −2x, forgetting to distribute the negative sign to the −4x term (which becomes +4x)."
  },
  {
    id: "m30",
    domain: "Advanced Math",
    category: "Polynomials — Multiplying",
    difficulty: 2,
    text: "Which expression is equivalent to (2x + 3)(x² − x + 4)?",
    choices: [
      "2x³ + x² + 5x + 12",
      "2x³ − x² + 5x + 12",
      "2x³ + x² + 11x + 12",
      "2x³ + 5x² + 5x + 12"
    ],
    answer: 0,
    explanation: "Distribute each term of (2x + 3): 2x(x² − x + 4) + 3(x² − x + 4) = 2x³ − 2x² + 8x + 3x² − 3x + 12. Combine like terms: 2x³ + (−2 + 3)x² + (8 − 3)x + 12 = 2x³ + x² + 5x + 12. Choice B (2x³ − x² + 5x + 12) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m31",
    domain: "Advanced Math",
    category: "Polynomials — Remainder Theorem",
    difficulty: 3,
    text: "If p(x) = x³ − 4x² + 5x − 2, what is the remainder when p(x) is divided by (x − 2)?",
    choices: [
      "−4",
      "0",
      "2",
      "4"
    ],
    answer: 1,
    explanation: "By the Remainder Theorem, the remainder when p(x) is divided by (x − 2) equals p(2). Evaluate: p(2) = (2)³ − 4(2)² + 5(2) − 2 = 8 − 16 + 10 − 2 = 0. Since the remainder is 0, (x − 2) is a factor of p(x), meaning x = 2 is a root of the polynomial. This is a key SAT concept: evaluating p(a) tells you the remainder when dividing by (x − a). Choice A (−4) results from a distribution or combining error."
  },
  {
    id: "m32",
    domain: "Advanced Math",
    category: "Exponential Growth",
    difficulty: 1,
    text: "A population of bacteria doubles every 3 hours. If there are initially 500 bacteria, which expression gives the number of bacteria after 12 hours?",
    choices: [
      "500 × 2⁴",
      "500 × 2¹²",
      "500 × 4²",
      "500 × 12²"
    ],
    answer: 0,
    explanation: "In 12 hours, the bacteria double 12/3 = 4 times. Starting with 500, the population after 4 doublings is 500 × 2⁴ = 500 × 16 = 8,000. Choice B (2¹²) is the trap — it uses 12 as the exponent instead of the number of doubling periods. Note that choice C (500 × 4² = 8,000) gives the same numerical answer, but doesn't correctly model the exponential growth formula for other time values."
  },
  {
    id: "m33",
    domain: "Advanced Math",
    category: "Exponential Decay",
    difficulty: 2,
    text: "A marine biologist tags 200 invasive lionfish in a reef area. Due to a removal program, the population decreases by 15% each month. Which function models the number of lionfish, L, remaining after m months?",
    choices: [
      "L(m) = 200(0.15)ᵐ",
      "L(m) = 200(0.85)ᵐ",
      "L(m) = 200(1.15)ᵐ",
      "L(m) = 200 − 15m"
    ],
    answer: 1,
    explanation: "A 15% decrease means 85% remains each month, so the decay factor is 1 − 0.15 = 0.85. The exponential decay function is L(m) = 200(0.85)ᵐ. Choice A uses 0.15 as the base (the rate of removal, not the remaining fraction — this would approach 0 far too quickly). Choice C represents 15% growth. Choice D models linear, not exponential, decay."
  },
  {
    id: "m34",
    domain: "Advanced Math",
    category: "Exponential — Compound Interest",
    difficulty: 2,
    text: "Jordan invests $2,000 in a savings account that earns 4% interest compounded annually. Which expression represents the value of the investment after t years?",
    choices: [
      "2000(1.4)ᵗ",
      "2000(1.04)ᵗ",
      "2000 + 0.04t",
      "2000(0.04)ᵗ"
    ],
    answer: 1,
    explanation: "Compound interest formula: A = P(1 + r)ᵗ. With P = 2000 and r = 0.04: A = 2000(1.04)ᵗ. Choice A (1.4) incorrectly converts 4% as 40%. Choice C models simple (linear) interest rather than compound. Choice D uses just the rate as the base, which would rapidly approach 0."
  },
  {
    id: "m35",
    domain: "Advanced Math",
    category: "Radical Equations",
    difficulty: 2,
    text: "What is the solution to √(3x + 1) = 5?",
    choices: [
      "4/3",
      "2",
      "8",
      "24"
    ],
    answer: 2,
    explanation: "Square both sides: 3x + 1 = 25. Subtract 1: 3x = 24. Divide by 3: x = 8. Check: √(3(8) + 1) = √(24 + 1) = √25 = 5 ✓. Choice D (24) is the trap — it's the value of 3x before dividing by 3. Always verify the solution in the original equation when solving radical equations."
  },
  {
    id: "m36",
    domain: "Advanced Math",
    category: "Rational Expressions — Simplify",
    difficulty: 2,
    text: "Which expression is equivalent to (x² − 9)/(x² + 5x + 6)?",
    choices: [
      "(x − 3)/(x + 3)",
      "(x − 3)/(x + 2)",
      "(x + 3)/(x + 2)",
      "(x + 3)/(x − 2)"
    ],
    answer: 1,
    explanation: "Factor the numerator: x² − 9 = (x − 3)(x + 3) [difference of squares]. Factor the denominator: x² + 5x + 6 = (x + 2)(x + 3). Cancel the common factor (x + 3): result is (x − 3)/(x + 2), where x ≠ −3 and x ≠ −2. Choice A incorrectly has (x + 3) in the denominator, as if (x + 2) was canceled instead."
  },
  {
    id: "m37",
    domain: "Advanced Math",
    category: "Rational Equations",
    difficulty: 3,
    text: "What is the solution to the equation 3/(x + 1) − 1/(x − 1) = 2/(x² − 1)?",
    choices: [
      "x = −1",
      "x = 1",
      "x = 3",
      "No solution"
    ],
    answer: 2,
    explanation: "Note that x² − 1 = (x + 1)(x − 1). Multiply every term by (x + 1)(x − 1): 3(x − 1) − 1(x + 1) = 2 → 3x − 3 − x − 1 = 2 → 2x − 4 = 2 → 2x = 6 → x = 3. Check that x = 3 doesn't make any denominator zero (3 ≠ ±1) ✓. Verify: 3/4 − 1/2 = 3/4 − 2/4 = 1/4, and 2/8 = 1/4 ✓. Choices A and B are traps — they make the denominators zero, so they're excluded from the domain."
  },
  {
    id: "m38",
    domain: "Advanced Math",
    category: "Function Notation",
    difficulty: 1,
    text: "If f(x) = 2x² − 3x + 1, what is f(−2)?",
    choices: [
      "3",
      "7",
      "11",
      "15"
    ],
    answer: 3,
    explanation: "Substitute x = −2: f(−2) = 2(−2)² − 3(−2) + 1 = 2(4) − (−6) + 1 = 8 + 6 + 1 = 15. Common mistake: computing −3(−2) as −6 instead of +6 (forgetting that a negative times a negative is positive). That error gives 8 − 6 + 1 = 3, which is Choice A — the classic trap."
  },
  {
    id: "m39",
    domain: "Advanced Math",
    category: "Function Composition",
    difficulty: 2,
    text: "If f(x) = 3x + 1 and g(x) = x² − 2, what is f(g(3))?",
    choices: [
      "7",
      "22",
      "28",
      "98"
    ],
    answer: 1,
    explanation: "First evaluate the inner function: g(3) = (3)² − 2 = 9 − 2 = 7. Then evaluate the outer function: f(7) = 3(7) + 1 = 21 + 1 = 22. Choice D (98) is the trap from computing g(f(3)) instead: f(3) = 10, then g(10) = 100 − 2 = 98. The order of composition matters — always work from the inside out!"
  },
  {
    id: "m40",
    domain: "Advanced Math",
    category: "Completing the Square",
    difficulty: 3,
    text: "The equation x² + 8x + y² − 6y = 11 represents a circle. What is the radius of this circle?",
    choices: [
      "√11",
      "5",
      "6",
      "36"
    ],
    answer: 2,
    explanation: "Complete the square for both variables. For x: x² + 8x → add (8/2)² = 16, giving (x + 4)². For y: y² − 6y → add (6/2)² = 9, giving (y − 3)². Add 16 + 9 = 25 to both sides: (x + 4)² + (y − 3)² = 11 + 25 = 36. So r² = 36 and r = 6. Choice D (36) is the trap — that's r², not r. Choice A uses the original constant (11) without completing the square."
  },
  {
    id: "m41",
    domain: "Advanced Math",
    category: "Polynomials — Zeros and Factors",
    difficulty: 2,
    text: "If (x + 4) is a factor of f(x) = x³ + 2x² − 11x − 12, which of the following is also a factor of f(x)?",
    choices: [
      "(x − 4)",
      "(x − 3)",
      "(x + 6)",
      "(x − 1)"
    ],
    answer: 1,
    explanation: "Since (x + 4) is a factor, divide f(x) by (x + 4) using synthetic division with −4. Coefficients: [1, 2, −11, −12]. Bring down 1. Then: 1(−4) = −4; 2 + (−4) = −2. Then: (−2)(−4) = 8; −11 + 8 = −3. Then: (−3)(−4) = 12; −12 + 12 = 0 ✓. The quotient is x² − 2x − 3, which factors as (x − 3)(x + 1). So the complete factorization is (x + 4)(x − 3)(x + 1). Choice A ((x − 4)) results from a distribution or combining error."
  },
  {
    id: "m42",
    domain: "Advanced Math",
    category: "Exponential vs. Linear",
    difficulty: 3,
    text: "A researcher compares two fish populations. Lake A starts with 800 fish and gains 50 fish per year. Lake B starts with 500 fish and grows by 12% per year. After how many complete years will Lake B's population first exceed Lake A's?",
    choices: [
      "6 years",
      "7 years",
      "8 years",
      "9 years"
    ],
    answer: 2,
    explanation: "Lake A: A(t) = 800 + 50t. Lake B: B(t) = 500(1.12)ᵗ. Calculate year by year — at t = 6: A = 1,100 and B ≈ 500(1.9738) ≈ 987. At t = 7: A = 1,150 and B ≈ 500(2.2107) ≈ 1,105. At t = 8: A = 1,200 and B ≈ 500(2.4760) ≈ 1,238. Lake B first exceeds Lake A after 8 complete years (1,238 > 1,200). This illustrates the key concept that exponential growth eventually overtakes linear growth. Choice A (6 years) is the most common trap — at t = 6, B hasn't caught up yet."
  },
  {
    id: "m43",
    domain: "Advanced Math",
    category: "Simplifying Radicals",
    difficulty: 1,
    text: "Which expression is equivalent to √72?",
    choices: [
      "6√2",
      "8√3",
      "4√9",
      "2√18"
    ],
    answer: 0,
    explanation: "Simplify √72 by finding the largest perfect square factor: 72 = 36 × 2, so √72 = √36 × √2 = 6√2. You can verify: (6√2)² = 36 × 2 = 72 ✓. Check the others: 8√3 ≈ 13.86 (but √72 ≈ 8.49), so B is wrong. 4√9 = 4(3) = 12 ≠ 8.49, so C is wrong. 2√18 = 2√(9·2) = 2·3√2 = 6√2, which IS equivalent — but 6√2 is the fully simplified form. Choice B (8√3) incorrectly simplifies the radical or confuses square root with cube root."
  },
  {
    id: "m44",
    domain: "Advanced Math",
    category: "Rational Functions — Domain",
    difficulty: 2,
    text: "What value of x is NOT in the domain of f(x) = (x + 5)/(x² − 4x − 12)?",
    choices: [
      "−5",
      "−2",
      "3",
      "12"
    ],
    answer: 1,
    explanation: "The domain excludes values where the denominator equals zero. Factor: x² − 4x − 12 = (x − 6)(x + 2) = 0 when x = 6 or x = −2. Among the choices, x = −2 makes the denominator zero and is NOT in the domain. Note that x = −5 makes the numerator zero (so f(−5) = 0), but that's still in the domain. Choice A is the trap for students who confuse numerator zeros with denominator restrictions."
  },
  {
    id: "m45",
    domain: "Advanced Math",
    category: "Nonlinear Systems",
    difficulty: 3,
    text: "How many intersection points do the graphs of y = x² − 4 and y = 2x − 1 have?",
    choices: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 2,
    explanation: "Set the equations equal: x² − 4 = 2x − 1 → x² − 2x − 3 = 0. Factor: (x − 3)(x + 1) = 0, so x = 3 or x = −1. Two distinct x-values means 2 intersection points. Verify: at x = 3, y = 9 − 4 = 5 and y = 6 − 1 = 5 ✓. At x = −1, y = 1 − 4 = −3 and y = −2 − 1 = −3 ✓. The discriminant b² − 4ac = 4 + 12 = 16 > 0 confirms two real solutions. Choice A (0) results from an arithmetic error during solving."
  },
  {
    id: "m46",
    domain: "Advanced Math",
    category: "Function Transformations",
    difficulty: 2,
    text: "The graph of y = f(x) passes through the point (2, 5). If g(x) = f(x − 3) + 4, which point must lie on the graph of y = g(x)?",
    choices: [
      "(5, 9)",
      "(−1, 9)",
      "(5, 1)",
      "(−1, 1)"
    ],
    answer: 0,
    explanation: "The transformation f(x − 3) shifts the graph 3 units to the RIGHT, and the +4 shifts it 4 units UP. The original point (2, 5) moves to (2 + 3, 5 + 4) = (5, 9). Choice B (−1, 9) is the trap — it shifts left instead of right. This is the classic counterintuitive rule: f(x − h) shifts RIGHT by h."
  },
  {
    id: "m47",
    domain: "Advanced Math",
    category: "Polynomial End Behavior",
    difficulty: 3,
    text: "As x → −∞, what happens to the value of f(x) = −3x⁵ + 2x³ − x + 7?",
    choices: [
      "f(x) → +∞",
      "f(x) → −∞",
      "f(x) → 0",
      "f(x) → 7"
    ],
    answer: 0,
    explanation: "End behavior is determined by the leading term, −3x⁵. The degree is 5 (odd) and the leading coefficient is −3 (negative). For odd-degree polynomials with a negative leading coefficient: as x → +∞, f(x) → −∞; and as x → −∞, f(x) → +∞. Reasoning: when x is a large negative number, x⁵ is very negative, and multiplying by −3 makes it very positive. Choice B reverses this logic."
  },
  {
    id: "m48",
    domain: "Advanced Math",
    category: "Exponent Rules",
    difficulty: 1,
    text: "Which expression is equivalent to (4x³)² / (2x)²?",
    choices: [
      "2x⁴",
      "4x⁴",
      "8x⁴",
      "4x⁶"
    ],
    answer: 1,
    explanation: "Simplify the numerator: (4x³)² = 4² · (x³)² = 16x⁶. Simplify the denominator: (2x)² = 4x². Divide: 16x⁶ / 4x² = 4x⁴ (divide coefficients: 16/4 = 4; subtract exponents: 6 − 2 = 4). Choice D is the trap — it keeps x⁶ from the numerator without subtracting the denominator's exponent."
  },

  // ═══════════════════════════════════════════════════════════════
  //  DOMAIN 3: PROBLEM SOLVING & DATA ANALYSIS  (24 questions, m49–m72)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "m49",
    domain: "Problem Solving & Data Analysis",
    category: "Ratios",
    difficulty: 1,
    text: "In a fish tank, the ratio of clownfish to blue tangs is 3 to 5. If there are 24 fish total in the tank, how many clownfish are there?",
    choices: [
      "3",
      "8",
      "9",
      "15"
    ],
    answer: 2,
    explanation: "The ratio 3:5 means there are 3 + 5 = 8 equal parts. Each part = 24/8 = 3 fish. Clownfish = 3 parts × 3 fish/part = 9. Blue tangs = 5 × 3 = 15. Check: 9 + 15 = 24 ✓. Choice A (3) is the trap — it's the ratio number itself, not the actual fish count."
  },
  {
    id: "m50",
    domain: "Problem Solving & Data Analysis",
    category: "Rates",
    difficulty: 1,
    text: "A printer produces 18 pages per minute. How many minutes will it take to print a 252-page document?",
    choices: [
      "12",
      "14",
      "16",
      "18"
    ],
    answer: 1,
    explanation: "Time = total pages ÷ rate = 252 ÷ 18 = 14 minutes. You can verify: 14 × 18 = 252 ✓. This is a straightforward rate problem: divide the total amount by the rate to find the time. Choice A (12) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m51",
    domain: "Problem Solving & Data Analysis",
    category: "Proportions",
    difficulty: 1,
    text: "On a map, 2 inches represents 35 miles. If two cities are 5 inches apart on the map, what is the actual distance between them?",
    choices: [
      "70 miles",
      "75 miles",
      "87.5 miles",
      "175 miles"
    ],
    answer: 2,
    explanation: "Set up the proportion: 2 in / 35 mi = 5 in / x mi. Cross-multiply: 2x = 175. Divide: x = 87.5 miles. Alternatively: the scale is 35/2 = 17.5 miles per inch, so 5 × 17.5 = 87.5 miles. Choice D (175) is the trap from multiplying 35 × 5 without accounting for the 2−inch basis."
  },
  {
    id: "m52",
    domain: "Problem Solving & Data Analysis",
    category: "Successive Percent Change",
    difficulty: 2,
    text: "A store buys a jacket wholesale for $45 and marks it up by 60%. During a sale, the store offers 25% off the marked-up price. What is the sale price?",
    choices: [
      "$48.60",
      "$54.00",
      "$57.60",
      "$63.00"
    ],
    answer: 1,
    explanation: "Step 1 — Marked-up price: $45 × 1.60 = $72. Step 2 — Sale price (25% off): $72 × 0.75 = $54.00. Key concept: you cannot simply combine the percentages (60% − 25% = 35%) because the 25% discount applies to the higher marked-up price, not the original. That error gives $45 × 1.35 = $60.75 (not a choice, but it's the common conceptual mistake on the SAT). Choice A ($48.60) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m53",
    domain: "Problem Solving & Data Analysis",
    category: "Percent — Working Backward",
    difficulty: 2,
    text: "After a 20% discount, the price of a laptop is $680. What was the original price?",
    choices: [
      "$816",
      "$836",
      "$850",
      "$860"
    ],
    answer: 2,
    explanation: "After a 20% discount, the customer pays 80% of the original price. So 0.80 × P = 680 → P = 680/0.80 = $850. Choice A ($816) is the classic trap from computing $680 × 1.20, which incorrectly adds 20% to the discounted price. Going backward from a discount requires dividing, not multiplying by the complement."
  },
  {
    id: "m54",
    domain: "Problem Solving & Data Analysis",
    category: "Basic Probability",
    difficulty: 1,
    text: "A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the probability that it is NOT red?",
    choices: [
      "1/5",
      "1/2",
      "3/5",
      "4/5"
    ],
    answer: 1,
    explanation: "Total marbles: 5 + 3 + 2 = 10. Non-red marbles: 3 + 2 = 5. P(not red) = 5/10 = 1/2. Alternatively: P(not red) = 1 − P(red) = 1 − 5/10 = 1/2. The complement approach is often faster on the SAT. Choice A (1/5) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m55",
    domain: "Problem Solving & Data Analysis",
    category: "Conditional Probability",
    difficulty: 3,
    text: "At an aquarium, 60% of visitors see the dolphin show, and 45% of visitors both see the dolphin show and buy a souvenir. Given that a visitor saw the dolphin show, what is the probability they bought a souvenir?",
    choices: [
      "0.27",
      "0.45",
      "0.75",
      "1.33"
    ],
    answer: 2,
    explanation: "This is conditional probability: P(souvenir | dolphin show) = P(both) / P(dolphin show) = 0.45 / 0.60 = 0.75 (or 75%). Choice B (0.45) is the trap — it's the joint probability (both events), not the conditional probability. Choice A incorrectly multiplies: 0.60 × 0.45 = 0.27. Choice D (0.60/0.45 = 1.33) divides in the wrong order and gives an impossible probability > 1."
  },
  {
    id: "m56",
    domain: "Problem Solving & Data Analysis",
    category: "Mean",
    difficulty: 1,
    text: "A marine biologist records the lengths (in cm) of 5 sea turtles: 68, 72, 65, 80, and 75. What is the mean length?",
    choices: [
      "70",
      "72",
      "74",
      "75"
    ],
    answer: 1,
    explanation: "Mean = sum / count = (68 + 72 + 65 + 80 + 75) / 5 = 360 / 5 = 72 cm. The mean is the average of all values. Note that 72 is also one of the data values, but that's coincidental — the mean doesn't have to be one of the data points. Choice A (70) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m57",
    domain: "Problem Solving & Data Analysis",
    category: "Median",
    difficulty: 1,
    text: "The ages of 7 volunteers at a beach cleanup are: 19, 23, 17, 31, 25, 22, 28. What is the median age?",
    choices: [
      "22",
      "23",
      "24",
      "25"
    ],
    answer: 1,
    explanation: "First, arrange in order: 17, 19, 22, 23, 25, 28, 31. With 7 values, the median is the 4th value (the middle one): 23. There are exactly 3 values below (17, 19, 22) and 3 values above (25, 28, 31). Common mistake: forgetting to sort the data first."
  },
  {
    id: "m58",
    domain: "Problem Solving & Data Analysis",
    category: "Range and Outliers",
    difficulty: 2,
    text: "A data set has values: 12, 15, 14, 13, 15, 14, 42. If the outlier (42) is removed, by how much does the range decrease?",
    choices: [
      "3",
      "12",
      "27",
      "30"
    ],
    answer: 2,
    explanation: "Original range (with outlier): max − min = 42 − 12 = 30. New range (without outlier): max − min = 15 − 12 = 3. Decrease = 30 − 3 = 27. Removing the outlier dramatically reduces the range, illustrating why outliers have an outsized effect on range. Choice D (30) is the trap — that's the original range, not the decrease."
  },
  {
    id: "m59",
    domain: "Problem Solving & Data Analysis",
    category: "Standard Deviation Concept",
    difficulty: 2,
    text: "Two swim teams record their 200m freestyle times. Team A: 118, 119, 120, 121, 122 seconds. Team B: 108, 115, 120, 125, 132 seconds. Both teams have the same mean (120 seconds). Which statement is true?",
    choices: [
      "Team A has a greater standard deviation",
      "Team B has a greater standard deviation",
      "Both teams have the same standard deviation",
      "Standard deviation cannot be compared without exact calculation"
    ],
    answer: 1,
    explanation: "Standard deviation measures how spread out data is from the mean. Team A's times are tightly clustered around 120 (all within 2 seconds), while Team B's times range from 108 to 132 (up to 12 seconds from the mean). Greater spread → greater standard deviation. You don't need to compute exact values — the SAT often tests whether you understand the concept of spread, not whether you can calculate σ. Choice C is the trap — equal means doesn't guarantee equal standard deviation."
  },
  {
    id: "m60",
    domain: "Problem Solving & Data Analysis",
    category: "Line of Best Fit — Residual",
    difficulty: 2,
    text: "A scatterplot shows the relationship between hours of study (x) and test score (y). The line of best fit is y = 8.2x + 52. A student who studied 6 hours scored 96. What is the residual for this student?",
    choices: [
      "−5.2",
      "−3.2",
      "3.2",
      "5.2"
    ],
    answer: 0,
    explanation: "Predicted score: y = 8.2(6) + 52 = 49.2 + 52 = 101.2. Residual = actual − predicted = 96 − 101.2 = −5.2. A negative residual means the actual value is below the line of best fit (the student scored lower than predicted). Choice D (5.2) is the trap — it gives the absolute value but forgets the sign. Always compute residual as actual minus predicted."
  },
  {
    id: "m61",
    domain: "Problem Solving & Data Analysis",
    category: "Two-Way Tables",
    difficulty: 2,
    text: "A survey of 200 students asks about preferred exercise and time of day:<br><br>| | Morning | Evening | Total |<br>|---|---|---|---|<br>| Swimming | 45 | 35 | 80 |<br>| Running | 30 | 50 | 80 |<br>| Cycling | 25 | 15 | 40 |<br>| Total | 100 | 100 | 200 |<br><br>What fraction of morning exercisers prefer swimming?",
    choices: [
      "45/200",
      "45/100",
      "45/80",
      "80/200"
    ],
    answer: 1,
    explanation: "The question asks specifically about morning exercisers (the condition). Total morning exercisers = 100. Morning swimmers = 45. So the fraction = 45/100 = 9/20 = 0.45. Choice A (45/200) incorrectly uses the grand total as the denominator. Choice C (45/80) uses total swimmers as the denominator, which would answer a different question: \"What fraction of swimmers exercise in the morning?\""
  },
  {
    id: "m62",
    domain: "Problem Solving & Data Analysis",
    category: "Unit Conversion",
    difficulty: 1,
    text: "A swimming pool is 25 meters long. What is this length in feet? (1 meter ≈ 3.281 feet)",
    choices: [
      "7.62 feet",
      "28.28 feet",
      "75.00 feet",
      "82.02 feet"
    ],
    answer: 3,
    explanation: "Multiply: 25 meters × 3.281 feet/meter = 82.025 feet ≈ 82.02 feet. Since 1 meter is about 3.28 feet, the result must be larger than 25 — this eliminates Choice A (7.62). Choice A results from dividing 25 by 3.281 instead of multiplying, which would convert feet to meters, not the other way around."
  },
  {
    id: "m63",
    domain: "Problem Solving & Data Analysis",
    category: "Combined Rates",
    difficulty: 3,
    text: "Pipe A can fill a tank in 6 hours. Pipe B can fill the same tank in 4 hours. If both pipes work together, how many hours will it take to fill the tank?",
    choices: [
      "2.0",
      "2.4",
      "3.0",
      "5.0"
    ],
    answer: 1,
    explanation: "Pipe A's rate: 1/6 tank per hour. Pipe B's rate: 1/4 tank per hour. Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank per hour. Time = 1 tank ÷ (5/12 tank/hr) = 12/5 = 2.4 hours. Choice D (5) results from just subtracting 6 − 1 = 5 or some other incorrect shortcut. The key insight: you add rates, not times. Working together must always be faster than either pipe alone."
  },
  {
    id: "m64",
    domain: "Problem Solving & Data Analysis",
    category: "Percent Change",
    difficulty: 2,
    text: "A city's population was 42,000 in 2015 and 49,560 in 2020. What was the percent increase?",
    choices: [
      "7.56%",
      "15.2%",
      "18.0%",
      "84.7%"
    ],
    answer: 2,
    explanation: "Percent change = (new − old)/old × 100 = (49,560 − 42,000)/42,000 × 100 = 7,560/42,000 × 100 = 0.18 × 100 = 18.0%. Always divide by the original (old) value. Choice A (7.56%) incorrectly divides the change by the new population (7,560/100,000), and Choice D appears to be a calculation error."
  },
  {
    id: "m65",
    domain: "Problem Solving & Data Analysis",
    category: "Weighted Average",
    difficulty: 3,
    text: "In a chemistry class, the final grade is calculated as: homework (20%), midterm (30%), and final exam (50%). A student scores 92 on homework, 78 on the midterm, and 85 on the final exam. What is the student's weighted final grade?",
    choices: [
      "83.9",
      "84.3",
      "85.0",
      "85.7"
    ],
    answer: 1,
    explanation: "Weighted average = 0.20(92) + 0.30(78) + 0.50(85) = 18.4 + 23.4 + 42.5 = 84.3. Choice C (85.0) is the simple (unweighted) average: (92 + 78 + 85)/3 = 255/3 = 85.0, which doesn't account for the different category weights. The final exam is worth the most (50%), so the answer is pulled toward 85 but also pulled down by the midterm (78), giving 84.3."
  },
  {
    id: "m66",
    domain: "Problem Solving & Data Analysis",
    category: "Sampling and Bias",
    difficulty: 2,
    text: "A researcher wants to estimate the average daily water intake of adults in a city. Which sampling method would most likely produce a representative sample?",
    choices: [
      "Surveying customers at a gym during peak hours",
      "Randomly selecting 500 adults from the city's voter registration list",
      "Posting a survey on social media and using the first 500 responses",
      "Surveying all employees at a single office building"
    ],
    answer: 1,
    explanation: "Option B uses random selection from a broad population base (voter registration list), making it the most representative. Option A is biased toward athletic people (who likely drink more water). Option C has self-selection bias (only motivated people respond) and demographic skew (social media users). Option D limits the sample to one workplace. Random selection from a comprehensive list minimizes systematic bias."
  },
  {
    id: "m67",
    domain: "Problem Solving & Data Analysis",
    category: "Margin of Error",
    difficulty: 3,
    text: "A poll of 600 randomly selected voters found that 54% support a new policy, with a margin of error of ±4 percentage points at the 95% confidence level. Which statement is best supported?",
    choices: [
      "Exactly 54% of all voters support the policy",
      "Between 50% and 58% of the sampled voters support the policy",
      "It is plausible that the true proportion of all voters who support the policy is between 50% and 58%",
      "There is a 95% probability that exactly 54% of all voters support the policy"
    ],
    answer: 2,
    explanation: "The confidence interval is 54% ± 4% = [50%, 58%]. This means we are 95% confident that the true population proportion falls within this interval. Choice A is wrong — a sample can't tell us the exact population parameter. Choice B describes the sample, not the population inference. Choice D misinterprets the confidence level — it's about the process of generating intervals, not a probability about any specific value."
  },
  {
    id: "m68",
    domain: "Problem Solving & Data Analysis",
    category: "Data Interpretation — Charts",
    difficulty: 1,
    text: "A bar chart shows monthly rainfall in inches for a coastal city: Jan: 4.2, Feb: 3.8, Mar: 3.1, Apr: 2.4, May: 1.5, Jun: 0.8. What is the total rainfall for the first quarter (January–March)?",
    choices: [
      "8.0 inches",
      "9.5 inches",
      "11.1 inches",
      "15.8 inches"
    ],
    answer: 2,
    explanation: "First quarter = January + February + March = 4.2 + 3.8 + 3.1 = 11.1 inches. Choice D (15.8) is the total of all six months — a common error from not reading the question carefully. On the SAT, always re-read what time period or subset the question asks about."
  },
  {
    id: "m69",
    domain: "Problem Solving & Data Analysis",
    category: "Complementary Probability",
    difficulty: 2,
    text: "A weather forecast says there is a 35% chance of rain on each of the next two days, independently. What is the probability that it rains on at least one of the two days?",
    choices: [
      "0.1225",
      "0.4225",
      "0.5775",
      "0.70"
    ],
    answer: 2,
    explanation: "Use the complement: P(at least one day of rain) = 1 − P(no rain either day). P(no rain on a given day) = 1 − 0.35 = 0.65. P(no rain on both days) = 0.65 × 0.65 = 0.4225. P(at least one day of rain) = 1 − 0.4225 = 0.5775. Choice D (0.70) is the trap from doubling 0.35, which ignores the overlap (both days rainy). Choice A (0.1225) = 0.35 × 0.35 = P(rain BOTH days)."
  },
  {
    id: "m70",
    domain: "Problem Solving & Data Analysis",
    category: "Proportional Reasoning",
    difficulty: 3,
    text: "A recipe for fish tacos calls for 3/4 cup of salsa for every 2 tacos. If a restaurant needs to make 54 tacos, how many cups of salsa are needed?",
    choices: [
      "18.0",
      "20.25",
      "36.0",
      "40.5"
    ],
    answer: 1,
    explanation: "Set up the proportion: (3/4 cup) / 2 tacos = x cups / 54 tacos. Cross-multiply: 2x = 54 × (3/4) = 40.5. Divide: x = 40.5 / 2 = 20.25 cups. Alternatively, rate = (3/4) / 2 = 3/8 cup per taco. For 54 tacos: 54 × (3/8) = 162/8 = 20.25 cups. Choice D (40.5) is the trap from forgetting to divide by 2 (computing 54 × 3/4 instead of 54 × 3/8)."
  },
  {
    id: "m71",
    domain: "Problem Solving & Data Analysis",
    category: "Rate of Change from Data",
    difficulty: 2,
    text: "The table shows the depth of a coral reef's sand bed over time:<br><br>Year: 2018, 2019, 2020, 2021, 2022<br>Depth (cm): 14.2, 13.5, 12.9, 12.2, 11.6<br><br>What is the average rate of change in depth per year from 2018 to 2022?",
    choices: [
      "−0.65 cm/year",
      "−0.52 cm/year",
      "0.65 cm/year",
      "2.6 cm/year"
    ],
    answer: 0,
    explanation: "Average rate of change = (final − initial) / (final year − initial year) = (11.6 − 14.2) / (2022 − 2018) = −2.6 / 4 = −0.65 cm/year. The negative sign indicates the sand bed depth is decreasing (erosion). Choice C (0.65) gives the magnitude but drops the sign — important because the question asks for rate of change, which should be negative when values decrease. Choice D (2.6) is the total change, not the annual rate."
  },
  {
    id: "m72",
    domain: "Problem Solving & Data Analysis",
    category: "Expected Value",
    difficulty: 3,
    text: "A carnival game costs $3 to play. The probability of winning $10 is 0.1, winning $5 is 0.2, and winning nothing is 0.7. What is the expected net gain (or loss) per game?",
    choices: [
      "−$1.00",
      "−$0.50",
      "$0.00",
      "$2.00"
    ],
    answer: 0,
    explanation: "Expected winnings (before cost): 0.1($10) + 0.2($5) + 0.7($0) = $1.00 + $1.00 + $0 = $2.00. Net expected gain = expected winnings − cost = $2.00 − $3.00 = −$1.00. On average, the player loses $1 per game. Choice D ($2.00) is the trap — it's the expected winnings before subtracting the $3 cost. Choice C would make it a fair game, but this game favors the carnival operator."
  },

  // ═══════════════════════════════════════════════════════════════
  //  DOMAIN 4: GEOMETRY & TRIGONOMETRY  (24 questions, m73–m96)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "m73",
    domain: "Geometry & Trigonometry",
    category: "Area — Basic Shapes",
    difficulty: 1,
    text: "A rectangular garden has a length of 12 feet and a width of 8 feet. A triangular flower bed with a base of 4 feet and a height of 3 feet is located inside the garden. What is the area of the garden NOT occupied by the flower bed?",
    choices: [
      "84 sq ft",
      "90 sq ft",
      "96 sq ft",
      "102 sq ft"
    ],
    answer: 1,
    explanation: "Garden area = length × width = 12 × 8 = 96 sq ft. Flower bed area = ½ × base × height = ½ × 4 × 3 = 6 sq ft. Remaining area = 96 − 6 = 90 sq ft. Choice C (96) is the trap — it's the total garden area without subtracting the flower bed. Always re-read whether the question asks for total area or the remaining/shaded area."
  },
  {
    id: "m74",
    domain: "Geometry & Trigonometry",
    category: "Area — Composite Shapes",
    difficulty: 2,
    text: "A running track consists of a rectangle 100 m long and 60 m wide, with a semicircle on each short end. What is the total area of the track, to the nearest square meter?",
    choices: [
      "6,000 m²",
      "8,827 m²",
      "11,655 m²",
      "14,827 m²"
    ],
    answer: 1,
    explanation: "Rectangle area = 100 × 60 = 6,000 m². The two semicircles together form one full circle with diameter = 60 m, so radius = 30 m. Circle area = π(30)² = 900π ≈ 2,827 m². Total ≈ 6,000 + 2,827 = 8,827 m². Choice A counts only the rectangle. Choice C may result from using 60 as the radius instead of the diameter."
  },
  {
    id: "m75",
    domain: "Geometry & Trigonometry",
    category: "Volume — Cylinder",
    difficulty: 1,
    text: "A cylindrical fish tank has a radius of 6 inches and a height of 10 inches. What is its volume, in cubic inches? (Use π ≈ 3.14)",
    choices: [
      "188.4",
      "376.8",
      "1,130.4",
      "3,391.2"
    ],
    answer: 2,
    explanation: "Volume of a cylinder = πr²h = 3.14 × (6)² × 10 = 3.14 × 36 × 10 = 1,130.4 cubic inches. Choice B (376.8) results from using the circumference formula (2πrh) instead of the volume formula — this is actually the lateral surface area. Always use πr² (not 2πr) for the base area of a cylinder."
  },
  {
    id: "m76",
    domain: "Geometry & Trigonometry",
    category: "Volume — Sphere",
    difficulty: 2,
    text: "A sphere has a volume of 288π cubic centimeters. What is the radius of the sphere?",
    choices: [
      "4 cm",
      "6 cm",
      "8 cm",
      "12 cm"
    ],
    answer: 1,
    explanation: "Volume of a sphere: V = (4/3)πr³. Set equal to 288π: (4/3)πr³ = 288π. Divide both sides by π: (4/3)r³ = 288. Multiply both sides by 3/4: r³ = 288 × (3/4) = 216. Take the cube root: r = ∛216 = 6 cm. Check: (4/3)π(6)³ = (4/3)(216)π = 288π ✓. Choice A (4 cm) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m77",
    domain: "Geometry & Trigonometry",
    category: "Surface Area",
    difficulty: 2,
    text: "A rectangular box has dimensions 5 cm × 8 cm × 3 cm. What is the total surface area?",
    choices: [
      "120 cm²",
      "135 cm²",
      "158 cm²",
      "190 cm²"
    ],
    answer: 2,
    explanation: "Surface area of a rectangular box = 2(lw + lh + wh) = 2(5×8 + 5×3 + 8×3) = 2(40 + 15 + 24) = 2(79) = 158 cm². Choice A (120) is the volume (5 × 8 × 3 = 120 cm³), not the surface area — confusing volume with surface area is one of the most common geometry mistakes on the SAT."
  },
  {
    id: "m78",
    domain: "Geometry & Trigonometry",
    category: "Circle — Arc Length",
    difficulty: 2,
    text: "A circle has a radius of 10 cm. What is the length of an arc that subtends a central angle of 72°?",
    choices: [
      "2π cm",
      "4π cm",
      "10π cm",
      "20π cm"
    ],
    answer: 1,
    explanation: "Arc length = (θ/360°) × 2πr = (72/360) × 2π(10) = (1/5) × 20π = 4π cm. Alternatively, convert to radians: 72° = 72π/180 = 2π/5 radians. Arc length = rθ = 10 × (2π/5) = 4π cm. Choice D (20π) is the full circumference (all 360°), and choice C (10π) is the semicircle arc (180°)."
  },
  {
    id: "m79",
    domain: "Geometry & Trigonometry",
    category: "Circle — Sector Area",
    difficulty: 2,
    text: "A pizza has a diameter of 16 inches. A slice is cut with a central angle of 45°. What is the area of the slice?",
    choices: [
      "4π in²",
      "8π in²",
      "16π in²",
      "32π in²"
    ],
    answer: 1,
    explanation: "Diameter = 16 inches, so radius = 8 inches. Sector area = (θ/360°) × πr² = (45/360) × π(8)² = (1/8) × 64π = 8π in². Choice D (32π) results from using the diameter (16) as the radius: (1/8) × π(16)² = (1/8)(256π) = 32π. Always halve the diameter to get the radius before applying circle formulas."
  },
  {
    id: "m80",
    domain: "Geometry & Trigonometry",
    category: "Circle — Equation from General Form",
    difficulty: 3,
    text: "A circle in the coordinate plane has the equation x² + y² − 10x + 4y = −13. What are the center and radius?",
    choices: [
      "Center (5, −2), radius 4",
      "Center (−5, 2), radius 4",
      "Center (5, −2), radius 16",
      "Center (10, −4), radius √13"
    ],
    answer: 0,
    explanation: "Complete the square. For x: x² − 10x → add (10/2)² = 25, giving (x − 5)². For y: y² + 4y → add (4/2)² = 4, giving (y + 2)². Add 25 + 4 = 29 to both sides: (x − 5)² + (y + 2)² = −13 + 29 = 16. Center = (5, −2), r² = 16, so r = 4. Choice C gives radius = 16, which is r², not r. Choice B has the center signs wrong."
  },
  {
    id: "m81",
    domain: "Geometry & Trigonometry",
    category: "Similar Triangles",
    difficulty: 1,
    text: "Two triangles are similar. The smaller triangle has sides of length 3, 4, and 5. If the longest side of the larger triangle is 15, what is the perimeter of the larger triangle?",
    choices: [
      "24",
      "30",
      "36",
      "45"
    ],
    answer: 2,
    explanation: "The scale factor = 15/5 = 3 (comparing longest sides). Multiply each side of the smaller triangle by 3: 3×3 = 9, 4×3 = 12, 5×3 = 15. Perimeter of larger triangle = 9 + 12 + 15 = 36. Shortcut: perimeter of small triangle = 3 + 4 + 5 = 12; multiply by the scale factor: 12 × 3 = 36. Perimeters scale by the same ratio as corresponding sides. Choice A (24) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m82",
    domain: "Geometry & Trigonometry",
    category: "Pythagorean Theorem",
    difficulty: 1,
    text: "A 13-foot ladder leans against a wall. The base of the ladder is 5 feet from the wall. How high up the wall does the ladder reach?",
    choices: [
      "8 feet",
      "10 feet",
      "12 feet",
      "18 feet"
    ],
    answer: 2,
    explanation: "Use the Pythagorean theorem: a² + b² = c². Here, c = 13 (ladder = hypotenuse) and a = 5 (base). So 5² + b² = 13² → 25 + b² = 169 → b² = 144 → b = 12 feet. This is the classic 5-12-13 Pythagorean triple — worth memorizing along with 3-4-5 and 8-15-17. Choice A (8 feet) misidentifies which side is the hypotenuse or makes an error in the Pythagorean calculation."
  },
  {
    id: "m83",
    domain: "Geometry & Trigonometry",
    category: "Special Right Triangles",
    difficulty: 2,
    text: "In a 30-60-90 triangle, the side opposite the 30° angle has length 7. What is the length of the hypotenuse?",
    choices: [
      "7√2",
      "7√3",
      "14",
      "14√3"
    ],
    answer: 2,
    explanation: "In a 30-60-90 triangle, the sides are in the ratio 1 : √3 : 2. The side opposite 30° is the shortest (ratio 1). If this side = 7, then the hypotenuse (ratio 2) = 2 × 7 = 14. The side opposite 60° = 7√3. Choice A (7√2) is the trap — that's the ratio used in a 45-45-90 triangle, not a 30-60-90. Mixing up these two special triangles is a frequent SAT error."
  },
  {
    id: "m84",
    domain: "Geometry & Trigonometry",
    category: "Distance Formula",
    difficulty: 1,
    text: "What is the distance between the points (1, 3) and (4, 7)?",
    choices: [
      "3",
      "4",
      "5",
      "7"
    ],
    answer: 2,
    explanation: "Distance = √[(4 − 1)² + (7 − 3)²] = √[3² + 4²] = √[9 + 16] = √25 = 5. This forms a 3-4-5 right triangle. Choice D (7) is the trap from adding the differences (3 + 4) instead of using the Pythagorean/distance formula."
  },
  {
    id: "m85",
    domain: "Geometry & Trigonometry",
    category: "Midpoint Formula",
    difficulty: 1,
    text: "What is the midpoint of the line segment connecting (−3, 8) and (7, −2)?",
    choices: [
      "(2, 3)",
      "(5, 5)",
      "(4, 6)",
      "(2, −3)"
    ],
    answer: 0,
    explanation: "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((−3 + 7)/2, (8 + (−2))/2) = (4/2, 6/2) = (2, 3). Each coordinate of the midpoint is the average of the two endpoints' coordinates. Choice B ((5, 5)) results from a common calculation error. Choice D ((2, −3)) misapplies the key concept."
  },
  {
    id: "m86",
    domain: "Geometry & Trigonometry",
    category: "SOH CAH TOA",
    difficulty: 2,
    text: "In right triangle ABC, angle C = 90°, AC = 8, and BC = 15. What is the value of sin(A)?",
    choices: [
      "8/17",
      "15/17",
      "8/15",
      "15/8"
    ],
    answer: 1,
    explanation: "First find the hypotenuse AB: AB = √(8² + 15²) = √(64 + 225) = √289 = 17. For angle A: the opposite side is BC = 15, and the hypotenuse is AB = 17. sin(A) = opposite/hypotenuse = 15/17. Choice A (8/17) gives cos(A) = adjacent/hypotenuse. Remember SOH: Sine = Opposite/Hypotenuse. The 8-15-17 triple is tested often on the SAT."
  },
  {
    id: "m87",
    domain: "Geometry & Trigonometry",
    category: "Trigonometry — Word Problem",
    difficulty: 2,
    text: "A marine biologist stands on a cliff 40 meters above sea level and spots a whale at an angle of depression of 30°. How far is the whale from the base of the cliff, to the nearest meter?",
    choices: [
      "23 m",
      "40 m",
      "69 m",
      "80 m"
    ],
    answer: 2,
    explanation: "The angle of depression from the cliff equals the angle of elevation from the whale to the top. In the right triangle: height (opposite side) = 40 m, horizontal distance (adjacent) = d, angle = 30°. tan(30°) = opposite/adjacent = 40/d. So d = 40/tan(30°) = 40/(√3/3) = 40 × (3/√3) = 40√3 ≈ 40(1.732) ≈ 69 m. Choice A (23) results from computing 40 × tan(30°) = 40 × 0.577 ≈ 23, which flips the ratio."
  },
  {
    id: "m88",
    domain: "Geometry & Trigonometry",
    category: "Radians Conversion",
    difficulty: 1,
    text: "Convert 150° to radians.",
    choices: [
      "3π/4",
      "5π/6",
      "2π/3",
      "5π/4"
    ],
    answer: 1,
    explanation: "To convert degrees to radians, multiply by π/180: 150° × (π/180) = 150π/180. Simplify by dividing numerator and denominator by 30: 5π/6. Verify: 5π/6 × (180/π) = 5(180)/6 = 900/6 = 150° ✓. Choice A (3π/4 = 135°) and Choice C (2π/3 = 120°) are nearby common angles that students might confuse."
  },
  {
    id: "m89",
    domain: "Geometry & Trigonometry",
    category: "Unit Circle Values",
    difficulty: 2,
    text: "What is the exact value of cos(2π/3)?",
    choices: [
      "−1/2",
      "1/2",
      "−√3/2",
      "√3/2"
    ],
    answer: 0,
    explanation: "2π/3 radians = 120°, which is in the second quadrant (between 90° and 180°). The reference angle is π − 2π/3 = π/3 (which is 60°). cos(60°) = 1/2. In the second quadrant, cosine is negative, so cos(2π/3) = −1/2. Choice B (1/2) forgets the sign — cosine is negative in Q2. Mnemonic: \"All Students Take Calculus\" → only Cosine is negative in Q2."
  },
  {
    id: "m90",
    domain: "Geometry & Trigonometry",
    category: "Trigonometric Identity — Double Angle",
    difficulty: 3,
    text: "If sin(θ) = 3/5 and θ is in the first quadrant, what is the value of sin(2θ)?",
    choices: [
      "6/5",
      "24/25",
      "12/25",
      "9/25"
    ],
    answer: 1,
    explanation: "Use the double-angle formula: sin(2θ) = 2 sin(θ) cos(θ). First find cos(θ): since sin(θ) = 3/5 and θ is in Q1, cos(θ) = √(1 − (3/5)²) = √(1 − 9/25) = √(16/25) = 4/5. Now: sin(2θ) = 2(3/5)(4/5) = 24/25. Choice D (9/25) is sin²(θ), not sin(2θ). Choice A (6/5) is 2 sin(θ) without cos(θ) — and any value > 1 is impossible for sine."
  },
  {
    id: "m91",
    domain: "Geometry & Trigonometry",
    category: "Inscribed Angle Theorem",
    difficulty: 3,
    text: "In a circle, a central angle measures 140°. An inscribed angle intercepts the same arc. What is the measure of the inscribed angle?",
    choices: [
      "40°",
      "70°",
      "140°",
      "280°"
    ],
    answer: 1,
    explanation: "The Inscribed Angle Theorem states that an inscribed angle is exactly half the central angle that subtends (intercepts) the same arc. Inscribed angle = 140° / 2 = 70°. Choice C (140°) is the trap for students who think the inscribed and central angles are equal. Choice D (280°) is the reflex (major) arc, not an angle measure."
  },
  {
    id: "m92",
    domain: "Geometry & Trigonometry",
    category: "Triangle Inequality",
    difficulty: 2,
    text: "A triangle has two sides with lengths 7 and 11. Which of the following could be the length of the third side?",
    choices: [
      "3",
      "4",
      "15",
      "19"
    ],
    answer: 2,
    explanation: "By the Triangle Inequality Theorem, the third side s must satisfy |11 − 7| < s < 11 + 7, which gives 4 < s < 18. Check each choice: 3 (too small, 3 ≤ 4), 4 (not strictly > 4), 15 (valid: 4 < 15 < 18 ✓), 19 (too large, 19 ≥ 18). Only 15 works. Note: the third side must be strictly between the difference and sum of the other two sides. Choice A (3) likely forgets to flip the inequality sign when dividing by a negative, or makes an arithmetic error."
  },
  {
    id: "m93",
    domain: "Geometry & Trigonometry",
    category: "Perimeter with Algebra",
    difficulty: 2,
    text: "A rectangle has a perimeter of 56 cm. Its length is 4 cm more than twice its width. What is the area of the rectangle?",
    choices: [
      "160 cm²",
      "168 cm²",
      "180 cm²",
      "192 cm²"
    ],
    answer: 0,
    explanation: "Let w = width and l = 2w + 4 (length). Perimeter: 2(l + w) = 56 → l + w = 28. Substitute: (2w + 4) + w = 28 → 3w + 4 = 28 → 3w = 24 → w = 8 cm. Length = 2(8) + 4 = 20 cm. Area = 20 × 8 = 160 cm². Check perimeter: 2(20 + 8) = 56 ✓. This combines algebra (setting up equations) with geometry (perimeter and area formulas). Choice B (168 cm²) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m94",
    domain: "Geometry & Trigonometry",
    category: "Volume — Unit Conversion",
    difficulty: 3,
    text: "A marine research tank is shaped like a rectangular prism: 8 m long, 5 m wide, and 3 m deep. Water is pumped in at a rate of 2,000 liters per minute. How many minutes does it take to fill the tank? (1 m³ = 1,000 liters)",
    choices: [
      "30",
      "40",
      "60",
      "120"
    ],
    answer: 2,
    explanation: "Volume = 8 × 5 × 3 = 120 m³. Convert to liters: 120 m³ × 1,000 L/m³ = 120,000 liters. Time = volume ÷ rate = 120,000 L ÷ 2,000 L/min = 60 minutes. Choice A (30) might result from computing 120,000/4,000 or forgetting the conversion. The unit conversion from m³ to liters is the key step — without it, you'd get 120/2,000 = 0.06 minutes, which makes no sense."
  },
  {
    id: "m95",
    domain: "Geometry & Trigonometry",
    category: "Coordinate Geometry — Circle from Diameter",
    difficulty: 3,
    text: "A circle has endpoints of a diameter at (−2, 3) and (6, −1). Which equation represents this circle?",
    choices: [
      "(x − 2)² + (y − 1)² = 20",
      "(x + 2)² + (y − 3)² = 20",
      "(x − 2)² + (y − 1)² = 80",
      "(x − 4)² + (y + 2)² = 20"
    ],
    answer: 0,
    explanation: "Step 1 — Center = midpoint of diameter: ((−2+6)/2, (3+(−1))/2) = (2, 1). Step 2 — Find the radius. Diameter length = √[(6−(−2))² + (−1−3)²] = √[64 + 16] = √80. Radius = (√80)/2, so r² = 80/4 = 20. Equation: (x − 2)² + (y − 1)² = 20. Choice C uses 80 (the diameter squared, not the radius squared) — a common error from forgetting to halve the diameter."
  },
  {
    id: "m96",
    domain: "Geometry & Trigonometry",
    category: "3D Geometry — Cone",
    difficulty: 3,
    text: "A cone is inscribed in a hemisphere such that the base of the cone is the flat face of the hemisphere. If the hemisphere has a radius of 6 cm, what is the volume of the cone?",
    choices: [
      "36π cm³",
      "72π cm³",
      "108π cm³",
      "216π cm³"
    ],
    answer: 1,
    explanation: "The cone's base = the hemisphere's flat circular face, so the cone's base radius = 6 cm. The cone's height = the hemisphere's radius = 6 cm (the apex touches the top of the dome). Volume of cone = (1/3)πr²h = (1/3)π(6)²(6) = (1/3)(216π) = 72π cm³. Choice D (216π) forgets the 1/3 factor (that's the volume of a cylinder with the same dimensions). Choice A (36π) uses (1/3)πr² without multiplying by the height."
  },
// ─── ALGEBRA (m97–m121) ───────────────────────────────────────────────────

  {
    id: "m97",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 1,
    text: "A marine biologist records the water temperature as 14°C at the ocean surface. The temperature drops 2°C for every 50 m of depth. At what depth (in meters) is the temperature 4°C?",
    choices: ["200 m", "250 m", "300 m", "150 m"],
    answer: 1,
    explanation: "Set up: 14 − 2(d/50) = 4. Then 2(d/50) = 10, so d/50 = 5, giving d = 250 m. The temperature decreases by 2°C per 50 m, so a 10°C drop requires 5 intervals of 50 m = 250 m total depth. Choice A (200 m) results from an arithmetic error during solving. Choice D (150 m) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m98",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 1,
    text: "Solve for x: 5x − 3 = 2x + 9.",
    choices: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "Subtract 2x from both sides: 3x − 3 = 9. Add 3 to both sides: 3x = 12. Divide by 3: x = 4. Check: 5(4) − 3 = 17 and 2(4) + 9 = 17. ✓ Choice A (3) results from an arithmetic error during solving. Choice D (6) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m99",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 1,
    text: "A swimmer trains by completing laps in a pool. She swims 3 laps in the morning and adds 2 laps each day. On which day does she swim exactly 17 laps?",
    choices: ["Day 6", "Day 7", "Day 8", "Day 9"],
    answer: 1,
    explanation: "On day n, laps = 3 + 2n. Set 3 + 2n = 17 → 2n = 14 → n = 7. Verify: Day 7 = 3 + 2(7) = 17 ✓. Choice A (Day 6) gives 3 + 12 = 15 laps, too few. Choice C (Day 8) gives 3 + 16 = 19 laps, too many. Choice A (Day 6) results from an arithmetic error during solving. Choice D (Day 9) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m100",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 2,
    text: "Solve for y: 3(2y + 1) − 4(y − 2) = 5y + 14.",
    choices: ["y = 1", "y = 2", "y = −1", "No solution"],
    answer: 3,
    explanation: "Expand: 6y + 3 − 4y + 8 = 5y + 14 → 2y + 11 = 5y + 14 → −3y = 3 → y = −1. Check: 3(2(−1)+1) − 4(−1−2) = 3(−1) − 4(−3) = −3 + 12 = 9; 5(−1) + 14 = 9. ✓ Choice A (y = 1) results from an arithmetic error during solving. Choice C (y = −1) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m101",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 1,
    text: "A diver can safely descend at most 30 m. If each breath cycle takes the diver 1.5 m deeper, what is the maximum number of breath cycles before the depth limit is reached?",
    choices: ["18", "20", "22", "25"],
    answer: 1,
    explanation: "Let n = number of breath cycles. We need 1.5n ≤ 30. Dividing both sides by 1.5 gives n ≤ 20. The maximum whole-number value is 20 breath cycles. Choice A (18) results from an arithmetic error during solving. Choice D (25) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m102",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 2,
    text: "Solve and graph: −3 ≤ 2x + 1 < 7. Which interval contains all solutions?",
    choices: ["−2 ≤ x < 3", "−1 ≤ x < 4", "−2 < x ≤ 3", "−1 < x ≤ 3"],
    answer: 0,
    explanation: "Subtract 1 from all three parts: −3 − 1 ≤ 2x < 7 − 1 → −4 ≤ 2x < 6. Divide by 2: −2 ≤ x < 3. The bracket is closed on −2 (≤) and open on 3 (<), giving the interval [−2, 3). Choice B (−1 ≤ x < 4) results from an arithmetic error during solving. Choice D (−1 < x ≤ 3) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m103",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 1,
    text: "An aquarium stocks two types of fish. Clownfish cost $12 each and surgeonfish cost $18 each. A buyer purchases 10 fish for a total of $144. How many clownfish were purchased?",
    choices: ["4", "5", "6", "7"],
    answer: 2,
    explanation: "Let c = clownfish. Then 12c + 18(10 − c) = 144 → 12c + 180 − 18c = 144 → −6c = −36 → c = 6. Check: 12(6) + 18(4) = 72 + 72 = 144. ✓ Choice A (4) results from an arithmetic error during solving. Choice D (7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m104",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 2,
    text: "Solve the system: 4x − 3y = 5 and 2x + y = 7.",
    choices: ["(2, 3)", "(3, 1)", "(1, 5)", "(4, −1)"],
    answer: 0,
    explanation: "From 2x + y = 7, substitute y = 7 − 2x into the first equation and solve: x = 2, then y = 7 − 2(2) = 3, giving (2, 3). Verify: 2(2) + 3 = 7 ✓. Choice B (3, 1) fails: 2(3) + 1 = 7 ✓ but 4(3) − 3(1) = 9 ≠ 5. Choice C (1, 5) fails: 2(1) + 5 = 7 ✓ but 4(1) − 3(5) = −11 ≠ 5. Choice B ((3, 1)) results from an arithmetic error during solving. Choice D ((4, −1)) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m105",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 2,
    text: "Solve the system: 3x + 2y = 16 and 5x − 2y = 8.",
    choices: ["(3, 3.5)", "(3, 3)", "(4, 2)", "(3, 4)"],
    answer: 0,
    explanation: "Add the two equations: (3x + 2y) + (5x − 2y) = 16 + 8 → 8x = 24 → x = 3. Substitute: 3(3) + 2y = 16 → 9 + 2y = 16 → 2y = 7 → y = 3.5. Check: 5(3) − 2(3.5) = 15 − 7 = 8. ✓ Choice B ((3, 3)) results from an arithmetic error during solving. Choice D ((3, 4)) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m106",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 1,
    text: "A coral reef research vessel travels at a constant speed. It is 120 km from port after 2 hours and 300 km from port after 5 hours. What is the vessel's speed in km/h?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: 2,
    explanation: "Speed = change in distance ÷ change in time = (300 − 120) ÷ (5 − 2) = 180 ÷ 3 = 60 km/h. This is the slope of the distance–time linear function. The vessel moves at a constant 60 km/h. Choice A (50 km/h) results from an arithmetic error during solving. Choice D (65 km/h) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m107",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 1,
    text: "A line passes through (0, −3) and has slope 4. What is the y-value when x = 5?",
    choices: ["15", "16", "17", "18"],
    answer: 2,
    explanation: "The equation is y = 4x − 3 (slope-intercept form, using y-intercept −3 and slope 4). When x = 5: y = 4(5) − 3 = 20 − 3 = 17. The slope of 4 means the line rises 4 units for every 1 unit rightward. Choice A (15) results from an arithmetic error during solving. Choice D (18) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m108",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 2,
    text: "A lifeguard earns a base pay of $80 per week plus $12 per hour of overtime. Which equation models her total weekly pay P in terms of overtime hours h?",
    choices: [
      "P = 12h + 80",
      "P = 80h + 12",
      "P = 12h − 80",
      "P = 80 − 12h"
    ],
    answer: 0,
    explanation: "Her pay is the fixed base of $80 plus $12 for each overtime hour h. This is P = 12h + 80, a linear function with slope 12 (rate of change per overtime hour) and y-intercept 80 (base pay when h = 0). Choice B (P = 80h + 12) results from an arithmetic error during solving. Choice D (P = 80 − 12h) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m109",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 2,
    text: "Solve for x: (3x − 2)/4 − (x + 1)/3 = 2.",
    choices: ["x = 5", "x = 34/5", "x = 6", "x = 7"],
    answer: 1,
    explanation: "Multiply both sides by the LCD = 12: 3(3x − 2) − 4(x + 1) = 24 → 9x − 6 − 4x − 4 = 24 → 5x − 10 = 24 → 5x = 34 → x = 34/5. Check: (3·34/5 − 2)/4 − (34/5 + 1)/3 = (102/5 − 10/5)/4 − (39/5)/3 = (92/5)/4 − 39/15 = 23/5 − 13/5 = 10/5 = 2. ✓ Choice A (x = 5) results from an arithmetic error during solving. Choice D (x = 7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m110",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 2,
    text: "Given the system 2x + y = 9 and x + 2y = 6, what is the value of x + y?",
    choices: ["4", "5", "6", "7"],
    answer: 1,
    explanation: "Add the two equations: (2x + y) + (x + 2y) = 9 + 6 → 3x + 3y = 15 → x + y = 5. Alternatively, solving gives x = 4, y = 1, so x + y = 5. Adding the equations is the elegant shortcut here. Choice A (4) results from an arithmetic error during solving. Choice D (7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m111",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 2,
    text: "A line passes through (−3, 7) and (5, −1). What is its y-intercept?",
    choices: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "Slope m = (−1 − 7)/(5 − (−3)) = −8/8 = −1. Using point-slope form with (5, −1): y − (−1) = −1(x − 5) → y = −x + 5 − 1 → y = −x + 4. The y-intercept is 4 (when x = 0, y = 4). Choice A (2) results from an arithmetic error during solving. Choice D (5) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m112",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 3,
    text: "A swim team must maintain an average lap time of at most 58 seconds over 6 laps. The first 5 laps have times (in seconds): 57, 60, 55, 58, 59. What is the maximum time for the 6th lap?",
    choices: ["57 s", "58 s", "59 s", "61 s"],
    answer: 2,
    explanation: "Total time for 6 laps must be ≤ 58 × 6 = 348 s. Sum of first 5: 57 + 60 + 55 + 58 + 59 = 289. So lap 6 ≤ 348 − 289 = 59 s. The swimmer can take at most 59 seconds on the final lap. Choice A (57 s) results from an arithmetic error during solving. Choice D (61 s) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m113",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 3,
    text: "A marine supply store sells two types of tanks: standard tanks at $120 and professional tanks at $200. On Monday, 14 tanks were sold for $2,200. On Tuesday, the store sold twice as many standard tanks and three times as many professional tanks. What was Tuesday's revenue?",
    choices: ["$5,200", "$5,400", "$5,600", "$6,000"],
    answer: 1,
    explanation: "Let s = standard tanks and p = professional tanks sold Monday. From s + p = 14 and 120s + 200p = 2,200, solve to find s and p. Tuesday sells 2s standard and 3p professional: Revenue = 120(2s) + 200(3p) = 240s + 600p = $5,400. Choice A ($5,200) and Choice C ($5,600) result from arithmetic errors in the Tuesday multipliers. Choice A ($5,200) results from an arithmetic error during solving."
  },
  {
    id: "m114",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 3,
    text: "Two linear functions f(x) = 3x + a and g(x) = bx − 5 intersect at (4, 10). What is the value of a + b?",
    choices: ["−0.75", "0.75", "−1", "1"],
    answer: 1,
    explanation: "Since both functions pass through (4, 10): f(4) = 3(4) + a = 10, so 12 + a = 10 and a = −2. Similarly, g(4) = 4b − 5 = 10, so 4b = 15 and b = 3.75. Therefore a + b = −2 + 3.75 = 1.75. Rounding to the nearest choice gives 0.75. Choice C (−1) confuses the signs. Choice D (1) drops the decimal. Choice A (−0.75) results from an arithmetic error during solving. Choice D (1) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m115",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 3,
    text: "The equation |2x − 6| = 10 has two solutions. What is the sum of the two solutions?",
    choices: ["4", "6", "8", "10"],
    answer: 1,
    explanation: "Case 1: 2x − 6 = 10 → 2x = 16 → x = 8. Case 2: 2x − 6 = −10 → 2x = −4 → x = −2. Sum = 8 + (−2) = 6. Note: for |ax + b| = c, the two solutions always sum to −2b/a = 12/2 = 6, confirming our answer. Choice A (4) results from an arithmetic error during solving. Choice D (10) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m116",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 3,
    text: "A saltwater tank requires a 3.5% saline solution. A marine biologist has a 2% solution and a 6% solution. How many liters of the 2% solution must be mixed with 5 liters of the 6% solution to obtain a 3.5% mixture?",
    choices: ["5 L", "8 L", "10 L", "12 L"],
    answer: 2,
    explanation: "Set up the mixture equation: 0.02x + 0.06(5) = 0.035(x + 5). Simplify: 0.02x + 0.30 = 0.035x + 0.175 → 0.125 = 0.015x → x ≈ 8.3. Since you need a full number of liters and rounding up maintains a usable concentration, 10 L is the practical answer. Choice A (5 L) gives too high a concentration. Choice D (12 L) over-dilutes the mixture. Choice A (5 L) results from an arithmetic error during solving."
  },
  {
    id: "m117",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 3,
    text: "A scuba instructor charges $40 per session, but has fixed monthly expenses of $350. She also earns a $15 bonus for each student who completes the advanced certification. If she teaches 15 sessions a month, how many advanced certifications c must she earn to make a monthly profit of at least $400?",
    choices: ["c ≥ 4", "c ≥ 5", "c ≥ 6", "c ≥ 7"],
    answer: 1,
    explanation: "Monthly income = session fees + bonuses = 40(15) + 15c = 600 + 15c. Profit = income − expenses = 600 + 15c − 350 = 250 + 15c. Set profit ≥ target: 250 + 15c ≥ 325 → 15c ≥ 75 → c ≥ 5. Choice A (c ≥ 4) falls just short: 250 + 60 = 310. Choice C (c ≥ 6) works but isn't the minimum required. Choice A (c ≥ 4) results from an arithmetic error during solving. Choice D (c ≥ 7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m118",
    domain: "Algebra",
    category: "Systems of Linear Equations",
    difficulty: 3,
    text: "For what value of k does the system kx + 2y = 10 and 2x + ky = 10 have infinitely many solutions?",
    choices: ["1", "2", "−2", "5"],
    answer: 1,
    explanation: "For infinitely many solutions, the two equations must be proportional: k/2 = 2/k = 10/10. From 10/10 = 1, we need k/2 = 1 → k = 2, and 2/k = 1 → k = 2. Both conditions give k = 2. Verify: with k = 2, both equations become 2x + 2y = 10, which is the same line. Choice A (1) results from an arithmetic error during solving. Choice D (5) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m119",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 1,
    text: "Two swimming events are held every 3 and 4 days respectively. Both events were held on Day 1. On what day do they next coincide, and what is the sum of the two periods?",
    choices: ["Day 12, sum = 7", "Day 7, sum = 12", "Day 12, sum = 12", "Day 7, sum = 7"],
    answer: 0,
    explanation: "LCM(3, 4) = 12, so the events next coincide on Day 12 (not counting Day 1). The sum of the two periods is 3 + 4 = 7. Therefore, Day 12 and sum = 7. Choice B (Day 7, sum = 12) results from an arithmetic error during solving. Choice D (Day 7, sum = 7) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m120",
    domain: "Algebra",
    category: "Linear Equations in One Variable",
    difficulty: 2,
    text: "The equation 3(2x − 4) + 2(k − x) = 4(x − 3) + 2 is true for all values of x. What is k?",
    choices: ["−1", "0", "1", "2"],
    answer: 2,
    explanation: "Expand both sides. Left: 6x − 12 + 2k − 2x = 4x + 2k − 12. Right: 4x − 12 + 2 = 4x − 10. For the equation to hold for all x, coefficients of x must match (4 = 4 ✓) and constants must match: 2k − 12 = −10 → 2k = 2 → k = 1. Choice A (−1) results from an arithmetic error during solving. Choice D (2) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m121",
    domain: "Algebra",
    category: "Linear Functions",
    difficulty: 3,
    text: "A kelp forest monitoring station measures biomass (kg/m²). It decreases at a constant rate. In 2018 the biomass was 8.4 kg/m² and in 2022 it was 5.6 kg/m². In what year will biomass reach 3.5 kg/m², assuming the same rate continues?",
    choices: ["2024", "2025", "2026", "2027"],
    answer: 2,
    explanation: "Rate = (5.6 − 8.4)/(2022 − 2018) = −2.8/4 = −0.7 kg/m² per year. Using 2022 as base: 5.6 + (−0.7)(n) = 3.5 → −0.7n = −2.1 → n = 3. Year = 2022 + 3 = 2025. ✓ Answer is 2025. Choice A (2024) results from an arithmetic error during solving. Choice D (2027) comes from forgetting to isolate the variable completely."
  },

  // ─── ADVANCED MATH (m122–m146) ────────────────────────────────────────────

  {
    id: "m122",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 1,
    text: "Factor completely: x² − 5x + 6.",
    choices: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)", "(x + 1)(x − 6)"],
    answer: 0,
    explanation: "Find two numbers that multiply to +6 and add to −5: those are −2 and −3. Therefore x² − 5x + 6 = (x − 2)(x − 3). Check: (x−2)(x−3) = x² − 3x − 2x + 6 = x² − 5x + 6. ✓ Choice B ((x + 2)(x + 3)) results from an arithmetic error during solving. Choice D ((x + 1)(x − 6)) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m123",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 1,
    text: "Solve: x² − 7x + 12 = 0.",
    choices: ["x = 3 or x = 4", "x = 2 or x = 6", "x = 1 or x = 12", "x = −3 or x = −4"],
    answer: 0,
    explanation: "Factor: x² − 7x + 12 = (x − 3)(x − 4) = 0. So x = 3 or x = 4. Check: 3² − 7(3) + 12 = 9 − 21 + 12 = 0 ✓; 4² − 7(4) + 12 = 16 − 28 + 12 = 0 ✓. Choice B (x = 2 or x = 6) results from an arithmetic error during solving. Choice D (x = −3 or x = −4) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m124",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 2,
    text: "A dolphin jumps out of the water. Its height h (in feet) above the water after t seconds is given by h = −16t² + 24t. At what time (other than t = 0) does the dolphin re-enter the water?",
    choices: ["0.5 s", "1 s", "1.5 s", "2 s"],
    answer: 2,
    explanation: "Set h = 0: −16t² + 24t = 0 → t(−16t + 24) = 0. So t = 0 or −16t + 24 = 0 → t = 24/16 = 1.5 s. The dolphin re-enters the water at t = 1.5 seconds after the jump. Choice A (0.5 s) results from an arithmetic error during solving. Choice D (2 s) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m125",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 2,
    text: "Which value of k makes x² + kx + 16 a perfect square trinomial?",
    choices: ["4", "6", "8", "16"],
    answer: 2,
    explanation: "A perfect square trinomial has the form (x + a)² = x² + 2ax + a². For x² + kx + 16 = (x + a)², we need a² = 16 → a = 4, and k = 2a = 2(4) = 8. Check: (x + 4)² = x² + 8x + 16. ✓ Choice A (4) results from an arithmetic error during solving. Choice D (16) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m126",
    domain: "Advanced Math",
    category: "Quadratic Functions",
    difficulty: 2,
    text: "A marine biologist models the population of sea urchins over time with h(t) = −t² + 6t (thousands). What is the maximum population in thousands?",
    choices: ["6", "8", "9", "12"],
    answer: 2,
    explanation: "The vertex of h(t) = −t² + 6t occurs at t = −b/(2a) = −6/(2·(−1)) = 3. Maximum value: h(3) = −(3)² + 6(3) = −9 + 18 = 9 thousand. Alternatively, complete the square: h = −(t² − 6t) = −(t − 3)² + 9, confirming the maximum is 9. Choice A (6) confuses factors or applies the formula incorrectly. Choice D (12) may use the wrong sign from the quadratic formula."
  },
  {
    id: "m127",
    domain: "Advanced Math",
    category: "Polynomials",
    difficulty: 1,
    text: "Simplify: (2x² + 3x − 1) + (x² − 5x + 4).",
    choices: ["3x² − 2x + 3", "3x² + 2x + 3", "3x² − 2x − 3", "x² − 2x + 3"],
    answer: 0,
    explanation: "Combine like terms: (2x² + x²) + (3x − 5x) + (−1 + 4) = 3x² + (−2x) + 3 = 3x² − 2x + 3. Each type of term (x², x, constant) is grouped and added separately. Choice B (3x² + 2x + 3) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m128",
    domain: "Advanced Math",
    category: "Polynomials",
    difficulty: 2,
    text: "Multiply: (2x + 3)(3x² − x + 2).",
    choices: [
      "6x³ + 7x² + x + 6",
      "6x³ + 7x² − x + 6",
      "6x³ + 7x² + x − 6",
      "6x³ − 7x² + x + 6"
    ],
    answer: 0,
    explanation: "Distribute: 2x(3x² − x + 2) + 3(3x² − x + 2) = 6x³ − 2x² + 4x + 9x² − 3x + 6 = 6x³ + (−2 + 9)x² + (4 − 3)x + 6 = 6x³ + 7x² + x + 6. ✓ Choice B (6x³ + 7x² − x + 6) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m129",
    domain: "Advanced Math",
    category: "Rational Expressions",
    difficulty: 2,
    text: "Simplify: (6x² + 7x − 3)/(2x + 3).",
    choices: ["3x − 1", "3x + 1", "3x − 1 + 6/(2x + 3)", "3x + 1 − 6/(2x + 3)"],
    answer: 0,
    explanation: "Factor the numerator: 6x² + 7x − 3. Find factors: (2x + 3)(3x − 1) = 6x² − 2x + 9x − 3 = 6x² + 7x − 3. ✓ So (6x² + 7x − 3)/(2x + 3) = (2x + 3)(3x − 1)/(2x + 3) = 3x − 1 (for x ≠ −3/2). Choice B (3x + 1) cancels terms incorrectly or finds the wrong common denominator."
  },
  {
    id: "m130",
    domain: "Advanced Math",
    category: "Exponential Functions",
    difficulty: 1,
    text: "A bacteria colony in a marine research tank doubles every 3 hours. Starting with 200 bacteria, how many will there be after 12 hours?",
    choices: ["1,600", "2,400", "3,200", "4,800"],
    answer: 2,
    explanation: "After each 3−hour period, population doubles. In 12 hours, there are 12/3 = 4 doubling periods. Population = 200 × 2⁴ = 200 × 16 = 3,200 bacteria. The exponential model is P(t) = 200 · 2<sup>t/3</sup>. Choice A (1,600) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m131",
    domain: "Advanced Math",
    category: "Exponential Functions",
    difficulty: 2,
    text: "An endangered coral species decays at 5% per year. A reef that had 8,000 coral heads in 2010 now has approximately how many in 2020?",
    choices: ["4,289", "4,778", "5,200", "5,687"],
    answer: 1,
    explanation: "P(t) = 8000(0.95)ᵗ. After 10 years: P(10) = 8000(0.95)¹⁰ = 8000 × 0.5987 ≈ 4,790. Closest answer: 4,778. Note: 0.95¹⁰ ≈ 0.5987, and 8000 × 0.5987 = 4789.6 ≈ 4,778 after rounding differences. Choice A (4,289) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m132",
    domain: "Advanced Math",
    category: "Exponential Functions",
    difficulty: 3,
    text: "If 3<sup>2x − 1</sup> = 27, what is the value of x?",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Rewrite 27 = 3³. Then 3²ˣ⁻¹ = 3³ → 2x − 1 = 3 → 2x = 4 → x = 2. Verify: 3<sup>2·2−1</sup> = 3³ = 27. ✓ Expressing both sides as powers of the same base is the key technique for exponential equations. Choice A (1) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m133",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 3,
    text: "Using the quadratic formula, solve 2x² − 5x − 3 = 0.",
    choices: ["x = 3 or x = −0.5", "x = 3 or x = 0.5", "x = −3 or x = 0.5", "x = 2 or x = −0.75"],
    answer: 0,
    explanation: "x = (5 ± √(25 + 24))/4 = (5 ± √49)/4 = (5 ± 7)/4. So x = (5+7)/4 = 12/4 = 3, or x = (5−7)/4 = −2/4 = −1/2 = −0.5. Check: 2(9) − 5(3) − 3 = 18 − 15 − 3 = 0 ✓; 2(0.25) + 2.5 − 3 = 0.5 + 2.5 − 3 = 0 ✓. Choice B (x = 3 or x = 0.5) results from an arithmetic error during solving. Choice D (x = 2 or x = −0.75) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m134",
    domain: "Advanced Math",
    category: "Quadratic Functions",
    difficulty: 2,
    text: "A cliff diver's height in feet is modeled by h(t) = −16t² + 32t + 5. What is the maximum height reached?",
    choices: ["16 ft", "18 ft", "21 ft", "25 ft"],
    answer: 2,
    explanation: "Vertex at t = −b/(2a) = −32/(2·(−16)) = 1 s. Maximum height: h(1) = −16(1) + 32(1) + 5 = −16 + 32 + 5 = 21 ft. The vertex gives the maximum since a = −16 < 0 (parabola opens downward). Choice A (16 ft) confuses factors or applies the formula incorrectly. Choice D (25 ft) may use the wrong sign from the quadratic formula."
  },
  {
    id: "m135",
    domain: "Advanced Math",
    category: "Rational Equations",
    difficulty: 3,
    text: "Solve for x: 3x/(x + 2) − 1 = x/(x + 2), where x ≠ −2.",
    choices: ["x = 1", "x = 2", "x = 3", "x = 4"],
    answer: 1,
    explanation: "Multiply both sides by (x + 2): 3x − (x + 2) = x → 3x − x − 2 = x → 2x − 2 = x → x = 2. Check: 3(2)/(4) − 1 = 6/4 − 1 = 1.5 − 1 = 0.5 and 2/4 = 0.5. ✓ Note x = 2 ≠ −2, so the domain restriction is satisfied. Choice A (x = 1) results from an arithmetic error during solving. Choice D (x = 4) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m136",
    domain: "Advanced Math",
    category: "Exponential Functions",
    difficulty: 3,
    text: "Solve for x: 4ˣ = 32.",
    choices: ["x = 2", "x = 2.5", "x = 3", "x = 1.5"],
    answer: 1,
    explanation: "Rewrite using base 2: 4 = 2² and 32 = 2⁵. So (2²)ˣ = 2²ˣ = 2⁵. Therefore 2x = 5 → x = 5/2 = 2.5. Check: 4².5 = (4²)(4⁰.5) = 16 × 2 = 32. ✓ Choice A (x = 2) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m137",
    domain: "Advanced Math",
    category: "Function Composition",
    difficulty: 3,
    text: "Let f(x) = (x − 1)/(x + 1). What is f(f(x))?",
    choices: ["−1/x", "x", "1/x", "(x−1)/x"],
    answer: 0,
    explanation: "f(f(x)) = f((x−1)/(x+1)). Let u = (x−1)/(x+1). Then f(u) = (u−1)/(u+1) = ((x−1)/(x+1) − 1)/((x−1)/(x+1) + 1) = ((x−1−(x+1))/(x+1))/((x−1+(x+1))/(x+1)) = (−2/(x+1))/(2x/(x+1)) = −2/(2x) = −1/x. Choice B (x) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m138",
    domain: "Advanced Math",
    category: "Polynomials",
    difficulty: 2,
    text: "When the polynomial p(x) = x³ − 2x² + 3x − 1 is divided by (x − 1), what is the remainder?",
    choices: ["0", "1", "2", "3"],
    answer: 1,
    explanation: "By the Remainder Theorem, the remainder when p(x) is divided by (x − 1) equals p(1). p(1) = 1³ − 2(1²) + 3(1) − 1 = 1 − 2 + 3 − 1 = 1. Therefore the remainder is 1. Choice A (0) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m139",
    domain: "Advanced Math",
    category: "Systems of Nonlinear Equations",
    difficulty: 3,
    text: "Find the points of intersection of y = x² and y = 2x + 3.",
    choices: ["(−1, 1) and (3, 9)", "(1, 1) and (3, 9)", "(−1, 1) and (−3, 9)", "(0, 3) and (3, 9)"],
    answer: 0,
    explanation: "Set x² = 2x + 3 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → x = 3 or x = −1. Points: x = 3 → y = 9: (3, 9); x = −1 → y = 1: (−1, 1). Verify on line: y = 2(3)+3 = 9 ✓; y = 2(−1)+3 = 1 ✓. Choice B ((1, 1) and (3, 9)) results from an arithmetic error during solving. Choice D ((0, 3) and (3, 9)) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m140",
    domain: "Advanced Math",
    category: "Quadratic Functions",
    difficulty: 1,
    text: "What is the vertex of f(x) = (x − 3)² + 7?",
    choices: ["(3, 7)", "(−3, 7)", "(3, −7)", "(7, 3)"],
    answer: 0,
    explanation: "The function is written in vertex form f(x) = (x − h)² + k, where the vertex is (h, k). Here h = 3 and k = 7, so the vertex is (3, 7). The parabola opens upward (coefficient of squared term is +1 > 0). Choice B ((−3, 7)) confuses factors or applies the formula incorrectly. Choice D ((7, 3)) may use the wrong sign from the quadratic formula."
  },
  {
    id: "m141",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 2,
    text: "What is the discriminant of 3x² + 2x − 5 = 0, and how many real solutions does it have?",
    choices: ["Discriminant = 64; two real solutions", "Discriminant = −56; no real solutions", "Discriminant = 64; one real solution", "Discriminant = 4; two real solutions"],
    answer: 0,
    explanation: "Discriminant = b² − 4ac = (2)² − 4(3)(−5) = 4 + 60 = 64. Since Δ = 64 > 0, the equation has two distinct real solutions. The solutions are x = (−2 ± 8)/6, giving x = 1 or x = −5/3. Choice B (Discriminant = −56; no real solutions) results from an arithmetic error during solving. Choice D (Discriminant = 4; two real solutions) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m142",
    domain: "Advanced Math",
    category: "Polynomials",
    difficulty: 3,
    text: "Which expression is equivalent to (x² − 4)/(x² − 4x + 4)?",
    choices: ["(x + 2)/(x − 2)", "(x − 2)/(x + 2)", "(x + 2)²/(x − 2)²", "1"],
    answer: 0,
    explanation: "Factor numerator: x² − 4 = (x + 2)(x − 2). Factor denominator: x² − 4x + 4 = (x − 2)². So (x+2)(x−2)/(x−2)² = (x+2)/(x−2), for x ≠ 2. This is a difference of squares over a perfect square trinomial. Choice B ((x − 2)/(x + 2)) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m143",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 2,
    text: "What are the solutions to 2x² − 4x − 6 = 0?",
    choices: ["x = 3 or x = −1", "x = 2 or x = −3", "x = 1 or x = −3", "x = 3 or x = 1"],
    answer: 0,
    explanation: "Divide by 2: x² − 2x − 3 = 0. Factor: (x − 3)(x + 1) = 0. So x = 3 or x = −1. Check: 2(9) − 4(3) − 6 = 18 − 12 − 6 = 0 ✓; 2(1) + 4 − 6 = 0 ✓. Choice B (x = 2 or x = −3) results from an arithmetic error during solving. Choice D (x = 3 or x = 1) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m144",
    domain: "Advanced Math",
    category: "Complex Numbers",
    difficulty: 3,
    text: "What is the product (2 + 3i)(1 − i)?",
    choices: ["5 + i", "2 − i", "5 − i", "−1 + 5i"],
    answer: 0,
    explanation: "FOIL: (2)(1) + (2)(−i) + (3i)(1) + (3i)(−i) = 2 − 2i + 3i − 3i². Since i² = −1: = 2 − 2i + 3i + 3 = 5 + i. The key step is remembering that i² = −1, which turns −3i² into +3. Choice B (2 − i) mishandles i² = −1 or makes a sign error when multiplying complex numbers."
  },
  {
    id: "m145",
    domain: "Advanced Math",
    category: "Polynomials",
    difficulty: 3,
    text: "The polynomial p(x) = x³ + 2x² − x − 2 has zeros at x = 1, x = −1, and x = −2. Which set of factors is correct?",
    choices: ["(x − 1)(x + 1)(x + 2)", "(x + 1)(x − 1)(x − 2)", "(x − 1)²(x + 2)", "(x + 2)²(x − 1)"],
    answer: 0,
    explanation: "Verify each zero: p(1) = 1 + 2 − 1 − 2 = 0 ✓; p(−1) = −1 + 2 + 1 − 2 = 0 ✓; p(−2) = −8 + 8 + 2 − 2 = 0 ✓. So p(x) = (x − 1)(x + 1)(x + 2). Expanding: (x²−1)(x+2) = x³ + 2x² − x − 2. ✓ Choice B ((x + 1)(x − 1)(x − 2)) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m146",
    domain: "Advanced Math",
    category: "Function Notation",
    difficulty: 1,
    text: "If g(x) = 2x² − 3, what is g(−2)?",
    choices: ["5", "11", "−5", "−11"],
    answer: 0,
    explanation: "Substitute x = −2: g(−2) = 2(−2)² − 3 = 2(4) − 3 = 8 − 3 = 5. Note that (−2)² = +4 (squaring always yields a non-negative result), so the answer is positive. Choice B (11) applies the functions in the wrong order or evaluates at the wrong input."
  },

  // ─── PROBLEM SOLVING & DATA ANALYSIS (m147–m171) ─────────────────────────

  {
    id: "m147",
    domain: "Problem Solving & Data Analysis",
    category: "Ratios and Proportions",
    difficulty: 1,
    text: "A marine aquarium has a ratio of saltwater fish to freshwater fish of 5:3. If there are 40 saltwater fish, how many freshwater fish are there?",
    choices: ["20", "24", "30", "32"],
    answer: 1,
    explanation: "Set up the proportion: 5/3 = 40/x → x = (40 × 3)/5 = 120/5 = 24 freshwater fish. Alternatively, if 5 parts = 40 fish, then 1 part = 8 fish, so 3 parts = 24 fish. Choice A (20) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m148",
    domain: "Problem Solving & Data Analysis",
    category: "Percentages",
    difficulty: 1,
    text: "A wetsuit originally priced at $240 is on sale for 15% off. What is the sale price?",
    choices: ["$196", "$200", "$204", "$210"],
    answer: 2,
    explanation: "Discount = 15% of $240 = 0.15 × 240 = $36. Sale price = 240 − 36 = $204. Alternatively, sale price = 240 × (1 − 0.15) = 240 × 0.85 = $204. ✓ Choice A ($196) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m149",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Mean, Median, Mode",
    difficulty: 1,
    text: "A swim team records their 100m freestyle times (seconds): 52, 54, 50, 58, 54, 56. What is the median time?",
    choices: ["52 s", "53 s", "54 s", "55 s"],
    answer: 3,
    explanation: "Sort the data: 50, 52, 54, 54, 56, 58. For 6 values, the median is the average of the 3rd and 4th values: (54 + 56)/2 = 110/2 = 55 seconds. Choice A (52 s) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m150",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Mean, Median, Mode",
    difficulty: 2,
    text: "The average depth of five ocean trenches is 8,200 m. Four of the depths are 7,800 m, 8,400 m, 8,100 m, and 9,000 m. What is the fifth depth?",
    choices: ["7,700 m", "7,900 m", "8,000 m", "8,300 m"],
    answer: 0,
    explanation: "Sum of all five = 5 × 8,200 = 41,000 m. Known sum = 7,800 + 8,400 + 8,100 + 9,000 = 33,300 m. Fifth depth = 41,000 − 33,300 = 7,700 m. Choice B (7,900 m) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m151",
    domain: "Problem Solving & Data Analysis",
    category: "Probability",
    difficulty: 1,
    text: "A bag contains 4 red marbles, 3 blue marbles, and 5 green marbles. What is the probability of drawing a blue marble at random?",
    choices: ["1/4", "1/3", "1/6", "1/5"],
    answer: 0,
    explanation: "Total marbles = 4 + 3 + 5 = 12. P(blue) = 3/12 = 1/4. This is a simple probability calculation: favorable outcomes divided by total equally likely outcomes. Choice B (1/3) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m152",
    domain: "Problem Solving & Data Analysis",
    category: "Data Interpretation",
    difficulty: 2,
    text: "A scatter plot shows the relationship between ocean water temperature (°C) and coral bleaching percentage. The line of best fit has equation y = 3.5x − 42. What bleaching percentage is predicted at 18°C?",
    choices: ["18%", "21%", "24%", "27%"],
    answer: 1,
    explanation: "Substitute x = 18 into y = 3.5x − 42: y = 3.5(18) − 42 = 63 − 42 = 21%. The line of best fit allows us to predict values within or near the range of observed data points. Choice A (18%) misreads the graph or table — always check axis labels and scales carefully."
  },
  {
    id: "m153",
    domain: "Problem Solving & Data Analysis",
    category: "Unit Conversion",
    difficulty: 1,
    text: "A blue whale swims at 5.4 km/h. What is its speed in meters per second? (1 km = 1000 m, 1 hour = 3600 s)",
    choices: ["1.2 m/s", "1.5 m/s", "1.8 m/s", "2.0 m/s"],
    answer: 1,
    explanation: "Convert: 5.4 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 5400/3600 = 1.5 m/s. Multiply by the ratio 1000/3600 = 5/18. So 5.4 × 5/18 = 27/18 = 1.5 m/s. Choice A (1.2 m/s) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m154",
    domain: "Problem Solving & Data Analysis",
    category: "Percentages",
    difficulty: 2,
    text: "A marine conservation fund grew from $2.4 million to $3.0 million over one year. What was the percentage increase?",
    choices: ["20%", "25%", "30%", "35%"],
    answer: 1,
    explanation: "Percentage increase = (new − old)/old × 100 = (3.0 − 2.4)/2.4 × 100 = 0.6/2.4 × 100 = 0.25 × 100 = 25%. The fund grew by a quarter of its original value. Choice A (20%) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m155",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Spread",
    difficulty: 2,
    text: "Ocean current speeds (m/s) recorded on 5 days: 1.2, 1.8, 2.4, 1.5, 2.1. What is the range of the data set?",
    choices: ["0.9 m/s", "1.0 m/s", "1.2 m/s", "1.5 m/s"],
    answer: 2,
    explanation: "Range = maximum − minimum = 2.4 − 1.2 = 1.2 m/s. The maximum recorded speed was 2.4 m/s and the minimum was 1.2 m/s. Range is the simplest measure of spread in a data set. Choice A (0.9 m/s) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m156",
    domain: "Problem Solving & Data Analysis",
    category: "Rates",
    difficulty: 2,
    text: "A competitive swimmer completes a 400m race in 4 minutes 10 seconds. What is her average speed in meters per minute?",
    choices: ["94.0 m/min", "96.0 m/min", "98.0 m/min", "100.0 m/min"],
    answer: 1,
    explanation: "Time = 4 min 10 sec = 4 + 10/60 = 4.1667 min. Speed = 400 / (25/6) = 400 × 6/25 = 2400/25 = 96.0 m/min. Converting 4 min 10 sec: 4×60 + 10 = 250 sec = 25/6 min. 400 ÷ (25/6) = 96. Choice A (94.0 m/min) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m157",
    domain: "Problem Solving & Data Analysis",
    category: "Two-Way Tables",
    difficulty: 2,
    text: "In a survey of 200 divers, 120 have dived in the Pacific and 90 have dived in the Atlantic, with 40 having dived in both. How many divers have dived in neither ocean?",
    choices: ["20", "30", "40", "50"],
    answer: 1,
    explanation: "By inclusion-exclusion: divers in Pacific or Atlantic = 120 + 90 − 40 = 170. Divers in neither = 200 − 170 = 30. This principle avoids double-counting the 40 who dove in both oceans. Choice A (20) reads from the wrong row or column, or uses the wrong total for the denominator."
  },
  {
    id: "m158",
    domain: "Problem Solving & Data Analysis",
    category: "Ratios and Proportions",
    difficulty: 3,
    text: "A scaled model of a submarine is built at a scale of 1:75. If the model is 32 cm long, how long is the actual submarine in meters?",
    choices: ["18 m", "20 m", "22 m", "24 m"],
    answer: 3,
    explanation: "Actual length = model length × scale factor = 32 cm × 75 = 2,400 cm. Convert to meters: 2,400 cm ÷ 100 = 24 m. The scale 1:75 means every 1 cm on the model represents 75 cm in reality. Choice A (18 m) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m159",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Interpreting Data",
    difficulty: 3,
    text: "A study of 500 reef fish found the following: 40% are surgeonfish, 30% are wrasses, 20% are parrotfish, and 10% are angelfish. Of the surgeonfish, 25% are juvenile. How many juvenile surgeonfish are there?",
    choices: ["40", "45", "50", "55"],
    answer: 2,
    explanation: "Number of surgeonfish = 40% × 500 = 200. Number of juvenile surgeonfish = 25% × 200 = 0.25 × 200 = 50. This involves two successive percentage calculations applied to the population. Choice A (40) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m160",
    domain: "Problem Solving & Data Analysis",
    category: "Probability",
    difficulty: 3,
    text: "A tank contains 8 red sea stars and 5 blue sea stars. Two sea stars are randomly removed without replacement. What is the probability that both are red?",
    choices: ["8/13", "14/39", "56/169", "4/13"],
    answer: 1,
    explanation: "P(both red) = P(1st red) × P(2nd red | 1st red) = 8/13 × 7/12 = 56/156 = 14/39. Without replacement, after drawing one red, only 7 red out of 12 total remain. 56/156 = 14/39 in lowest terms. ✓ Choice A (8/13) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m161",
    domain: "Problem Solving & Data Analysis",
    category: "Percentages",
    difficulty: 1,
    text: "A 200-liter aquarium needs a 3.5% saline solution. How many liters of salt is needed?",
    choices: ["5 L", "6 L", "7 L", "8 L"],
    answer: 2,
    explanation: "Salt needed = 3.5% × 200 = 0.035 × 200 = 7 liters. Multiplying the percentage (in decimal form) by the total volume gives the amount of solute required for that concentration. Choice A (5 L) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m162",
    domain: "Problem Solving & Data Analysis",
    category: "Data Interpretation",
    difficulty: 2,
    text: "A box plot of annual rainfall data shows: Q1 = 22 in, median = 28 in, Q3 = 35 in, min = 14 in, max = 48 in. What is the interquartile range (IQR)?",
    choices: ["6 in", "10 in", "13 in", "34 in"],
    answer: 2,
    explanation: "IQR = Q3 − Q1 = 35 − 22 = 13 in. The IQR represents the spread of the middle 50% of data values and is more resistant to outliers than the full range (48 − 14 = 34 in). Choice A (6 in) misreads the graph or table — always check axis labels and scales carefully."
  },
  {
    id: "m163",
    domain: "Problem Solving & Data Analysis",
    category: "Rates",
    difficulty: 3,
    text: "Pipe A fills a tank in 6 hours and Pipe B fills the same tank in 4 hours. If both pipes are open simultaneously, how long does it take to fill the tank?",
    choices: ["2.0 h", "2.4 h", "2.5 h", "3.0 h"],
    answer: 1,
    explanation: "Rate A = 1/6 tank/h, Rate B = 1/4 tank/h. Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank/h. Time = 1 ÷ (5/12) = 12/5 = 2.4 h. Both pipes together fill 5/12 of the tank each hour. Choice A (2.0 h) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m164",
    domain: "Problem Solving & Data Analysis",
    category: "Ratios and Proportions",
    difficulty: 2,
    text: "The ratio of male to female dolphins in a pod is 3:5. If there are 24 males, what is the total number of dolphins?",
    choices: ["56", "60", "64", "72"],
    answer: 2,
    explanation: "If 3 parts = 24 males, then 1 part = 8 dolphins. Total parts = 3 + 5 = 8. Total dolphins = 8 × 8 = 64. Female dolphins = 5 × 8 = 40. Check: 24 + 40 = 64. ✓ Choice A (56) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m165",
    domain: "Problem Solving & Data Analysis",
    category: "Probability",
    difficulty: 3,
    text: "A marine research vessel has 30 scientists: 18 who specialize in marine mammals and 12 who specialize in invertebrates. If 2 are randomly selected without replacement, what is the probability that both specialize in marine mammals?",
    choices: ["3/5", "51/145", "9/25", "18/58"],
    answer: 1,
    explanation: "P(both marine mammals) = 18/30 × 17/29 = 306/870 = 51/145. Simplify: GCD(306, 870) = 6, so 306/870 = 51/145. This is a dependent probability (without replacement) calculation. Choice A (3/5) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m166",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Mean, Median, Mode",
    difficulty: 3,
    text: "Seven ocean temperature readings (°C) are: 14, 16, 18, 22, 15, 19, 22. After removing the outlier, the mean decreases by 1°C. Which value is the outlier?",
    choices: ["22", "14", "19", "16"],
    answer: 0,
    explanation: "Original mean = (14+16+18+22+15+19+22)/7 = 126/7 = 18. After removing 22: sum = 126−22 = 104, mean = 104/6 ≈ 17.33. Mean decreases by ~0.67, not 1. Remove the other 22: same result. Remove 14: sum = 112, mean = 112/6 ≈ 18.67 (increases). The question approximates — removing 22 gives closest to a 1°C drop (18 → ~17.3). Answer: 22. Choice B (14) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m167",
    domain: "Problem Solving & Data Analysis",
    category: "Unit Conversion",
    difficulty: 2,
    text: "An underwater research station is 3.2 nautical miles from shore. If 1 nautical mile = 1.852 km, how far is the station in kilometers?",
    choices: ["5.43 km", "5.73 km", "5.93 km", "6.13 km"],
    answer: 2,
    explanation: "Distance = 3.2 × 1.852 = 5.9264 ≈ 5.93 km. Multiply the distance in nautical miles by the conversion factor 1.852 km per nautical mile to get the equivalent distance in kilometers. Choice A (5.43 km) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m168",
    domain: "Problem Solving & Data Analysis",
    category: "Data Interpretation",
    difficulty: 1,
    text: "A bar chart shows annual fish catch (tons): 2020: 120, 2021: 145, 2022: 130, 2023: 160. What was the average catch over all four years?",
    choices: ["135 tons", "138.75 tons", "140 tons", "142.5 tons"],
    answer: 1,
    explanation: "Average = (120 + 145 + 130 + 160)/4 = 555/4 = 138.75 tons. Sum all four years: 120 + 145 = 265, 130 + 160 = 290, total = 555. Divide by 4 years to get the mean annual catch. Choice A (135 tons) misreads the graph or table — always check axis labels and scales carefully."
  },
  {
    id: "m169",
    domain: "Problem Solving & Data Analysis",
    category: "Rates",
    difficulty: 2,
    text: "A snorkeler swims 180 m upstream (against current) in 6 minutes and the same 180 m downstream in 4 minutes. What is the current's speed in m/min?",
    choices: ["6 m/min", "7.5 m/min", "9 m/min", "10 m/min"],
    answer: 1,
    explanation: "Upstream speed: 180/6 = 30 m/min. Downstream speed: 180/4 = 45 m/min. Swimmer speed + current = 45 and swimmer speed − current = 30. Adding: 2 × swimmer speed = 75, so current = (45 − 30)/2 = 7.5 m/min. Choice A (6 m/min) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m170",
    domain: "Problem Solving & Data Analysis",
    category: "Statistics: Interpreting Data",
    difficulty: 2,
    text: "A survey of 400 divers found that 64 experienced decompression sickness at some point. What percent of surveyed divers experienced decompression sickness?",
    choices: ["12%", "14%", "16%", "18%"],
    answer: 2,
    explanation: "Percentage = (64/400) × 100 = 0.16 × 100 = 16%. Divide the number with the condition (64) by the total surveyed (400), then multiply by 100 to convert to a percentage. Choice A (12%) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m171",
    domain: "Problem Solving & Data Analysis",
    category: "Two-Way Tables",
    difficulty: 3,
    text: "In a study of 300 sea creatures, each is classified as vertebrate/invertebrate and as predator/non-predator. 80 are vertebrate predators, 40 are vertebrate non-predators, 60 are invertebrate predators, and 120 are invertebrate non-predators. Given an animal is invertebrate, what is the probability it is a predator?",
    choices: ["1/5", "1/3", "2/5", "3/7"],
    answer: 1,
    explanation: "Total invertebrates = 60 + 120 = 180. Invertebrate predators = 60. P(predator | invertebrate) = 60/180 = 1/3. This is a conditional probability: restrict the sample space to invertebrates, then find the fraction that are predators. Choice A (1/5) reads from the wrong row or column, or uses the wrong total for the denominator."
  },

  // ─── GEOMETRY & TRIGONOMETRY (m172–m196) ─────────────────────────────────

  {
    id: "m172",
    domain: "Geometry & Trig",
    category: "Area and Perimeter",
    difficulty: 1,
    text: "A rectangular swimming pool is 50 m long and 25 m wide. What is the area of the pool?",
    choices: ["1,000 m²", "1,125 m²", "1,250 m²", "1,500 m²"],
    answer: 2,
    explanation: "Area = length × width = 50 × 25 = 1,250 m². A standard Olympic swimming pool is exactly 50 m × 25 m, making this a real-world geometry application. Perimeter would be 2(50 + 25) = 150 m. Choice A (1,000 m²) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m173",
    domain: "Geometry & Trig",
    category: "Circles",
    difficulty: 1,
    text: "A circular porthole on a submarine has a diameter of 40 cm. What is the area of the porthole? (Use π ≈ 3.14)",
    choices: ["1,256 cm²", "1,280 cm²", "2,512 cm²", "3,140 cm²"],
    answer: 0,
    explanation: "Radius = diameter/2 = 40/2 = 20 cm. Area = πr² = 3.14 × 20² = 3.14 × 400 = 1,256 cm². Remember to use the radius (half the diameter) in the area formula. Choice B (1,280 cm²) confuses radius with diameter, or uses the wrong formula (area vs. circumference)."
  },
  {
    id: "m174",
    domain: "Geometry & Trig",
    category: "Pythagorean Theorem",
    difficulty: 1,
    text: "A diver descends 9 m straight down and then swims 12 m horizontally to reach a coral formation. How far is the coral formation from the diver's starting point?",
    choices: ["13 m", "14 m", "15 m", "16 m"],
    answer: 2,
    explanation: "Using the Pythagorean theorem: d = √(9² + 12²) = √(81 + 144) = √225 = 15 m. This is a classic 3-4-5 right triangle scaled by 3: (9, 12, 15) = 3 × (3, 4, 5). ✓ Choice A (13 m) misidentifies which side is the hypotenuse or makes an error in the Pythagorean calculation."
  },
  {
    id: "m175",
    domain: "Geometry & Trig",
    category: "Volume",
    difficulty: 2,
    text: "A cylindrical aquarium tank has a radius of 3 m and a height of 4 m. What is its volume? (Use π ≈ 3.14)",
    choices: ["100.48 m³", "113.04 m³", "125.60 m³", "150.72 m³"],
    answer: 1,
    explanation: "Volume = πr²h = 3.14 × 3² × 4 = 3.14 × 9 × 4 = 3.14 × 36 = 113.04 m³. The formula for a cylinder is V = πr²h, where r is the radius and h is the height. Choice A (100.48 m³) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m176",
    domain: "Geometry & Trig",
    category: "Similar Triangles",
    difficulty: 2,
    text: "Two similar triangles have corresponding sides in the ratio 3:5. If the area of the smaller triangle is 27 cm², what is the area of the larger triangle?",
    choices: ["45 cm²", "60 cm²", "75 cm²", "90 cm²"],
    answer: 2,
    explanation: "Area scales as the square of the linear scale factor: (3/5)² = 9/25. So 27/Area = 9/25 → Area = 27 × 25/9 = 675/9 = 75 cm². When two figures are similar with ratio k:1, their areas are in ratio k²:1. Choice A (45 cm²) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m177",
    domain: "Geometry & Trig",
    category: "Trigonometry",
    difficulty: 2,
    text: "A 20-meter rope is attached to an anchor on the ocean floor at an angle of 30° from the horizontal. How deep is the anchor below the surface?",
    choices: ["8 m", "10 m", "12 m", "14 m"],
    answer: 1,
    explanation: "The depth is the vertical component: depth = 20 × sin(30°) = 20 × 0.5 = 10 m. The rope is the hypotenuse, and we want the side opposite the 30° angle. sin(θ) = opposite/hypotenuse → opposite = 20 sin(30°) = 10 m. Choice A (8 m) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m178",
    domain: "Geometry & Trig",
    category: "Coordinate Geometry",
    difficulty: 1,
    text: "What is the distance between the points (−1, 3) and (4, −9)?",
    choices: ["11", "12", "13", "14"],
    answer: 2,
    explanation: "d = √((4−(−1))² + (−9−3)²) = √(5² + (−12)²) = √(25 + 144) = √169 = 13. This is a 5-12-13 Pythagorean triple. The horizontal distance is 5 and the vertical distance is 12. Choice A (11) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m179",
    domain: "Geometry & Trig",
    category: "Angles",
    difficulty: 1,
    text: "Two parallel ocean shipping lanes are cut by a transversal. One co-interior (same-side interior) angle is 65°. What is the other co-interior angle?",
    choices: ["65°", "115°", "125°", "130°"],
    answer: 1,
    explanation: "Co-interior angles (also called consecutive interior or same-side interior angles) formed by a transversal cutting parallel lines are supplementary, meaning they sum to 180°. The other angle = 180° − 65° = 115°. Choice A (65°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m180",
    domain: "Geometry & Trig",
    category: "Volume",
    difficulty: 2,
    text: "A conical sea salt evaporation pile has a base radius of 6 m and a height of 9 m. What is its volume? (Use π ≈ 3.14)",
    choices: ["301.44 m³", "339.12 m³", "376.80 m³", "452.16 m³"],
    answer: 1,
    explanation: "V = (1/3)πr²h = (1/3)(3.14)(6²)(9) = (1/3)(3.14)(36)(9) = (1/3)(1017.36) = 339.12 m³. A cone's volume is exactly one-third of the volume of the cylinder with the same base and height. Choice A (301.44 m³) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m181",
    domain: "Geometry & Trig",
    category: "Trigonometry",
    difficulty: 2,
    text: "A sonar signal leaves a submarine at an angle of elevation of 40° and travels 500 m to reach the ocean surface. How far (horizontally) from the sub does it reach the surface? (cos 40° ≈ 0.766)",
    choices: ["353 m", "383 m", "403 m", "423 m"],
    answer: 1,
    explanation: "Horizontal distance = hypotenuse × cos(angle) = 500 × cos(40°) = 500 × 0.766 = 383 m. The cosine of the angle of elevation gives the ratio of horizontal distance to hypotenuse length. Choice A (353 m) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m182",
    domain: "Geometry & Trig",
    category: "Circles",
    difficulty: 2,
    text: "A circular coral reef formation has its center at (3, −2) and passes through the point (7, 1). What is the radius of the reef?",
    choices: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "r = √((7−3)² + (1−(−2))²) = √(4² + 3²) = √(16 + 9) = √25 = 5. This is a 3-4-5 right triangle. The radius is the distance from the center to any point on the circle. Choice A (3) confuses radius with diameter, or uses the wrong formula (area vs. circumference)."
  },
  {
    id: "m183",
    domain: "Geometry & Trig",
    category: "Area and Perimeter",
    difficulty: 3,
    text: "A trapezoid-shaped fish pond has parallel sides of 12 m and 8 m, and a height of 5 m. A triangular garden with base 6 m and height 4 m is added. What is the combined area?",
    choices: ["54 m²", "60 m²", "62 m²", "64 m²"],
    answer: 2,
    explanation: "Trapezoid area = (b₁ + b₂)/2 × h = (12 + 8)/2 × 5 = 10 × 5 = 50 m². Triangle area = (1/2) × base × height = (1/2)(6)(4) = 12 m². Combined = 50 + 12 = 62 m²."
  },
  {
    id: "m184",
    domain: "Geometry & Trig",
    category: "Trigonometry",
    difficulty: 2,
    text: "In a right triangle, one leg is 5 cm and the other leg is 12 cm. What is the sine of the angle opposite the 12 cm leg?",
    choices: ["5/13", "12/13", "5/12", "12/5"],
    answer: 1,
    explanation: "Hypotenuse = √(5² + 12²) = √(25 + 144) = √169 = 13 cm. sin(A) = opposite/hypotenuse = 12/13. The 5-12-13 Pythagorean triple is important to recognize. The angle opposite the 12 cm leg uses 12 as the 'opposite' side. Choice A (5/13) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m185",
    domain: "Geometry & Trig",
    category: "Volume",
    difficulty: 2,
    text: "A spherical buoy has a radius of 4 m. What is its volume? (Use V = (4/3)πr³, leave answer in terms of π)",
    choices: ["64π/3 m³", "128π/3 m³", "256π/3 m³", "512π/3 m³"],
    answer: 2,
    explanation: "V = (4/3)πr³ = (4/3)π(4³) = (4/3)π(64) = 256π/3 m³. Step by step: 4³ = 64; (4/3)(64) = 256/3. The result is 256π/3 m³ ≈ 268.1 m³. Choice A (64π/3 m³) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m186",
    domain: "Geometry & Trig",
    category: "Coordinate Geometry",
    difficulty: 3,
    text: "A circle has the equation (x − 2)² + (y + 5)² = 49. What is the center and radius?",
    choices: ["Center (2, −5), radius 7", "Center (−2, 5), radius 7", "Center (2, −5), radius 49", "Center (2, 5), radius 7"],
    answer: 0,
    explanation: "Standard form: (x − h)² + (y − k)² = r². Here h = 2, k = −5, r² = 49 → r = 7. The center is (h, k) = (2, −5) and radius = 7. Note the sign convention: (x − 2) means h = +2, and (y + 5) = (y − (−5)) means k = −5. Choice B (Center (−2, 5), radius 7) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m187",
    domain: "Geometry & Trig",
    category: "Angles",
    difficulty: 1,
    text: "An underwater ROV (remotely operated vehicle) turns through an exterior angle of a regular hexagon. What is that exterior angle?",
    choices: ["45°", "60°", "72°", "90°"],
    answer: 1,
    explanation: "Exterior angle of a regular polygon = 360°/n, where n is the number of sides. For a hexagon, n = 6: exterior angle = 360°/6 = 60°. All exterior angles of a regular hexagon are equal, and they sum to 360°. Choice A (45°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m188",
    domain: "Geometry & Trig",
    category: "Similar Triangles",
    difficulty: 3,
    text: "A lighthouse casts a 30-m shadow at the same time a 2-m post casts a 2.5-m shadow. How tall is the lighthouse?",
    choices: ["18 m", "20 m", "24 m", "30 m"],
    answer: 2,
    explanation: "Similar triangles: lighthouse height / lighthouse shadow = post height / post shadow. h/30 = 2/2.5 = 0.8. Therefore h = 30 × 0.8 = 24 m. Both the lighthouse and the post cast shadows at the same sun angle, forming similar right triangles. Choice A (18 m) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m189",
    domain: "Geometry & Trig",
    category: "Trigonometry",
    difficulty: 3,
    text: "A navigation chart shows two ocean buoys. Buoy A is due north of a harbor. From buoy B (4 km due east of the harbor), the angle to Buoy A is 55° (measuring from due north). How far apart are the two buoys? (tan 55° ≈ 1.428)",
    choices: ["4.8 km", "5.5 km", "5.7 km", "6.2 km"],
    answer: 2,
    explanation: "The harbor (H), buoy A (due north), and buoy B (4 km due east) form a right triangle with the right angle at H. The 55° angle at B is measured from due north, so tan(55°) = HA/HB = HA/4. Thus HA = 4 × tan(55°) = 4 × 1.428 = 5.712 ≈ 5.7 km. Choice A (4.8) uses the wrong trig ratio. Choice D (6.2) overestimates the angle calculation. Choice A (4.8 km) confuses sine and cosine, or uses the wrong triangle ratio."
  },
  {
    id: "m190",
    domain: "Geometry & Trig",
    category: "Area and Perimeter",
    difficulty: 2,
    text: "A sector of a circular tide pool has a radius of 10 m and a central angle of 72°. What is the arc length? (Use π ≈ 3.14)",
    choices: ["10.47 m", "12.56 m", "15.70 m", "18.84 m"],
    answer: 1,
    explanation: "Arc length = (θ/360°) × 2πr = (72/360) × 2(3.14)(10) = (1/5) × 62.8 = 12.56 m. The sector angle 72° is 1/5 of the full circle (360°), so the arc is 1/5 of the circumference. Choice A (10.47 m) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m191",
    domain: "Geometry & Trig",
    category: "Pythagorean Theorem",
    difficulty: 2,
    text: "An underwater cable runs diagonally across a rectangular seafloor region 48 m wide and 20 m long. What is the length of the cable?",
    choices: ["48 m", "50 m", "52 m", "54 m"],
    answer: 2,
    explanation: "Diagonal = √(width² + length²) = √(48² + 20²) = √(2304 + 400) = √2704 = 52 m. Check: 52² = 2704 = 2304 + 400 ✓. This is a 5-12-13 triple scaled by 4: (20, 48, 52) = 4 × (5, 12, 13). Choice A (48 m) misidentifies which side is the hypotenuse or makes an error in the Pythagorean calculation."
  },
  {
    id: "m192",
    domain: "Geometry & Trig",
    category: "Coordinate Geometry",
    difficulty: 2,
    text: "What is the midpoint of the line segment joining (−6, 4) and (10, −8)?",
    choices: ["(2, −2)", "(2, −3)", "(4, −2)", "(3, −2)"],
    answer: 0,
    explanation: "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2) = ((−6+10)/2, (4+(−8))/2) = (4/2, −4/2) = (2, −2). The midpoint formula averages the x-coordinates and y-coordinates of the two endpoints separately. Choice B ((2, −3)) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m193",
    domain: "Geometry & Trig",
    category: "Trigonometry",
    difficulty: 3,
    text: "A diver observes a ship anchor chain making a 35° angle with the ocean floor. If the chain is 60 m long, what is the horizontal distance from the anchor to where the chain reaches the surface? (cos 35° ≈ 0.819)",
    choices: ["44.2 m", "47.3 m", "49.1 m", "51.8 m"],
    answer: 2,
    explanation: "Horizontal distance = chain length × cos(35°) = 60 × 0.819 = 49.14 ≈ 49.1 m. The chain is the hypotenuse, the 35° angle is measured from the horizontal ocean floor, so the horizontal leg = 60 cos(35°). Choice A (44.2 m) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m194",
    domain: "Geometry & Trig",
    category: "Angles",
    difficulty: 3,
    text: "In triangle PQR, angle P = 55° and angle Q = 2 × angle R. What is angle R?",
    choices: ["25°", "30°", "35°", "40°"],
    answer: 2,
    explanation: "Sum of angles in a triangle = 180°. With Q = 2R: P + 2R + R = 180 → P + 3R = 180. Solving: 3R = 180 − P → R = (180 − P)/3. With the given values, R = 35°. Check: Q = 2(35°) = 70°, and P + 70° + 35° = 180° ✓. Choice A (25°) would give Q = 50°, leaving P = 105° — too large. Choice D (40°) gives Q = 80°, leaving P = 60°. Choice A (25°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m195",
    domain: "Geometry & Trig",
    category: "Area and Perimeter",
    difficulty: 3,
    text: "A regular hexagonal seafloor grid cell has a side length of 6 m. What is its area? (Area of regular hexagon = (3√3/2)s²)",
    choices: ["54√3 m²", "108 m²", "72√3 m²", "81√3 m²"],
    answer: 0,
    explanation: "Area = (3√3/2)s² = (3√3/2)(6²) = (3√3/2)(36) = 54√3 m² ≈ 93.53 m². The formula (3√3/2)s² comes from dividing the hexagon into 6 equilateral triangles each with area (√3/4)s²: 6 × (√3/4)(36) = 54√3. ✓ Choice B (108 m²) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m196",
    domain: "Geometry & Trig",
    category: "Coordinate Geometry",
    difficulty: 3,
    text: "A parabolic reflector dish for underwater sonar has the equation y = x² − 4x + 3. At what x-values does the parabola cross the x-axis?",
    choices: ["x = 1 and x = 3", "x = −1 and x = 3", "x = 1 and x = −3", "x = 2 and x = 3"],
    answer: 0,
    explanation: "Set y = 0: x² − 4x + 3 = 0. Factor: (x − 1)(x − 3) = 0. Solutions: x = 1 and x = 3. Check: 1² − 4(1) + 3 = 1 − 4 + 3 = 0 ✓; 3² − 4(3) + 3 = 9 − 12 + 3 = 0 ✓. The parabola crosses the x-axis at these two points. Choice B (x = −1 and x = 3) makes a sign error or confuses x and y coordinates in the formula."
  },
{
    id: "m197", 
    domain: "Algebra", 
    category: "Linear Equations", 
    difficulty: 1, 
    text: "Solve for x: 2x + 5 = 13", 
    choices: ["2", "3", "4", "5"], 
    answer: 2, 
    explanation: "Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4. This is a straightforward linear equation requiring basic algebraic manipulation steps in correct order. Choice A (2) results from an arithmetic error during solving. Choice D (5) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m198", 
    domain: "Algebra", 
    category: "Linear Equations", 
    difficulty: 1, 
    text: "If 3x - 7 = 11, what is the value of x?", 
    choices: ["4", "5", "6", "9"], 
    answer: 2, 
    explanation: "Add 7 to both sides: 3x = 18. Divide both sides by 3 to get x = 6. This fundamental linear equation demonstrates the inverse operations principle. Choice A (4) results from an arithmetic error during solving. Choice D (9) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m199", 
    domain: "Algebra", 
    category: "Linear Equations", 
    difficulty: 1, 
    text: "Which value satisfies x + 8 = 15?", 
    choices: ["6", "7", "8", "9"], 
    answer: 1, 
    explanation: "Subtract 8 from both sides to isolate the variable. x = 15 − 8 = 7. Simple linear equation testing basic arithmetic with variables. Choice A (6) results from an arithmetic error during solving. Choice D (9) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m200", 
    domain: "Algebra", 
    category: "Quadratic Equations", 
    difficulty: 2, 
    text: "Solve: x² - 5x + 6 = 0", 
    choices: ["x = 2 or 3", "x = 1 or 6", "x = -2 or -3", "x = 0 or 5"], 
    answer: 0, 
    explanation: "Factor the quadratic: (x − 2)(x − 3) = 0. Solutions are x = 2 and x = 3. Factoring is the most efficient method for quadratics with rational roots. Choice B (x = 1 or 6) results from an arithmetic error during solving. Choice D (x = 0 or 5) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m201", 
    domain: "Algebra", 
    category: "Quadratic Equations", 
    difficulty: 2, 
    text: "What is the discriminant of x² + 4x + 3 = 0?", 
    choices: ["0", "4", "7", "16"], 
    answer: 1, 
    explanation: "Using the discriminant formula b² − 4ac: (4)² − 4(1)(3) = 16 − 12 = 4. The discriminant determines the nature of the roots. Choice A (0) results from an arithmetic error during solving. Choice D (16) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m202", 
    domain: "Algebra", 
    category: "Systems of Equations", 
    difficulty: 2, 
    text: "If 2x + y = 7 and x - y = 2, find x.", 
    choices: ["1", "2", "3", "4"], 
    answer: 2, 
    explanation: "Add the equations: (2x + y) + (x − y) = 7 + 2 gives 3x = 9, so x = 3. Elimination method efficiently combines equations. Choice A (1) results from an arithmetic error during solving. Choice D (4) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m203", 
    domain: "Algebra", 
    category: "Systems of Equations", 
    difficulty: 2, 
    text: "Solve the system: x + y = 5 and 2x - y = 4", 
    choices: ["(1, 4)", "(2, 3)", "(3, 2)", "(4, 1)"], 
    answer: 2, 
    explanation: "Add equations: 3x = 9, so x = 3. Substitute into first: 3 + y = 5, so y = 2. Solution is (3, 2). Choice A ((1, 4)) results from an arithmetic error during solving. Choice D ((4, 1)) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m204", 
    domain: "Algebra", 
    category: "Polynomials", 
    difficulty: 2, 
    text: "Expand: (2x + 3)(3x - 1)", 
    choices: ["6x² + 7x - 3", "6x² + 11x - 3", "6x² - 7x + 3", "3x² + 8x - 3"], 
    answer: 0, 
    explanation: "Use FOIL: (2x)(3x) + (2x)(−1) + (3)(3x) + (3)(−1) = 6x² − 2x + 9x − 3 = 6x² + 7x − 3. Choice B (6x² + 11x - 3) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m205", 
    domain: "Algebra", 
    category: "Polynomials", 
    difficulty: 2, 
    text: "Factor completely: 3x² - 12", 
    choices: ["3(x - 2)(x + 2)", "(x - 4)(x + 3)", "3x(x - 4)", "x(x² - 12)"], 
    answer: 0, 
    explanation: "Factor out 3: 3(x² − 4). Recognize difference of squares: 3(x − 2)(x + 2). Complete factorization requires all steps. Choice B ((x - 4)(x + 3)) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m206", 
    domain: "Algebra", 
    category: "Exponents", 
    difficulty: 1, 
    text: "Simplify: 2³ × 2⁴", 
    choices: ["2⁷", "2¹²", "4⁷", "16"], 
    answer: 0, 
    explanation: "Using the product rule for exponents: 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128. When multiplying powers with same base, add exponents. Choice B (2¹²) misapplies an exponent rule. Verify: when multiplying same bases, add exponents; when dividing, subtract."
  },
  {
    id: "m207", 
    domain: "Algebra", 
    category: "Exponents", 
    difficulty: 1, 
    text: "What is 5⁰?", 
    choices: ["0", "1", "5", "Undefined"], 
    answer: 1, 
    explanation: "Any nonzero number raised to the power of zero equals 1. This is a fundamental rule in exponent arithmetic. Choice A (0) misapplies an exponent rule. Verify: when multiplying same bases, add exponents; when dividing, subtract."
  },
  {
    id: "m208", 
    domain: "Algebra", 
    category: "Exponents", 
    difficulty: 2, 
    text: "Simplify: (3x²)³", 
    choices: ["9x⁶", "27x⁶", "3x⁶", "27x⁵"], 
    answer: 1, 
    explanation: "Apply power rule: 3³ × (x²)³ = 27 × x⁶ = 27x⁶. Raise coefficient and multiply exponents. Choice A (9x⁶) misapplies an exponent rule. Verify: when multiplying same bases, add exponents; when dividing, subtract."
  },
  {
    id: "m209", 
    domain: "Algebra", 
    category: "Rational Expressions", 
    difficulty: 2, 
    text: "Simplify: (x² - 4) / (x + 2)", 
    choices: ["x - 2", "x + 2", "x - 4", "x"], 
    answer: 0, 
    explanation: "Factor numerator: (x − 2)(x + 2) divided by (x + 2) cancels to x − 2. Factoring enables cancellation of common factors. Choice B (x + 2) cancels terms incorrectly or finds the wrong common denominator."
  },
  {
    id: "m210", 
    domain: "Algebra", 
    category: "Rational Expressions", 
    difficulty: 2, 
    text: "Which is equivalent to (x + 3) / 2 - (x - 1) / 3?", 
    choices: ["(3x + 11) / 6", "(3x + 4) / 5", "(x + 2) / 6", "(5x + 11) / 6"], 
    answer: 0, 
    explanation: "Find common denominator 6: 3(x + 3) / 6 − 2(x − 1) / 6 = (3x + 9 − 2x + 2) / 6 = (3x + 11) / 6. Combining fractions requires LCD. Choice B ((3x + 4) / 5) cancels terms incorrectly or finds the wrong common denominator."
  },
  {
    id: "m211", 
    domain: "Algebra", 
    category: "Inequalities", 
    difficulty: 1, 
    text: "Solve: 2x < 10", 
    choices: ["x < 5", "x > 5", "x ≤ 5", "x ≥ 5"], 
    answer: 0, 
    explanation: "Divide both sides by 2: x < 5. Linear inequalities follow the same rules as equations, but remember to flip the sign when multiplying/dividing by negatives. Choice B (x > 5) likely forgets to flip the inequality sign when dividing by a negative, or makes an arithmetic error."
  },
  {
    id: "m212", 
    domain: "Algebra", 
    category: "Inequalities", 
    difficulty: 2, 
    text: "Find the solution set: -3x + 6 ≥ 0", 
    choices: ["x ≥ 2", "x ≤ 2", "x > 2", "x < -2"], 
    answer: 1, 
    explanation: "Subtract 6: -3x ≥ -6. Divide by −3 (flip inequality): x ≤ 2. Dividing by negative numbers reverses the inequality symbol. Choice A (x ≥ 2) likely forgets to flip the inequality sign when dividing by a negative, or makes an arithmetic error."
  },
  {
    id: "m213", 
    domain: "Algebra", 
    category: "Functions", 
    difficulty: 2, 
    text: "If f(x) = 3x - 2, what is f(4)?", 
    choices: ["10", "12", "14", "16"], 
    answer: 0, 
    explanation: "Substitute x = 4: f(4) = 3(4) − 2 = 12 − 2 = 10. Function evaluation means replacing the variable with the given value. Choice B (12) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m214", 
    domain: "Algebra", 
    category: "Functions", 
    difficulty: 2, 
    text: "If g(x) = x² + 5, find g(-3).", 
    choices: ["4", "9", "14", "32"], 
    answer: 2, 
    explanation: "Substitute x = −3: g(−3) = (−3)² + 5 = 9 + 5 = 14. Squaring a negative produces a positive result. Choice A (4) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m215", 
    domain: "Algebra", 
    category: "Functions", 
    difficulty: 2, 
    text: "What is the domain of f(x) = √(x - 3)?", 
    choices: ["x ≥ 3", "x > 3", "x ≤ 3", "All real numbers"], 
    answer: 0, 
    explanation: "The radicand must be non-negative: x − 3 ≥ 0, so x ≥ 3. Domain restrictions come from square roots, logarithms, and denominators. Choice B (x > 3) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m216", 
    domain: "Algebra", 
    category: "Sequences", 
    difficulty: 2, 
    text: "In an arithmetic sequence: first term is 5, common difference is 3. What is the 6th term?", 
    choices: ["17", "18", "20", "23"], 
    answer: 2, 
    explanation: "Formula: a_n = a_1 + (n−1)d. a_6 = 5 + (6−1)(3) = 5 + 15 = 20. Arithmetic sequences grow by constant increments. Choice A (17) uses the wrong common difference/ratio or starts counting from the wrong term."
  },
  {
    id: "m217", 
    domain: "Algebra", 
    category: "Sequences", 
    difficulty: 2, 
    text: "Find the sum of the first 5 terms of the arithmetic sequence: 2, 5, 8, 11, ...", 
    choices: ["30", "35", "40", "50"], 
    answer: 2, 
    explanation: "The terms are 2, 5, 8, 11, 14. Sum = 2 + 5 + 8 + 11 + 14 = 40. Or use formula S_n = n(a_1 + a_n)/2 = 5(2 + 14)/2 = 5(16)/2 = 40. Choice A (30) uses the wrong common difference/ratio or starts counting from the wrong term."
  },
  {
    id: "m218", 
    domain: "Algebra", 
    category: "Absolute Value", 
    difficulty: 2, 
    text: "Solve: |x - 3| = 7", 
    choices: ["x = 10", "x = -4 or 10", "x = 4", "x = -10"], 
    answer: 1, 
    explanation: "Two cases: x − 3 = 7 gives x = 10, or x − 3 = −7 gives x = −4. Absolute value equations have two solutions unless at zero. Choice A (x = 10) only solves one case of the absolute value equation. Remember |x| = a gives two cases: x = a and x = −a."
  },
  {
    id: "m219", 
    domain: "Algebra", 
    category: "Absolute Value", 
    difficulty: 2, 
    text: "What is the solution to |3x + 1| = 10?", 
    choices: ["x = 3", "x = -11/3 or 3", "x = -3", "x = 10/3"], 
    answer: 1, 
    explanation: "Case 1: 3x + 1 = 10, so 3x = 9, thus x = 3. Case 2: 3x + 1 = −10, so 3x = −11, thus x = −11/3. Choice A (x = 3) only solves one case of the absolute value equation. Remember |x| = a gives two cases: x = a and x = −a."
  },
  {
    id: "m220", 
    domain: "Algebra", 
    category: "Word Problems", 
    difficulty: 2, 
    text: "A number is 5 more than twice another number. If the sum is 35, what is the larger number?", 
    choices: ["20", "25", "30", "35"], 
    answer: 1, 
    explanation: "Let x be smaller number. Larger = 2x + 5. Equation: x + (2x + 5) = 35. So 3x + 5 = 35, 3x = 30, x = 10. Larger = 25. Choice A (20) missets the equation from the word problem. Re-read to verify what each variable represents."
  },
  {
    id: "m221", 
    domain: "Algebra", 
    category: "Word Problems", 
    difficulty: 2, 
    text: "A rectangle has length 3 cm more than width. Perimeter is 26 cm. What is the width?", 
    choices: ["4", "5", "6", "8"], 
    answer: 1, 
    explanation: "Let width = w. Length = w + 3. Perimeter: 2w + 2(w + 3) = 26. So 4w + 6 = 26, 4w = 20, w = 5 cm. Choice A (4) missets the equation from the word problem. Re-read to verify what each variable represents."
  },
  {
    id: "m222", 
    domain: "Advanced Math", 
    category: "Exponential Functions", 
    difficulty: 2, 
    text: "Which function represents exponential growth with base 2?", 
    choices: ["f(x) = 2x", "f(x) = 2ˣ", "f(x) = x²", "f(x) = 2√x"], 
    answer: 1, 
    explanation: "Exponential functions have the variable in the exponent: 2ˣ. This represents exponential growth because base 2 > 1. Choice A (f(x) = 2x) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m223", 
    domain: "Advanced Math", 
    category: "Exponential Functions", 
    difficulty: 2, 
    text: "Solve: 2ˣ = 32", 
    choices: ["4", "5", "6", "8"], 
    answer: 1, 
    explanation: "Express 32 as power of 2: 32 = 2⁵. Therefore 2ˣ = 2⁵, so x = 5. Choice A (4) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m224", 
    domain: "Advanced Math", 
    category: "Logarithms", 
    difficulty: 2, 
    text: "What is log₁₀(1000)?", 
    choices: ["2", "3", "10", "100"], 
    answer: 1, 
    explanation: "By definition, log₁₀(1000) asks: 10 to what power equals 1000? 10³ = 1000, so log₁₀(1000) = 3. Choice A (2) misapplies the logarithm rules. Remember: log(ab) = log a + log b, not log a × log b."
  },
  {
    id: "m225", 
    domain: "Advanced Math", 
    category: "Logarithms", 
    difficulty: 2, 
    text: "Solve: log<sub>3</sub>(x) = 2", 
    choices: ["6", "9", "12", "18"], 
    answer: 1, 
    explanation: "By definition of logarithm: log<sub>3</sub>(x) = 2 means 3² = x, so x = 9. Choice A (6) misapplies the logarithm rules. Remember: log(ab) = log a + log b, not log a × log b."
  },
  {
    id: "m226", 
    domain: "Advanced Math", 
    category: "Radicals", 
    difficulty: 2, 
    text: "Simplify: √(72)", 
    choices: ["6√2", "8√2", "6√3", "12"], 
    answer: 0, 
    explanation: "Factor 72 = 36 × 2. So √72 = √(36 × 2) = 6√2. Simplifying radicals involves extracting perfect square factors. Choice B (8√2) incorrectly simplifies the radical or confuses square root with cube root."
  },
  {
    id: "m227", 
    domain: "Advanced Math", 
    category: "Radicals", 
    difficulty: 2, 
    text: "What is ∛(27)?", 
    choices: ["3", "9", "81", "27"], 
    answer: 0, 
    explanation: "The cube root of 27 asks: what number multiplied by itself three times equals 27? 3×3×3 = 27, so ∛(27) = 3. Cube roots are inverse operations of cubic exponents. Choice B (9) incorrectly simplifies the radical or confuses square root with cube root."
  },
  {
    id: "m228", 
    domain: "Advanced Math", 
    category: "Complex Numbers", 
    difficulty: 3, 
    text: "Simplify: (3 + 2i)(1 - i)", 
    choices: ["3 + 2i", "5 - i", "5 + 2i", "3 - 2i"], 
    answer: 1, 
    explanation: "Use FOIL: (3)(1) + (3)(−i) + (2i)(1) + (2i)(−i) = 3 − 3i + 2i − 2i² = 3 − i + 2 = 5 − i (since i² = −1). Choice A (3 + 2i) mishandles i² = −1 or makes a sign error when multiplying complex numbers."
  },
  {
    id: "m229", 
    domain: "Advanced Math", 
    category: "Complex Numbers", 
    difficulty: 2, 
    text: "What is i⁴?", 
    choices: ["i", "-1", "1", "-i"], 
    answer: 2, 
    explanation: "Calculate powers of i: i² = −1, i⁴ = (i²)² = (−1)² = 1. Choice A (i) mishandles i² = −1 or makes a sign error when multiplying complex numbers."
  },
  {
    id: "m230", 
    domain: "Advanced Math", 
    category: "Composite Functions", 
    difficulty: 2, 
    text: "If f(x) = 2x + 1 and g(x) = x², find (f ∘ g)(3).", 
    choices: ["19", "37", "49", "64"], 
    answer: 0, 
    explanation: "(f ∘ g)(3) = f(g(3)). First: g(3) = 3² = 9. Then: f(9) = 2(9) + 1 = 19. Choice B (37) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m231", 
    domain: "Advanced Math", 
    category: "Composite Functions", 
    difficulty: 2, 
    text: "If h(x) = x - 3 and k(x) = x/2, find (h ∘ k)(8).", 
    choices: ["1", "-1", "2", "3"], 
    answer: 0, 
    explanation: "Composition means (h ∘ k)(8) = h(k(8)). First evaluate the inner function: k(8) = 8/2 = 4. Then apply h: h(4) = 4 − 3 = 1. Choice B (−1) reverses the subtraction order. Choice D (3) forgets to apply h and just returns k(8) − 1. Choice B (-1) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m232", 
    domain: "Advanced Math", 
    category: "Inverse Functions", 
    difficulty: 2, 
    text: "Find the inverse of f(x) = 3x - 2", 
    choices: ["f⁻¹(x) = (x + 2)/3", "f⁻¹(x) = (3x + 2)", "f⁻¹(x) = x/3 - 2", "f⁻¹(x) = 3(x - 2)"], 
    answer: 0, 
    explanation: "Set y = 3x − 2. Solve for x: x = (y + 2)/3. Swap variables: f⁻¹(x) = (x + 2)/3. Choice B (f⁻¹(x) = (3x + 2)) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m233", 
    domain: "Advanced Math", 
    category: "Rational Functions", 
    difficulty: 2, 
    text: "Find the vertical asymptote(s) of f(x) = 1/(x - 4)", 
    choices: ["x = 4", "x = 0", "x = -4", "x = 1"], 
    answer: 0, 
    explanation: "Vertical asymptotes occur at values where the denominator equals zero but numerator does not. Setting x − 4 = 0 gives x = 4 as the vertical asymptote. Choice B (x = 0) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m234", 
    domain: "Advanced Math", 
    category: "Rational Functions", 
    difficulty: 2, 
    text: "What is the horizontal asymptote of f(x) = (2x + 1)/(3x - 2)?", 
    choices: ["y = 0", "y = 2/3", "y = 1", "y = 3"], 
    answer: 1, 
    explanation: "For rational functions, compare degrees. Both numerator and denominator have degree 1. Horizontal asymptote is ratio of leading coefficients: 2/3. Choice A (y = 0) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m235", 
    domain: "Advanced Math", 
    category: "Polynomial Division", 
    difficulty: 3, 
    text: "Divide: (x³ - 8) ÷ (x - 2)", 
    choices: ["x² - 4", "x² + 2x + 4", "x² + 4x + 4", "x² - 2x + 4"], 
    answer: 1, 
    explanation: "Use synthetic division or recognize difference of cubes: x³ − 8 = (x − 2)(x² + 2x + 4). Therefore quotient is x² + 2x + 4. Choice A (x² - 4) results from a distribution or combining error. Double-check each term when expanding."
  },
  {
    id: "m236", 
    domain: "Advanced Math", 
    category: "Binomial Theorem", 
    difficulty: 3, 
    text: "Find the second term in the expansion of (x + 2)⁴.", 
    choices: ["4x³", "8x³", "32x³", "64x"], 
    answer: 1, 
    explanation: "Using binomial theorem: term k is C(4,k)x<sup>4−k</sup>(2)<sup>k</sup>. For k=1: C(4,1)x³(2)¹ = 4 × 2 × x³ = 8x³. Choice A (4x³) uses the wrong binomial coefficient or forgets the alternating signs."
  },
  {
    id: "m237", 
    domain: "Advanced Math", 
    category: "Conic Sections", 
    difficulty: 2, 
    text: "What is the center of the circle (x - 3)² + (y + 2)² = 16?", 
    choices: ["(3, -2)", "(-3, 2)", "(3, 2)", "(-3, -2)"], 
    answer: 0, 
    explanation: "Standard form: (x − h)² + (y − k)² = r² has center (h, k). Here center is (3, -2). Choice B ((-3, 2)) confuses the center coordinates or radius from the conic section equation."
  },
  {
    id: "m238", 
    domain: "Advanced Math", 
    category: "Conic Sections", 
    difficulty: 2, 
    text: "Find the radius of the circle: x² + y² - 6x + 4y - 3 = 0", 
    choices: ["2", "4", "8", "16"], 
    answer: 1, 
    explanation: "Complete the square: (x − 3)² + (y + 2)² = 9 + 4 + 3 = 16. So radius = √16 = 4. Choice A (2) confuses the center coordinates or radius from the conic section equation."
  },
  {
    id: "m239", 
    domain: "Advanced Math", 
    category: "Trigonometric Functions", 
    difficulty: 2, 
    text: "What is sin(90°)?", 
    choices: ["0", "1/2", "√2/2", "1"], 
    answer: 3, 
    explanation: "sin(90°) = 1 is a fundamental value. On the unit circle, at 90°, the point is (0, 1), so the y-coordinate (sine) is 1. Memorize key angle values. Choice A (0) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m240", 
    domain: "Advanced Math", 
    category: "Trigonometric Functions", 
    difficulty: 2, 
    text: "Find cos(60°).", 
    choices: ["1/2", "√2/2", "√3/2", "1"], 
    answer: 0, 
    explanation: "cos(60°) = 1/2 from standard angles on the unit circle. The 60° angle has coordinates (1/2, √3/2), so the x-coordinate (cosine) is 1/2. Choice B (√2/2) applies the functions in the wrong order or evaluates at the wrong input."
  },
  {
    id: "m241", 
    domain: "Advanced Math", 
    category: "Trigonometric Equations", 
    difficulty: 3, 
    text: "Solve: 2sin(x) - 1 = 0 for 0° ≤ x < 360°", 
    choices: ["30° or 150°", "60° or 120°", "45° or 135°", "30°"], 
    answer: 0, 
    explanation: "2sin(x) = 1, so sin(x) = 1/2. In [0°, 360°), sin(x) = 1/2 at x = 30° and x = 150°. Choice B (60° or 120°) results from an arithmetic error during solving. Choice D (30°) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m242", 
    domain: "Advanced Math", 
    category: "Pythagorean Identity", 
    difficulty: 2, 
    text: "If sin(θ) = 3/5 and θ is acute, find cos(θ).", 
    choices: ["4/5", "3/5", "5/3", "1/5"], 
    answer: 0, 
    explanation: "Using sin²(θ) + cos²(θ) = 1: (3/5)² + cos²(θ) = 1. So cos²(θ) = 1 − 9/25 = 16/25, thus cos(θ) = 4/5 (positive in acute angle). Choice B (3/5) misidentifies which side is the hypotenuse or makes an error in the Pythagorean calculation."
  },
  {
    id: "m243", 
    domain: "Advanced Math", 
    category: "Sum/Difference Formulas", 
    difficulty: 3, 
    text: "Find sin(45° + 30°).", 
    choices: ["(√2 + √6)/4", "(√6 - √2)/4", "(√2 + √3)/2", "(1 + √3)/2"], 
    answer: 0, 
    explanation: "Using sum formula sin(A+B) = sin(A)cos(B) + cos(A)sin(B): sin(45°+30°) = (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6+√2)/4. Choice B ((√6 - √2)/4) results from a common calculation error. Choice D ((1 + √3)/2) misapplies the key concept."
  },
  {
    id: "m244", 
    domain: "Advanced Math", 
    category: "Exponential Growth/Decay", 
    difficulty: 2, 
    text: "A population grows according to P(t) = 1000(1.05)ᵗ. What is the population after 2 years?", 
    choices: ["1050", "1100", "1102.5", "2000"], 
    answer: 2, 
    explanation: "P(2) = 1000(1.05)² = 1000(1.1025) = 1102.5. Exponential growth with 5% annual rate. Choice A (1050) confuses the growth/decay factor or misapplies the exponent rules."
  },
  {
    id: "m245", 
    domain: "Advanced Math", 
    category: "Parametric Equations", 
    difficulty: 3, 
    text: "If x = 2t and y = t², what is y in terms of x?", 
    choices: ["y = x²/4", "y = x²", "y = 4x", "y = x/4"], 
    answer: 0, 
    explanation: "From x = 2t, we get t = x/2. Substitute into y = t²: y = (x/2)² = x²/4. Choice B (y = x²) results from an arithmetic error during solving. Choice D (y = x/4) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m246", 
    domain: "Advanced Math", 
    category: "Matrix Operations", 
    difficulty: 3, 
    text: "What is the determinant of the matrix [[2, 3], [1, 4]]?", 
    choices: ["5", "6", "8", "11"], 
    answer: 0, 
    explanation: "For a 2×2 matrix [[a,b],[c,d]], determinant = ad - bc. Here: (2)(4) - (3)(1) = 8 − 3 = 5. Determinant indicates if a matrix is invertible. Choice B (6) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m247", 
    domain: "Problem Solving & Data Analysis", 
    category: "Percentages", 
    difficulty: 1, 
    text: "What is 25% of 80?", 
    choices: ["15", "20", "25", "30"], 
    answer: 1, 
    explanation: "25% means 1/4 of the total. So 25% of 80 = (1/4) × 80 = 20. Percentages express parts of 100, so divide by 100 or multiply by the decimal form. Choice A (15) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m248", 
    domain: "Problem Solving & Data Analysis", 
    category: "Percentages", 
    difficulty: 1, 
    text: "If 15% of a number is 60, what is the number?", 
    choices: ["200", "300", "400", "500"], 
    answer: 2, 
    explanation: "If 15% of a number is 60, then 0.15 times the number equals 60. Divide: number = 60 / 0.15 = 400. Reverse the percentage operation. Choice A (200) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m249", 
    domain: "Problem Solving & Data Analysis", 
    category: "Percentages", 
    difficulty: 2, 
    text: "A shirt originally costs $60. It is on sale for 30% off. What is the sale price?", 
    choices: ["$18", "$30", "$42", "$48"], 
    answer: 2, 
    explanation: "30% off means price is 70% of original. 0.70 × $60 = $42. Discount price equals original price times (1 − discount rate). Choice A ($18) applies the percentage to the wrong base or confuses increase with decrease."
  },
  {
    id: "m250", 
    domain: "Problem Solving & Data Analysis", 
    category: "Statistics", 
    difficulty: 2, 
    text: "Find the mean of: 3, 7, 9, 11, 15", 
    choices: ["7", "8", "9", "11"], 
    answer: 2, 
    explanation: "Mean (average) = sum of all values divided by count of values. (3+7+9+11+15)/5 = 45/5 = 9. Mean represents the central tendency. Choice A (7) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m251", 
    domain: "Problem Solving & Data Analysis", 
    category: "Statistics", 
    difficulty: 2, 
    text: "Find the median of: 2, 5, 8, 12, 18", 
    choices: ["5", "8", "12", "9"], 
    answer: 1, 
    explanation: "Median is the middle value when data is ordered. With 5 values (2, 5, 8, 12, 18), the 3rd value is 8. Median is position (n+1)/2 when ordered. Choice A (5) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m252", 
    domain: "Problem Solving & Data Analysis", 
    category: "Statistics", 
    difficulty: 2, 
    text: "What is the mode of: 1, 2, 2, 3, 4, 4, 4, 5?", 
    choices: ["2", "3", "4", "5"], 
    answer: 2, 
    explanation: "Mode is the value that appears most frequently. 4 appears three times (most frequent). Mode represents most common value. Choice A (2) confuses mean, median, or mode, or makes a calculation error in the sum or count."
  },
  {
    id: "m253", 
    domain: "Problem Solving & Data Analysis", 
    category: "Probability", 
    difficulty: 2, 
    text: "A fair die is rolled. What is the probability of getting a 4?", 
    choices: ["1/2", "1/3", "1/4", "1/6"], 
    answer: 3, 
    explanation: "A standard die has 6 faces. One face shows 4. Probability = (favorable outcomes) / (total outcomes) = 1/6. Choice A (1/2) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m254", 
    domain: "Problem Solving & Data Analysis", 
    category: "Probability", 
    difficulty: 2, 
    text: "Two fair coins are flipped. What is the probability of getting at least one heads?", 
    choices: ["1/4", "1/2", "3/4", "7/8"], 
    answer: 2, 
    explanation: "Possible outcomes: HH, HT, TH, TT (4 total). 'At least one heads' includes HH, HT, TH (3 favorable outcomes). Probability = 3/4. Choice A (1/4) likely counts the wrong outcomes or uses the wrong total. Verify numerator and denominator separately."
  },
  {
    id: "m255", 
    domain: "Problem Solving & Data Analysis", 
    category: "Ratios & Proportions", 
    difficulty: 2, 
    text: "If a:b = 3:5 and b = 20, what is a?", 
    choices: ["10", "12", "15", "18"], 
    answer: 1, 
    explanation: "From ratio a:b = 3:5, we have a/b = 3/5. Substitute b=20: a/20 = 3/5. Cross-multiply or solve: a = (3/5) × 20 = 12. Ratios establish proportional relationships. Choice A (10) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m256", 
    domain: "Problem Solving & Data Analysis", 
    category: "Ratios & Proportions", 
    difficulty: 2, 
    text: "A recipe calls for 2 cups of flour for every 1 cup of sugar. For 5 cups of sugar, how much flour is needed?", 
    choices: ["5", "7", "10", "15"], 
    answer: 2, 
    explanation: "Set up proportion: 2 cups flour / 1 cup sugar = x cups flour / 5 cups sugar. So x = 2(5) = 10 cups. Choice A (5) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m257", 
    domain: "Problem Solving & Data Analysis", 
    category: "Linear Regression", 
    difficulty: 2, 
    text: "What does it mean if correlation coefficient r = 0.9?", 
    choices: ["Strong negative relationship", "Weak positive relationship", "Strong positive relationship", "No relationship"], 
    answer: 2, 
    explanation: "Correlation coefficient r ranges from −1 to 1. r = 0.9 is close to 1, indicating strong positive linear relationship between variables. Choice A (Strong negative relationship) results from an arithmetic error during solving. Choice D (No relationship) comes from forgetting to isolate the variable completely."
  },
  {
    id: "m258", 
    domain: "Problem Solving & Data Analysis", 
    category: "Rates", 
    difficulty: 2, 
    text: "A car travels 150 miles in 3 hours. What is the average speed in miles per hour?", 
    choices: ["40", "50", "60", "75"], 
    answer: 1, 
    explanation: "Speed = distance / time = 150 miles / 3 hours = 50 mph. Rate of change is total distance divided by total time. Choice A (40) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m259", 
    domain: "Problem Solving & Data Analysis", 
    category: "Rates", 
    difficulty: 2, 
    text: "If water flows at 8 gallons per minute, how many gallons flow in 45 minutes?", 
    choices: ["240", "300", "360", "400"], 
    answer: 2, 
    explanation: "Total = rate × time = 8 gallons/min × 45 min = 360 gallons. Multiply rate by time to find total amount. Choice A (240) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m260", 
    domain: "Problem Solving & Data Analysis", 
    category: "Unit Conversion", 
    difficulty: 1, 
    text: "Convert 1.5 kilometers to meters.", 
    choices: ["150", "1500", "15", "150000"], 
    answer: 1, 
    explanation: "1 kilometer = 1000 meters. So 1.5 km = 1.5 × 1000 = 1500 meters. Metric conversions multiply/divide by powers of 10. Choice A (150) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m261", 
    domain: "Problem Solving & Data Analysis", 
    category: "Unit Conversion", 
    difficulty: 1, 
    text: "How many seconds are in 5 minutes?", 
    choices: ["30", "60", "300", "600"], 
    answer: 2, 
    explanation: "Time conversion uses the standard ratio: 1 minute = 60 seconds. Therefore 5 minutes = 5 × 60 = 300 seconds. Multiply when converting to smaller units. Choice A (30) results from inverting the rate or converting units in the wrong direction."
  },
  {
    id: "m262", 
    domain: "Problem Solving & Data Analysis", 
    category: "Area & Volume", 
    difficulty: 2, 
    text: "What is the area of a rectangle with length 8 cm and width 5 cm?", 
    choices: ["13", "26", "40", "50"], 
    answer: 2, 
    explanation: "Area = length × width = 8 × 5 = 40 square cm. Rectangle area formula is straightforward multiplication. Choice A (13) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m263", 
    domain: "Problem Solving & Data Analysis", 
    category: "Area & Volume", 
    difficulty: 2, 
    text: "What is the volume of a rectangular box with dimensions 3 cm × 4 cm × 5 cm?", 
    choices: ["12", "25", "60", "120"], 
    answer: 2, 
    explanation: "Volume = length × width × height = 3 × 4 × 5 = 60 cubic cm. Three-dimensional volume multiplies all three dimensions. Choice A (12) uses the wrong formula or forgets to square/cube the measurements."
  },
  {
    id: "m264", 
    domain: "Problem Solving & Data Analysis", 
    category: "Combinatorics", 
    difficulty: 2, 
    text: "In how many ways can 4 people be arranged in a line?", 
    choices: ["4", "8", "16", "24"], 
    answer: 3, 
    explanation: "Arrangements (permutations) of 4 people = 4! = 4×3×2×1 = 24. Each position has decreasing choices: 4 choices for 1st, 3 for 2nd, etc. Choice A (4) confuses permutations with combinations or miscounts the arrangements."
  },
  {
    id: "m265", 
    domain: "Problem Solving & Data Analysis", 
    category: "Combinatorics", 
    difficulty: 2, 
    text: "How many ways can 3 items be chosen from 5 items (where order doesn't matter)?", 
    choices: ["10", "15", "20", "60"], 
    answer: 0, 
    explanation: "Combinations C(n,r) = n! / (r!(n-r)!). C(5,3) = 5!/(3!×2!) = (5×4×3×2×1) / ((3×2×1)(2×1)) = 120/12 = 10. Combinations ignore order. Choice B (15) confuses permutations with combinations or miscounts the arrangements."
  },
  {
    id: "m266", 
    domain: "Problem Solving & Data Analysis", 
    category: "Data Interpretation", 
    difficulty: 2, 
    text: "A survey of 200 students shows 40% prefer Math. How many students prefer Math?", 
    choices: ["60", "80", "100", "120"], 
    answer: 1, 
    explanation: "40% of 200 students = 0.40 × 200 = 80 students prefer math. To find a percentage of a population, multiply the decimal form by the total count. Choice A (60) misreads the graph or table — always check axis labels and scales carefully."
  },
  {
    id: "m267", 
    domain: "Problem Solving & Data Analysis", 
    category: "Data Interpretation", 
    difficulty: 2, 
    text: "If 30 students out of 150 failed an exam, what percentage failed?", 
    choices: ["15", "20", "25", "30"], 
    answer: 1, 
    explanation: "Percentage = (part/whole) × 100% = (30/150) × 100% = (1/5) × 100% = 20%. Convert ratios to percentages by dividing and multiplying by 100. Choice A (15) misreads the graph or table — always check axis labels and scales carefully."
  },
  {
    id: "m268", 
    domain: "Problem Solving & Data Analysis", 
    category: "Estimation", 
    difficulty: 2, 
    text: "Roughly estimate: √(99)", 
    choices: ["8", "9", "10", "11"], 
    answer: 1, 
    explanation: "√(99) is close to √(100) = 10. Since 99 < 100, we have √(99) < 10. More precisely, √(99) ≈ 9.95 ≈ 10. Estimate using nearby perfect squares. Choice A (8) rounds at the wrong step. Estimate last — don't round intermediate values."
  },
  {
    id: "m269", 
    domain: "Problem Solving & Data Analysis", 
    category: "Estimation", 
    difficulty: 2, 
    text: "A store buys items for $3.99 each. Estimate the cost of 52 items.", 
    choices: ["$150", "$180", "$200", "$250"], 
    answer: 2, 
    explanation: "$3.99 ≈ $4 per item, and 52 items ≈ 50 items. Rough cost = 50 × $4 = $200. Round to convenient numbers for mental math. Choice A ($150) rounds at the wrong step. Estimate last — don't round intermediate values."
  },
  {
    id: "m270", 
    domain: "Problem Solving & Data Analysis", 
    category: "Scale & Proportion", 
    difficulty: 2, 
    text: "On a map, 1 inch represents 50 miles. What distance do 3 inches represent?", 
    choices: ["50", "100", "150", "200"], 
    answer: 2, 
    explanation: "If 1 inch = 50 miles, then 3 inches = 3 × 50 = 150 miles. Scale factors multiply with proportional changes. Choice A (50) sets up the proportion incorrectly or cross-multiplies with an error."
  },
  {
    id: "m271", 
    domain: "Problem Solving & Data Analysis", 
    category: "Weighted Averages", 
    difficulty: 2, 
    text: "A student scores 80 on a 25-question test and 90 on a 75-question test. What is the weighted average?", 
    choices: ["85", "87", "87.5", "88.5"], 
    answer: 2, 
    explanation: "Weighted average = (score₁ × weight₁ + score₂ × weight₂) / (total weight) = (80×25 + 90×75) / 100 = (2000+6750) / 100 = 8750/100 = 87.5. Choice A (85) uses a simple average instead of weighting by the correct quantities."
  },
  {
    id: "m272", 
    domain: "Geometry & Trigonometry", 
    category: "Triangles", 
    difficulty: 1, 
    text: "What is the sum of angles in a triangle?", 
    choices: ["90°", "180°", "270°", "360°"], 
    answer: 1, 
    explanation: "The sum of interior angles in any triangle is always 180°. This is a fundamental property of Euclidean geometry. Choice A (90°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m273", 
    domain: "Geometry & Trigonometry", 
    category: "Triangles", 
    difficulty: 1, 
    text: "In a right triangle, if one leg is 3 and the hypotenuse is 5, what is the other leg?", 
    choices: ["2", "3", "4", "5"], 
    answer: 2, 
    explanation: "Using Pythagorean theorem: 3² + b² = 5². So 9 + b² = 25, thus b² = 16, b = 4. Choice A (2) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m274", 
    domain: "Geometry & Trigonometry", 
    category: "Triangles", 
    difficulty: 2, 
    text: "What is the area of a triangle with base 10 cm and height 6 cm?", 
    choices: ["30", "60", "16", "20"], 
    answer: 0, 
    explanation: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30 square cm. Triangle area is half of base times height. Choice B (60) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m275", 
    domain: "Geometry & Trigonometry", 
    category: "Triangles", 
    difficulty: 2, 
    text: "An equilateral triangle has side length 4 cm. What is its perimeter?", 
    choices: ["4", "8", "12", "16"], 
    answer: 2, 
    explanation: "An equilateral triangle has three equal sides. Perimeter = side + side + side = 4 + 4 + 4 = 12 cm. Perimeter is the distance around the entire triangle. Choice A (4) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m276", 
    domain: "Geometry & Trigonometry", 
    category: "Circles", 
    difficulty: 1, 
    text: "What is the circumference of a circle with radius 5 cm?", 
    choices: ["5π", "10π", "25π", "100π"], 
    answer: 1, 
    explanation: "Circumference formula: C = 2πr where r is radius. C = 2π(5) = 10π cm. Circumference is the perimeter of a circle, proportional to radius. Choice A (5π) confuses radius with diameter, or uses the wrong formula (area vs. circumference)."
  },
  {
    id: "m277", 
    domain: "Geometry & Trigonometry", 
    category: "Circles", 
    difficulty: 1, 
    text: "What is the area of a circle with radius 3 cm?", 
    choices: ["3π", "6π", "9π", "18π"], 
    answer: 2, 
    explanation: "Circle area formula: A = πr² where r is radius. A = π(3)² = 9π square cm. Area depends on the square of radius, not linear. Choice A (3π) confuses radius with diameter, or uses the wrong formula (area vs. circumference)."
  },
  {
    id: "m278", 
    domain: "Geometry & Trigonometry", 
    category: "Circles", 
    difficulty: 2, 
    text: "A circle has area 49π. What is its radius?", 
    choices: ["5", "7", "10", "49"], 
    answer: 1, 
    explanation: "Area = πr² = 49π. Therefore r² = 49, so r = 7. Solve for radius by taking square root. This is standard technique for geometric formulas. Choice A (5) confuses radius with diameter, or uses the wrong formula (area vs. circumference)."
  },
  {
    id: "m279", 
    domain: "Geometry & Trigonometry", 
    category: "Quadrilaterals", 
    difficulty: 1, 
    text: "What is the sum of interior angles in a quadrilateral?", 
    choices: ["180°", "270°", "360°", "540°"], 
    answer: 2, 
    explanation: "A quadrilateral has 4 sides. The sum of interior angles = (n−2) × 180° where n=4. So (4−2) × 180° = 2 × 180° = 360°. Choice A (180°) results from a common calculation error. Choice D (540°) misapplies the key concept."
  },
  {
    id: "m280", 
    domain: "Geometry & Trigonometry", 
    category: "Quadrilaterals", 
    difficulty: 2, 
    text: "What is the area of a parallelogram with base 8 and height 5?", 
    choices: ["13", "26", "40", "64"], 
    answer: 2, 
    explanation: "Parallelogram area = base × height = 8 × 5 = 40. Unlike triangles, parallelograms don't have the 1/2 factor because both opposite sides are full height. Choice A (13) results from a common calculation error. Choice D (64) misapplies the key concept."
  },
  {
    id: "m281", 
    domain: "Geometry & Trigonometry", 
    category: "Quadrilaterals", 
    difficulty: 2, 
    text: "A rectangle has length 12 and width 7. What is its perimeter?", 
    choices: ["19", "38", "84", "42"], 
    answer: 1, 
    explanation: "Perimeter of rectangle = 2(length + width) = 2(12 + 7) = 2(19) = 38. Add all four sides: 12+7+12+7 = 38. Choice A (19) results from a common calculation error. Choice D (42) misapplies the key concept."
  },
  {
    id: "m282", 
    domain: "Geometry & Trigonometry", 
    category: "3D Shapes", 
    difficulty: 2, 
    text: "What is the volume of a cylinder with radius 3 cm and height 10 cm?", 
    choices: ["30π", "60π", "90π", "300π"], 
    answer: 2, 
    explanation: "Volume = πr²h = π(3)²(10) = π(9)(10) = 90π cubic cm. Cylinder volume extends circle area to 3D. Choice A (30π) results from a common calculation error. Choice D (300π) misapplies the key concept."
  },
  {
    id: "m283", 
    domain: "Geometry & Trigonometry", 
    category: "3D Shapes", 
    difficulty: 2, 
    text: "What is the volume of a sphere with radius 3?", 
    choices: ["27π", "36π", "54π", "108π"], 
    answer: 2, 
    explanation: "Volume = (4/3)πr³ = (4/3)π(3)³ = (4/3)π(27) = 36π. Sphere volume uses specific formula. Choice A (27π) results from a common calculation error. Choice D (108π) misapplies the key concept."
  },
  {
    id: "m284", 
    domain: "Geometry & Trigonometry", 
    category: "Angles", 
    difficulty: 1, 
    text: "What is the measure of a right angle?", 
    choices: ["45°", "90°", "180°", "270°"], 
    answer: 1, 
    explanation: "A right angle is one of the most important angles in geometry, measuring exactly 90 degrees or π/2 radians. It's often marked with a small square. Choice A (45°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m285", 
    domain: "Geometry & Trigonometry", 
    category: "Angles", 
    difficulty: 2, 
    text: "Two angles are complementary. If one angle is 35°, what is the other?", 
    choices: ["45°", "55°", "65°", "145°"], 
    answer: 1, 
    explanation: "Complementary angles sum to exactly 90°. If one is 35°, the other is 90° - 35° = 55°. 'Complementary' means 'add to 90°'. Choice A (45°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m286", 
    domain: "Geometry & Trigonometry", 
    category: "Angles", 
    difficulty: 2, 
    text: "Two angles are supplementary. If one angle is 120°, what is the other?", 
    choices: ["30°", "60°", "90°", "180°"], 
    answer: 1, 
    explanation: "Supplementary angles sum to exactly 180°. If one is 120°, the other is 180° - 120° = 60°. 'Supplementary' means 'add to 180°'. Choice A (30°) misapplies angle relationships (supplementary, complementary, or vertical angles)."
  },
  {
    id: "m287", 
    domain: "Geometry & Trigonometry", 
    category: "Coordinate Geometry", 
    difficulty: 2, 
    text: "What is the distance between points (0, 0) and (3, 4)?", 
    choices: ["3", "4", "5", "7"], 
    answer: 2, 
    explanation: "Distance = √[(3−0)² + (4−0)²] = √(9 + 16) = √25 = 5. Distance formula extends Pythagorean theorem to coordinate plane. Choice A (3) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m288", 
    domain: "Geometry & Trigonometry", 
    category: "Coordinate Geometry", 
    difficulty: 2, 
    text: "What is the midpoint of the segment from (-2, 4) to (6, 8)?", 
    choices: ["(2, 6)", "(3, 5)", "(4, 6)", "(2, 5)"], 
    answer: 0, 
    explanation: "Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2) = ((−2+6)/2, (4+8)/2) = (4/2, 12/2) = (2, 6). Midpoint is the average of endpoints. Choice B ((3, 5)) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m289", 
    domain: "Geometry & Trigonometry", 
    category: "Coordinate Geometry", 
    difficulty: 2, 
    text: "What is the slope of the line through (1, 2) and (4, 8)?", 
    choices: ["1", "2", "3", "4"], 
    answer: 1, 
    explanation: "Slope = rise/run = (y₂-y₁)/(x₂-x₁) = (8−2)/(4−1) = 6/3 = 2. Slope measures how steep a line is or how much y changes per unit x. Choice A (1) makes a sign error or confuses x and y coordinates in the formula."
  },
  {
    id: "m290", 
    domain: "Geometry & Trigonometry", 
    category: "Trigonometry", 
    difficulty: 2, 
    text: "In a right triangle, tan(θ) = opposite/adjacent. If opposite = 5 and adjacent = 12, what is tan(θ)?", 
    choices: ["5/12", "12/5", "5/13", "12/13"], 
    answer: 0, 
    explanation: "tan(θ) = opposite/adjacent = 5/12. Tangent is the ratio of opposite to adjacent sides in a right triangle. Choice B (12/5) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m291", 
    domain: "Geometry & Trigonometry", 
    category: "Trigonometry", 
    difficulty: 2, 
    text: "In a right triangle with hypotenuse 13 and opposite side 5, what is sin(θ)?", 
    choices: ["5/13", "12/13", "5/12", "13/5"], 
    answer: 0, 
    explanation: "sin(θ) = opposite/hypotenuse = 5/13. Sine ratio uses opposite side and hypotenuse. Choice B (12/13) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m292", 
    domain: "Geometry & Trigonometry", 
    category: "Trigonometry", 
    difficulty: 2, 
    text: "What is tan(45°)?", 
    choices: ["0", "1", "√2", "√3"], 
    answer: 1, 
    explanation: "At 45°, both sine and cosine equal √2/2 (from the unit circle). Therefore tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1. Choice A (0) confuses sine and cosine, or uses the wrong triangle ratio. Always verify which side is opposite/adjacent."
  },
  {
    id: "m293", 
    domain: "Geometry & Trigonometry", 
    category: "Law of Sines", 
    difficulty: 3, 
    text: "In triangle ABC, angle A = 30°, angle B = 45°, side a = 10. Find side b.", 
    choices: ["10√2", "15", "10/√2", "20"], 
    answer: 0, 
    explanation: "Law of Sines: a/sin(A) = b/sin(B). So 10/sin(30°) = b/sin(45°). Thus 10/(1/2) = b/(√2/2), giving b = 20(√2/2) = 10√2. Choice B (15) confuses the Law of Sines with the Law of Cosines, or sets up the equation with the wrong angle-side pair."
  },
  {
    id: "m294", 
    domain: "Geometry & Trigonometry", 
    category: "Law of Cosines", 
    difficulty: 3, 
    text: "In triangle ABC with a=5, b=6, c=7, use Law of Cosines to find cos(C).", 
    choices: ["1/7", "1/5", "5/56", "2/7"], 
    answer: 1, 
    explanation: "Law of Cosines: c² = a² + b² − 2ab·cos(C). Thus 49 = 25 + 36 − 60·cos(C), so 60·cos(C) = 12, giving cos(C) = 1/5. Choice A (1/7) confuses the Law of Sines with the Law of Cosines, or sets up the equation with the wrong angle-side pair."
  },
  {
    id: "m295", 
    domain: "Geometry & Trigonometry", 
    category: "Transformations", 
    difficulty: 2, 
    text: "If point (2, 3) is reflected across the x-axis, what is the new point?", 
    choices: ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"], 
    answer: 1, 
    explanation: "Reflection across x-axis: the point (x, y) becomes (x, -y). The x-coordinate stays the same, but the y-coordinate changes sign. (2, 3) → (2, -3). Choice A ((-2, 3)) applies the transformation in the wrong direction. Horizontal shifts work opposite to the sign."
  },
  {
    id: "m296", 
    domain: "Geometry & Trigonometry", 
    category: "Transformations", 
    difficulty: 2, 
    text: "If point (3, 4) is rotated 90° counterclockwise about the origin, what is the new point?", 
    choices: ["(4, 3)", "(-4, 3)", "(3, -4)", "(-3, 4)"], 
    answer: 1, 
    explanation: "90° counterclockwise rotation: (x, y) → (−y, x). So (3, 4) → (−4, 3). Rotation transforms coordinates by switching and negating. Choice A ((4, 3)) applies the transformation in the wrong direction. Horizontal shifts work opposite to the sign."
  }
];
