CREATE DATABASE Eval;

USE Eval;
DROP TABLE Users;

USE Eval;
CREATE TABLE Users(
UserName varchar(20) NOT NULL UNIQUE,
FirstName char(50) NOT NULL,
LastName char(50) NOT NULL,
UserPassword varchar(20) NOT NULL,
Email varchar(50) NOT NULL UNIQUE,
OrgName varchar(50) NOT NULL,
OrgType char(20) NOT NULL 
PRIMARY KEY (UserName, Email));

USE Eval;
INSERT INTO Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType)
VALUES ('user1', 'userf1', 'userl1', 'pwd1','user1@user1.com','userc1','user1');
INSERT INTO Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType)
VALUES ('user2', 'userf2', 'userl2', 'pwd2','user2@user2.com','userc2','user2');
INSERT INTO Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType)
VALUES ('user3', 'userf3', 'userl3', 'pwd3','user3@user3.com','userc3','user3');
INSERT INTO Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType)
VALUES ('user4', 'userf4', 'userl4', 'pwd4','user4@user4.com','userc4','user4');

USE Eval;
DROP TABLE Projects;

USE Eval;
CREATE TABLE Projects(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL UNIQUE,
Organization char(50) NOT NULL,
StartDate date NOT NULL,
CollabEmail varchar(50) NOT NULL,
Background nvarchar(2000),
EvalHistory nvarchar(2000),
PurposeUse nvarchar(2000),
EvalScope nvarchar(2000),
PRIMARY KEY (UserName, ProjectName));

--Tool 6 Table- testing--

USE Eval;
DROP TABLE Tool6Table;


USE Eval;
Create Table Tool6Table(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
EvalQ nvarchar(2000),
Reason nvarchar(2000));
--PRIMARY KEY (ProjectName, UserName));

--Tool 6 Table- actual--
USE Eval;
Create Table EvalFocus(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL UNIQUE,
EvalQ1 nvarchar(2000),
Reason1 nvarchar(2000),
EvalQ2 nvarchar(2000),
Reason2 nvarchar(2000),
EvalQ3 nvarchar(2000),
Reason3 nvarchar(2000),
EvalQ4 nvarchar(2000),
Reason4 nvarchar(2000),
EvalQ5 nvarchar(2000),
Reason5 nvarchar(2000),
EvalQ6 nvarchar(2000),
Reason6 nvarchar(2000),
EvalQ7 nvarchar(2000),
Reason7 nvarchar(2000),
EvalQ8 nvarchar(2000),
Reason8 nvarchar(2000),
EvalQ9 nvarchar(2000),
Reason9 nvarchar(2000),
EvalQ10 nvarchar(2000),
Reason10 nvarchar(2000),
PRIMARY KEY (ProjectName, UserName));

--Tool 6 Populate- Testing--
USE Eval;
INSERT INTO Tool6Table (UserName, ProjectName, EvalQ, Reason) 
VALUES ('user1','projectU1', 'Who?','Because');

--Tool 6 Populate- Actual?--
USE Eval;
INSERT INTO EvalFocus (UserName, ProjectName, EvalScope, EvalQ1, EvalQ2, EvalQ3, EvalQ4, EvalQ5, EvalQ6, EvalQ7, EvalQ8, EvalQ9, EvalQ10)
VALUES ('user1', 'projectU1', 'Some Jibberish', 'Who?','What?','Where?','Why?', 'How', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10');

USE Eval
DROP TABLE EvalFocus;

USE Eval;
INSERT INTO Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory,PurposeUse, EvalScope)
VALUES ('user1', 'projectU1', 'org1P1', '01-09-2020','user1@user1.com','BackgroundP1','EvalHistoryP1','PurposeUseP1', 'EvalScopeP1');
INSERT INTO Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory,PurposeUse, EvalScope)
VALUES ('user1', 'projectU2', 'org1P2', '01-09-2020','user1@user1.com','BackgroundP2','EvalHistoryP2','PurposeUseP2', 'EvalScopeP2');