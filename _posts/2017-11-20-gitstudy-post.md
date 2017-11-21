---
layout: post
title: "github 교육시 유용한 기본명령어"
author: kilsu.shin
date: "2017-11-20 14:20:13 +0900"
tags: [github, study]
comments : true
---

## github 교육

Git 기본 명령어들

터미널에서 git --help를 입력하면 기본 사용법이 나오는데, 이 때 기본 명령어들에 대한 간단한 설명들이 나옵니다.

```
$ git --help
작업 공간 시작하기
```

clone : 원격 저장소를 지역 디렉토리에 복제합니다.

init : 비어있는 Git 저장소를 만들거나 기존에 있던 것을 초기화합니다.

git help tutorial의 결과도 살펴볼 필요가 있습니다.


현재의 변경에서 작업하기

add : 파일 변경 내용을 인덱스에 추가합니다.

mv : 파일, 디렉토리, 또는 (연결)링크를 옮기거나 이름을 변경합니다.

reset : 현재 HEAD 를 특정한 상태로 재설정합니다.

rm : 파일들을 작업 트리와 인덱스에서 제거합니다.

git help everyday의 결과도 살펴볼 필요가 있습니다.

변경 내력과 상태를 검사하기


bisect : 버그를 알리는 커밋을 찾기 위해 이진 트리를 사용합니다.

grep : 패턴과 들어맞는 라인들을 출력합니다.

log : 커밋 로그들을 보여줍니다.

show : 다양한 타입의 객체들을 보여줍니다.

status : 작업 트리의 상태를 보여줍니다.

git help revisions의 결과도 살펴볼 필요가 있습니다.


변경 내력을 키우고, 표시하고, 비틀기


branch : 브랜치들을 나열하고, 만들고, 또는 지웁니다.

checkout : 브랜치들을 바꾸거나 작업 트리 파일들을 재저장합니다.

commit : 변경 사항들을 저장소에 기록합니다.

diff : 커밋들 또는 커밋과 작업 트리 사이의 변경 사항을 보여줍니다
.
merge : 두 개 또는 다수의 개발 변경 내력을 서로 합칩니다.

rebase : Forward-port local commits to the updated upstream head

tag : GPG로 표기된 태그 객체를 만들고, 나열하고, 지우고, 또는 확인합니다.


협업하기


fetch : 다른 저장소에서 객체들과 참조들을 다운로드 합니다.

pull : 다른 저장소나 브랜치에서 fetch를 하고 취합합니다.

push : 원격 참조들을 관련된 객체들을 가지고서 업데이트 합니다.
