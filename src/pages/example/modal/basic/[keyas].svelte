<script>
  import { goto, url } from "@roxi/routify";
  // 也就是说 这里导出的变量名必须和文件名相对应，才能成为路由的参数/:keys
  export let keyas

</script>

<div class="container" on:click={() => $goto('./')} >
  asas
  <div class="modal" >
    {keyas}
  </div>
</div>
