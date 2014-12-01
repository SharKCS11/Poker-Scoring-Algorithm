Poker-Scoring-Algorithm
=======================

Better points system for a greater than six-handed poker tournament.
=======================
This poker scoring algorithm was created by adjusting the 9-6-3-1 ranking system for consistent play style.
Since most games occur with greater than six people, the rankings at the end of a session are alloted points as follows:

1st place- 9 points

2nd place- 6 points

3rd place- 3 points

4th place- 1 point

-----------------------
Two metrics are being measured on the spreadsheet: the first is the total score at the end. This is useful in measuring the raw magnitude of a person's cashes.
In this system, however, two first place cashes = three second place cashes = six third place cashes = eighteen fourth place cashes. Obviously, this system is flawed because a player placing fourth eighteen times has probably played more consistently sound than someone who has two first place wins, regardless of who has the higher cash total.
To solve this problem, a different calculation is now being used in addition to just a sum total. It ranks players primarily on consistency and then factors in high score. To learn more, please read the "New Algorith Explanation" pdf file in this repository, where you can also find the spreadsheet code. The JavaScript version of this is also included in this folder.
-----------------------
~Sharang

