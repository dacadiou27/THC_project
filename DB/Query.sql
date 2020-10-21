/*DANY_PC\\SQLEXPRESS*/

Use Eval;
Select *
From Users;

Use Eval;
Select *
From Projects;

Use Eval;
Select *
From Tool2;

Use Eval;
Select *
From Tool2Table;

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

Use Eval;
Select *
From Tool8Table;

Use Eval;
Select *
From Tool9Table1;

Use Eval;
Select *
From Tool9Table2;

Use Eval;
Select *
From Tool6Table;

Use Eval;
Select *
From Tool4Table;

Use Eval;
Select *
From Tool7Table;

Use Eval;
Select *
From Tool7Table2;

Use Eval;
Select *
From Tool7Table3;


--OTHER QUERIES---

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
