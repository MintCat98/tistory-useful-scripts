// 출처: https://dev-mintcat.tistory.com/12 [Dev-MintCat:티스토리]
<script>
document.addEventListener("DOMContentLoaded", function () {
    // p 태그와 모든 헤더(h1~h6) 태그를 한 번에 선택
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

    elements.forEach(el => {
        // 1. style 속성 내부 처리
        if (el.style.color) {
            el.style.color = '';
        }

        // 2. 다른 속성들 처리
        // 보존할 속성 목록
        const attributesToKeep = ['data-ke-size', 'style'];

        const currentAttributes = [...el.attributes];

        currentAttributes.forEach(attr => {
            // 보존할 속성 목록에 없는 속성은 제거
            if (!attributesToKeep.includes(attr.name)) {
                el.removeAttribute(attr.name);
            }
        });
        
        // 3. 마무리 작업 
        // style 속성이 비어있게 되면 속성 자체를 제거
        if (el.getAttribute('style') === '') {
            el.removeAttribute('style');
        }
    });
});
</script>
