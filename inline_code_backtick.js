// 출처: https://memoirlog.tistory.com/entry/블로그-티스토리-블로그-백틱으로-인라인-코드-입력하기-hELLO-스킨#노션%20스타일%20적용-1-3 [기록의 아름다움:티스토리]
<script> 
  window.onload = function() { 
  // 백틱 inline code 
  // 접은글 div 임시방편 -> 접은글 안에는 백틱 적용 안되고 있음
  let textNodes = document.querySelectorAll("div.tt_article_useless_p_margin.contents_style > *:not(figure):not(pre):not(div):not(:has(a))");
  textNodes.forEach(node => {
    node.innerHTML = node.innerHTML.replace(/`(.*?)`/g, `<code class='notion-code'>$1</code>`);
  });
}
</script>
