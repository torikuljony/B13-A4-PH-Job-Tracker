## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

= 
1.getElementById()
এই method একটি নির্দিষ্ট ID ব্যবহার করে একটি element select করে। এটি সবসময় একটি element return করে।

2.getElementsByClassName()
এই method একই class নামের একাধিক element select করে। এটি HTMLCollection return করে।

3.querySelector()
এটি CSS selector ব্যবহার করে প্রথম matching element select করে।

4.querySelectorAll()
এটি CSS selector ব্যবহার করে সব matching element select করে এবং NodeList return করে।

### 2. How do you create and insert a new element into the DOM?

=
1.প্রথমে document.createElement() ব্যবহার করে নতুন element তৈরি করতে হয়।

2.তারপর innerText বা innerHTML দিয়ে content যোগ করতে হয়।

3.শেষে appendChild() ব্যবহার করে DOM এ যুক্ত করতে হয়।

### 3. What is Event Bubbling? And how does it work?
=
1.Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element এ event ঘটলে সেটি parent element গুলোতে উপরের দিকে ছড়িয়ে যায়।

2.অর্থাৎ event প্রথমে target element এ কাজ করে, তারপর তার parent, তারপর body, তারপর document এ যায়।

### 4. What is Event Delegation in JavaScript? Why is it useful?
=
1.Event Delegation হলো parent element এ একটি event listener বসিয়ে child element গুলোর event handle করা।

2.এটি useful কারণ এতে কম code লাগে, performance ভালো হয় এবং dynamic element এর ক্ষেত্রেও কাজ করে।
### 5. What is the difference between preventDefault() and stopPropagation() methods?
=
1.preventDefault() browser এর default কাজ বন্ধ করে (যেমন form submit হওয়া বন্ধ করা)।

2.stopPropagation() event কে parent element এ যেতে বাধা দেয় (event bubbling বন্ধ করে)।

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
