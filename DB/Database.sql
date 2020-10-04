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

USE Eval;
INSERT INTO Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory, PurposeUse,EvalScope)
VALUES ('user1', 'projectU1', 'org1P1', '01-09-2020','user1@user1.com','BackgroundP1','EvalHistoryP1','PurposeUseP1','EvalScopeP1');
INSERT INTO Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory, PurposeUse,EvalScope)
VALUES ('user1', 'projectU2', 'org1P2', '01-09-2020','user1@user1.com','BackgroundP2','EvalHistoryP2','PurposeUseP2','EvalScopeP2');

USE Eval;
DROP TABLE Tool2;

USE Eval;
CREATE TABLE Tool2(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL UNIQUE,
LogicMod nvarchar(2000),
Situation nvarchar(2000),
Goal nvarchar(2000),
Assumptions nvarchar(2000),
Factors nvarchar(2000),
PRIMARY KEY (UserName, ProjectName));

USE Eval;
INSERT INTO Tool2 (UserName, ProjectName, LogicMod, Situation, Goal, Assumptions, Factors)
VALUES ('user1', 'projectU1', 'LogicModelP1', 'SituationP1','GoalP1','AssumptionsP1','FactorsP1');
INSERT INTO Tool2 (UserName, ProjectName, LogicMod, Situation, Goal, Assumptions, Factors)
VALUES ('user1', 'projectU2', 'LogicModelP2', 'SituationP2','GoalP2','AssumptionsP2','FactorsP2');

USE Eval;
DROP TABLE Tool2Table;

USE Eval;
CREATE TABLE Tool2Table(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
Inputs varchar(50),
Activities varchar(50),
Outputs varchar(50),
ShortTerm varchar(50),
MidTerm varchar(50),
LongTerm varchar(50));
--,
--PRIMARY KEY (UserName, ProjectName));

USE Eval;
INSERT INTO Tool2Table (UserName, ProjectName, Inputs, Activities, Outputs, ShortTerm, MidTerm, LongTerm)
VALUES ('user1', 'projectU1', 'InputsP1', 'ActivitiesP1','OutputsP1','ShortTermP1','MidTermP1','LongTermP1');

-------------------------------------------------------------------------------------------------------
USE Eval;
DROP TABLE Tool8Table;

USE Eval;
CREATE TABLE Tool8Table(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
EthicalRisk varchar(50),
MitStrategy varchar(50));
--,
--PRIMARY KEY (UserName, ProjectName));

USE Eval;
INSERT INTO Tool8Table (UserName, ProjectName, EthicalRisk, MitStrategy)
VALUES ('user1', 'projectU1', 'EthicalInputP1', 'MitStrategyInputP1');

-------------------------------------------------------------------------------------------------------
USE Eval;
DROP TABLE Tool4Table;


USE Eval;
CREATE TABLE Tool4Table(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
stakeholderTypes varchar(50),
stakeholderNames varchar(50),
stakeholderPurp varchar(50),
stakeholderNat varchar(50),
primIntUser varchar(50));

USE Eval;
INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser)
VALUES ('user1', 'projectU1', 'a', 'a',  'a', 'a', 'a');


USE Eval;
DROP TABLE Tool9Table1;

USE Eval;
CREATE TABLE Tool9Table1(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
ProductT9 varchar(50),
DescriptionT9 varchar(50),
AudienceT9 varchar(50),
ResponsiblityT9 varchar(50),
DraftDueT9 date NOT NULL,
FinalDueT9 date NOT NULL);
--,
--PRIMARY KEY (UserName, ProjectName));

USE Eval;
INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser)
VALUES ('user1', 'projectU1', 'Funders', 'FDS', 'Accountability', 'Inform evaluation', 'Yes');

SELECT * FROM Tool4Table
INSERT INTO Tool9Table1 (UserName, ProjectName, ProductT9, DescriptionT9, AudienceT9, ResponsiblityT9, DraftDueT9, FinalDueT9)
VALUES ('user1', 'projectU1', 'Product1', 'Description1', 'Audience1', 'Responsbility1', '01-09-2020', '01-09-2020');

-------------------------------------------------------------------------------------------------------

USE Eval;
DROP TABLE Tool9Table2;

USE Eval;
CREATE TABLE Tool9Table2(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
Product2 varchar(50),
Description2 varchar(50),
Audience2 varchar(50),
Method2 varchar(50),
Responsibility2 varchar(50),
Date2 date NOT NULL);
--,
--PRIMARY KEY (UserName, ProjectName));

USE Eval;
INSERT INTO Tool9Table2 (UserName, ProjectName, Product2, Description2, Audience2, Method2, Responsibility2, Date2)
VALUES ('user1', 'projectU1', 'Product2', 'Description2', 'Audience2', 'Method2', 'Responsibility2', '01-09-2020');

USE Eval;
DROP TABLE Tool6Table;


USE Eval;
Create Table Tool6Table(
UserName varchar(20) NOT NULL,
ProjectName varchar(50) NOT NULL,
EvalQ nvarchar(2000),
Reason nvarchar(2000));
--PRIMARY KEY (ProjectName, UserName));
