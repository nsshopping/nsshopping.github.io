---
layout: post
title: 'GTM post'
author: hawoong.yun
date: 2017-11-17 17:16
tags: [GTM][GA][ECOMMERCE]
comments : true
---

## GTM-GA ECOMMERCE 연동

기본적으로 GTM-GA-쇼핑몰 연동을 하셨다면

향상된 전자상거래 항목을 어찌 추가해야하는지 어려움이 많으신 분들이 많을 것이라고 생각됩니다.

차근차근 진행해보겠습니다.

일단 개념부터 생각을 해볼까요?

1. 전자상거래에 어떤 데이터를 전송할지 생각해보세요(ex. 구매완료된 상품을 GA로 보내고 싶어요!)
2. GTM에서 GA로 보낼 수 있는 TAG를 생성해야하겠군요 (ex. 구매완료 )
3. 어떤 상황에서 TAG를 실행시킬 것인지 생각해서 만들어야합니다. (ex. pageURL에 구매완료페이지 이름이 들어가면 TAG를 실행시키고 싶어요)
4. 전자상거래에 맞는 GTM에서 제시한 데이터를 setting해줘야 TAG에서 해당 데이터를 가져갈 수 있어요.


개념은 위의 양식대로 생각했지만 순서는 반대로 하시면 되요.(사실 편하신대로 해도 관계없어요)

구매완료를 추적하기 위해 GTM에서 제시한 데이터 setting을 먼저 해볼까요?

GTM 공식 사이트에서는
![GTM](hawoong12.github.io/images/gtm-ga_measuring_purchases.png)


라고 나타나 있습니다. 이해하기가 쉽지 않죠.

하지만 자세히 살펴보면 필요한 정보는 모두 포함하고 있어요.

저 스크립트를 넣고 싶은 사이트에 넣어주면 되요.

여기서 제일 중요한 점은 이 스크립트는 GTM스니펫(처음 스크립트 삽입하라고 주는 GTM설치스크립트)보다는 먼저 읽어져야 합니다.

따라서 <head>부분에 선언했던 해당 GTM스니펫 스크립트를 구매완료 페이지에서는 <head>에서 호출 되지 않고

dataLayer 선언 후 <body>에서 선언을 해야합니다.

{% highlight ruby %}<head>
	<!-- Google Tag Manager -->
	<script>
	if((document.URL).indexOf('구매완료URL에반드시포함되는referrer중 하나') < 0){
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','asldhfasdfkaj(GTMid들어가는곳)');
	}
	</script>
	<!-- End Google Tag Manager -->
</head>

<body>
	<script>
	var dataLayer = new Array();
	dataLayer.push({'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'T12345',                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'Online Store',
        'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
        'tax':'4.90',
        'shipping': '5.99',
        'coupon': 'SUMMER_SALE'
      },
      'products': [{                            // List of productFieldObjects.
        'name': 'Triblend Android T-Shirt',     // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1,
        'coupon': ''                            // Optional fields may be omitted or set to empty string.
       },
       {
        'name': 'Donut Friday Scented T-Shirt',
        'id': '67890',
        'price': '33.75',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Black',
        'quantity': 1
       }]
    }
  }});

		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','asldhfasdfkaj(GTM-id들어가는곳)');
  </script>
</body>

{% endhighlight %}

이런 방식으로요.

js에서 dataLayer라고 선언을 하게 되면 해당 dataLayer는 GTM에서 해당 데이터를 읽어서 어떤 트리거와 TAG를 통해 GA로 보낼 것인지 준비를 합니다.

다음은 trigger setting입니다.

![trigerset](hawoong12.github.io/images/trrigersetting.png)

줄 쳐놓은 저 곳에는 '구매완료URL에반드시포함되는referrer중 하나.' 를 넣으시면 됩니다.

여기까지 하셨다면 이제 js에서 데이터를 setting했으며 어떤 상황에서 그 데이터를 가져갈지 설정이 완료 되었어요.

이제 trigger를 tag에 넣어서 GTM에서 GA로 보낼 수 있는 tag만 생성하면 끝입니다.

![tagset](hawoong12.github.io/images/tagsetting.png)

태그 setting까지 완료 되었습니다.

해당 사이트에 적용되었는지 확인하시려면 미리보기 버튼을 누르시고

![domset](hawoong12.github.io/images/ecommerce_dom.png)

gtm.dom tag가 실행되었는지,

![datalayerset](hawoong12.github.io/images/ecommerce_dataLayer.png)

해당 tag에 dataLayer가 정확히 setting되었는지 확인하시면 끝입니다.
