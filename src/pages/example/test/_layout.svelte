<script>
  import { isActive, url, layout, prefetch } from "@roxi/routify";

  console.log("$layout.children", $layout.children);
  // $layout.children.forEach((node) => prefetch(node.path)); // 如果写了下面模板中被注释的那一部分，那其实就没有必要prefetch了，因为下面模板的遍历会导致每个child中的文件都被加载
</script>

<ul>
  {#each $layout.children as { path, title, meta }}
    <li class:active={$isActive(path)}>
      <a href={$url(path)}>{title}</a>
      是否 published? : {!!meta.published}
    </li>
  {/each}
</ul>
<slot />
