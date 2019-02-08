---
layout: post
title: "1인 프로젝트: 게시판 만들기"
author: jiyun.kim
date: "2019-02-01 08:50:00 +0900"
tags: [study]
comments : true
---

# 게시판 만들기 프로젝트

**프로젝트 개요**

- 사용언어: Java 1.8  
- 프레임워크: Spring 3.9.3  
- DB: MySQL 8.0  
- 서버 : Apache Tomcat 8.5  
- 빌드: Maven  
- 테스트: JUnit 4.12   

**프로젝트 개요**
- 개발 언어: Java 1.8
- 프레임워크: Spring 3.9.3
- DB: MySQL 8.0
- 서버:  Apache Tomcat 8.5
- 빌드툴: Maven
- 테스트: JUnit 4.12 
- ORM: Mybatis 3.4.6

**환경설정**
- Maven dependencies 추가 (pom.xml 파일 dependencies 추가)
- MyBatis: MySQL 연동(root-context.xml 파일 수정, beans 추가), XML Mapper에 SQL 저장

**게시판 구조, 화면**
1. DB 
   
   - tbl_post (게시글 테이블)
   ![tbl_post](/files/img/tbl_post.png)
   
   - tbl_user (유저 테이블)
   ![tbl_user](/files/img/tbl_user.png)
  
  
2. 화면
   - 게시물 리스트, 하단 페이징
   ![list](/files/img/list.png)
   ![paging](/files/img/paging.png)
   
   - 회원가입
   
   ![signup](/files/img/signup.png)
   
   - 로그인
   ![login](/files/img/login.png)
   
   - 글쓰기
   ![register](/files/img/register.png)
   
   - 조회
   ![readPage](/files/img/readPage.png)

   - 글 조회
   ![readPage](/files/img/readPage.png)
   
   - 검색기능(제목, 글쓴이, 내용 keyword로 검색 가능)
=======
- 사용언어: Java 1.8
- 프레임워크: Spring 3.9.3
- DB: MySQL 8.0
- 서버 : Apache Tomcat 8.5
- 빌드: Maven
- 테스트: JUnit 4.12 
- ORM: Mybatis 3.4.6

**환경 설정**
- Maven dependencies (pom.xml 파일 수정)
- MyBatis (root-context.xml 파일 수정, bean 추가, XML Mapper에 SQL 저장)

**구현 결과**
1. DB 테이블  
   - tbl_post(게시물)
   ![tbl_post](/files/img/tbl_post.png)
   
   - tbl_user(사용자)
   ![tbl_user](/files/img/tbl_user.png)
  
  
2. 결과물 화면
   - 게시물(하단 페이징, 페이지 당 노출되는 게시물 10개로 설정)
   ![list](/files/img/list.png)
   ![paging](/files/img/paging.png)
   
   - 회원가입 
   ![signup](/files/img/signup.png)
   
   - 로그인  
   ![login](/files/img/login.png)
   
   - 글쓰기
   ![register](/files/img/register.png)

   - 게시글 조회
   ![readPage](/files/img/readPage.png)
   
   - 검색기능(제목, 내용, 글쓴이 keyword로 검색가능)


   ![search](/files/img/search.png)
   
   - 조회수 
   ![viewcount](/files/img/viewcount.png)
   
   


