// 출처: https://dev-mintcat.tistory.com/12 [Dev-MintCat:티스토리]
<script>
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        // 1. data-ke-size는 보존
        const keSize = p.getAttribute("data-ke-size");

        // 2. 기존 속성 모두 제거
        [...p.attributes].forEach(attr => {
            p.removeAttribute(attr.name);
        });

        // 3. data-ke-size만 다시 추가
        if (keSize) {
            p.setAttribute("data-ke-size", keSize);
        }
    });
});
</script>
