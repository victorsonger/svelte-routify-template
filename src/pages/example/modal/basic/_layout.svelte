<script>
  import { url, params } from "@roxi/routify";
  import { getContext } from "svelte";
</script>

<div class="cards">
  {#each Array(12) as item, key}
    <!-- 这里的:keyXXXFree也是可以随便写的，不一定要和文件名的keyas对应，但是后面推的参数对象，键也要是keyXXXFree -->
    <a class="card" href={$url("./:keyXXXFree", { keyXXXFree: key })}>
      <div class="content">{key}</div>
    </a>
  {/each}
</div>

<slot />
