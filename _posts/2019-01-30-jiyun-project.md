---
layout: post
title: "1인 프로젝트-게시판 만들기"
author: jiyun.kim
date: "2019-01-30 14:07:00 +0900"
tags: [study]
comments : true
---

#게시판 만들기 프로젝트

**프로젝트 개요**
사용언어: Java 1.8
프레임워크: Spring 3.9.3
DB: MySQL 8.0
서버 : Apache Tomcat 8.5
빌드: Maven
테스트: JUnit 4.12 
ORM: Mybatis 3.4.6

**환경 설정**
-Maven dependencies 추가 (pom.xml에 dependencies 추가)
-MyBatis로 MySQL 연동(root-context.xml 파일에 beans 추가), XML Mapper에 SQL 저장


**프로젝트 결과**
1. DB 테이블
   -tbl_post(게시물)
   ![tbl_post](./img/tbl_post.png)
   
   -tbl_user(사용자)
   ![tbl_user](./img/tbl_user.png)
  
  
2. 구현 화면
   -메인화면: 하단 페이징 추가, 페이지 당 게시물 10개로 설정
   ![list](./img/list.png)
   ![paging](./img/paging.png)
   
   -회원가입
   ![signup](./img/signup.png)
   
   -로그인
   ![login](./img/login.png)
   
   -글쓰기
   ![register](./img/register.png)
   
   조회
   ![readPage](./img/readPage.png)
   
   검색기능(제목, 내용, 글쓴이 keyword로 검색가능)
   ![search](./img/search.png)
   
   조회수 
   ![viewcount](./img/viewcount.png)
   
   



