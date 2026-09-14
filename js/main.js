/* ========================================
   HERO SWIPER
======================================== */

const heroSwiperElement =
    document.querySelector(".heroSwiper");

if (
    heroSwiperElement &&
    typeof Swiper !== "undefined"
) {
    new Swiper(".heroSwiper", {
        direction: "vertical",
        loop: true,
        speed: 1000,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".heroSwiper .swiper-pagination",
            clickable: true,
        },
    });
}


/* ========================================
   BRAND AND STORE DEMO BUTTON
======================================== */

const brandStoryButton = document.querySelector(
    ".brand-origin__link"
);

const storeDetailButton = document.querySelector(
    ".store__link"
);

brandStoryButton?.addEventListener("click", () => {
    alert(
        "브랜드의 더 깊은 이야기는 준비 중입니다. 포트폴리오용 데모입니다."
    );
});

storeDetailButton?.addEventListener("click", () => {
    alert(
        "매장 상세 정보는 준비 중입니다. 포트폴리오용 데모입니다."
    );
});



/* ========================================
   FOOTER NEWSLETTER
======================================== */

const footerForm =
    document.querySelector(".footer__form");

const footerInput =
    document.querySelector(".footer__input");

footerForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
        "뉴스레터 신청이 완료되었습니다. (포트폴리오 데모)"
    );

    if (footerInput) {
        footerInput.value = "";
    }
});



/* ========================================
   FOOTER SOCIAL — SNS 준비 중 알림
======================================== */

const footerSocialLinks = document.querySelectorAll(".footer__social-link");

footerSocialLinks.forEach((link)=> {
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        alert("준비 중인 서비스입니다. (포트폴리오 데모)")
    });
});


/* ========================================
   FOOTER BACK TO TOP
======================================== */

const footerTopButton = document.querySelector(
    ".footer__top-button"
);

footerTopButton?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


/* ========================================
   FLOATING TOP BUTTON
======================================== */

const topButton =
    document.querySelector(".top-button");

if (topButton) {
    const handleTopButton = () => {
        if (window.scrollY >= 400) {
            topButton.classList.add("is-visible");
        } else {
            topButton.classList.remove("is-visible");
        }
    };

    window.addEventListener(
        "scroll",
        handleTopButton
    );

    handleTopButton();

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}


/* ========================================
   PRODUCT DETAIL DATA
======================================== */

const productData = {
    cleanser: {
        category: "SKIN CARE",
        type: "CLEANSER",
        eyebrow: "DAILY CLEANSING",
        name: "젠틀 페이셜 클렌저",

        image:
            "./images/products/product-cleanser.png",

        description:
            "피부의 수분을 지키면서 노폐물을 부드럽게 씻어내는 데일리 페이셜 클렌저입니다.",

        benefits: [
            "순한 세정",
            "수분 보호",
            "산뜻한 마무리",
        ],

        sizes: [
            {
                size: "100 mL",
                price: 43000,
            },
            {
                size: "200 mL",
                price: 68000,
            },
        ],

        detail:
            "부드러운 거품이 피부의 노폐물과 불순물을 편안하게 씻어냅니다.",
    },

    serum: {
        category: "SKIN CARE",
        type: "SERUM",
        eyebrow: "BOTANICAL BALANCE",
        name: "보태니컬 밸런싱 세럼",

        image:
            "./images/products/product-serum.png",

        description:
            "건조하고 지친 피부에 풍부한 수분과 편안함을 전하는 보태니컬 세럼입니다.",

        benefits: [
            "집중 수분",
            "피부 진정",
            "유연한 피부",
        ],

        sizes: [
            {
                size: "30 mL",
                price: 79000,
            },
            {
                size: "60 mL",
                price: 125000,
            },
        ],

        detail:
            "가벼운 제형이 피부에 빠르게 흡수되어 촉촉하고 균형 잡힌 피부로 가꾸어줍니다.",
    },

    cream: {
        category: "SKIN CARE",
        type: "MOISTURISER",
        eyebrow: "FACIAL HYDRATION",
        name: "리피 페이셜 크림",

        image:
            "./images/products/product-cream.png",

        description:
            "식물성 보습 성분이 피부에 깊은 수분을 공급하고 피부 보호막을 편안하게 감싸는 데일리 페이셜 크림입니다.",

        benefits: [
            "깊은 보습",
            "피부 장벽 강화",
            "부드러운 마무리감",
        ],

        sizes: [
            {
                size: "60 mL",
                price: 67000,
            },
            {
                size: "100 mL",
                price: 98000,
            },
        ],

        detail:
            "건조한 피부에 풍부한 수분을 전달하고 부드럽고 편안한 피부 상태를 유지하도록 도와줍니다.",
    },

    "hand-balm": {
        category: "BODY & HAND",
        type: "HAND CARE",
        eyebrow: "AROMATIC HAND CARE",
        name: "아로마틱 핸드 밤",

        image:
            "./images/products/product-hand-balm.png",

        description:
            "건조한 손에 풍부한 보습을 전달하고 은은한 식물 향을 남기는 핸드 밤입니다.",

        benefits: [
            "손 피부 보습",
            "부드러운 감촉",
            "은은한 향",
        ],

        sizes: [
            {
                size: "50 mL",
                price: 39000,
            },
            {
                size: "120 mL",
                price: 59000,
            },
        ],

        detail:
            "손과 큐티클에 필요한 수분을 공급하며 끈적임이 적고 편안하게 마무리됩니다.",
    },
    "hair-treatment": {
        category: "HAIR CARE",
        type: "HAIR TREATMENT",
        eyebrow: "BOTANICAL HAIR CARE",
        name: "보태니컬 헤어 트리트먼트",

        image:
            "./images/products/product-hair-treatment.png",

        description:
            "건조한 모발에 수분과 영양을 더해 부드러운 머릿결로 가꾸어주는 트리트먼트입니다.",

        benefits: [
            "모발 수분 공급",
            "부드러운 머릿결",
            "윤기 있는 마무리",
        ],

        sizes: [
            {
                size: "100 mL",
                price: 54000,
            },
            {
                size: "200 mL",
                price: 82000,
            },
        ],

        detail:
            "샴푸 후 물기를 제거한 모발에 적당량을 바르고 부드럽게 마사지한 후 깨끗하게 헹구어주세요.",
    },
    "body-cleanser": {
        category: "BODY & HAND",
        type: "BODY CLEANSER",
        eyebrow: "AROMATIC BODY CARE",
        name: "보태니컬 바디 클렌저",

        image:
            "./images/products/product-body-cleanser.png",

        description:
            "피부의 수분을 지키면서 노폐물을 부드럽게 씻어내는 데일리 바디 클렌저입니다.",

        benefits: [
            "부드러운 세정",
            "수분 보호",
            "산뜻한 마무리",
        ],

        sizes: [
            {
                size: "200 mL",
                price: 48000,
            },
            {
                size: "500 mL",
                price: 76000,
            },
        ],

        detail:
            "젖은 피부에 적당량을 덜어 부드럽게 마사지한 후 깨끗하게 헹구어주세요.",
    },


    "body-lotion": {
        category: "BODY & HAND",
        type: "BODY LOTION",
        eyebrow: "NOURISHING BODY CARE",
        name: "너리싱 바디 로션",

        image:
            "./images/products/product-body-lotion.png",

        description:
            "건조한 피부에 풍부한 수분을 전해 촉촉하고 유연하게 가꾸어주는 바디 로션입니다.",

        benefits: [
            "풍부한 보습",
            "부드러운 피부",
            "편안한 마무리",
        ],

        sizes: [
            {
                size: "100 mL",
                price: 52000,
            },
            {
                size: "200 mL",
                price: 78000,
            },
        ],

        detail:
            "샤워 후 물기를 닦은 피부에 적당량을 덜어 부드럽게 마사지하듯 발라주세요.",
    },


    "hair-shampoo": {
        category: "HAIR CARE",
        type: "SHAMPOO",
        eyebrow: "BALANCING HAIR CARE",
        name: "밸런싱 헤어 샴푸",

        image:
            "./images/products/product-hair-shampoo.png",

        description:
            "두피와 모발의 노폐물을 산뜻하게 씻어내는 데일리 헤어 샴푸입니다.",

        benefits: [
            "두피 세정",
            "모발 수분 보호",
            "산뜻한 마무리",
        ],

        sizes: [
            {
                size: "200 mL",
                price: 46000,
            },
            {
                size: "500 mL",
                price: 72000,
            },
        ],

        detail:
            "젖은 모발과 두피에 적당량을 덜어 충분히 거품을 낸 후 깨끗하게 헹구어주세요.",
    },
};


/* ========================================
   RENDER PRODUCT DETAIL
======================================== */

const detailPage =
    document.querySelector(".product-detail");

if (detailPage) {
    // URL에서 제품 ID 가져오기
    const urlParameters =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        urlParameters.get("product") || "cream";

    // 잘못된 제품 ID라면 크림을 기본으로 표시
    const selectedProduct =
        productData[productId] ||
        productData.cream;


    /* 상세 페이지 요소 찾기 */

    const breadcrumbCategory =
        document.querySelector(
            ".breadcrumb__category"
        );

    const breadcrumbType =
        document.querySelector(
            ".breadcrumb__type"
        );

    const productImage =
        document.querySelector(
            ".product-detail__image"
        );

    const productEyebrow =
        document.querySelector(
            ".product-detail__eyebrow"
        );

    const productTitle =
        document.querySelector(
            ".product-detail__title"
        );

    const productDescription =
        document.querySelector(
            ".product-detail__description"
        );

    const productBenefits =
        document.querySelector(
            ".product-detail__benefits"
        );

    const productSize =
        document.querySelector(
            ".product-detail__select"
        );

    const productPrice =
        document.querySelector(
            ".product-detail__price"
        );

    const detailDescription =
        document.querySelector(
            ".product-detail__detail-description"
        );


    /* 현재 페이지 네비게이션 변경 */

    if (breadcrumbCategory) {
        breadcrumbCategory.textContent =
            selectedProduct.category;

        const categoryLinkMap = {
            "SKIN CARE":
                "./products.html#skin-care",

            "BODY & HAND":
                "./products.html#body-hand",

            "HAIR CARE":
                "./products.html#hair-care",
        };

        breadcrumbCategory.href =
            categoryLinkMap[
            selectedProduct.category
            ] || "./products.html#all";
    }

    if (breadcrumbType) {
        breadcrumbType.textContent =
            selectedProduct.type;
    }

    /* 제품 이미지 변경 */

    if (productImage) {
        productImage.src =
            selectedProduct.image;

        productImage.alt =
            selectedProduct.name;
    }


    /* 제품 정보 변경 */

    if (productEyebrow) {
        productEyebrow.textContent =
            selectedProduct.eyebrow;
    }

    if (productTitle) {
        productTitle.textContent =
            selectedProduct.name;
    }

    if (productDescription) {
        productDescription.textContent =
            selectedProduct.description;
    }

    if (detailDescription) {
        detailDescription.textContent =
            selectedProduct.detail;
    }


    /* 제품 장점 변경 */

    if (productBenefits) {
        productBenefits.innerHTML =
            selectedProduct.benefits
                .map((benefit) => {
                    return `
                        <li>${benefit}</li>
                    `;
                })
                .join("");
    }


    /* 사이즈 목록 생성 및 가격 변경 */

    if (productSize && productPrice) {
        productSize.innerHTML =
            selectedProduct.sizes
                .map((option) => {
                    return `
                        <option
                            value="${option.size}"
                            data-price="${option.price}"
                        >
                            ${option.size}
                        </option>
                    `;
                })
                .join("");

        const updateProductPrice = () => {
            const selectedOption =
                productSize.options[
                productSize.selectedIndex
                ];

            const selectedPrice = Number(
                selectedOption.dataset.price
            );

            if (Number.isNaN(selectedPrice)) {
                console.error(
                    "제품 가격을 확인할 수 없습니다."
                );

                return;
            }

            productPrice.textContent =
                `₩${selectedPrice.toLocaleString(
                    "ko-KR"
                )}`;
        };

        productSize.addEventListener(
            "change",
            updateProductPrice
        );

        // 상세 페이지를 처음 열었을 때 가격 표시
        updateProductPrice();
    }


    /* 브라우저 탭 제목 변경 */

    document.title =
        `${selectedProduct.name} | Aesop Renewal`;
}


/* ========================================
   PRODUCT QUANTITY
======================================== */

const quantity = document.querySelector(
    ".product-detail__quantity"
);

if (quantity) {
    const decreaseButton =
        quantity.querySelector(
            '[data-action="decrease"]'
        );

    const increaseButton =
        quantity.querySelector(
            '[data-action="increase"]'
        );

    const quantityNumber =
        quantity.querySelector(
            ".product-detail__quantity-number"
        );

    let count =
        Number(quantityNumber?.textContent) || 1;

    // 수량 줄이기
    decreaseButton?.addEventListener(
        "click",
        () => {
            if (count > 1) {
                count = count - 1;

                if (quantityNumber) {
                    quantityNumber.textContent =
                        count;
                }
            }
        }
    );

    // 수량 늘리기
    increaseButton?.addEventListener(
        "click",
        () => {
            if (count < 10) {
                count = count + 1;

                if (quantityNumber) {
                    quantityNumber.textContent =
                        count;
                }
            }
        }
    );
}


/* ========================================
   SEARCH AND CART ELEMENTS
======================================== */

const searchOpenButton =
    document.querySelector(
        ".header__search-button"
    );

const searchPanel =
    document.querySelector(".search-panel");

const searchCloseButton =
    document.querySelector(
        ".search-panel__close"
    );

const searchForm =
    document.querySelector(
        ".search-panel__form"
    );

const searchInput =
    document.querySelector(
        ".search-panel__input"
    );

const keywordButtons =
    document.querySelectorAll(
        ".search-panel__keywords button"
    );

const cartOpenButton =
    document.querySelector(
        ".header__cart-button"
    );

const cartPanel =
    document.querySelector(".cart-panel");

const cartCloseButton =
    document.querySelector(
        ".cart-panel__close"
    );

const siteOverlay =
    document.querySelector(".site-overlay");

const cartCount =
    document.querySelector(
        ".header__cart-count"
    );

const cartEmpty =
    document.querySelector(
        ".cart-panel__empty"
    );

const cartResult =
    document.querySelector(
        ".cart-panel__result"
    );

const cartResultNumber =
    document.querySelector(
        ".cart-panel__result-count strong"
    );

const addCartButton =
    document.querySelector(
        ".product-detail__cart-button"
    );

const demoPaymentButton =
    document.querySelector(
        ".cart-panel__demo-button"
    );

let totalCartCount = 0;


/* ========================================
   SEARCH PANEL
======================================== */

const openSearchPanel = () => {
    cartPanel?.classList.remove("is-open");

    searchPanel?.classList.add("is-open");
    siteOverlay?.classList.add("is-visible");

    searchPanel?.setAttribute(
        "aria-hidden",
        "false"
    );

    searchOpenButton?.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.classList.add("is-locked");

    setTimeout(() => {
        searchInput?.focus();
    }, 400);
};

const closeSearchPanel = () => {
    searchPanel?.classList.remove("is-open");
    siteOverlay?.classList.remove("is-visible");

    searchPanel?.setAttribute(
        "aria-hidden",
        "true"
    );

    searchOpenButton?.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove(
        "is-locked"
    );
};


/* ========================================
   CART PANEL
======================================== */

const openCartPanel = () => {
    searchPanel?.classList.remove("is-open");

    cartPanel?.classList.add("is-open");
    siteOverlay?.classList.add("is-visible");

    cartPanel?.setAttribute(
        "aria-hidden",
        "false"
    );

    cartOpenButton?.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.classList.add("is-locked");
};

const closeCartPanel = () => {
    cartPanel?.classList.remove("is-open");
    siteOverlay?.classList.remove("is-visible");

    cartPanel?.setAttribute(
        "aria-hidden",
        "true"
    );

    cartOpenButton?.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove(
        "is-locked"
    );
};


/* ========================================
   CLOSE ALL PANELS
======================================== */

const closeAllPanels = () => {
    searchPanel?.classList.remove("is-open");
    cartPanel?.classList.remove("is-open");
    siteOverlay?.classList.remove(
        "is-visible"
    );

    searchPanel?.setAttribute(
        "aria-hidden",
        "true"
    );

    cartPanel?.setAttribute(
        "aria-hidden",
        "true"
    );

    searchOpenButton?.setAttribute(
        "aria-expanded",
        "false"
    );

    cartOpenButton?.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove(
        "is-locked"
    );
};


/* 패널 버튼 이벤트 */

searchOpenButton?.addEventListener(
    "click",
    openSearchPanel
);

searchCloseButton?.addEventListener(
    "click",
    closeSearchPanel
);

cartOpenButton?.addEventListener(
    "click",
    openCartPanel
);

cartCloseButton?.addEventListener(
    "click",
    closeCartPanel
);

siteOverlay?.addEventListener(
    "click",
    closeAllPanels
);


/* ESC 키로 패널 닫기 */

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "Escape") {
            closeAllPanels();
        }
    }
);


/* ========================================
   SEARCH DEMO
======================================== */

keywordButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value =
                button.dataset.keyword || "";

            searchInput.focus();
        }
    });
});

searchForm?.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        const keyword =
            searchInput?.value.trim();

        if (!keyword) {
            alert("검색어를 입력해 주세요.");
            searchInput?.focus();

            return;
        }

        alert(
            `"${keyword}" 검색 UI입니다. 포트폴리오용 데모로 실제 검색은 지원하지 않습니다.`
        );
    }
);


/* ========================================
   ADD TO CART
======================================== */

addCartButton?.addEventListener(
    "click",
    () => {
        const selectedQuantity =
            Number(
                document.querySelector(
                    ".product-detail__quantity-number"
                )?.textContent
            ) || 1;

        totalCartCount =
            totalCartCount +
            selectedQuantity;

        if (cartCount) {
            cartCount.textContent =
                totalCartCount;

            cartCount.classList.add(
                "has-items"
            );
        }

        if (cartResultNumber) {
            cartResultNumber.textContent =
                totalCartCount;
        }

        cartEmpty?.classList.add(
            "is-hidden"
        );

        cartResult?.classList.add(
            "is-visible"
        );

        openCartPanel();
    }
);


/* ========================================
   DEMO PAYMENT
======================================== */

demoPaymentButton?.addEventListener(
    "click",
    () => {
        alert(
            "포트폴리오용 장바구니 UI입니다. 실제 결제는 진행되지 않습니다."
        );
    }
);

/* ========================================
   PRODUCT CATEGORY FILTER
======================================== */

const filterButtons = document.querySelectorAll(
    ".products__category[data-filter]"
);

const productItems = document.querySelectorAll(
    ".products__item[data-category]"
);

if (
    filterButtons.length > 0 &&
    productItems.length > 0
) {
    const filterProducts = (selectedFilter) => {
        const availableFilters = [
            "all",
            "skin-care",
            "body-hand",
            "hair-care",
        ];

        // 주소가 잘못됐으면 ALL 사용
        const currentFilter =
            availableFilters.includes(
                selectedFilter
            )
                ? selectedFilter
                : "all";

        // 선택된 버튼 표시
        filterButtons.forEach((button) => {
            const isActive =
                button.dataset.filter ===
                currentFilter;

            button.classList.toggle(
                "products__category--active",
                isActive
            );
        });

        // 선택한 종류의 제품만 표시
        productItems.forEach((product) => {
            const productCategory =
                product.dataset.category;

            const isVisible =
                currentFilter === "all" ||
                productCategory ===
                currentFilter;

            product.hidden = !isVisible;
        });
    };


    // 제품 페이지를 처음 열었을 때
    const initialFilter =
        window.location.hash.substring(1) ||
        "all";

    filterProducts(initialFilter);


    // 제품 페이지에서 필터 버튼을 눌렀을 때
    filterButtons.forEach((button) => {
        button.addEventListener(
            "click",
            () => {
                const selectedFilter =
                    button.dataset.filter;

                window.location.hash =
                    selectedFilter;

                filterProducts(
                    selectedFilter
                );
            }
        );
    });


    // 브라우저 앞/뒤로 가기를 눌렀을 때
    window.addEventListener(
        "hashchange",
        () => {
            const changedFilter =
                window.location.hash.substring(
                    1
                ) || "all";

            filterProducts(changedFilter);
        }
    );
}

/* ========================================
   BEST PRODUCTS — MOBILE SWIPER
======================================== */

const bestProductsElement =
    document.querySelector(".bestProductsSwiper");

let bestProductsSwiper = null;

const handleBestProductsSwiper = () => {
    if (
        !bestProductsElement ||
        typeof Swiper === "undefined"
    ) {
        return;
    }

    if (
        window.innerWidth <= 650 &&
        bestProductsSwiper === null
    ) {
        bestProductsSwiper = new Swiper(
            bestProductsElement,
            {
                direction: "horizontal",

                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,

                speed: 600,
                grabCursor: true,
                watchOverflow: true,

                /* 마지막에서 처음으로 돌아가지 않음 */
                loop: false,

                pagination: {
                    el: ".best-products__pagination",
                    clickable: true,
                },

                observer: true,
                observeParents: true,
            }
        );
    }

    if (
        window.innerWidth > 650 &&
        bestProductsSwiper !== null
    ) {
        bestProductsSwiper.destroy(true, true);
        bestProductsSwiper = null;
    }
};

handleBestProductsSwiper();

window.addEventListener(
    "resize",
    handleBestProductsSwiper
);

/* ========================================
   CATEGORY RESPONSIVE SWIPER

   1101px 이상 : 일반 3열
   769px~1100px : Coverflow
   768px 이하   : Cards
======================================== */

const categorySwiperElement =
    document.querySelector(".categorySwiper");

let categorySwiper = null;
let currentCategoryMode = "";

/* 현재 화면에 사용할 모드 */
const getCategoryMode = () => {
    if (window.innerWidth <= 768) {
        return "cards";
    }

    if (window.innerWidth <= 1100) {
        return "coverflow";
    }

    return "desktop";
};

/* 기존 Swiper 제거 */
const destroyCategorySwiper = () => {
    if (!categorySwiper) {
        return;
    }

    categorySwiper.destroy(true, true);
    categorySwiper = null;
};

/* Swiper 생성 */
const createCategorySwiper = () => {
    if (
        !categorySwiperElement ||
        typeof Swiper === "undefined"
    ) {
        return;
    }

    const nextMode = getCategoryMode();

    // 같은 반응형 구간이면 다시 생성하지 않음
    if (currentCategoryMode === nextMode) {
        return;
    }

    destroyCategorySwiper();

    currentCategoryMode = nextMode;

    /* ========================================
       1101px 이상 : 일반 3열
    ======================================== */

    if (nextMode === "desktop") {
        return;
    }

    /* ========================================
       769px ~ 1100px : Coverflow
    ======================================== */

    if (nextMode === "coverflow") {
        categorySwiper = new Swiper(
            categorySwiperElement,
            {
                effect: "coverflow",

                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",

                initialSlide: 1,
                speed: 700,
                loop: false,

                allowTouchMove: true,
                simulateTouch: true,
                threshold: 8,

                /*
                 * 드래그한 뒤 링크가 잘못 열리는 현상 방지
                 *
                 * 일반 클릭: 링크 이동
                 * 드래그: 링크 이동 방지
                 */
                preventClicks: true,
                preventClicksPropagation: true,

                /*
                 * 옆 카드를 클릭했을 때
                 * 강제로 가운데로 이동시키지 않음
                 */
                slideToClickedSlide: false,

                coverflowEffect: {
                    rotate: 35,
                    stretch: 0,
                    depth: 110,
                    modifier: 1,
                    scale: 0.92,
                    slideShadows: false,
                },

                observer: true,
                observeParents: true,
                observeSlideChildren: true,
            }
        );

        return;
    }

    /* ========================================
       768px 이하 : Cards
    ======================================== */

    if (nextMode === "cards") {
        categorySwiper = new Swiper(
            categorySwiperElement,
            {
                effect: "cards",

                grabCursor: true,
                slidesPerView: 1,

                initialSlide: 0,
                speed: 600,
                loop: false,

                allowTouchMove: true,
                simulateTouch: true,
                threshold: 8,

                /*
                 * Swiper 공식 Cards 예제처럼
                 * 마우스와 손가락으로 잡아서 넘김
                 */
                cardsEffect: {
                    perSlideOffset: 8,
                    perSlideRotate: 2,
                    rotate: true,
                    slideShadows: true,
                },

                /*
                 * 드래그한 경우에는 링크 이동 방지
                 * 드래그하지 않고 클릭한 경우에는 링크 이동
                 */
                preventClicks: true,
                preventClicksPropagation: true,

                slideToClickedSlide: false,

                observer: true,
                observeParents: true,
                observeSlideChildren: true,
            }
        );
    }
};

/* 처음 페이지가 열릴 때 실행 */
createCategorySwiper();

/* 화면 크기가 변경됐을 때 실행 */
let categoryResizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(categoryResizeTimer);

    categoryResizeTimer = setTimeout(() => {
        createCategorySwiper();
    }, 150);
});


/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */

const initializeRevealAnimation = () => {
    /*
     * 사용자가 브라우저에서
     * 애니메이션 줄이기를 설정한 경우 실행하지 않음
     */
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
        return;
    }

    /* ========================================
       INDEX PAGE
    ======================================== */

    const indexRevealElements = [
        ".best-products__heading",
        ".category__heading",
        ".brand-origin__content",
        ".store__heading",
        ".store__information",
    ];

    indexRevealElements.forEach((selector) => {
        document
            .querySelectorAll(selector)
            .forEach((element) => {
                element.classList.add("reveal");
            });
    });

    /*
     * 인덱스 페이지 이미지
     */
    const indexImageElements = [
        ".store__visual",
    ];

    indexImageElements.forEach((selector) => {
        document
            .querySelectorAll(selector)
            .forEach((element) => {
                element.classList.add("reveal--image");
            });
    });

    /*
     * 인기 제품 카드는 순서대로 등장
     */
    document
        .querySelectorAll(".best-products__item")
        .forEach((item, index) => {
            item.classList.add("reveal");

            item.style.transitionDelay =
                `${index * 0.1}s`;
        });

    /*
     * 카테고리 카드도 순서대로 등장
     */
    document
        .querySelectorAll(".category__item")
        .forEach((item, index) => {
            item.classList.add("reveal");

            item.style.transitionDelay =
                `${index * 0.12}s`;
        });

    /* ========================================
       PRODUCTS PAGE
    ======================================== */

    const productsToolbar = document.querySelector(
        ".products__toolbar"
    );

    if (productsToolbar) {
        productsToolbar.classList.add("reveal");
    }

    document
        .querySelectorAll(".products__item")
        .forEach((item, index) => {
            item.classList.add("reveal");

            /*
             * 제품이 많아도 delay가 계속 커지지 않도록
             * 한 줄마다 다시 시작
             */
            const delayIndex = index % 4;

            item.style.transitionDelay =
                `${delayIndex * 0.1}s`;
        });

    /* ========================================
       PRODUCT DETAIL PAGE
    ======================================== */

    const productGallery = document.querySelector(
        ".product-detail__gallery"
    );

    const productInformation = document.querySelector(
        ".product-detail__information"
    );

    if (productGallery) {
        productGallery.classList.add(
            "reveal",
            "reveal--left"
        );
    }

    if (productInformation) {
        productInformation.classList.add(
            "reveal",
            "reveal--right"
        );
    }

    /* ========================================
       INTERSECTION OBSERVER
    ======================================== */

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal--image"
    );

    if (!revealElements.length) {
        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "is-visible"
                );

                /*
                 * 한 번 나타난 요소는
                 * 다시 숨기지 않음
                 */
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
};

initializeRevealAnimation();