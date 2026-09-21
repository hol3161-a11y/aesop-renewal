# 🌿 Aesop Website Renewal

이솝의 절제된 브랜드 감성과 여백 중심의 구성을 재해석한 반응형 웹 퍼블리싱 프로젝트입니다.

<img width="1536" height="1024" alt="aesop-thumbnail" src="https://github.com/user-attachments/assets/ece84133-aeff-44f7-a159-8a087fe554a2" />


## 🔗 프로젝트 링크

- **Demo** : [배포 링크](https://aesop-renewal-livid.vercel.app/)
- **GitHub** : [GitHub 저장소 링크](https://github.com/hol3161-a11y/aesop-renewal)

## 📖 프로젝트 개요

| 구분 | 내용 |
| --- | --- |
| 프로젝트명 | Aesop Website Renewal |
| 프로젝트 유형 | 개인 웹 퍼블리싱 프로젝트 |
| 작업 기간 | 2026.07 ~ 2026.09 |
| 참여 인원 | 1명 |
| 담당 범위 | 기획, UI 구성, 퍼블리싱, 반응형 구현 |
| 페이지 | 메인, 제품 목록, 제품 상세 |

### 작업 목적

기존 브랜드가 가진 차분하고 정제된 분위기를 유지하면서 제품, 브랜드 스토리, 매장 정보를 자연스럽게 탐색할 수 있도록 화면을 재구성했습니다.

단순히 화면을 비슷하게 만드는 것보다 다음 세 가지를 작업 기준으로 삼았습니다.

- 콘텐츠의 성격이 마크업 구조에서 드러날 것
- 화면 크기가 달라져도 정보의 우선순위가 유지될 것
- 마우스뿐 아니라 키보드와 보조기기 사용자도 상태를 이해할 수 있을 것

## 📚 프로젝트 문서 자료

| 문서 종류 | 파일명 | 설명 |
| :---: | :---: | --- |
| 기획서 | [기획서.pdf](PDF 주소 입력) | 프로젝트 목적, 리뉴얼 방향, 콘텐츠 구성 및 주요 기능을 정리한 문서 |
| 화면 설계 | [화면설계.pdf](PDF 주소 입력) | 메인, 제품 목록, 제품 상세 페이지의 화면 구성과 사용자 이동 흐름을 정리한 자료 |
| 디자인 | [디자인.pdf](PDF 주소 입력) | 색상, 폰트, 이미지와 UI 요소 등 이솝 리뉴얼의 전체 디자인 시안을 정리한 자료 |
| 사이트맵 | [사이트맵.pdf](PDF 주소 입력) | 웹사이트를 구성하는 페이지와 각 페이지의 연결 구조를 정리한 자료 |
| 와이어프레임 | [와이어프레임.pdf](PDF 주소 입력) | 페이지별 콘텐츠 배치와 화면 구조를 와이어프레임으로 설계한 자료 |

## 👩‍💻 작업 범위

| 영역 | 작업 내용 | 판단 기준 |
| --- | --- | --- |
| 공통 영역 | 헤더, 내비게이션, 검색·장바구니 패널, 푸터 제작 | 여러 페이지에서 동일한 구조와 동작 유지 |
| 메인 페이지 | 히어로, 베스트 제품, 카테고리, 브랜드 스토리, 스토어 구현 | 브랜드 이미지와 제품 탐색 흐름을 함께 전달 |
| 제품 목록 | 카테고리 이동과 제품 카드 목록 구현 | 사용자가 원하는 제품군을 빠르게 찾도록 구성 |
| 제품 상세 | 제품 이미지, 설명, 가격과 관련 정보 배치 | 구매 판단에 필요한 정보부터 먼저 노출 |
| 인터랙션 | 이미지 호버, Swiper, 검색·장바구니 패널 구현 | 효과보다 클릭 가능 여부와 상태 변화를 명확히 전달 |
| 반응형 | 데스크톱, 태블릿, 모바일 레이아웃 구현 | 단순 축소가 아닌 콘텐츠 재배치 중심으로 대응 |

## 🧱 마크업 기준

### 시맨틱 구조

페이지의 역할을 쉽게 파악할 수 있도록 `header`, `nav`, `main`, `section`, `footer` 등의 시맨틱 태그를 사용했습니다.

- 주요 이동 메뉴는 `nav`로 구분했습니다.
- 서로 다른 주제를 가진 콘텐츠는 `section`으로 나눴습니다.
- 반복되는 제품과 카테고리는 `ul`과 `li` 목록으로 구성했습니다.
- 매장명과 주소처럼 이름과 설명이 짝을 이루는 정보에는 `dl`, `dt`, `dd`를 사용했습니다.
- 페이지 이동은 `a`, 패널을 열고 닫는 동작은 `button`을 사용했습니다.

### 클래스 작성

BEM 방식을 사용해 클래스명만으로 요소의 소속과 역할을 알 수 있도록 구성했습니다.

```html
<li class="category__item swiper-slide">
  <a href="./products.html#product-list" class="category__link">
    <img
      class="category__image category__image--default"
      alt="스킨 케어 제품"
    >
    <span class="category__name">SKIN CARE</span>
  </a>
</li>
```

`category`는 독립된 블록, `__item`과 `__image`는 내부 요소, `--default`는 이미지 상태를 의미하도록 이름을 정했습니다.

## 📱 반응형 기준

콘텐츠가 실제로 답답해지거나 겹치기 시작하는 지점을 확인한 뒤 `1024px`, `768px`, `480px`을 주요 분기점으로 정했습니다.

| 화면 기준 | 레이아웃 판단 |
| --- | --- |
| 1024px 초과 | 넓은 화면을 활용한 좌우 분할과 다열 제품 배치 |
| 769px ~ 1024px | 여백과 글자 크기를 줄이고 콘텐츠 간 간격 조정 |
| 481px ~ 768px | 제품 카드를 2열로 배치하고 주요 영역을 세로로 전환 |
| 480px 이하 | 1열 중심으로 재배치하고 버튼과 터치 영역을 충분히 확보 |

고정 너비만 반복해서 지정하기보다 `minmax()`, `clamp()`, `aspect-ratio`를 사용해 중간 화면에서도 값이 자연스럽게 변하도록 했습니다.

```scss
.products__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
}

@media (max-width: 768px) {
  .products__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .products__list {
    grid-template-columns: 1fr;
  }
}
```

## ♿ 접근성 적용

접근성은 별도의 기능이 아니라 마크업과 동작을 정하는 기준으로 적용했습니다.

- 콘텐츠 이미지에 용도를 설명하는 `alt`를 작성했습니다.
- 페이지 이동과 동작 요소를 `a`와 `button`으로 구분했습니다.
- 검색·장바구니 버튼에 `aria-expanded`를 적용해 패널의 열림 상태를 전달했습니다.
- 패널을 열 때 본문 스크롤을 막아 현재 UI에 집중할 수 있도록 했습니다.
- 제목 태그의 순서를 고려해 콘텐츠 구조를 파악할 수 있도록 했습니다.
- 링크와 버튼에 호버 상태를 제공해 조작 가능한 요소임을 구분했습니다.

```javascript
searchOpenButton?.setAttribute("aria-expanded", "true");

const closeSearchPanel = () => {
  searchOpenButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("is-locked");
};
```

## ✨ 주요 구현 포인트

### 1. 공통 UI와 일관된 동작

헤더, 검색 패널, 장바구니 패널, 푸터를 페이지마다 같은 구조와 클래스 규칙으로 작성했습니다. 어느 페이지에서도 동일한 위치와 방식으로 기능을 사용할 수 있도록 구성했습니다.

### 2. 제품 탐색 흐름

메인의 카테고리 카드에서 제품 목록으로, 제품 카드에서 상세 페이지로 이어지는 흐름을 만들었습니다. 카드 전체를 링크로 구성해 클릭 영역을 명확하게 확보했습니다.

### 3. 이미지 중심 인터랙션

카테고리 카드에 마우스를 올리면 이미지와 안내 문구가 전환되도록 구현했습니다. `opacity`와 `transform`을 사용해 레이아웃 이동 없이 상태만 자연스럽게 변경했습니다.

### 4. SCSS 분리

스타일을 공통 영역과 페이지별 영역으로 분리해 수정 범위를 쉽게 찾을 수 있도록 했습니다. 공통 변수와 초기화 스타일을 별도로 관리하고, `style.scss`에서 각 파일을 불러오는 방식으로 구성했습니다.

## 🛠 사용 기술

| 기술 | 사용 목적 |
| --- | --- |
| HTML5 | 시맨틱 마크업과 페이지 구조 작성 |
| SCSS / CSS3 | BEM 기반 스타일 관리, Grid·Flexbox, 반응형 구현 |
| JavaScript | 검색·장바구니 패널과 UI 상태 제어 |
| Swiper.js | 카테고리 및 이미지 슬라이드 구현 |
| Git / GitHub | 버전 관리와 원격 저장소 운영 |
| Vercel | 정적 웹사이트 배포 |

## 📂 파일 구조

```text
aesop-renewal/
├── images/                         # 사이트에서 사용하는 이미지
│   ├── category/                   # 카테고리 기본·호버 이미지
│   ├── products/                   # 제품 목록 및 상세 이미지
│   └── readme/                     # README 화면 캡처와 문서 이미지
│
├── js/
│   └── main.js                     # Swiper와 UI 인터랙션
│
├── scss/
│   ├── _reset.scss                 # 브라우저 기본 스타일 초기화
│   ├── _variables.scss             # 색상과 공통 값 관리
│   ├── _common.scss                # 공통 레이아웃 및 요소
│   ├── _header.scss                # 헤더, 검색·장바구니 패널
│   ├── _footer.scss                # 푸터와 상단 이동 버튼
│   ├── _main.scss                  # 메인 페이지 스타일
│   ├── _products.scss              # 제품 목록 페이지 스타일
│   ├── _detail.scss                # 제품 상세 페이지 스타일
│   ├── _media.scss                 # 반응형 미디어 쿼리
│   ├── style.scss                  # SCSS 통합 파일
│   ├── style.css                   # 브라우저가 불러오는 컴파일 CSS
│   └── style.css.map               # SCSS 소스맵
│
├── index.html                      # 메인 페이지
├── products.html                   # 제품 목록 페이지
├── product-detail.html             # 제품 상세 페이지
└── README.md                       # 프로젝트 소개 문서
```

### 구조를 이렇게 나눈 이유

- HTML은 페이지별로 분리해 각 문서의 역할을 명확하게 했습니다.
- 이미지는 용도별 폴더로 나눠 필요한 파일을 빠르게 찾도록 했습니다.
- JavaScript는 공통 UI 동작을 `main.js`에서 관리했습니다.
- SCSS는 공통 영역과 페이지별 영역을 분리해 한 파일의 수정이 다른 페이지에 미치는 영향을 줄였습니다.
- `_media.scss`에 반응형 코드를 모아 화면 크기별 변경 사항을 한곳에서 확인하도록 했습니다.

## 🔧 트러블 슈팅

### 1. 서로 다른 이미지 비율로 카드 정렬이 어긋나는 문제

**문제**  
원본 이미지마다 크기와 비율이 달라 카드 높이가 달라지고 일부 피사체가 의도하지 않은 위치에서 잘렸습니다.

**판단**  
이미지를 각각 편집하기보다 코드에서 이미지 영역의 기준을 통일해야 이후 이미지를 교체해도 레이아웃을 유지할 수 있다고 판단했습니다.

**해결**  
`aspect-ratio`로 영역 비율을 통일하고 `object-fit: cover`로 채웠습니다. 피사체 위치가 중요한 이미지는 `object-position`을 개별 조정했습니다.

```scss
.category__image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center;
}
```

**결과**  
원본 크기와 관계없이 카드가 일정하게 정렬되고 반응형 화면에서도 이미지 영역을 유지할 수 있었습니다.

### 2. 호버 이미지와 문구가 클릭을 방해하는 문제

**문제**  
기본 이미지 위에 호버 이미지와 문구를 겹치면서 요소의 위치가 달라지거나 오버레이가 링크 클릭을 가로막았습니다.

**판단**  
호버 요소를 문서 흐름에 추가하면 카드 크기가 변할 수 있으므로, 같은 영역에 겹쳐 배치하되 링크의 클릭 동작은 유지해야 했습니다.

**해결**  
부모에 `position: relative`, 호버 이미지에 `position: absolute`와 `inset: 0`을 적용했습니다. 안내 문구에는 `pointer-events: none`을 사용했습니다.

```scss
.category__link {
  position: relative;
  display: block;
  overflow: hidden;
}

.category__image--hover {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.6s ease;
}

.category__explore {
  pointer-events: none;
}
```

**결과**  
레이아웃 변화 없이 이미지가 전환되고 카드 전체의 클릭 영역도 유지했습니다.

### 3. 검색·장바구니 패널 뒤의 본문이 함께 스크롤되는 문제

**문제**  
패널을 열어도 뒤쪽 본문이 함께 움직여 현재 활성화된 UI에 집중하기 어려웠습니다.

**판단**  
패널 표시 여부뿐 아니라 열린 동안 페이지의 상호작용 상태도 함께 제어해야 한다고 판단했습니다.

**해결**  
패널을 열 때 `body`에 `is-locked` 클래스를 추가하고 닫을 때 제거했습니다. 버튼의 `aria-expanded`도 함께 변경했습니다.

```scss
body.is-locked {
  overflow: hidden;
}
```

**결과**  
패널 사용 중 배경 스크롤을 방지하고 현재 패널의 열림 상태를 보조기기에도 전달했습니다.

### 4. 다른 페이지의 제품 목록 위치로 이동하지 않는 문제

**문제**  
메인의 카테고리 링크에 `products.html#skin-care`를 사용했지만 제품 페이지가 열릴 뿐 원하는 목록 위치로 이동하지 않았습니다.

**원인**  
주소의 해시값과 일치하는 `id`가 제품 목록 영역에 없었기 때문입니다.

**해결**  
제품 목록에 고유한 `id`를 지정하고 링크의 해시값과 일치시켰습니다. 고정 헤더에 제목이 가려지지 않도록 `scroll-margin-top`도 적용했습니다.

```html
<a href="./products.html#product-list">SKIN CARE</a>

<section id="product-list">
  <!-- 제품 목록 -->
</section>
```

```scss
#product-list {
  scroll-margin-top: 110px;
}
```

**결과**  
페이지가 전환된 뒤 사용자가 원하는 제품 목록 시작 위치로 바로 이동하도록 개선했습니다.

## 🖥️ 실행 및 화면 확인

별도의 패키지 설치 없이 실행할 수 있습니다.

```bash
git clone https://github.com/hol3161-a11y/aesop-renewal.git
```

저장소를 내려받은 뒤 VS Code에서 `index.html`을 Live Server로 실행합니다.

### 화면 캡처

<!-- 실제 캡처 파일을 images/readme 폴더에 넣은 뒤 아래 주석을 해제하세요.
![메인 페이지](./images/readme/main.png)
![제품 목록 페이지](./images/readme/products.png)
![제품 상세 페이지](./images/readme/detail.png)
-->

## ⚠️ Notice

본 프로젝트는 웹 퍼블리싱 역량을 보여주기 위해 제작한 개인 포트폴리오용 비상업적 리뉴얼 프로젝트입니다.

사용된 브랜드명, 로고 및 일부 콘텐츠의 권리는 각 원저작권자에게 있으며, 본 프로젝트는 Aesop 공식 웹사이트와 관련이 없습니다.
