// 출처: https://dev-mintcat.tistory.com/12 [Dev-MintCat:티스토리]
<script>
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        if (p.style.color) {
            p.style.color = '';
        }

        const attributesToKeep = ['data-ke-size', 'style'];
      
        const currentAttributes = [...p.attributes];

        currentAttributes.forEach(attr => {
            if (!attributesToKeep.includes(attr.name)) {
                p.removeAttribute(attr.name);
            }
        });
        
        if (p.getAttribute('style') === '') {
            p.removeAttribute('style');
        }
    });
});
</script>
