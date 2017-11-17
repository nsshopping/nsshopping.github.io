---
layout: post
title:  "Github 연결해서 소스 적용하기"
author: byoungchul.kim
date: 2017-11-02 13:00:00 +0900
tags: [github]
categories: github
comments : true
---

## 프로그램 설치 단계
* Step 1. Git program 설치하기 - [Git Program Download](https://git-scm.com/)
* Step 2. Git GUI Tool 설치하기 - [Git GUI Tool Download](https://git-scm.com/download/gui/win)
  * 추천 : SourceTree, GitHub Desktop
  * SourceTree 한글설정은 도구>옵션>일반에서 ![SourceTree option](/files/contents_imgs/sourcetree_option_utf8.png) 설정
* Step 3. Text Editor 설치하기 - [Atom Text Editor Download](https://atom.io/)
  * 추천 Packages : Markdown-preview, markdown-format
  * 참조문서 : [Atom 을 마크다운 에디터로 사용하기](http://futurecreator.github.io/2016/06/14/atom-as-markdown-editor/)


## 깃허브와 연결하기
* Step 1. 깃허브 계정생성하기 - [Github 가입](https://github.com/)
* Step 2. 깃허브에서 Repository 만들기
  * 참조 : [Create Repository](https://help.github.com/articles/create-a-repo/)
* Step 3. 로컬 PC의 폴더와 깃허브 Repository 연결하기
  * SourceTree 나 GitHub Desktop 을 이용해서 Github Repository 와 연결한다
* Step 4. SourceTree 나 GitHub Desktop 을 이용해서 개발용 Branch 를 생성
* Step 5. 개발용 Branch 에서 코딩 시작
* Step 6. 개발이 완료되면 Master Branch 와 Diff를 이용해 비교하기
  * ![diff](/files/contents_imgs/sourcetree_diff.png)
* Step 7. 비교된 내용으로 Patch 생성하기
  * ![patch](/files/contents_imgs/sourcetree_patch.png)
* Step 8. Master Branch 로 checkout 해서 개발용 Branch를 Merge
  * ![merge](/files/contents_imgs/sourcetree_merge.png)
* Step 9. Merge 된 Master Branch 를 Github 로 Push 하여 적용
  * ![push](/files/contents_imgs/sourcetree_push.png)
* Step 10. Push 된 내역이 반영되면 끝
  * ![push_end](/files/contents_imgs/sourcetree_push_ending.png)

## 참조사이트
* [도전 Contributor](http://jjeong.tistory.com/1023)
* [깃허브 가이드](https://guides.github.com/)
* [깃허브 Help](https://help.github.com/categories/bootcamp/)
* [Markdown 문법 학습하기](https://guides.github.com/features/mastering-markdown/)
* [Atom 을 마크다운 에디터로 사용하기](http://futurecreator.github.io/2016/06/14/atom-as-markdown-editor/)
