---
title: "SPM - Cost Estimation"
author: xy
date: 2024-04-16 10:10:00 -0400
categories: [Study,Software Project Management]
tags: [Study,SPM]
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# Excample Description

A project 'X' has 2 iterations, each 6 months. Certain problem may anise within the project at the 6 months which may cause devastating effects. You as a project manager, have 3 options to consider from each of which has a success & a failure date.
 > **( Note: Attention!! The summary is 2x6 = 12 months )**


## Continue as it is: -

 - If it is a success, it creates 4 months delay.  
 - If it is a failure, it creates **another** 5 month delay.
 >  **( If failure, will cost 9 months total )**
 

## Reshuffle Resources: -

- Success: Creates a 2 months delay.
- Failure: Creates **another** 3 months delay. 
>  **( If failure, will cost 5 months total )**


## Hire Consultment: -

- Success: Creates a 1 month delay.
- Failure: Creates **another** 1 month delay. 
 >  **( If failure, will cost 2 months total )**

## Consider the following numerical values: -

**Development:**
- In house cost pre month = $1000
- Consultant company cost per month = $1200

**Income:**
- Revenues start after 4 months of project completion.
- The monthly revenue for the 1st year = $2000
- The monthly revenue for the 2nd year = $3000
- Increment Rate: 12% per year. ( On Costs & Revenues )


## Questions

> ***Kindly note that the project is begin developed in the 0th year.***

1. What would be your initial estimations as a project manager is nothing had gone wrong?

2. Which of the above 3 options. Would you adopt to minimire the amont of duration from the initial estimation?

## Formulars

- Net Present Value ( NPV ): This is value of all future and present cash flows over the entire life of the asset.
$$
NPV = \sum_{t=0}^N \frac{NCF}{(1+i)^t}
$$
> N is year.

- Net Cash Flow ( NCF ): Total IN and OUT.

### Qustion 1:
NCF Calculation:
1.  Year 0: $$12 * -1000 = -12000$$
2.  Year 1: 
$$
 \begin{cases}
 4 * 0 &= 0\\
 8 * 2000 &= 16000
\end{cases} =16000
$$


3. Year 2: $$12 * 3000 = 36000$$
4. Then:
$$
NPV = \sum_{t=0}^N \frac{NCF}{(1+i)^t}=\frac{-1200}{(1+\frac{12}{120})^0}+\frac{16000}{(1+\frac{12}{120})^1}+\frac{36000}{(1+\frac{12}{120})^2}
\\
=-12000+\frac{16000}{1.12}+\frac{16000}{(1.12)^2}
\\
=30984.68
$$

It will cost 30984.68 dollars when nothing had gone wrong.

### Question 2:
**1.Continue as it is:-** 

**Success: -**
NCF Calculation:
1. Year 0: $$12*-1000=-12000$$
2. Year 1:
$$
 \begin{cases}
 4 * -1000 &= -4000\\
 4*0&=0\\
 4 * 2000 &= 8000
\end{cases} =4000
$$
3. Year 2: $$12*3000=36000$$
4. Then:
$$
NPV = \frac{-1200}{(1+\frac{12}{120})^0}+\frac{16000}{(1+\frac{12}{120})^1}+\frac{36000}{(1+\frac{12}{120})^2}=...=56070.40816
$$

