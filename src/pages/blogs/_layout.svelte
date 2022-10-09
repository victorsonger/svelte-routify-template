<script>
  import "./index.css";
  import { isActive, url, layout } from "@roxi/routify";

  console.log("$layout.children", $layout.children);

  export let renderList = $layout.children.filter(
    (item) => item.meta.published
  );

  console.log("renderList---", renderList);
</script>

<ul>
  {#each renderList as { path, title, meta }}
    <li class:active={$isActive(path)}>
      <a href={$url(path)}>{title}</a>
    </li>
  {/each}
</ul>
<slot />
