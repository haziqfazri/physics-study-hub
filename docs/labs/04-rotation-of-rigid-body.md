---
title: Experiment 4 - Rotational Motion of a Rigid Body
outline: deep
---

# Experiment 4: Rotational Motion of a Rigid Body

## Objective

To determine the moment of inertia of a fly-wheel, *I*.

## Theory

### Linear and Rotational Motion

<div style="display: flex; justify-content: center;">
  <img src="/labs/lab-04/figure-4-1.png" alt="Figure 4.1: Rotational Motion Theory" style="max-width: 150px; margin: 20px 0;" />
</div>

Consider a fly-wheel of moment of inertia *I* with a slotted mass *m* attached via a string wound around its axle as shown in `Figure 4.1`. By applying Newton's second law for linear motion:

$$mg - T = ma$$

$$T = m(g - a) \tag{4.1}$$

### Rotational Dynamics

Applying Newton's second law for rotational motion:

$$TR - \tau = I\alpha \tag{4.2}$$

$$
\begin{aligned}
    \text{where,} \quad a &= \text{downward linear acceleration} \\
    \tau &= \text{frictional torque (unknown)} \\
    \alpha &= \text{angular acceleration} \\
    T &= \text{tension in the string} \\
    R &= \text{radius of the axle} \\
    I &= \text{moment of inertia of the fly-wheel}
\end{aligned}
$$

### Deriving the Moment of Inertia Equation

Combining `equations 4.1` and `4.2`, we can derive:

$$\alpha = \frac{T}{I}R - \frac{\tau}{I} \tag{4.3}$$

> A graph of $\alpha$ against $T$ is a straight line graph with gradient $\frac{R}{I}$.

The moment of inertia of the fly-wheel can be determined from:

$$I = \frac{R^2}{\text{gradient}} \tag{4.4}$$

### Kinematic Relations

From kinematics, using $s = ut + \frac{1}{2}at^2$ with *s* = *–h* and *u* = 0:

$$h = \frac{1}{2}at^2$$

Hence the linear acceleration:

$$a = \frac{2h}{t^2} \tag{4.5}$$

$$
\begin{aligned}
    \text{where,} \quad
    h &= \text{height of mass} \\
    t &= \text{time taken for the mass to fall to the floor} 
\end{aligned}
$$

### Angular Acceleration

The relationship between linear and angular acceleration is:

$$\alpha = \frac{a}{R} \tag{4.6}$$

## Apparatus

- Fly-wheel
- Stopwatch
- Set of slotted mass with hook
- Metre rule
- G-clamp
- Piece of inelastic string to hang the mass to the fly-wheel
- Piece of softboard or plywood
- Vernier callipers

## Procedure

### Setup

1. Set up the apparatus as shown in `Figure 4.2`

<div style="display: flex; justify-content: center;">
  <img src="/labs/lab-04/figure-4-2.png" alt="Figure 4.2: Rotational Motion Apparatus" style="max-width: 400px; margin: 20px 0;" />
</div>

### Preliminary Measurements

2. Measure the diameter, *d* of the axle using the vernier callipers
3. Calculate the radius: $R = \frac{d}{2}$

### Data Collection Steps

4. Record the falling slotted mass, *m*
5. Choose a fixed point at a height, *h* above the floor and record this height
6. Wind the string around the axle
7. Release the slotted mass, *m* from the fixed height, *h*
8. Record the time, *t* for the slotted mass to reach the floor
9. Repeat steps 4-8 for **at least six different slotted masses**, *m*

### Data Analysis

10. Calculate the **linear acceleration**, **tension in the string**, and **angular acceleration** using `equations 4.5, 4.1, 4.6` respectively.

11. **Tabulate all the data** in a suitable table with all calculated values

12. **Plot a graph** of *α* against *T*

13. **Determine the moment of inertia** from the gradient of the graph using equation 4.4:
    $$I = \frac{R^2}{\text{gradient}}$$

14. **Determine the uncertainty** of moment of inertia, *ΔI*

### Comparison and Analysis

17. Compare the moment of inertia of the fly-wheel, *I* obtained from the experiment with the standard value
18. Write comments explaining the results and any discrepancies

## Data Recording Template

### Rotational Motion Data Table

**Axle Radius:** *R* = (......... $\pm$ .........) m

<div class='center-table'>

| No | Mass *m* (kg) ($\pm$.......) | Height *h* (m) ($\pm$.......) | Time *t* (s) ($\pm$.......) | Accel. *a* (m/s²) | Tension *T* (N) | Ang. Accel. *α* (rad/s²) |
|:---:|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |

</div>

## Guideline Video

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/FM2itxN4kHg?si=Aeu0xplph-fiwE8f"
    title="Rotational Motion Experiment"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
