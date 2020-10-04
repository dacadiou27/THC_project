

Use Eval;
Select *
From Users;

Use Eval;
Select *
From Projects;

Use Eval;
Select *
From Tool6Table;


Use Eval;
SELECT UserPassword
FROM Users
WHERE userName = 'user1';

Use Eval;
SELECT Email
FROM Users
WHERE Email = 'user1';

Use Eval;
UPDATE Users SET UserPassword = 'p1changed'
WHERE Email = 'user1@user1.com';