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

## Formulars

- Net Present Value ( NPV ): This is value of all future and present cash flows over the entire life of the asset.
$$
NPV = \sum_{t=0}^N \frac{NCF}{(1+i)^t}
$$
> N is year.

- Net Cash Flow ( NCF ): Total IN and OUT.

## Questions

> ***Kindly note that the project is begin developed in the 0th year.***

1. What would be your initial estimations as a project manager is nothing had gone wrong?

2. Which of the above 3 options. Would you adopt to minimire the amont of duration from the initial estimation?


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
**1. Option1: Continue as it is:-** 

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
NPV = \frac{-12000}{(1+\frac{12}{100})^0}+\frac{16000}{(1+\frac{12}{100})^1}+\frac{36000}{(1+\frac{12}{100})^2}=...=30984.69388
$$

**Failure: -** 
NCF Calculation: 

1. Year 0: $$12*-1000=-12000$$
2. Year 1:
 $$
\begin{cases}
 9 * -1000 &= -9000\\
 3*0&=0\\
\end{cases} =- 9000
$$
3. Year 2:$$
\begin{cases}
1*0&=0\\
11*3000&=33000\\
\end{cases} =33000
$$

4. Then:
$$
NPV = \frac{-12000}{(1+\frac{12}{100})^0}+\frac{-9000}{(1+\frac{12}{100})^1}+\frac{33000}{(1+\frac{12}{100})^2}=...=6271.6836
$$

\
**2. Option 2: Reshuffle Resources: Skip, Same as above.**

**3. Option 3: Hire Consultants: -**
NCF Calculation:-

1. Year 0: 
$$
\begin{cases}
12*-1000&=-12000\\
6*-1200&=-7200\\
\end{cases} =-19200
$$
2. Year 1: 
$$
\begin{cases}
1*-1000&=-1000\\
1*-1200&=-1200\\
4*0&=0\\
7*2000&=14000\\
\end{cases} =11800
$$
2. Year 2: 
$$
12*3000=36000
$$
4. Then:
$$
NPV = \frac{-19200}{(1+\frac{12}{100})^0}+\frac{11800}{(1+\frac{12}{100})^1}+\frac{36000}{(1+\frac{12}{100})^2}=...=20034.69388
$$
