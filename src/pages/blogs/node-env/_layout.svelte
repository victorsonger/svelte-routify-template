<!-- routify:options published=true -->
<script>
  export let mdRenderStr = "";
  const md = window.markdownit("commonmark", {
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
  });
  fetch("/public/blog-node-env.txt", {
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => {
      return res.text();
    })
    .then((r) => {
      mdRenderStr = md.render(r);
    });
</script>

<div class="blog-content">
  {@html mdRenderStr}
</div>
<slot />
